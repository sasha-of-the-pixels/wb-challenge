import * as THREE from 'three';
import { fetchWeatherApi } from 'openmeteo';
import { WeatherApiResponse } from '@openmeteo/sdk/weather-api-response';
import { OrbitControls } from 'three/examples/jsm/Addons.js';


// scene/window/renderer setup
const scene = new THREE.Scene();
const w = window.innerWidth * 0.8;
const h = 500;
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);

const renderer = new THREE.WebGLRenderer( {
    logarithmicDepthBuffer: true,
});
renderer.setSize(w, h);
renderer.domElement.id = "scene";
document.body.appendChild(renderer.domElement);
var coordsLabel = document.getElementById("coordsLabel");
var loadingText = document.getElementById("loading")!;

const loader = new THREE.TextureLoader();
const earthTexture = loader.load('assets/8081_earthmap4k.jpg');
earthTexture.colorSpace = THREE.SRGBColorSpace;

const controls = new OrbitControls( camera, renderer.domElement );

var wbData : number[][] = [];
var lowerBounds = new THREE.Vector3(0, 0, 0);
var upperBounds = new THREE.Vector3(0, 0, 0);

const bigRadius = 100;

// JSON & file i/o stuff

async function readTextFile(file : string) {
    console.log("in readTextFile");
    return fetch(file, {
        mode: 'cors',
        //credentials: 'include',
        // method: 'POST',
        // headers: new Headers({
        //     'Content-Type': 'application/json',
        // })
    })//.catch((e)=>console.log("error fetching file:", e))
    .then(function (x) {
        //console.log("fetch response:", x.json());
        if (x.ok && x.status == 200) {
            //console.log("response text:", x.text());
            return x.json();
        } else if (!x.ok) {
            console.log("fetch is not ok:", x.status, x.statusText);
            return;
        } else {
            console.log("status is not ok:", x.status, x.statusText);
            return;
        }
    })
    .catch((e)=>console.log("error loading json:", e))
    .then(function (x) {
        wbData = x;
        wbData = [wbData[0], wbData[1], wbData[2], wbData[3]];
        setupBalloonData();
    })
    .catch((e)=>console.log("error setting up data:", e));

    //console.log("finishing readTextFile");
}
await readTextFile("https://cors-anywhere.herokuapp.com/https://a.windbornesystems.com/treasure/00.json");
//await readTextFile("data/wb_data.json");

function setupBalloonData() {
    console.log("in setupData");
    for (var dim = 0; dim < 3; dim++) {
        var col = wbData.map((row) => row[dim]);
        lowerBounds.setComponent(dim, Math.min(...col));
        upperBounds.setComponent(dim, Math.max(...col));
    }
    console.log("initialized max & min: ", lowerBounds, upperBounds);
}

// getting date & time
var date = Date.now();

// openmeteo data fetching

async function getCloudData() {
    // call api in batches of 100 balloons, because fetching too many data points throws an error?
    const url = "https://api.open-meteo.com/v1/forecast";
    var params = {
        "latitude": [0.], // wbData.map((row)=>row[0]).slice(0,194),
        "longitude": [0.], // wbData.map((row)=>row[1]).slice(0,194),
        "hourly": ["cloud_cover_low", "cloud_cover_mid", "cloud_cover_high"],
        "forecast_hours": 1,
        // "past_hours": 1,
    };
    var responses : WeatherApiResponse[] = [];
    for (var i = 0; i < wbData.length; i += 500) {
        // setTimeout(async function (){
        params.latitude = wbData.map((row)=>Math.round(row[0]*10.)/10.).slice(i, Math.min(i+500, wbData.length));
        params.longitude = wbData.map((row)=>Math.round(row[1]*10.)/10.).slice(i, Math.min(i+500, wbData.length));
        responses = responses.concat(await fetchWeatherApi(url, params));
        console.log("Fetched rows", i, "to", Math.min(i+500, wbData.length));
        await new Promise(r => setTimeout(r, 500));
        // }, 100);
    }

    return responses;
}

await getCloudData().then(function (responses){
    loadingText.style.display = "none";
    // create cloud objects by iterating over the response data
    const cloudGeometry = new THREE.BoxGeometry(4, 4, 4);
    var cloudMaterial;
    var cloudMesh;

    for (var response of responses) {
        // get data from response

        const latitude  = response.latitude();
        const longitude = response.longitude();
        // const elevation = response.elevation();
        // const utcOffsetSeconds = response.utcOffsetSeconds();

        const hourly = response.hourly()!;

        // Note: The order of weather variables in the URL query and the indices below need to match!
        const cloud_cover_low = hourly.variables(0)!.valuesArray()![0],
              cloud_cover_mid = hourly.variables(1)!.valuesArray()![0],
              cloud_cover_high = hourly.variables(2)!.valuesArray()![0];

        console.log(`Cloud cover for (${latitude}, ${longitude}) is:\n` +
                    `Low: ${cloud_cover_low}\n` +
                    `Mid: ${cloud_cover_mid}\n` +
                    `High: ${cloud_cover_high}\n`
        );

        // create cloud cubes:

        // low
        cloudMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            opacity: cloud_cover_low / 100.,
            transparent: true,
        });
        cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
        // i make the low clouds a little narrower than the mid clouds
        // and the high clouds a little wider, 
        // to prevent z-fighting
        cloudMesh.scale.fromArray([0.95, 1.5, 0.95]);

        cloudMesh.rotateOnWorldAxis(new THREE.Vector3(1., 0., 0.), deg2rad(90.-latitude));
        cloudMesh.rotateOnWorldAxis(new THREE.Vector3(0., 1., 0.), deg2rad(longitude));
        cloudMesh.position.fromArray(latLongToCartesian([latitude, longitude, 1.5]));
        cloudMesh.name = "cloud";
        console.log("low cloud mesh rotation:", cloudMesh.rotation);
        scene.add(cloudMesh);
        
        // mid
        cloudMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            opacity: cloud_cover_mid / 100.,
            transparent: true,
        });
        cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
        cloudMesh.scale.setY(2.5);

        cloudMesh.rotateOnWorldAxis(new THREE.Vector3(1., 0., 0.), deg2rad(90.-latitude));
        cloudMesh.rotateOnWorldAxis(new THREE.Vector3(0., 1., 0.), deg2rad(longitude));
        cloudMesh.position.fromArray(latLongToCartesian([latitude, longitude, 5.5]));
        cloudMesh.name = "cloud";
        scene.add(cloudMesh);

        // high
        cloudMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            opacity: cloud_cover_high / 100.,
            transparent: true,
        });
        cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
        cloudMesh.scale.fromArray([1.05,4., 1.05]);

        cloudMesh.rotateOnWorldAxis(new THREE.Vector3(1., 0., 0.), deg2rad(90.-latitude));
        cloudMesh.rotateOnWorldAxis(new THREE.Vector3(0., 1., 0.), deg2rad(longitude));
        cloudMesh.position.fromArray(latLongToCartesian([latitude, longitude, 12.]));
        cloudMesh.name = "cloud";
        scene.add(cloudMesh);
    }
});

// geometry helpers

function deg2rad(deg : number) {
    return deg/180.*Math.PI;
}
function rad2deg(rad : number) {
    return rad/Math.PI*180.;
}

// converts spherical(ish) to cartesian coordinates
// treats data from json array as spherical
/// @param p: array of point coordinates (latitude, longitude, elevation from the surface)
function latLongToCartesian(p : number[]) {
    var phi = deg2rad(p[1]); // longitude
    // assume theta represents elevation angle instead of inclination
    // so, 90 degrees latitude means north pole rather than equator as "conventional" spherical coords would do
    var theta = deg2rad(p[0]); // latitude
    var r = bigRadius + p[2];
    var result = [ 
        r*Math.sin(phi)*Math.cos(theta), 
        r*Math.sin(theta), // y is up
        r*Math.cos(phi)*Math.cos(theta)
    ];
    return result;
}

// converts cartesian to spherical coordinates
// treats data from json array as spherical
/// @param p: array of point coordinates (NOT a three.vector3)
function cartesianToLatLong(p : number[]) {
    // the weird ordering is because three.js is y-up
    var x2 = p[0] * p[0],
        z2 = p[1] * p[1],
        y2 = p[2] * p[2],
        x = p[0], y = p[2], z = p[1];
    var r = Math.sqrt(x2+y2+z2); 
    var phi = Math.acos(y/Math.sqrt(x2+y2)) * (x>=0?1:-1);
    var theta = Math.asin(z/r);
    var result = [rad2deg(theta), rad2deg(phi), r-bigRadius];
    return result;
}

// interaction helpers
class PickHelper {
    raycaster;
    pickedObject : THREE.Object3D<THREE.Object3DEventMap> | null;
    constructor() {
        this.raycaster = new THREE.Raycaster();
        this.pickedObject = null;
    }
    pick(
        normalizedPosition : {
            x: number, y: number, screenX: number, screenY : number
        }, 
        scene : THREE.Scene, 
        camera : THREE.Camera
    ) {
        // restore the color if there is a picked object
        if (this.pickedObject) {
            this.pickedObject = null;
        }
        
        // cast a ray through the frustum
        this.raycaster.setFromCamera(
            new THREE.Vector2(normalizedPosition.x, normalizedPosition.y), 
            camera
        );
        // get the list of objects the ray intersected
        const intersectedObjects = 
            this.raycaster.intersectObjects(scene.children);
        for (var obj of intersectedObjects) {
            if (obj.object.name === "bigSphere") continue;
            else if (obj.object.name === "cloud") continue;
            // pick the first object. It's the closest one
            this.pickedObject = obj.object;
            // print its posiion
            var positionText = 
                cartesianToLatLong(this.pickedObject.position.toArray()).toString();
            // console.log("coords:", positionText);
            if (coordsLabel) {
                coordsLabel.innerHTML = "Balloon #" + this.pickedObject.name + "<br>" 
                                      + "Position: (" + positionText + ")" + "<br>"
                                      + "Original pos: (" + wbData[parseInt(this.pickedObject.name)];
                coordsLabel.style.display = "block";
                // console.log("pickPosition:", pickPosition);
                coordsLabel.style.top = (pickPosition.screenY-20).toString()+"px";
                coordsLabel.style.left = pickPosition.screenX.toString()+"px";
            }
            return;
        } 
        if (coordsLabel) {
            coordsLabel.innerHTML = "";
            coordsLabel.style.display = "none";
        }
    }
}

const pickPosition = {x: 0, y: 0, screenX: 0, screenY : 0};
clearPickPosition();
 
function getCanvasRelativePosition(event : MouseEvent) {
    const rect = renderer.domElement.getBoundingClientRect();
    return {
        x: (event.clientX - rect.left) * renderer.domElement.width  / rect.width,
        y: (event.clientY - rect.top ) * renderer.domElement.height / rect.height,
    };
}
 
function setPickPosition(event : MouseEvent) {
    const pos = getCanvasRelativePosition(event);
    pickPosition.x = (pos.x / renderer.domElement.width ) *  2 - 1;
    pickPosition.y = (pos.y / renderer.domElement.height) * -2 + 1;  // note we flip Y
    pickPosition.screenX = event.clientX;
    pickPosition.screenY = event.clientY;
}
 
function clearPickPosition() {
    // unlike the mouse which always has a position, if the user stops touching
    // the screen, we want to stop picking. For now we just pick a value
    // unlikely to pick something.
    pickPosition.x = -100000;
    pickPosition.y = -100000;
    pickPosition.screenX = -100000;
    pickPosition.screenY = -100000;
}

window.addEventListener('mousemove', setPickPosition);
window.addEventListener('mouseout', clearPickPosition);
window.addEventListener('mouseleave', clearPickPosition);

var material = new THREE.MeshBasicMaterial({color: 0xdddddd});

// draw data points on a sphere
var geometry, sphere;
wbData.forEach(function (point, idx) {
    geometry = new THREE.SphereGeometry(1., 8, 4);
    material = new THREE.MeshBasicMaterial({color: 0xff4060});
    sphere = new THREE.Mesh(geometry, material);
    sphere.position.fromArray(latLongToCartesian(point));
    if (idx == 0) {
        console.log("original pos:", point);
    }
    sphere.name = idx.toString();
    scene.add(sphere);
});

// add big sphere
geometry = new THREE.SphereGeometry(bigRadius, 32, 16);
var earthMaterial = new THREE.MeshBasicMaterial({map: earthTexture});
const bigSphere = new THREE.Mesh(geometry, earthMaterial);
bigSphere.name = "bigSphere";
bigSphere.rotateY(-Math.PI/2.);
scene.add(bigSphere);

camera.position.z = 200;
controls.update();

const pickHelper = new PickHelper();
function animate() {
    pickHelper.pick(pickPosition, scene, camera);
    renderer.render(scene, camera);
    controls.update();
}
renderer.setAnimationLoop(animate);
