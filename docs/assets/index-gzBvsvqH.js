(function(){
	const e=document.createElement("link").relList;
	if(e&&e.supports&&e.supports("modulepreload"))return;
	for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);
	new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};
	return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r
	}function n(s){
		if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)
	}
})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="181",
 xi={ROTATE:0,DOLLY:1,PAN:2},
 _i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},
 Gc=0,Ba=1,Hc=2,Qo=1,kc=2,fn=3,Fn=0,wt=1,pn=2,xn=0,gi=1,za=2,
 Ga=3,Ha=4,Wc=5,Xn=100,Vc=101,Xc=102,qc=103,Yc=104,jc=200,Kc=201,
 Zc=202,$c=203,Sr=204,Mr=205,Jc=206,Qc=207,el=208,tl=209,nl=210,il=211,
 sl=212,rl=213,al=214,Er=0,yr=1,Tr=2,bi=3,Ar=4,wr=5,Rr=6,Cr=7,ec=0,
 ol=1,cl=2,Un=0,ll=1,hl=2,ul=3,fl=4,dl=5,pl=6,ml=7,tc=300,Si=301,
 Mi=302,Pr=303,Dr=304,Fs=306,Lr=1e3,mn=1001,Ir=1002,It=1003,_l=1004,
 es=1005,zt=1006,Vs=1007,Yn=1008,vn=1009,nc=1010,ic=1011,ki=1012,
 pa=1013,Kn=1014,_n=1015,Ti=1016,ma=1017,_a=1018,Wi=1020,sc=35902,
 rc=35899,ac=1021,oc=1022,Zt=1023,Vi=1026,Xi=1027,cc=1028,xa=1029,
 ga=1030,va=1031,ba=1033,Es=33776,ys=33777,Ts=33778,As=33779,Ur=35840,
 Nr=35841,Fr=35842,Or=35843,Br=36196,zr=37492,Gr=37496,Hr=37808,
 kr=37809,Wr=37810,Vr=37811,Xr=37812,qr=37813,Yr=37814,jr=37815,Kr=37816,
 Zr=37817,$r=37818,Jr=37819,Qr=37820,ea=37821,ta=36492,na=36494,ia=36495,
 sa=36283,ra=36284,aa=36285,oa=36286,xl=3200,gl=3201,vl=0,bl=1,Ln="",
 Lt="srgb",Ei="srgb-linear",Ds="linear",je="srgb",ei=7680,ka=519,Sl=512,
 Ml=513,El=514,lc=515,yl=516,Tl=517,Al=518,wl=519,Wa=35044,Va="300 es",
 nn=2e3,Ls=2001;
 function hc(i){
	for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1
}function qi(i){
	return document.createElementNS("http://www.w3.org/1999/xhtml",i)
}function Rl(){
	const i=qi("canvas");
	return i.style.display="block",i
}const Xa={};
function qa(...i){
	const e="THREE."+i.shift();
	console.log(e,...i)
}function De(...i){
	const e="THREE."+i.shift();
	console.warn(e,...i)
}function ct(...i){
	const e="THREE."+i.shift();
	console.error(e,...i)
}function Yi(...i){
	const e=i.join(" ");
	e in Xa||(Xa[e]=!0,De(...i))
}function Cl(i,e,t){
	return new Promise(
		function(n,s){
			function r(){
				switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){
					case i.WAIT_FAILED:s();
					break;
					case i.TIMEOUT_EXPIRED:setTimeout(r,t);
					break;
					default:n()
				}
			}
			setTimeout(r,t)
		}
	)
}class Jn{
	addEventListener(e,t){
		this._listeners===void 0&&(this._listeners={});
		const n=this._listeners;
		n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)
	}hasEventListener(e,t){
		const n=this._listeners;
		return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1
	}removeEventListener(e,t){
		const n=this._listeners;
		if(n===void 0)return;
		const s=n[e];
		if(s!==void 0){
			const r=s.indexOf(t);
			r!==-1&&s.splice(r,1)
		}
	}dispatchEvent(e){
		const t=this._listeners;
		if(t===void 0)return;
		const n=t[e.type];
		if(n!==void 0){
			e.target=this;
			const s=n.slice(0);
			for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);
			e.target=null}
		}
	}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ws=Math.PI/180,ca=180/Math.PI;
	function Ki(){
		const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;
		return(xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()
	}function Oe(i,e,t){
		return Math.max(e,Math.min(t,i))
	}function Pl(i,e){
		return(i%e+e)%e
	}function Xs(i,e,t){
		return(1-t)*i+t*e
	}function Ci(i,e){
		switch(e.constructor){
			case Float32Array:return i;
			case Uint32Array:return i/4294967295;
			case Uint16Array:return i/65535;
			case Uint8Array:return i/255;
			case Int32Array:return Math.max(i/2147483647,-1);
			case Int16Array:return Math.max(i/32767,-1);
			case Int8Array:return Math.max(i/127,-1);
			default:throw new Error("Invalid component type.")
		}
	}function Tt(i,e){
		switch(e.constructor){
			case Float32Array:return i;
			case Uint32Array:return Math.round(i*4294967295);
			case Uint16Array:return Math.round(i*65535);
			case Uint8Array:return Math.round(i*255);
			case Int32Array:return Math.round(i*2147483647);
			case Int16Array:return Math.round(i*32767);
			case Int8Array:return Math.round(i*127);
			default:throw new Error("Invalid component type.")
		}
	}const Dl={DEG2RAD:ws};
	class Ne{
		constructor(e=0,t=0){
			Ne.prototype.isVector2=!0,
			this.x=e,
			this.y=t
		}get width(){
			return this.x
		}set width(e){
			this.x=e
		}get height(){
			return this.y
		}set height(e){
			this.y=e
		}set(e,t){
			return this.x=e,this.y=t,this
		}setScalar(e){
			return this.x=e,this.y=e,this
		}setX(e){
			return this.x=e,this
		}setY(e){
			return this.y=e,this
		}setComponent(e,t){
			switch(e){
				case 0:this.x=t;
				break;
				case 1:this.y=t;
				break;
				default:throw new Error("index is out of range: "+e)
			}return this
		}getComponent(e){
			switch(e){
				case 0:return this.x;
				case 1:return this.y;
				default:throw new Error("index is out of range: "+e)
			}
		}clone(){
			return new this.constructor(this.x,this.y)
		}copy(e){
			return this.x=e.x,this.y=e.y,this
		}add(e){
			return this.x+=e.x,this.y+=e.y,this
		}addScalar(e){
			return this.x+=e,this.y+=e,this
		}addVectors(e,t){
			return this.x=e.x+t.x,this.y=e.y+t.y,this
		}addScaledVector(e,t){
			return this.x+=e.x*t,this.y+=e.y*t,this
		}sub(e){
			return this.x-=e.x,this.y-=e.y,this
		}subScalar(e){
			return this.x-=e,this.y-=e,this
		}subVectors(e,t){
			return this.x=e.x-t.x,this.y=e.y-t.y,this
		}multiply(e){
			return this.x*=e.x,this.y*=e.y,this
		}multiplyScalar(e){
			return this.x*=e,this.y*=e,this
		}divide(e){
			return this.x/=e.x,this.y/=e.y,this
		}divideScalar(e){
			return this.multiplyScalar(1/e)
		}applyMatrix3(e){
			const t=this.x,n=this.y,s=e.elements;
			return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this
		}min(e){
			return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this
		}max(e){
			return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this
		}clamp(e,t){
			return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this
		}clampScalar(e,t){
			return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this
		}clampLength(e,t){
			const n=this.length();
			return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))
		}floor(){
			return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this
		}ceil(){
			return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this
		}round(){
			return this.x=Math.round(this.x),this.y=Math.round(this.y),this
		}roundToZero(){
			return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this
		}negate(){
			return this.x=-this.x,this.y=-this.y,this
		}dot(e){
			return this.x*e.x+this.y*e.y
		}cross(e){
			return this.x*e.y-this.y*e.x
		}lengthSq(){
			return this.x*this.x+this.y*this.y
		}length(){
			return Math.sqrt(this.x*this.x+this.y*this.y)
		}manhattanLength(){
			return Math.abs(this.x)+Math.abs(this.y)
		}normalize(){
			return this.divideScalar(this.length()||1)
		}angle(){
			return Math.atan2(-this.y,-this.x)+Math.PI
		}angleTo(e){
			const t=Math.sqrt(this.lengthSq()*e.lengthSq());
			if(t===0)return Math.PI/2;
			const n=this.dot(e)/t;
			return Math.acos(Oe(n,-1,1))
		}distanceTo(e){
			return Math.sqrt(this.distanceToSquared(e))
		}distanceToSquared(e){
			const t=this.x-e.x,n=this.y-e.y;return t*t+n*n
		}manhattanDistanceTo(e){
			return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)
		}setLength(e){
			return this.normalize().multiplyScalar(e)
		}lerp(e,t){
			return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this
		}lerpVectors(e,t,n){
			return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this
		}equals(e){
			return e.x===this.x&&e.y===this.y
		}fromArray(e,t=0){
			return this.x=e[t],this.y=e[t+1],this
		}toArray(e=[],t=0){
			return e[t]=this.x,e[t+1]=this.y,e
		}fromBufferAttribute(e,t){
			return this.x=e.getX(t),this.y=e.getY(t),this
		}rotateAround(e,t){
			const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;
			return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this
		}random(){
			return this.x=Math.random(),this.y=Math.random(),this
		}*[Symbol.iterator](){
			yield this.x,yield this.y
		}
	}class Zn{
		constructor(e=0,t=0,n=0,s=1){
			this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s
		}static slerpFlat(e,t,n,s,r,o,a){
			let h=n[s+0],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];
			if(a<=0){
				e[t+0]=h,e[t+1]=c,e[t+2]=l,e[t+3]=u;
				return
			}if(a>=1){
				e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;
				return
			}if(u!==v||h!==d||c!==p||l!==g){
				let m=h*d+c*p+l*g+u*v;
				m<0&&(d=-d,p=-p,g=-g,v=-v,m=-m);
				let f=1-a;
				if(m<.9995){
					const T=Math.acos(m),E=Math.sin(T);
					f=Math.sin(f*T)/E,a=Math.sin(a*T)/E,h=h*f+d*a,c=c*f+p*a,l=l*f+g*a,u=u*f+v*a
				}else{
					h=h*f+d*a,c=c*f+p*a,l=l*f+g*a,u=u*f+v*a;
					const T=1/Math.sqrt(h*h+c*c+l*l+u*u);
					h*=T,c*=T,l*=T,u*=T}}e[t]=h,e[t+1]=c,e[t+2]=l,e[t+3]=u
				}static multiplyQuaternionsFlat(e,t,n,s,r,o){
					const a=n[s],h=n[s+1],c=n[s+2],l=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];
					return e[t]=a*g+l*u+h*p-c*d,e[t+1]=h*g+l*d+c*u-a*p,e[t+2]=c*g+l*p+a*d-h*u,e[t+3]=l*g-a*u-h*d-c*p,e
				}get x(){
					return this._x
				}set x(e){
					this._x=e,this._onChangeCallback()
				}get y(){
					return this._y
				}set y(e){
					this._y=e,this._onChangeCallback()
				}get z(){
					return this._z
				}set z(e){
					this._z=e,this._onChangeCallback()
				}get w(){
					return this._w
				}set w(e){
					this._w=e,this._onChangeCallback()
				}set(e,t,n,s){
					return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this
				}clone(){
					return new this.constructor(this._x,this._y,this._z,this._w)
				}copy(e){
					return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this
				}setFromEuler(e,t=!0){
					const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,h=Math.sin,c=a(n/2),l=a(s/2),u=a(r/2),d=h(n/2),p=h(s/2),g=h(r/2);
					switch(o){
						case"XYZ":
							this._x=d*l*u+c*p*g,this._y=c*p*u-d*l*g,this._z=c*l*g+d*p*u,this._w=c*l*u-d*p*g;
							break;
						case"YXZ":
							this._x=d*l*u+c*p*g,this._y=c*p*u-d*l*g,this._z=c*l*g-d*p*u,this._w=c*l*u+d*p*g;
							break;
						case"ZXY":
							this._x=d*l*u-c*p*g,this._y=c*p*u+d*l*g,this._z=c*l*g+d*p*u,this._w=c*l*u-d*p*g;
							break;
						case"ZYX":
							this._x=d*l*u-c*p*g,this._y=c*p*u+d*l*g,this._z=c*l*g-d*p*u,this._w=c*l*u+d*p*g;
							break;
						case"YZX":
							this._x=d*l*u+c*p*g,this._y=c*p*u+d*l*g,this._z=c*l*g-d*p*u,this._w=c*l*u-d*p*g;
							break;
						case"XZY":
							this._x=d*l*u-c*p*g,this._y=c*p*u-d*l*g,this._z=c*l*g+d*p*u,this._w=c*l*u+d*p*g;
							break;
						default:
							De("Quaternion: .setFromEuler() encountered an unknown order: "+o)
					}return t===!0&&this._onChangeCallback(),this
				}setFromAxisAngle(e,t){
					const n=t/2,s=Math.sin(n);
					return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this
				}setFromRotationMatrix(e){
					const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],h=t[9],c=t[2],l=t[6],u=t[10],d=n+a+u;
					if(d>0){
						const p=.5/Math.sqrt(d+1);
						this._w=.25/p,this._x=(l-h)*p,this._y=(r-c)*p,this._z=(o-s)*p
					}else if(n>a&&n>u){
						const p=2*Math.sqrt(1+n-a-u);
						this._w=(l-h)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p
					}else if(a>u){
						const p=2*Math.sqrt(1+a-n-u);
						this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(h+l)/p
					}else{
						const p=2*Math.sqrt(1+u-n-a);
						this._w=(o-s)/p,this._x=(r+c)/p,this._y=(h+l)/p,this._z=.25*p
					}return this._onChangeCallback(),this
				}setFromUnitVectors(e,t){
					let n=e.dot(t)+1;
					return n<1e-8
						?(n=0,Math.abs(e.x)>Math.abs(e.z)
							?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n)
							:(this._x=0,this._y=-e.z,this._z=e.y,this._w=n))
						:(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),
						this.normalize()
				}angleTo(e){
					return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))
				}rotateTowards(e,t){
					const n=this.angleTo(e);
					if(n===0)return this;
					const s=Math.min(1,t/n);
					return this.slerp(e,s),this
				}identity(){
					return this.set(0,0,0,1)
				}invert(){
					return this.conjugate()
				}conjugate(){
					return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this
				}dot(e){
					return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w
				}lengthSq(){
					return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w
				}length(){
					return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)
				}normalize(){
					let e=this.length();
					return e===0
						?(this._x=0,this._y=0,this._z=0,this._w=1)
						:(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),
						this._onChangeCallback(),this
				}multiply(e){
					return this.multiplyQuaternions(this,e)
				}premultiply(e){
					return this.multiplyQuaternions(e,this)
				}multiplyQuaternions(e,t){
					const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,h=t._y,c=t._z,l=t._w;
					return this._x=n*l+o*a+s*c-r*h,this._y=s*l+o*h+r*a-n*c,this._z=r*l+o*c+n*h-s*a,this._w=o*l-n*a-s*h-r*c,this._onChangeCallback(),this
				}slerp(e,t){
					if(t<=0)return this;
					if(t>=1)return this.copy(e);
					let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);
					a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);
					let h=1-t;
					if(a<.9995){
						const c=Math.acos(a),l=Math.sin(c);
						h=Math.sin(h*c)/l,t=Math.sin(t*c)/l,this._x=this._x*h+n*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+o*t,this._onChangeCallback()
					}else this._x=this._x*h+n*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+o*t,this.normalize();
					return this
				}slerpQuaternions(e,t,n){
					return this.copy(e).slerp(t,n)
				}random(){
					const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);
					return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))
				}equals(e){
					return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w
				}fromArray(e,t=0){
					return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this
				}toArray(e=[],t=0){
					return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e
				}fromBufferAttribute(e,t){
					return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this
				}toJSON(){
					return this.toArray()
				}_onChange(e){
					return this._onChangeCallback=e,this
				}_onChangeCallback(){
				}*[Symbol.iterator](){
					yield this._x,yield this._y,yield this._z,yield this._w
				}
			}class N{
				constructor(e=0,t=0,n=0){
					N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n
				}set(e,t,n){
					return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this
				}setScalar(e){
					return this.x=e,this.y=e,this.z=e,this
				}setX(e){
					return this.x=e,this
				}setY(e){
					return this.y=e,this
				}setZ(e){
					return this.z=e,this
				}setComponent(e,t){
					switch(e){
						case 0:this.x=t;break;
						case 1:this.y=t;break;
						case 2:this.z=t;break;
						default:throw new Error("index is out of range: "+e)
					}return this
				}getComponent(e){
					switch(e){
						case 0:return this.x;
						case 1:return this.y;
						case 2:return this.z;
						default:throw new Error("index is out of range: "+e)
					}
				}clone(){
					return new this.constructor(this.x,this.y,this.z)
				}copy(e){
					return this.x=e.x,this.y=e.y,this.z=e.z,this
				}add(e){
					return this.x+=e.x,this.y+=e.y,this.z+=e.z,this
				}addScalar(e){
					return this.x+=e,this.y+=e,this.z+=e,this
				}addVectors(e,t){
					return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this
				}addScaledVector(e,t){
					return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this
				}sub(e){
					return this.x-=e.x,this.y-=e.y,this.z-=e.z,this
				}subScalar(e){
					return this.x-=e,this.y-=e,this.z-=e,this
				}subVectors(e,t){
					return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this
				}multiply(e){
					return this.x*=e.x,this.y*=e.y,this.z*=e.z,this
				}multiplyScalar(e){
					return this.x*=e,this.y*=e,this.z*=e,this
				}multiplyVectors(e,t){
					return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this
				}applyEuler(e){
					return this.applyQuaternion(Ya.setFromEuler(e))
				}applyAxisAngle(e,t){
					return this.applyQuaternion(Ya.setFromAxisAngle(e,t))
				}applyMatrix3(e){
					const t=this.x,n=this.y,s=this.z,r=e.elements;
					return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this
				}applyNormalMatrix(e){
					return this.applyMatrix3(e).normalize()
				}applyMatrix4(e){
					const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);
					return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this
				}applyQuaternion(e){
					const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,h=e.w,c=2*(o*s-a*n),l=2*(a*t-r*s),u=2*(r*n-o*t);
					return this.x=t+h*c+o*u-a*l,this.y=n+h*l+a*c-r*u,this.z=s+h*u+r*l-o*c,this
				}project(e){
					return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
				}unproject(e){
					return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
				}transformDirection(e){
					const t=this.x,n=this.y,s=this.z,r=e.elements;
					return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()
				}divide(e){
					return this.x/=e.x,this.y/=e.y,this.z/=e.z,this
				}divideScalar(e){
					return this.multiplyScalar(1/e)
				}min(e){
					return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this
				}max(e){
					return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this
				}clamp(e,t){
					return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this
				}clampScalar(e,t){
					return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this
				}clampLength(e,t){
					const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))
				}floor(){
					return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this
				}ceil(){
					return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this
				}round(){
					return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this
				}roundToZero(){
					return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this
				}negate(){
					return this.x=-this.x,this.y=-this.y,this.z=-this.z,this
				}dot(e){
					return this.x*e.x+this.y*e.y+this.z*e.z
				}lengthSq(){
					return this.x*this.x+this.y*this.y+this.z*this.z
				}length(){
					return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)
				}manhattanLength(){
					return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)
				}normalize(){
					return this.divideScalar(this.length()||1)
				}setLength(e){
					return this.normalize().multiplyScalar(e)
				}lerp(e,t){
					return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this
				}lerpVectors(e,t,n){
					return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this
				}cross(e){
					return this.crossVectors(this,e)
				}crossVectors(e,t){
					const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,h=t.z;
					return this.x=s*h-r*a,this.y=r*o-n*h,this.z=n*a-s*o,this
				}projectOnVector(e){
					const t=e.lengthSq();
					if(t===0)return this.set(0,0,0);
					const n=e.dot(this)/t;
					return this.copy(e).multiplyScalar(n)
				}projectOnPlane(e){
					return qs.copy(this).projectOnVector(e),this.sub(qs)
				}reflect(e){
					return this.sub(qs.copy(e).multiplyScalar(2*this.dot(e)))
				}angleTo(e){
					const t=Math.sqrt(this.lengthSq()*e.lengthSq());
					if(t===0)return Math.PI/2;
					const n=this.dot(e)/t;
					return Math.acos(Oe(n,-1,1))
				}distanceTo(e){
					return Math.sqrt(this.distanceToSquared(e))
				}distanceToSquared(e){
					const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;
					return t*t+n*n+s*s
				}manhattanDistanceTo(e){
					return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)
				}setFromSpherical(e){
					return this.setFromSphericalCoords(e.radius,e.phi,e.theta)
				}setFromSphericalCoords(e,t,n){
					const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this
				}setFromCylindrical(e){
					return this.setFromCylindricalCoords(e.radius,e.theta,e.y)
				}setFromCylindricalCoords(e,t,n){
					return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this
				}setFromMatrixPosition(e){
					const t=e.elements;
					return this.x=t[12],this.y=t[13],this.z=t[14],this
				}setFromMatrixScale(e){
					const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();
					return this.x=t,this.y=n,this.z=s,this
				}setFromMatrixColumn(e,t){
					return this.fromArray(e.elements,t*4)
				}setFromMatrix3Column(e,t){
					return this.fromArray(e.elements,t*3)
				}setFromEuler(e){
					return this.x=e._x,this.y=e._y,this.z=e._z,this
				}setFromColor(e){
					return this.x=e.r,this.y=e.g,this.z=e.b,this
				}equals(e){
					return e.x===this.x&&e.y===this.y&&e.z===this.z
				}fromArray(e,t=0){
					return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this
				}toArray(e=[],t=0){
					return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e
				}fromBufferAttribute(e,t){
					return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this
				}random(){
					return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this
				}randomDirection(){
					const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);
					return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this
				}*[Symbol.iterator](){
					yield this.x,yield this.y,yield this.z
				}
			}const qs=new N,Ya=new Zn;
			class Ie{
				constructor(e,t,n,s,r,o,a,h,c){
					Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,h,c)
				}set(e,t,n,s,r,o,a,h,c){
					const l=this.elements;
					return l[0]=e,l[1]=s,l[2]=a,l[3]=t,l[4]=r,l[5]=h,l[6]=n,l[7]=o,l[8]=c,this
				}identity(){
					return this.set(1,0,0,0,1,0,0,0,1),this
				}copy(e){
					const t=this.elements,n=e.elements;
					return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this
				}extractBasis(e,t,n){
					return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this
				}setFromMatrix4(e){
					const t=e.elements;
					return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this
				}multiply(e){
					return this.multiplyMatrices(this,e)
				}premultiply(e){
					return this.multiplyMatrices(e,this)
				}multiplyMatrices(e,t){
					const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],h=n[6],c=n[1],l=n[4],u=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],T=s[1],E=s[4],A=s[7],C=s[2],y=s[5],D=s[8];
					return r[0]=o*v+a*T+h*C,r[3]=o*m+a*E+h*y,r[6]=o*f+a*A+h*D,r[1]=c*v+l*T+u*C,r[4]=c*m+l*E+u*y,r[7]=c*f+l*A+u*D,r[2]=d*v+p*T+g*C,r[5]=d*m+p*E+g*y,r[8]=d*f+p*A+g*D,this
				}multiplyScalar(e){
					const t=this.elements;
					return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this
				}determinant(){
					const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=e[6],c=e[7],l=e[8];
					return t*o*l-t*a*c-n*r*l+n*a*h+s*r*c-s*o*h
				}invert(){
					const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=e[6],c=e[7],l=e[8],u=l*o-a*c,d=a*h-l*r,p=c*r-o*h,g=t*u+n*d+s*p;
					if(g===0)return this.set(0,0,0,0,0,0,0,0,0);
					const v=1/g;
					return e[0]=u*v,e[1]=(s*c-l*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(l*t-s*h)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(n*h-c*t)*v,e[8]=(o*t-n*r)*v,this
				}transpose(){
					let e;
					const t=this.elements;
					return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this
				}getNormalMatrix(e){
					return this.setFromMatrix4(e).invert().transpose()
				}transposeIntoArray(e){
					const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this
				}setUvTransform(e,t,n,s,r,o,a){
					const h=Math.cos(r),c=Math.sin(r);
					return this.set(n*h,n*c,-n*(h*o+c*a)+o+e,-s*c,s*h,-s*(-c*o+h*a)+a+t,0,0,1),this
				}scale(e,t){
					return this.premultiply(Ys.makeScale(e,t)),this
				}rotate(e){
					return this.premultiply(Ys.makeRotation(-e)),this
				}translate(e,t){
					return this.premultiply(Ys.makeTranslation(e,t)),this
				}makeTranslation(e,t){
					return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this
				}makeRotation(e){
					const t=Math.cos(e),n=Math.sin(e);
					return this.set(t,-n,0,n,t,0,0,0,1),this
				}makeScale(e,t){
					return this.set(e,0,0,0,t,0,0,0,1),this
				}equals(e){
					const t=this.elements,n=e.elements;
					for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;
					return!0
				}fromArray(e,t=0){
					for(let n=0;n<9;n++)this.elements[n]=e[n+t];
					return this
				}toArray(e=[],t=0){
					const n=this.elements;
					return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e
				}clone(){
					return new this.constructor().fromArray(this.elements)
				}
			}const Ys=new Ie,ja=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ka=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);
			function Ll(){
				const i={
					enabled:!0,
					workingColorSpace:Ei,
					spaces:{},
					convert:function(s,r,o){
						return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===je&&(s.r=gn(s.r),s.g=gn(s.g),s.b=gn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===je&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b))),s
					},
					workingToColorSpace:function(s,r){
						return this.convert(s,this.workingColorSpace,r)
					},
					colorSpaceToWorking:function(s,r){
						return this.convert(s,r,this.workingColorSpace)
					},
					getPrimaries:function(s){
						return this.spaces[s].primaries
					},
					getTransfer:function(s){
						return s===Ln?Ds:this.spaces[s].transfer
					},
					getToneMappingMode:function(s){
						return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"
					},
					getLuminanceCoefficients:function(s,r=this.workingColorSpace){
						return s.fromArray(this.spaces[r].luminanceCoefficients)
					},
					define:function(s){
						Object.assign(this.spaces,s)
					},
					_getMatrix:function(s,r,o){
						return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)
					},
					_getDrawingBufferColorSpace:function(s){
						return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace
					},
					_getUnpackColorSpace:function(s=this.workingColorSpace){
						return this.spaces[s].workingColorSpaceConfig.unpackColorSpace
					},
					fromWorkingColorSpace:function(s,r){
						return Yi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)
					},
					toWorkingColorSpace:function(s,r){
						return Yi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)
					}
				},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];
				return i.define({
					[Ei]:{
						primaries:e,
						whitePoint:n,
						transfer:Ds,
						toXYZ:ja,
						fromXYZ:Ka,
						luminanceCoefficients:t,
						workingColorSpaceConfig:{unpackColorSpace:Lt},
						outputColorSpaceConfig:{drawingBufferColorSpace:Lt}
					},[Lt]:{
						primaries:e,
						whitePoint:n,
						transfer:je,
						toXYZ:ja,
						fromXYZ:Ka,
						luminanceCoefficients:t,
						outputColorSpaceConfig:{drawingBufferColorSpace:Lt}
					}
				}),i
			}const Ve=Ll();
			function gn(i){
				return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)
			}function vi(i){
				return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055
			}let ti;
			class Il{
				static getDataURL(e,t="image/png"){
					if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;
					let n;
					if(e instanceof HTMLCanvasElement)n=e;
					else{
						ti===void 0&&(ti=qi("canvas")),ti.width=e.width,ti.height=e.height;
						const s=ti.getContext("2d");
						e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ti
					}
					return n.toDataURL(t)
				}static sRGBToLinear(e){
					if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){
						const t=qi("canvas");
						t.width=e.width,t.height=e.height;
						const n=t.getContext("2d");
						n.drawImage(e,0,0,e.width,e.height);
						const s=n.getImageData(0,0,e.width,e.height),r=s.data;
						for(let o=0;o<r.length;o++)r[o]=gn(r[o]/255)*255;
						return n.putImageData(s,0,0),t
					}else if(e.data){
						const t=e.data.slice(0);
						for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gn(t[n]/255)*255):t[n]=gn(t[n]);
						return{data:t,width:e.width,height:e.height}
					}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e
				}
			}let Ul=0;
			class Sa{
				constructor(e=null){
					this.isSource=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0
				}getSize(e){
					const t=this.data;
					return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e
				}set needsUpdate(e){
					e===!0&&this.version++
				}toJSON(e){
					const t=e===void 0||typeof e=="string";
					if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];
					const n={uuid:this.uuid,url:""},s=this.data;
					if(s!==null){
						let r;
						if(Array.isArray(s)){
							r=[];
							for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(js(s[o].image)):r.push(js(s[o]))
						}else r=js(s);n.url=r
					}return t||(e.images[this.uuid]=n),n
				}
			}function js(i){
				return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Il.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})
			}let Nl=0;
			const Ks=new N;
			class vt extends Jn{
				constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=mn,s=mn,r=zt,o=Yn,a=Zt,h=vn,c=vt.DEFAULT_ANISOTROPY,l=Ln){
					super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nl++}),this.uuid=Ki(),this.name="",this.source=new Sa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=h,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0
				}get width(){
					return this.source.getSize(Ks).x
				}get height(){
					return this.source.getSize(Ks).y
				}get depth(){
					return this.source.getSize(Ks).z
				}get image(){
					return this.source.data
				}set image(e=null){
					this.source.data=e
				}updateMatrix(){
					this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)
				}addUpdateRange(e,t){
					this.updateRanges.push({start:e,count:t})
				}clearUpdateRanges(){
					this.updateRanges.length=0
				}clone(){
					return new this.constructor().copy(this)
				}copy(e){
					return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this
				}setValues(e){
					for(const t in e){
						const n=e[t];
						if(n===void 0){
							De(`Texture.setValues(): parameter '${t}' has value of undefined.`);
							continue
						}const s=this[t];
						if(s===void 0){
							De(`Texture.setValues(): property '${t}' does not exist.`);
							continue
						}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n
					}
				}toJSON(e){
					const t=e===void 0||typeof e=="string";
					if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];
					const n={
						metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},
						uuid:this.uuid,
						name:this.name,
						image:this.source.toJSON(e).uuid,
						mapping:this.mapping,
						channel:this.channel,
						repeat:[this.repeat.x,this.repeat.y],
						offset:[this.offset.x,this.offset.y],
						center:[this.center.x,this.center.y],
						rotation:this.rotation,
						wrap:[this.wrapS,this.wrapT],
						format:this.format,
						internalFormat:this.internalFormat,
						type:this.type,colorSpace:this.colorSpace,
						minFilter:this.minFilter,magFilter:this.magFilter,
						anisotropy:this.anisotropy,flipY:this.flipY,
						generateMipmaps:this.generateMipmaps,
						premultiplyAlpha:this.premultiplyAlpha,
						unpackAlignment:this.unpackAlignment
					};
					return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n
				}dispose(){
					this.dispatchEvent({type:"dispose"})
				}transformUv(e){
					if(this.mapping!==tc)return e;
					if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){
						case Lr:e.x=e.x-Math.floor(e.x);break;
						case mn:e.x=e.x<0?0:1;break;
						case Ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break
					}if(e.y<0||e.y>1)switch(this.wrapT){
						case Lr:e.y=e.y-Math.floor(e.y);break;
						case mn:e.y=e.y<0?0:1;break;
						case Ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break
					}return this.flipY&&(e.y=1-e.y),e
				}set needsUpdate(e){
					e===!0&&(this.version++,this.source.needsUpdate=!0)
				}set needsPMREMUpdate(e){
					e===!0&&this.pmremVersion++
				}
			}vt.DEFAULT_IMAGE=null;
			vt.DEFAULT_MAPPING=tc;
			vt.DEFAULT_ANISOTROPY=1;
			class lt{
				constructor(e=0,t=0,n=0,s=1){
					lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s
				}get width(){
					return this.z
				}set width(e){
					this.z=e
				}get height(){
					return this.w
				}set height(e){
					this.w=e
				}set(e,t,n,s){
					return this.x=e,this.y=t,this.z=n,this.w=s,this
				}setScalar(e){
					return this.x=e,this.y=e,this.z=e,this.w=e,this
				}setX(e){
					return this.x=e,this
				}setY(e){
					return this.y=e,this
				}setZ(e){
					return this.z=e,this
				}setW(e){
					return this.w=e,this
				}setComponent(e,t){
					switch(e){
						case 0:this.x=t;break;case 1:this.y=t;break;
						case 2:this.z=t;break;case 3:this.w=t;break;
						default:throw new Error("index is out of range: "+e)
					}return this
				}getComponent(e){
					switch(e){
						case 0:return this.x;case 1:return this.y;
						case 2:return this.z;case 3:return this.w;
						default:throw new Error("index is out of range: "+e)
					}
				}clone(){
					return new this.constructor(this.x,this.y,this.z,this.w)
				}copy(e){
					return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this
				}add(e){
					return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this
				}addScalar(e){
					return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this
				}addVectors(e,t){
					return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this
				}addScaledVector(e,t){
					return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this
				}sub(e){
					return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this
				}subScalar(e){
					return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this
				}subVectors(e,t){
					return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this
				}multiply(e){
					return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this
				}multiplyScalar(e){
					return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this
				}applyMatrix4(e){
					const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;
					return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this
				}divide(e){
					return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this
				}divideScalar(e){
					return this.multiplyScalar(1/e)
				}setAxisAngleFromQuaternion(e){
					this.w=2*Math.acos(e.w);
					const t=Math.sqrt(1-e.w*e.w);
					return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this
				}setAxisAngleFromRotationMatrix(e){
					let t,n,s,r;
					const h=e.elements,c=h[0],l=h[4],u=h[8],d=h[1],p=h[5],g=h[9],v=h[2],m=h[6],f=h[10];
					if(Math.abs(l-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){
						if(Math.abs(l+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;
						t=Math.PI;
						const E=(c+1)/2,A=(p+1)/2,C=(f+1)/2,y=(l+d)/4,D=(u+v)/4,z=(g+m)/4;
						return E>A&&E>C?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=y/n,r=D/n):A>C?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=y/s,r=z/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=D/r,s=z/r),this.set(n,s,r,t),this
					}let T=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-l)*(d-l));
					return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-v)/T,this.z=(d-l)/T,this.w=Math.acos((c+p+f-1)/2),this
				}setFromMatrixPosition(e){
					const t=e.elements;
					return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this
				}min(e){
					return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this
				}max(e){
					return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this
				}clamp(e,t){
					return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this
				}clampScalar(e,t){
					return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this
				}clampLength(e,t){
					const n=this.length();
					return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))
				}floor(){
					return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this
				}ceil(){
					return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this
				}round(){
					return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this
				}roundToZero(){
					return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this
				}negate(){
					return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this
				}dot(e){
					return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w
				}lengthSq(){
					return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w
				}length(){
					return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)
				}manhattanLength(){
					return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)
				}normalize(){
					return this.divideScalar(this.length()||1)
				}setLength(e){
					return this.normalize().multiplyScalar(e)
				}lerp(e,t){
					return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this
				}lerpVectors(e,t,n){
					return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this
				}equals(e){
					return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w
				}fromArray(e,t=0){
					return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this
				}toArray(e=[],t=0){
					return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e
				}fromBufferAttribute(e,t){
					return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this
				}random(){
					return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this
				}*[Symbol.iterator](){
					yield this.x,yield this.y,yield this.z,yield this.w
				}
			}class Fl extends Jn{
				constructor(e=1,t=1,n={}){
					super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);
					const s={width:e,height:t,depth:n.depth},r=new vt(s);
					this.textures=[];
					const o=n.count;
					for(let a=0;a<o;a++){
						this.textures[a]=r.clone(),
						this.textures[a].isRenderTargetTexture=!0,
						this.textures[a].renderTarget=this;
					}
						this._setTextureOptions(n),
						this.depthBuffer=n.depthBuffer,
						this.stencilBuffer=n.stencilBuffer,
						this.resolveDepthBuffer=n.resolveDepthBuffer,
						this.resolveStencilBuffer=n.resolveStencilBuffer,
						this._depthTexture=null,
						this.depthTexture=n.depthTexture,
						this.samples=n.samples,
						this.multiview=n.multiview
				}_setTextureOptions(e={}){
					const t={
						minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null
					};
					e.mapping!==void 0&&(t.mapping=e.mapping),
					e.wrapS!==void 0&&(t.wrapS=e.wrapS),
					e.wrapT!==void 0&&(t.wrapT=e.wrapT),
					e.wrapR!==void 0&&(t.wrapR=e.wrapR),
					e.magFilter!==void 0&&(t.magFilter=e.magFilter),
					e.minFilter!==void 0&&(t.minFilter=e.minFilter),
					e.format!==void 0&&(t.format=e.format),
					e.type!==void 0&&(t.type=e.type),
					e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),
					e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),
					e.flipY!==void 0&&(t.flipY=e.flipY),
					e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),
					e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);
					for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)
				}get texture(){
					return this.textures[0]
				}set texture(e){
					this.textures[0]=e
				}set depthTexture(e){
					this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e
				}get depthTexture(){
					return this._depthTexture
				}setSize(e,t,n=1){
					if(this.width!==e||this.height!==t||this.depth!==n){
						this.width=e,this.height=t,this.depth=n;
						for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);
						this.dispose()
					}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)
				}clone(){
					return new this.constructor().copy(this)
				}copy(e){
					this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;
					for(let t=0,n=e.textures.length;t<n;t++){
						this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;
						const s=Object.assign({},e.textures[t].image);
						this.textures[t].source=new Sa(s)
					}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this
				}dispose(){
					this.dispatchEvent({type:"dispose"})
				}
			}class $n extends Fl{
				constructor(e=1,t=1,n={}){
					super(e,t,n),this.isWebGLRenderTarget=!0
				}
			}class uc extends vt{
				constructor(e=null,t=1,n=1,s=1){
					super(null),
					this.isDataArrayTexture=!0,
					this.image={data:e,width:t,height:n,depth:s},
					this.magFilter=It,this.minFilter=It,
					this.wrapR=mn,
					this.generateMipmaps=!1,
					this.flipY=!1,
					this.unpackAlignment=1,
					this.layerUpdates=new Set
				}addLayerUpdate(e){
					this.layerUpdates.add(e)
				}clearLayerUpdates(){
					this.layerUpdates.clear()
				}
			}class Ol extends vt{
				constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}
			}class Zi{
				constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){
					this.isBox3=!0,this.min=e,this.max=t
				}set(e,t){
					return this.min.copy(e),this.max.copy(t),this
				}setFromArray(e){
					this.makeEmpty();
					for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ht.fromArray(e,t));
					return this
				}setFromBufferAttribute(e){
					this.makeEmpty();
					for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));
					return this
				}setFromPoints(e){
					this.makeEmpty();
					for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);
					return this
				}setFromCenterAndSize(e,t){
					const n=Ht.copy(t).multiplyScalar(.5);
					return this.min.copy(e).sub(n),this.max.copy(e).add(n),this
				}setFromObject(e,t=!1){
					return this.makeEmpty(),this.expandByObject(e,t)
				}clone(){
					return new this.constructor().copy(this)
				}copy(e){
					return this.min.copy(e.min),this.max.copy(e.max),this
				}makeEmpty(){
					return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this
				}isEmpty(){
					return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z
				}getCenter(e){
					return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)
				}getSize(e){
					return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)
				}expandByPoint(e){
					return this.min.min(e),this.max.max(e),this
				}expandByVector(e){
					return this.min.sub(e),this.max.add(e),this
				}expandByScalar(e){
					return this.min.addScalar(-e),this.max.addScalar(e),this
				}expandByObject(e,t=!1){
					e.updateWorldMatrix(!1,!1);const n=e.geometry;
					if(n!==void 0){
						const r=n.getAttribute("position");
						if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ht):Ht.fromBufferAttribute(r,o),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);
						else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ts.copy(n.boundingBox)),ts.applyMatrix4(e.matrixWorld),this.union(ts)
					}const s=e.children;
					for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);
					return this
				}containsPoint(e){
					return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z
				}containsBox(e){
					return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z
				}getParameter(e,t){
					return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))
				}intersectsBox(e){
					return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z
				}intersectsSphere(e){
					return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius
				}intersectsPlane(e){
					let t,n;
					return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant
				}intersectsTriangle(e){
					if(this.isEmpty())return!1;
					this.getCenter(Pi),ns.subVectors(this.max,Pi),ni.subVectors(e.a,Pi),ii.subVectors(e.b,Pi),si.subVectors(e.c,Pi),En.subVectors(ii,ni),yn.subVectors(si,ii),zn.subVectors(ni,si);
					let t=[0,-En.z,En.y,0,-yn.z,yn.y,0,-zn.z,zn.y,En.z,0,-En.x,yn.z,0,-yn.x,zn.z,0,-zn.x,-En.y,En.x,0,-yn.y,yn.x,0,-zn.y,zn.x,0];
					return!Zs(t,ni,ii,si,ns)||(t=[1,0,0,0,1,0,0,0,1],!Zs(t,ni,ii,si,ns))?!1:(is.crossVectors(En,yn),t=[is.x,is.y,is.z],Zs(t,ni,ii,si,ns))
				}clampPoint(e,t){
					return t.copy(e).clamp(this.min,this.max)
				}distanceToPoint(e){
					return this.clampPoint(e,Ht).distanceTo(e)
				}getBoundingSphere(e){
					return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e
				}intersect(e){
					return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this
				}union(e){
					return this.min.min(e.min),this.max.max(e.max),this
				}applyMatrix4(e){
					return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)
				}translate(e){
					return this.min.add(e),this.max.add(e),this
				}equals(e){
					return e.min.equals(this.min)&&e.max.equals(this.max)
				}toJSON(){
					return{min:this.min.toArray(),max:this.max.toArray()}
				}fromJSON(e){
					return this.min.fromArray(e.min),this.max.fromArray(e.max),this
				}
			}const an=[new N,new N,new N,new N,new N,new N,new N,new N],Ht=new N,ts=new Zi,ni=new N,ii=new N,si=new N,En=new N,yn=new N,zn=new N,Pi=new N,ns=new N,is=new N,Gn=new N;
			function Zs(i,e,t,n,s){
				for(let r=0,o=i.length-3;r<=o;r+=3){
					Gn.fromArray(i,r);
					const a=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),h=e.dot(Gn),c=t.dot(Gn),l=n.dot(Gn);
					if(Math.max(-Math.max(h,c,l),Math.min(h,c,l))>a)return!1
				}return!0
			}const Bl=new Zi,Di=new N,$s=new N;
			class Ma{
				constructor(e=new N,t=-1){
					this.isSphere=!0,this.center=e,this.radius=t
				}set(e,t){
					return this.center.copy(e),this.radius=t,this
				}setFromPoints(e,t){
					const n=this.center;
					t!==void 0?n.copy(t):Bl.setFromPoints(e).getCenter(n);
					let s=0;
					for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));
					return this.radius=Math.sqrt(s),this
				}copy(e){
					return this.center.copy(e.center),this.radius=e.radius,this
				}isEmpty(){
					return this.radius<0
				}makeEmpty(){
					return this.center.set(0,0,0),this.radius=-1,this
				}containsPoint(e){
					return e.distanceToSquared(this.center)<=this.radius*this.radius
				}distanceToPoint(e){
					return e.distanceTo(this.center)-this.radius
				}intersectsSphere(e){
					const t=this.radius+e.radius;
					return e.center.distanceToSquared(this.center)<=t*t
				}intersectsBox(e){
					return e.intersectsSphere(this)
				}intersectsPlane(e){
					return Math.abs(e.distanceToPoint(this.center))<=this.radius
				}clampPoint(e,t){
					const n=this.center.distanceToSquared(e);
					return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t
				}getBoundingBox(e){
					return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)
				}applyMatrix4(e){
					return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this
				}translate(e){
					return this.center.add(e),this
				}expandByPoint(e){
					if(this.isEmpty())return this.center.copy(e),this.radius=0,this;
					Di.subVectors(e,this.center);
					const t=Di.lengthSq();
					if(t>this.radius*this.radius){
						const n=Math.sqrt(t),s=(n-this.radius)*.5;
						this.center.addScaledVector(Di,s/n),this.radius+=s
					}return this
				}union(e){
					return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($s.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Di.copy(e.center).add($s)),this.expandByPoint(Di.copy(e.center).sub($s))),this)
				}equals(e){
					return e.center.equals(this.center)&&e.radius===this.radius
				}clone(){
					return new this.constructor().copy(this)
				}toJSON(){
					return{radius:this.radius,center:this.center.toArray()}
				}fromJSON(e){
					return this.radius=e.radius,this.center.fromArray(e.center),this
				}
			}const on=new N,Js=new N,ss=new N,Tn=new N,Qs=new N,rs=new N,er=new N;
			class Ea{
				constructor(e=new N,t=new N(0,0,-1)){
					this.origin=e,this.direction=t
				}set(e,t){
					return this.origin.copy(e),this.direction.copy(t),this
				}copy(e){
					return this.origin.copy(e.origin),this.direction.copy(e.direction),this
				}at(e,t){
					return t.copy(this.origin).addScaledVector(this.direction,e)
				}lookAt(e){
					return this.direction.copy(e).sub(this.origin).normalize(),this
				}recast(e){
					return this.origin.copy(this.at(e,on)),this
				}closestPointToPoint(e,t){
					t.subVectors(e,this.origin);
					const n=t.dot(this.direction);
					return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)
				}distanceToPoint(e){
					return Math.sqrt(this.distanceSqToPoint(e))
				}distanceSqToPoint(e){
					const t=on.subVectors(e,this.origin).dot(this.direction);
					return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))
				}distanceSqToSegment(e,t,n,s){
					Js.copy(e).add(t).multiplyScalar(.5),ss.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(Js);
					const r=e.distanceTo(t)*.5,o=-this.direction.dot(ss),a=Tn.dot(this.direction),h=-Tn.dot(ss),c=Tn.lengthSq(),l=Math.abs(1-o*o);
					let u,d,p,g;
					if(l>0)if(u=o*h-a,d=o*a-h,g=r*l,u>=0)if(d>=-g)if(d<=g){
						const v=1/l;
						u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*h)+c
					}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*h)+c;
					else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*h)+c;
					else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-h),r),p=-u*u+d*(d+2*h)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-h),r),p=d*(d+2*h)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-h),r),p=-u*u+d*(d+2*h)+c);
					else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*h)+c;
					return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Js).addScaledVector(ss,d),p
				}intersectSphere(e,t){
					on.subVectors(e.center,this.origin);
					const n=on.dot(this.direction),s=on.dot(on)-n*n,r=e.radius*e.radius;
					if(s>r)return null;
					const o=Math.sqrt(r-s),a=n-o,h=n+o;
					return h<0?null:a<0?this.at(h,t):this.at(a,t)
				}intersectsSphere(e){
					return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius
				}distanceToPlane(e){
					const t=e.normal.dot(this.direction);
					if(t===0)return e.distanceToPoint(this.origin)===0?0:null;
					const n=-(this.origin.dot(e.normal)+e.constant)/t;
					return n>=0?n:null
				}intersectPlane(e,t){
					const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,h;const c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),l>=0?(r=(e.min.y-d.y)*l,o=(e.max.y-d.y)*l):(r=(e.max.y-d.y)*l,o=(e.min.y-d.y)*l),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,h=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,h=(e.min.z-d.z)*u),n>h||a>s)||((a>n||n!==n)&&(n=a),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,s,r){Qs.subVectors(t,e),rs.subVectors(n,e),er.crossVectors(Qs,rs);let o=this.direction.dot(er),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tn.subVectors(this.origin,e);const h=a*this.direction.dot(rs.crossVectors(Tn,rs));if(h<0)return null;const c=a*this.direction.dot(Qs.cross(Tn));if(c<0||h+c>o)return null;const l=-a*Tn.dot(er);return l<0?null:this.at(l/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}
			}class ut{
				constructor(e,t,n,s,r,o,a,h,c,l,u,d,p,g,v,m){
					ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,h,c,l,u,d,p,g,v,m)
				}set(e,t,n,s,r,o,a,h,c,l,u,d,p,g,v,m){
					const f=this.elements;
					return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=h,f[2]=c,f[6]=l,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this
				}identity(){
					return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this
				}clone(){
					return new ut().fromArray(this.elements)
				}copy(e){
					const t=this.elements,n=e.elements;
					return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this
				}copyPosition(e){
					const t=this.elements,n=e.elements;
					return t[12]=n[12],t[13]=n[13],t[14]=n[14],this
				}setFromMatrix3(e){
					const t=e.elements;
					return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this
				}extractBasis(e,t,n){
					return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this
				}makeBasis(e,t,n){
					return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this
				}extractRotation(e){
					const t=this.elements,n=e.elements,s=1/ri.setFromMatrixColumn(e,0).length(),r=1/ri.setFromMatrixColumn(e,1).length(),o=1/ri.setFromMatrixColumn(e,2).length();
					return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this
				}makeRotationFromEuler(e){
					const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(s),c=Math.sin(s),l=Math.cos(r),u=Math.sin(r);
					if(e.order==="XYZ"){
						const d=o*l,p=o*u,g=a*l,v=a*u;
						t[0]=h*l,t[4]=-h*u,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-a*h,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*h
					}else if(e.order==="YXZ"){
						const d=h*l,p=h*u,g=c*l,v=c*u;
						t[0]=d+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*l,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*h
					}else if(e.order==="ZXY"){
						const d=h*l,p=h*u,g=c*l,v=c*u;
						t[0]=d-v*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*l,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*h
					}else if(e.order==="ZYX"){
						const d=o*l,p=o*u,g=a*l,v=a*u;
						t[0]=h*l,t[4]=g*c-p,t[8]=d*c+v,t[1]=h*u,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*h,t[10]=o*h
					}else if(e.order==="YZX"){
						const d=o*h,p=o*c,g=a*h,v=a*c;
						t[0]=h*l,t[4]=v-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*l,t[9]=-a*l,t[2]=-c*l,t[6]=p*u+g,t[10]=d-v*u
					}else if(e.order==="XZY"){
						const d=o*h,p=o*c,g=a*h,v=a*c;
						t[0]=h*l,t[4]=-u,t[8]=c*l,t[1]=d*u+v,t[5]=o*l,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*l,t[10]=v*u+d
					}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this
				}makeRotationFromQuaternion(e){
					return this.compose(zl,e,Gl)
				}lookAt(e,t,n){
					const s=this.elements;
					return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),An.crossVectors(n,Pt),An.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),An.crossVectors(n,Pt)),An.normalize(),as.crossVectors(Pt,An),s[0]=An.x,s[4]=as.x,s[8]=Pt.x,s[1]=An.y,s[5]=as.y,s[9]=Pt.y,s[2]=An.z,s[6]=as.z,s[10]=Pt.z,this
				}multiply(e){
					return this.multiplyMatrices(this,e)
				}premultiply(e){
					return this.multiplyMatrices(e,this)
				}multiplyMatrices(e,t){
					const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],h=n[8],c=n[12],l=n[1],u=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],T=n[3],E=n[7],A=n[11],C=n[15],y=s[0],D=s[4],z=s[8],S=s[12],b=s[1],P=s[5],B=s[9],H=s[13],W=s[2],j=s[6],q=s[10],ne=s[14],k=s[3],te=s[7],re=s[11],Se=s[15];
					return r[0]=o*y+a*b+h*W+c*k,r[4]=o*D+a*P+h*j+c*te,r[8]=o*z+a*B+h*q+c*re,r[12]=o*S+a*H+h*ne+c*Se,r[1]=l*y+u*b+d*W+p*k,r[5]=l*D+u*P+d*j+p*te,r[9]=l*z+u*B+d*q+p*re,r[13]=l*S+u*H+d*ne+p*Se,r[2]=g*y+v*b+m*W+f*k,r[6]=g*D+v*P+m*j+f*te,r[10]=g*z+v*B+m*q+f*re,r[14]=g*S+v*H+m*ne+f*Se,r[3]=T*y+E*b+A*W+C*k,r[7]=T*D+E*P+A*j+C*te,r[11]=T*z+E*B+A*q+C*re,r[15]=T*S+E*H+A*ne+C*Se,this
				}multiplyScalar(e){
					const t=this.elements;
					return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this
				}determinant(){
					const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],h=e[9],c=e[13],l=e[2],u=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];
					return g*(+r*h*u-s*c*u-r*a*d+n*c*d+s*a*p-n*h*p)+v*(+t*h*p-t*c*d+r*o*d-s*o*p+s*c*l-r*h*l)+m*(+t*c*u-t*a*p-r*o*u+n*o*p+r*a*l-n*c*l)+f*(-s*a*l-t*h*u+t*a*d+s*o*u-n*o*d+n*h*l)
				}transpose(){
					const e=this.elements;
					let t;
					return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this
				}setPosition(e,t,n){
					const s=this.elements;
					return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this
				}invert(){
					const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=e[6],c=e[7],l=e[8],u=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],T=u*m*c-v*d*c+v*h*p-a*m*p-u*h*f+a*d*f,E=g*d*c-l*m*c-g*h*p+o*m*p+l*h*f-o*d*f,A=l*v*c-g*u*c+g*a*p-o*v*p-l*a*f+o*u*f,C=g*u*h-l*v*h-g*a*d+o*v*d+l*a*m-o*u*m,y=t*T+n*E+s*A+r*C;
					if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
					const D=1/y;
					return e[0]=T*D,e[1]=(v*d*r-u*m*r-v*s*p+n*m*p+u*s*f-n*d*f)*D,e[2]=(a*m*r-v*h*r+v*s*c-n*m*c-a*s*f+n*h*f)*D,e[3]=(u*h*r-a*d*r-u*s*c+n*d*c+a*s*p-n*h*p)*D,e[4]=E*D,e[5]=(l*m*r-g*d*r+g*s*p-t*m*p-l*s*f+t*d*f)*D,e[6]=(g*h*r-o*m*r-g*s*c+t*m*c+o*s*f-t*h*f)*D,e[7]=(o*d*r-l*h*r+l*s*c-t*d*c-o*s*p+t*h*p)*D,e[8]=A*D,e[9]=(g*u*r-l*v*r-g*n*p+t*v*p+l*n*f-t*u*f)*D,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*f+t*a*f)*D,e[11]=(l*a*r-o*u*r-l*n*c+t*u*c+o*n*p-t*a*p)*D,e[12]=C*D,e[13]=(l*v*s-g*u*s+g*n*d-t*v*d-l*n*m+t*u*m)*D,e[14]=(g*a*s-o*v*s-g*n*h+t*v*h+o*n*m-t*a*m)*D,e[15]=(o*u*s-l*a*s+l*n*h-t*u*h-o*n*d+t*a*d)*D,this
				}scale(e){
					const t=this.elements,n=e.x,s=e.y,r=e.z;
					return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this
				}getMaxScaleOnAxis(){
					const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];
					return Math.sqrt(Math.max(t,n,s))
				}makeTranslation(e,t,n){
					return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this
				}makeRotationX(e){
					const t=Math.cos(e),n=Math.sin(e);
					return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this
				}makeRotationY(e){
					const t=Math.cos(e),n=Math.sin(e);
					return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this
				}makeRotationZ(e){
					const t=Math.cos(e),n=Math.sin(e);
					return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this
				}makeRotationAxis(e,t){
					const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,h=e.z,c=r*o,l=r*a;
					return this.set(c*o+n,c*a-s*h,c*h+s*a,0,c*a+s*h,l*a+n,l*h-s*o,0,c*h-s*a,l*h+s*o,r*h*h+n,0,0,0,0,1),this
				}makeScale(e,t,n){
					return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this
				}makeShear(e,t,n,s,r,o){
					return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this
				}compose(e,t,n){
					const s=this.elements,r=t._x,o=t._y,a=t._z,h=t._w,c=r+r,l=o+o,u=a+a,d=r*c,p=r*l,g=r*u,v=o*l,m=o*u,f=a*u,T=h*c,E=h*l,A=h*u,C=n.x,y=n.y,D=n.z;
					return s[0]=(1-(v+f))*C,s[1]=(p+A)*C,s[2]=(g-E)*C,s[3]=0,s[4]=(p-A)*y,s[5]=(1-(d+f))*y,s[6]=(m+T)*y,s[7]=0,s[8]=(g+E)*D,s[9]=(m-T)*D,s[10]=(1-(d+v))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this
				}decompose(e,t,n){
					const s=this.elements;
					let r=ri.set(s[0],s[1],s[2]).length();
					const o=ri.set(s[4],s[5],s[6]).length(),a=ri.set(s[8],s[9],s[10]).length();
					this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],kt.copy(this);
					const c=1/r,l=1/o,u=1/a;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=l,kt.elements[5]*=l,kt.elements[6]*=l,kt.elements[8]*=u,kt.elements[9]*=u,kt.elements[10]*=u,t.setFromRotationMatrix(kt),n.x=r,n.y=o,n.z=a,this
				}makePerspective(e,t,n,s,r,o,a=nn,h=!1){
					const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s);
					let g,v;if(h)g=r/(o-r),v=o*r/(o-r);
					else if(a===nn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);
					else if(a===Ls)g=-o/(o-r),v=-o*r/(o-r);
					else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);
					return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this
				}makeOrthographic(e,t,n,s,r,o,a=nn,h=!1){
					const c=this.elements,l=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s);
					let g,v;
					if(h)g=1/(o-r),v=o/(o-r);
					else if(a===nn)g=-2/(o-r),v=-(o+r)/(o-r);
					else if(a===Ls)g=-1/(o-r),v=-r/(o-r);
					else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);
					return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this
				}equals(e){
					const t=this.elements,n=e.elements;
					for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;
					return!0
				}fromArray(e,t=0){
					for(let n=0;n<16;n++)this.elements[n]=e[n+t];
					return this
				}toArray(e=[],t=0){
					const n=this.elements;
					return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e
				}
			}const ri=new N,kt=new ut,zl=new N(0,0,0),Gl=new N(1,1,1),An=new N,as=new N,Pt=new N,Za=new ut,$a=new Zn;
			class bn{
				constructor(e=0,t=0,n=0,s=bn.DEFAULT_ORDER){
					this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s
				}get x(){
					return this._x
				}set x(e){
					this._x=e,this._onChangeCallback()
				}get y(){
					return this._y
				}set y(e){
					this._y=e,this._onChangeCallback()
				}get z(){
					return this._z
				}set z(e){
					this._z=e,this._onChangeCallback()
				}get order(){
					return this._order
				}set order(e){
					this._order=e,this._onChangeCallback()
				}set(e,t,n,s=this._order){
					return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this
				}clone(){
					return new this.constructor(this._x,this._y,this._z,this._order)
				}copy(e){
					return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this
				}setFromRotationMatrix(e,t=this._order,n=!0){
					const s=e.elements,r=s[0],o=s[4],a=s[8],h=s[1],c=s[5],l=s[9],u=s[2],d=s[6],p=s[10];
					switch(t){
						case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;
						case"YXZ":this._x=Math.asin(-Oe(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-u,r),this._z=0);break;
						case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(h,r));break;
						case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,c));break;
						case"YZX":this._z=Math.asin(Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;
						case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,p),this._y=0);break;
						default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)
					}return this._order=t,n===!0&&this._onChangeCallback(),this
				}setFromQuaternion(e,t,n){
					return Za.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Za,t,n)
				}setFromVector3(e,t=this._order){
					return this.set(e.x,e.y,e.z,t)
				}reorder(e){
					return $a.setFromEuler(this),this.setFromQuaternion($a,e)
				}equals(e){
					return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order
				}fromArray(e){
					return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this
				}toArray(e=[],t=0){
					return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e
				}_onChange(e){
					return this._onChangeCallback=e,this
				}_onChangeCallback(){
				}*[Symbol.iterator](){
					yield this._x,yield this._y,yield this._z,yield this._order
				}
			}bn.DEFAULT_ORDER="XYZ";
			class ya{
				constructor(){
					this.mask=1
				}set(e){
					this.mask=(1<<e|0)>>>0
				}enable(e){
					this.mask|=1<<e|0
				}enableAll(){
					this.mask=-1
				}toggle(e){
					this.mask^=1<<e|0
				}disable(e){
					this.mask&=~(1<<e|0)
				}disableAll(){
					this.mask=0
				}test(e){
					return(this.mask&e.mask)!==0
				}isEnabled(e){
					return(this.mask&(1<<e|0))!==0
				}
			}let Hl=0;
			const Ja=new N,ai=new Zn,cn=new ut,os=new N,Li=new N,kl=new N,Wl=new Zn,Qa=new N(1,0,0),eo=new N(0,1,0),to=new N(0,0,1),no={type:"added"},Vl={type:"removed"},oi={type:"childadded",child:null},tr={type:"childremoved",child:null};
			class Ut extends Jn{
				constructor(){
					super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hl++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();
					const e=new N,t=new bn,n=new Zn,s=new N(1,1,1);
					function r(){
						n.setFromEuler(t,!1)
					}function o(){
						t.setFromQuaternion(n,void 0,!1)
					}t._onChange(r),n._onChange(o),
					Object.defineProperties(this,{
						position:{configurable:!0,enumerable:!0,value:e},
						rotation:{configurable:!0,enumerable:!0,value:t},
						quaternion:{configurable:!0,enumerable:!0,value:n},
						scale:{configurable:!0,enumerable:!0,value:s},
						modelViewMatrix:{value:new ut},normalMatrix:{value:new Ie}
					}),this.matrix=new ut,this.matrixWorld=new ut,
					this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,
					this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,
					this.matrixWorldNeedsUpdate=!1,this.layers=new ya,this.visible=!0,
					this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,
					this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,
					this.customDistanceMaterial=void 0,this.userData={}
				}onBeforeShadow(){}
				onAfterShadow(){}
				onBeforeRender(){}
				onAfterRender(){}
				applyMatrix4(e){
					this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)
				}applyQuaternion(e){
					return this.quaternion.premultiply(e),this
				}setRotationFromAxisAngle(e,t){
					this.quaternion.setFromAxisAngle(e,t)
				}setRotationFromEuler(e){
					this.quaternion.setFromEuler(e,!0)
				}setRotationFromMatrix(e){
					this.quaternion.setFromRotationMatrix(e)
				}setRotationFromQuaternion(e){
					this.quaternion.copy(e)
				}rotateOnAxis(e,t){
					return ai.setFromAxisAngle(e,t),this.quaternion.multiply(ai),this
				}rotateOnWorldAxis(e,t){
					return ai.setFromAxisAngle(e,t),this.quaternion.premultiply(ai),this
				}rotateX(e){
					return this.rotateOnAxis(Qa,e)
				}rotateY(e){
					return this.rotateOnAxis(eo,e)
				}rotateZ(e){
					return this.rotateOnAxis(to,e)
				}translateOnAxis(e,t){
					return Ja.copy(e).applyQuaternion(this.quaternion),this.position.add(Ja.multiplyScalar(t)),this
				}translateX(e){
					return this.translateOnAxis(Qa,e)
				}translateY(e){
					return this.translateOnAxis(eo,e)
				}translateZ(e){
					return this.translateOnAxis(to,e)
				}localToWorld(e){
					return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)
				}worldToLocal(e){
					return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())
				}lookAt(e,t,n){
					e.isVector3?os.copy(e):os.set(e,t,n);
					const s=this.parent;
					this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Li,os,this.up):cn.lookAt(os,Li,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),ai.setFromRotationMatrix(cn),this.quaternion.premultiply(ai.invert()))
				}add(e){
					if(arguments.length>1){
						for(let t=0;t<arguments.length;t++)this.add(arguments[t]);
						return this
					}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(no),oi.child=e,this.dispatchEvent(oi),oi.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)
				}remove(e){
					if(arguments.length>1){
						for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);
						return this
					}const t=this.children.indexOf(e);
					return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vl),tr.child=e,this.dispatchEvent(tr),tr.child=null),this
				}removeFromParent(){
					const e=this.parent;
					return e!==null&&e.remove(this),this
				}clear(){
					return this.remove(...this.children)
				}attach(e){
					return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(no),oi.child=e,this.dispatchEvent(oi),oi.child=null,this
				}getObjectById(e){
					return this.getObjectByProperty("id",e)
				}getObjectByName(e){
					return this.getObjectByProperty("name",e)
				}getObjectByProperty(e,t){
					if(this[e]===t)return this;
					for(let n=0,s=this.children.length;n<s;n++){
						const o=this.children[n].getObjectByProperty(e,t);
						if(o!==void 0)return o
					}
				}getObjectsByProperty(e,t,n=[]){
					this[e]===t&&n.push(this);
					const s=this.children;
					for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);
					return n
				}getWorldPosition(e){
					return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)
				}getWorldQuaternion(e){
					return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,e,kl),e
				}getWorldScale(e){
					return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,Wl,e),e
				}getWorldDirection(e){
					this.updateWorldMatrix(!0,!1);
					const t=this.matrixWorld.elements;
					return e.set(t[8],t[9],t[10]).normalize()
				}raycast(){}
				traverse(e){
					e(this);
					const t=this.children;
					for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)
				}traverseVisible(e){
					if(this.visible===!1)return;
					e(this);
					const t=this.children;
					for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)
				}traverseAncestors(e){
					const t=this.parent;
					t!==null&&(e(t),t.traverseAncestors(e))
				}updateMatrix(){
					this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0
				}updateMatrixWorld(e){
					this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);
					const t=this.children;
					for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)
				}updateWorldMatrix(e,t){
					const n=this.parent;
					if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){
						const s=this.children;
						for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)
					}
				}toJSON(e){
					const t=e===void 0||typeof e=="string",n={};
					t&&(e={
						geometries:{},materials:{},textures:{},images:{},shapes:{},
						skeletons:{},animations:{},nodes:{}
					},n.metadata={
						version:4.7,type:"Object",generator:"Object3D.toJSON"
					});
					const s={};
					s.uuid=this.uuid,s.type=this.type,this.name!==""
						&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),
						this.receiveShadow===!0&&(s.receiveShadow=!0),
						this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),
						this.renderOrder!==0&&(s.renderOrder=this.renderOrder),
						Object.keys(this.userData).length>0&&(s.userData=this.userData),
						s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),
						this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),
						this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,
							s.instanceMatrix=this.instanceMatrix.toJSON(),
							this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())
						),this.isBatchedMesh&&(
							s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,
							s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,
							s.reservedRanges=this._reservedRanges,
							s.geometryInfo=this._geometryInfo.map(
								a=>({
									...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,
									boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0
								})
							), s.instanceInfo=this._instanceInfo.map(a=>({...a})),
							s.availableInstanceIds=this._availableInstanceIds.slice(),
							s.availableGeometryIds=this._availableGeometryIds.slice(),
							s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,
							s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,
							s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,
							s.geometryInitialized=this._geometryInitialized,
							s.matricesTexture=this._matricesTexture.toJSON(e),
							s.indirectTexture=this._indirectTexture.toJSON(e),
							this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),
							this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),
							this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON())
					);
					function r(a,h){
						return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(e)),h.uuid
					}if(this.isScene) this.background&&(this.background.isColor
						?s.background=this.background.toJSON()
						:this.background.isTexture&&(
							s.background=this.background.toJSON(e).uuid
						)),
						this.environment&&this.environment.isTexture
						&&this.environment.isRenderTargetTexture!==!0
						&&(s.environment=this.environment.toJSON(e).uuid);
					else if(this.isMesh||this.isLine||this.isPoints){
						s.geometry=r(e.geometries,this.geometry);
						const a=this.geometry.parameters;
						if(a!==void 0&&a.shapes!==void 0){
							const h=a.shapes;
							if(Array.isArray(h))for(let c=0,l=h.length;c<l;c++){
								const u=h[c];
								r(e.shapes,u)
							}else r(e.shapes,h)
						}
					}if(this.isSkinnedMesh&&(
						s.bindMode=this.bindMode,
						s.bindMatrix=this.bindMatrix.toArray(),
						this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),
						s.skeleton=this.skeleton.uuid)),
						this.material!==void 0)if(Array.isArray(this.material))
					{
						const a=[];
						for(let h=0,c=this.material.length;h<c;h++)
							a.push(r(e.materials,this.material[h]));
						s.material=a
					}else s.material=r(e.materials,this.material);
					if(this.children.length>0){
						s.children=[];
						for(let a=0;a<this.children.length;a++)
							s.children.push(this.children[a].toJSON(e).object)
					}if(this.animations.length>0){
						s.animations=[];
						for(let a=0;a<this.animations.length;a++){
							const h=this.animations[a];
							s.animations.push(r(e.animations,h))
						}
					}if(t){
						const a=o(e.geometries),h=o(e.materials),c=o(e.textures),l=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);
						a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)
					}return n.object=s,n;
					function o(a){
						const h=[];
						for(const c in a){
							const l=a[c];
							delete l.metadata,h.push(l)
						}return h
					}
				}clone(e){
					return new this.constructor().copy(this,e)
				}copy(e,t=!0){
					if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){
						const s=e.children[n];
						this.add(s.clone())
					}return this
				}
			}Ut.DEFAULT_UP=new N(0,1,0);
			Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;
			Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;
			const Wt=new N,ln=new N,nr=new N,hn=new N,ci=new N,li=new N,io=new N,ir=new N,sr=new N,rr=new N,ar=new lt,or=new lt,cr=new lt;
			class jt{
				constructor(e=new N,t=new N,n=new N){
					this.a=e,this.b=t,this.c=n
				}static getNormal(e,t,n,s){
					s.subVectors(n,t),Wt.subVectors(e,t),s.cross(Wt);
					const r=s.lengthSq();
					return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)
				}static getBarycoord(e,t,n,s,r){
					Wt.subVectors(s,t),ln.subVectors(n,t),nr.subVectors(e,t);
					const o=Wt.dot(Wt),a=Wt.dot(ln),h=Wt.dot(nr),c=ln.dot(ln),l=ln.dot(nr),u=o*c-a*a;
					if(u===0)return r.set(0,0,0),null;
					const d=1/u,p=(c*h-a*l)*d,g=(o*l-a*h)*d;
					return r.set(1-p-g,g,p)
				}static containsPoint(e,t,n,s){
					return this.getBarycoord(e,t,n,s,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1
				}static getInterpolation(e,t,n,s,r,o,a,h){
					return this.getBarycoord(e,t,n,s,hn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,hn.x),h.addScaledVector(o,hn.y),h.addScaledVector(a,hn.z),h)
				}static getInterpolatedAttribute(e,t,n,s,r,o){
					return ar.setScalar(0),or.setScalar(0),cr.setScalar(0),ar.fromBufferAttribute(e,t),or.fromBufferAttribute(e,n),cr.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ar,r.x),o.addScaledVector(or,r.y),o.addScaledVector(cr,r.z),o
				}static isFrontFacing(e,t,n,s){
					return Wt.subVectors(n,t),ln.subVectors(e,t),Wt.cross(ln).dot(s)<0
				}set(e,t,n){
					return this.a.copy(e),this.b.copy(t),this.c.copy(n),this
				}setFromPointsAndIndices(e,t,n,s){
					return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this
				}setFromAttributeAndIndices(e,t,n,s){
					return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this
				}clone(){
					return new this.constructor().copy(this)
				}copy(e){
					return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this
				}getArea(){
					return Wt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Wt.cross(ln).length()*.5
				}getMidpoint(e){
					return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)
				}getNormal(e){
					return jt.getNormal(this.a,this.b,this.c,e)
				}getPlane(e){
					return e.setFromCoplanarPoints(this.a,this.b,this.c)
				}getBarycoord(e,t){
					return jt.getBarycoord(e,this.a,this.b,this.c,t)
				}getInterpolation(e,t,n,s,r){
					return jt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)
				}containsPoint(e){
					return jt.containsPoint(e,this.a,this.b,this.c)
				}isFrontFacing(e){
					return jt.isFrontFacing(this.a,this.b,this.c,e)
				}intersectsBox(e){
					return e.intersectsTriangle(this)
				}closestPointToPoint(e,t){
					const n=this.a,s=this.b,r=this.c;
					let o,a;
					ci.subVectors(s,n),li.subVectors(r,n),ir.subVectors(e,n);
					const h=ci.dot(ir),c=li.dot(ir);
					if(h<=0&&c<=0)return t.copy(n);
					sr.subVectors(e,s);
					const l=ci.dot(sr),u=li.dot(sr);
					if(l>=0&&u<=l)return t.copy(s);
					const d=h*u-l*c;
					if(d<=0&&h>=0&&l<=0)return o=h/(h-l),t.copy(n).addScaledVector(ci,o);
					rr.subVectors(e,r);
					const p=ci.dot(rr),g=li.dot(rr);
					if(g>=0&&p<=g)return t.copy(r);
					const v=p*c-h*g;
					if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(li,a);
					const m=l*g-p*u;
					if(m<=0&&u-l>=0&&p-g>=0)return io.subVectors(r,s),a=(u-l)/(u-l+(p-g)),t.copy(s).addScaledVector(io,a);
					const f=1/(m+v+d);
					return o=v*f,a=d*f,t.copy(n).addScaledVector(ci,o).addScaledVector(li,a)
				}equals(e){
					return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)
				}
			}const fc={
				aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,
				beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,
				cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,
				darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,
				firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,
				gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,
				honeydew:15794160,hotpink:16738740,
				indianred:13458524,indigo:4915330,ivory:16777200,
				khaki:15787660,
				lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,
				magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,
				navajowhite:16768685,navy:128,
				oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,
				palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,
				rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,
				saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,
				tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,
				violet:15631086,
				wheat:16113331,white:16777215,whitesmoke:16119285,
				yellow:16776960,yellowgreen:10145074
			},wn={h:0,s:0,l:0},cs={h:0,s:0,l:0};
			function lr(i,e,t){
				return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i
			}class Ze{
				constructor(e,t,n){
					return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)
				}set(e,t,n){
					if(t===void 0&&n===void 0){
						const s=e;
						s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)
					}else this.setRGB(e,t,n);
					return this
				}setScalar(e){
					return this.r=e,this.g=e,this.b=e,this
				}setHex(e,t=Lt){
					return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this
				}setRGB(e,t,n,s=Ve.workingColorSpace){
					return this.r=e,this.g=t,this.b=n,Ve.colorSpaceToWorking(this,s),this
				}setHSL(e,t,n,s=Ve.workingColorSpace){
					if(e=Pl(e,1),t=Oe(t,0,1),n=Oe(n,0,1),t===0)this.r=this.g=this.b=n;
					else{
						const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;
						this.r=lr(o,r,e+1/3),this.g=lr(o,r,e),this.b=lr(o,r,e-1/3)
					}return Ve.colorSpaceToWorking(this,s),this
				}setStyle(e,t=Lt){
					function n(r){
						r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")
					}let s;
					if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){
						let r;
						const o=s[1],a=s[2];
						switch(o){
							case"rgb":
							case"rgba":
								if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);
								if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);
								break;
							case"hsl":
							case"hsla":
								if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);
								break;
							default:De("Color: Unknown color model "+e)
						}
					}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){
						const r=s[1],o=r.length;
						if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);
						if(o===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)
					}else if(e&&e.length>0)return this.setColorName(e,t);
					return this
				}setColorName(e,t=Lt){
					const n=fc[e.toLowerCase()];
					return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this
				}clone(){
					return new this.constructor(this.r,this.g,this.b)
				}copy(e){
					return this.r=e.r,this.g=e.g,this.b=e.b,this
				}copySRGBToLinear(e){
					return this.r=gn(e.r),this.g=gn(e.g),this.b=gn(e.b),this
				}copyLinearToSRGB(e){
					return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this
				}convertSRGBToLinear(){
					return this.copySRGBToLinear(this),this
				}convertLinearToSRGB(){
					return this.copyLinearToSRGB(this),this
				}getHex(e=Lt){
					return Ve.workingToColorSpace(gt.copy(this),e),Math.round(Oe(gt.r*255,0,255))*65536+Math.round(Oe(gt.g*255,0,255))*256+Math.round(Oe(gt.b*255,0,255))
				}getHexString(e=Lt){
					return("000000"+this.getHex(e).toString(16)).slice(-6)
				}getHSL(e,t=Ve.workingColorSpace){
					Ve.workingToColorSpace(gt.copy(this),t);
					const n=gt.r,s=gt.g,r=gt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);
					let h,c;const l=(a+o)/2;
					if(a===o)h=0,c=0;
					else{
						const u=o-a;
						switch(c=l<=.5?u/(o+a):u/(2-o-a),o){
							case n:h=(s-r)/u+(s<r?6:0);break;
							case s:h=(r-n)/u+2;break;
							case r:h=(n-s)/u+4;break
						}h/=6
					}return e.h=h,e.s=c,e.l=l,e
				}getRGB(e,t=Ve.workingColorSpace){
					return Ve.workingToColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e
				}getStyle(e=Lt){
					Ve.workingToColorSpace(gt.copy(this),e);
					const t=gt.r,n=gt.g,s=gt.b;
					return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`
				}offsetHSL(e,t,n){
					return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)
				}add(e){
					return this.r+=e.r,this.g+=e.g,this.b+=e.b,this
				}addColors(e,t){
					return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this
				}addScalar(e){
					return this.r+=e,this.g+=e,this.b+=e,this
				}sub(e){
					return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this
				}multiply(e){
					return this.r*=e.r,this.g*=e.g,this.b*=e.b,this
				}multiplyScalar(e){
					return this.r*=e,this.g*=e,this.b*=e,this
				}lerp(e,t){
					return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this
				}lerpColors(e,t,n){
					return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this
				}lerpHSL(e,t){
					this.getHSL(wn),e.getHSL(cs);
					const n=Xs(wn.h,cs.h,t),s=Xs(wn.s,cs.s,t),r=Xs(wn.l,cs.l,t);
					return this.setHSL(n,s,r),this
				}setFromVector3(e){
					return this.r=e.x,this.g=e.y,this.b=e.z,this
				}applyMatrix3(e){
					const t=this.r,n=this.g,s=this.b,r=e.elements;
					return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this
				}equals(e){
					return e.r===this.r&&e.g===this.g&&e.b===this.b
				}fromArray(e,t=0){
					return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this
				}toArray(e=[],t=0){
					return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e
				}fromBufferAttribute(e,t){
					return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this
				}toJSON(){
					return this.getHex()
				}*[Symbol.iterator](){
					yield this.r,yield this.g,yield this.b
				}
			}const gt=new Ze;
			Ze.NAMES=fc;
			let Xl=0;
			class Os extends Jn{
				constructor(){
					super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=gi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sr,this.blendDst=Mr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0
				}get alphaTest(){
					return this._alphaTest
				}set alphaTest(e){
					this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e
				}onBeforeRender(){}
				onBeforeCompile(){}
				customProgramCacheKey(){
					return this.onBeforeCompile.toString()
				}setValues(e){
					if(e!==void 0)for(const t in e){
						const n=e[t];
						if(n===void 0){
							De(`Material: parameter '${t}' has value of undefined.`);
							continue
						}const s=this[t];
						if(s===void 0){
							De(`Material: '${t}' is not a property of THREE.${this.type}.`);
							continue
						}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n
					}
				}toJSON(e){
					const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});
					const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};
					n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),
						this.color&&this.color.isColor&&(n.color=this.color.getHex()),
						this.roughness!==void 0&&(n.roughness=this.roughness),
						this.metalness!==void 0&&(n.metalness=this.metalness),
						this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),
						this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),
						this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),
						this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),
						this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),
						this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),
						this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),
						this.shininess!==void 0&&(n.shininess=this.shininess),
						this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),
						this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),
						this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),
						this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),
						this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,
						n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),
						this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),
						this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),
						this.dispersion!==void 0&&(n.dispersion=this.dispersion),
						this.iridescence!==void 0&&(n.iridescence=this.iridescence),
						this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),
						this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),
						this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),
						this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),
						this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),
						this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),
						this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),
						this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),
						this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,
						n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,
						n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,
						n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,
						n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),
						this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,
						n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),
						this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),
						this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),
						this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),
						this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),
						this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),
						this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),
						this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),
						this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),
						this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),
						this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),
						this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),
						this.transmission!==void 0&&(n.transmission=this.transmission),
						this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),
						this.thickness!==void 0&&(n.thickness=this.thickness),
						this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),
						this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),
						this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),
						this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),
						this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),
						this.blending!==gi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),
						this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),
						this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sr&&(n.blendSrc=this.blendSrc),
						this.blendDst!==Mr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),
						this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),
						this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),
						this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),
						this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),
						this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),
						this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),
						this.stencilFunc!==ka&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),
						this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(n.stencilFail=this.stencilFail),
						this.stencilZFail!==ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(n.stencilZPass=this.stencilZPass),
						this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),
						this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),
						this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),
						this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),
						this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),
						this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),
						this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),
						this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),
						this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),
						this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),
						this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),
						this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),
						this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),
						this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),
					Object.keys(this.userData).length>0&&(n.userData=this.userData);
					function s(r){
						const o=[];
						for(const a in r){
							const h=r[a];
							delete h.metadata,o.push(h)
						}return o
					}if(t){
						const r=s(e.textures),o=s(e.images);
						r.length>0&&(n.textures=r),o.length>0&&(n.images=o)
					}return n
				}clone(){
					return new this.constructor().copy(this)
				}copy(e){
					this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;
					const t=e.clippingPlanes;
					let n=null;
					if(t!==null){
						const s=t.length;
						n=new Array(s);
						for(let r=0;r!==s;++r)n[r]=t[r].clone()
					}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this
				}dispose(){
					this.dispatchEvent({type:"dispose"})
				}set needsUpdate(e){
					e===!0&&this.version++
				}
			}class Nn extends Os{
				constructor(e){
					super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)
				}copy(e){
					return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this
				}
			}const ht=new N,ls=new Ne;
			let ql=0;
			class sn{
				constructor(e,t,n=!1){
					if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
					this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ql++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wa,this.updateRanges=[],this.gpuType=_n,this.version=0
				}onUploadCallback(){}
				set needsUpdate(e){
					e===!0&&this.version++
				}setUsage(e){
					return this.usage=e,this
				}addUpdateRange(e,t){
					this.updateRanges.push({start:e,count:t})
				}clearUpdateRanges(){
					this.updateRanges.length=0
				}copy(e){
					return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this
				}copyAt(e,t,n){
					e*=this.itemSize,n*=t.itemSize;
					for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];
					return this
				}copyArray(e){
					return this.array.set(e),this
				}applyMatrix3(e){
					if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ls.fromBufferAttribute(this,t),ls.applyMatrix3(e),this.setXY(t,ls.x,ls.y);
					else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);
					return this
				}applyMatrix4(e){
					for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);
					return this
				}applyNormalMatrix(e){
					for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);
					return this
				}transformDirection(e){
					for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);
					return this
				}set(e,t=0){
					return this.array.set(e,t),this
				}getComponent(e,t){
					let n=this.array[e*this.itemSize+t];
					return this.normalized&&(n=Ci(n,this.array)),n
				}setComponent(e,t,n){
					return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this
				}getX(e){
					let t=this.array[e*this.itemSize];
					return this.normalized&&(t=Ci(t,this.array)),t
				}setX(e,t){
					return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this
				}getY(e){
					let t=this.array[e*this.itemSize+1];
					return this.normalized&&(t=Ci(t,this.array)),t
				}setY(e,t){
					return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this
				}getZ(e){
					let t=this.array[e*this.itemSize+2];
					return this.normalized&&(t=Ci(t,this.array)),t
				}setZ(e,t){
					return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this
				}getW(e){
					let t=this.array[e*this.itemSize+3];
					return this.normalized&&(t=Ci(t,this.array)),t
				}setW(e,t){
					return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this
				}setXY(e,t,n){
					return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this
				}setXYZ(e,t,n,s){
					return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this
				}setXYZW(e,t,n,s,r){
					return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this
				}onUpload(e){
					return this.onUploadCallback=e,this
				}clone(){
					return new this.constructor(this.array,this.itemSize).copy(this)
				}toJSON(){
					const e={
						itemSize:this.itemSize,
						type:this.array.constructor.name,
						array:Array.from(this.array),
						normalized:this.normalized
					};
					return this.name!==""&&(e.name=this.name),this.usage!==Wa&&(e.usage=this.usage),e
				}
			}class dc extends sn{
				constructor(e,t,n){super(new Uint16Array(e),t,n)}
			}class pc extends sn{
				constructor(e,t,n){super(new Uint32Array(e),t,n)}
			}class rn extends sn{
				constructor(e,t,n){super(new Float32Array(e),t,n)}
			}let Yl=0;
			const Ot=new ut,hr=new Ut,hi=new N,Dt=new Zi,Ii=new Zi,mt=new N;
			class Mn extends Jn{
				constructor(){
					super(),
					this.isBufferGeometry=!0,
					Object.defineProperty(this,"id",{value:Yl++}),
					this.uuid=Ki(),
					this.name="",
					this.type="BufferGeometry",
					this.index=null,
					this.indirect=null,
					this.attributes={},
					this.morphAttributes={},
					this.morphTargetsRelative=!1,
					this.groups=[],this.boundingBox=null,this.boundingSphere=null,
					this.drawRange={start:0,count:1/0},this.userData={}
				}getIndex(){
					return this.index
				}setIndex(e){
					return Array.isArray(e)?this.index=new(hc(e)?pc:dc)(e,1):this.index=e,this
				}setIndirect(e){
					return this.indirect=e,this
				}getIndirect(){
					return this.indirect
				}getAttribute(e){
					return this.attributes[e]
				}setAttribute(e,t){
					return this.attributes[e]=t,this
				}deleteAttribute(e){
					return delete this.attributes[e],this
				}hasAttribute(e){
					return this.attributes[e]!==void 0
				}addGroup(e,t,n=0){
					this.groups.push({start:e,count:t,materialIndex:n})
				}clearGroups(){
					this.groups=[]
				}setDrawRange(e,t){
					this.drawRange.start=e,this.drawRange.count=t
				}applyMatrix4(e){
					const t=this.attributes.position;
					t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);
					const n=this.attributes.normal;
					if(n!==void 0){
						const r=new Ie().getNormalMatrix(e);
						n.applyNormalMatrix(r),n.needsUpdate=!0
					}const s=this.attributes.tangent;
					return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this
				}applyQuaternion(e){
					return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this
				}rotateX(e){
					return Ot.makeRotationX(e),this.applyMatrix4(Ot),this
				}rotateY(e){
					return Ot.makeRotationY(e),this.applyMatrix4(Ot),this
				}rotateZ(e){
					return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this
				}translate(e,t,n){
					return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this
				}scale(e,t,n){
					return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this
				}lookAt(e){
					return hr.lookAt(e),hr.updateMatrix(),this.applyMatrix4(hr.matrix),this
				}center(){
					return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this
				}setFromPoints(e){
					const t=this.getAttribute("position");
					if(t===void 0){
						const n=[];
						for(let s=0,r=e.length;s<r;s++){
							const o=e[s];
							n.push(o.x,o.y,o.z||0)
						}this.setAttribute("position",new rn(n,3))
					}else{
						const n=Math.min(e.length,t.count);
						for(let s=0;s<n;s++){
							const r=e[s];
							t.setXYZ(s,r.x,r.y,r.z||0)
						}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0
					}return this
				}computeBoundingBox(){
					this.boundingBox===null&&(this.boundingBox=new Zi);
					const e=this.attributes.position,t=this.morphAttributes.position;
					if(e&&e.isGLBufferAttribute){
						ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));
						return
					}if(e!==void 0){
						if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){
							const r=t[n];
							Dt.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))
						}
					}else this.boundingBox.makeEmpty();
					(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)
				}computeBoundingSphere(){
					this.boundingSphere===null&&(this.boundingSphere=new Ma);
					const e=this.attributes.position,t=this.morphAttributes.position;
					if(e&&e.isGLBufferAttribute){
						ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);
						return
					}if(e){
						const n=this.boundingSphere.center;
						if(Dt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){
							const a=t[r];Ii.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Dt.min,Ii.min),Dt.expandByPoint(mt),mt.addVectors(Dt.max,Ii.max),Dt.expandByPoint(mt)):(Dt.expandByPoint(Ii.min),Dt.expandByPoint(Ii.max))
						}Dt.getCenter(n);
						let s=0;
						for(let r=0,o=e.count;r<o;r++)mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(mt));
						if(t)for(let r=0,o=t.length;r<o;r++){
							const a=t[r],h=this.morphTargetsRelative;
							for(let c=0,l=a.count;c<l;c++)mt.fromBufferAttribute(a,c),h&&(hi.fromBufferAttribute(e,c),mt.add(hi)),s=Math.max(s,n.distanceToSquared(mt))
						}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)
					}
				}computeTangents(){
					const e=this.index,t=this.attributes;
					if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){
						ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
						return
					}const n=t.position,s=t.normal,r=t.uv;
					this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));
					const o=this.getAttribute("tangent"),a=[],h=[];for(let z=0;z<n.count;z++)a[z]=new N,h[z]=new N;
					const c=new N,l=new N,u=new N,d=new Ne,p=new Ne,g=new Ne,v=new N,m=new N;
					function f(z,S,b){
						c.fromBufferAttribute(n,z),l.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,z),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),l.sub(c),u.sub(c),p.sub(d),g.sub(d);
						const P=1/(p.x*g.y-g.x*p.y);
						isFinite(P)&&(v.copy(l).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(l,-g.x).multiplyScalar(P),a[z].add(v),a[S].add(v),a[b].add(v),h[z].add(m),h[S].add(m),h[b].add(m))
					}let T=this.groups;
					T.length===0&&(T=[{start:0,count:e.count}]);
					for(let z=0,S=T.length;z<S;++z){
						const b=T[z],P=b.start,B=b.count;
						for(let H=P,W=P+B;H<W;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))
					}const E=new N,A=new N,C=new N,y=new N;
					function D(z){
						C.fromBufferAttribute(s,z),y.copy(C);
						const S=a[z];E.copy(S),E.sub(C.multiplyScalar(C.dot(S))).normalize(),A.crossVectors(y,S);
						const P=A.dot(h[z])<0?-1:1;
						o.setXYZW(z,E.x,E.y,E.z,P)
					}for(let z=0,S=T.length;z<S;++z){
						const b=T[z],P=b.start,B=b.count;
						for(let H=P,W=P+B;H<W;H+=3)D(e.getX(H+0)),D(e.getX(H+1)),D(e.getX(H+2))
					}
					
				}computeVertexNormals(){
					const e=this.index,t=this.getAttribute("position");
					if(t!==void 0){
						let n=this.getAttribute("normal");
						if(n===void 0)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);
						else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);
						const s=new N,r=new N,o=new N,a=new N,h=new N,c=new N,l=new N,u=new N;
						if(e)for(let d=0,p=e.count;d<p;d+=3){
							const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);
							s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),l.subVectors(o,r),u.subVectors(s,r),l.cross(u),a.fromBufferAttribute(n,g),h.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(l),h.add(l),c.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,h.x,h.y,h.z),n.setXYZ(m,c.x,c.y,c.z)
						}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),l.subVectors(o,r),u.subVectors(s,r),l.cross(u),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);
						this.normalizeNormals(),n.needsUpdate=!0
					}
				}normalizeNormals(){
					const e=this.attributes.normal;
					for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)
				}toNonIndexed(){
					function e(a,h){
						const c=a.array,l=a.itemSize,u=a.normalized,d=new c.constructor(h.length*l);
						let p=0,g=0;
						for(let v=0,m=h.length;v<m;v++){
							a.isInterleavedBufferAttribute?p=h[v]*a.data.stride+a.offset:p=h[v]*l;
							for(let f=0;f<l;f++)d[g++]=c[p++]
						}return new sn(d,l,u)
					}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;
					const t=new Mn,n=this.index.array,s=this.attributes;
					for(const a in s){
						const h=s[a],c=e(h,n);t.setAttribute(a,c)
					}const r=this.morphAttributes;
					for(const a in r){
						const h=[],c=r[a];
						for(let l=0,u=c.length;l<u;l++){
							const d=c[l],p=e(d,n);
							h.push(p)
						}t.morphAttributes[a]=h
					}t.morphTargetsRelative=this.morphTargetsRelative;
					const o=this.groups;for(let a=0,h=o.length;a<h;a++){
						const c=o[a];
						t.addGroup(c.start,c.count,c.materialIndex)
					}return t
				}toJSON(){
					const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};
					if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){
						const h=this.parameters;
						for(const c in h)h[c]!==void 0&&(e[c]=h[c]);
						return e
					}e.data={attributes:{}};
					const t=this.index;
					t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});
					const n=this.attributes;
					for(const h in n){
						const c=n[h];
						e.data.attributes[h]=c.toJSON(e.data)
					}const s={};
					let r=!1;
					for(const h in this.morphAttributes){
						const c=this.morphAttributes[h],l=[];
						for(let u=0,d=c.length;u<d;u++){
							const p=c[u];l.push(p.toJSON(e.data))
						}l.length>0&&(s[h]=l,r=!0)
					}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);
					const o=this.groups;
					o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));
					const a=this.boundingSphere;
					return a!==null&&(e.data.boundingSphere=a.toJSON()),e
				}clone(){
					return new this.constructor().copy(this)
				}copy(e){
					this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;
					const t={};
					this.name=e.name;
					const n=e.index;
					n!==null&&this.setIndex(n.clone());
					const s=e.attributes;
					for(const c in s){
						const l=s[c];
						this.setAttribute(c,l.clone(t))
					}const r=e.morphAttributes;
					for(const c in r){
						const l=[],u=r[c];
						for(let d=0,p=u.length;d<p;d++)l.push(u[d].clone(t));
						this.morphAttributes[c]=l
					}this.morphTargetsRelative=e.morphTargetsRelative;
					const o=e.groups;
					for(let c=0,l=o.length;c<l;c++){
						const u=o[c];
						this.addGroup(u.start,u.count,u.materialIndex)
					}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());
					const h=e.boundingSphere;
					return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this
				}dispose(){
					this.dispatchEvent({type:"dispose"})
				}
			}const so=new ut,Hn=new Ea,hs=new Ma,ro=new N,us=new N,fs=new N,ds=new N,ur=new N,ps=new N,ao=new N,ms=new N;
			class Nt extends Ut{
				constructor(e=new Mn,t=new Nn){
					super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()
				}copy(e,t){
					return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this
				}updateMorphTargets(){
					const t=this.geometry.morphAttributes,n=Object.keys(t);
					if(n.length>0){
						const s=t[n[0]];
						if(s!==void 0){
							this.morphTargetInfluences=[],this.morphTargetDictionary={};
							for(let r=0,o=s.length;r<o;r++){
								const a=s[r].name||String(r);
								this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r
							}
						}
					}
				}
				getVertexPosition(e,t){
					const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;
					t.fromBufferAttribute(s,e);
					const a=this.morphTargetInfluences;
					if(r&&a){ps.set(0,0,0);
						for(let h=0,c=r.length;h<c;h++){
							const l=a[h],u=r[h];
							l!==0&&(ur.fromBufferAttribute(u,e),o?ps.addScaledVector(ur,l):ps.addScaledVector(ur.sub(t),l))
						}t.add(ps)
					}return t
				}raycast(e,t){
					const n=this.geometry,s=this.material,r=this.matrixWorld;
					s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(r),Hn.copy(e.ray).recast(e.near),!(hs.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(hs,ro)===null||Hn.origin.distanceToSquared(ro)>(e.far-e.near)**2))&&(so.copy(r).invert(),Hn.copy(e.ray).applyMatrix4(so),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hn)))
				}_computeIntersections(e,t,n){
					let s;const r=this.geometry,o=this.material,a=r.index,h=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;
					if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){
						const m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));
						for(let A=T,C=E;A<C;A+=3){
							const y=a.getX(A),D=a.getX(A+1),z=a.getX(A+2);
							s=_s(this,f,e,n,c,l,u,y,D,z),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))
						}
					}else{
						const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);
						for(let m=g,f=v;m<f;m+=3){
							const T=a.getX(m),E=a.getX(m+1),A=a.getX(m+2);
							s=_s(this,o,e,n,c,l,u,T,E,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))
						}
					}else if(h!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){
						const m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(h.count,Math.min(m.start+m.count,p.start+p.count));
						for(let A=T,C=E;A<C;A+=3){
							const y=A,D=A+1,z=A+2;
							s=_s(this,f,e,n,c,l,u,y,D,z),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))
						}
					}else{
						const g=Math.max(0,p.start),v=Math.min(h.count,p.start+p.count);
						for(let m=g,f=v;m<f;m+=3){
							const T=m,E=m+1,A=m+2;
							s=_s(this,o,e,n,c,l,u,T,E,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))
						}
					}
				}
			}function jl(i,e,t,n,s,r,o,a){
				let h;
				if(e.side===wt?h=n.intersectTriangle(o,r,s,!0,a):h=n.intersectTriangle(s,r,o,e.side===Fn,a),h===null)return null;
				ms.copy(a),ms.applyMatrix4(i.matrixWorld);
				const c=t.ray.origin.distanceTo(ms);
				return c<t.near||c>t.far?null:{distance:c,point:ms.clone(),object:i}
			}function _s(i,e,t,n,s,r,o,a,h,c){
				i.getVertexPosition(a,us),i.getVertexPosition(h,fs),i.getVertexPosition(c,ds);
				const l=jl(i,e,t,n,us,fs,ds,ao);
				if(l){
					const u=new N;
					jt.getBarycoord(ao,us,fs,ds,u),s&&(l.uv=jt.getInterpolatedAttribute(s,a,h,c,u,new Ne)),r&&(l.uv1=jt.getInterpolatedAttribute(r,a,h,c,u,new Ne)),o&&(l.normal=jt.getInterpolatedAttribute(o,a,h,c,u,new N),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));
					const d={a,b:h,c,normal:new N,materialIndex:0};
					jt.getNormal(us,fs,ds,d.normal),l.face=d,l.barycoord=u
				}return l
			}class Ai extends Mn{
				constructor(e=1,t=1,n=1,s=1,r=1,o=1){
					super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};
					const a=this;
					s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);
					const h=[],c=[],l=[],u=[];
					let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(l,3)),this.setAttribute("uv",new rn(u,2));
					function g(v,m,f,T,E,A,C,y,D,z,S){
						const b=A/D,P=C/z,B=A/2,H=C/2,W=y/2,j=D+1,q=z+1;
						let ne=0,k=0;
						const te=new N;
						for(let re=0;re<q;re++){
							const Se=re*P-H;
							for(let ke=0;ke<j;ke++){
								const Xe=ke*b-B;
								te[v]=Xe*T,te[m]=Se*E,te[f]=W,c.push(te.x,te.y,te.z),te[v]=0,te[m]=0,te[f]=y>0?1:-1,l.push(te.x,te.y,te.z),u.push(ke/D),u.push(1-re/z),ne+=1
							}
						}for(let re=0;re<z;re++)for(let Se=0;Se<D;Se++){
							const ke=d+Se+j*re,Xe=d+Se+j*(re+1),Je=d+(Se+1)+j*(re+1),Qe=d+(Se+1)+j*re;
							h.push(ke,Xe,Qe),h.push(Xe,Je,Qe),k+=6
						}a.addGroup(p,k,S),p+=k,d+=ne
					}
				}copy(e){
					return super.copy(e),this.parameters=Object.assign({},e.parameters),this
				}static fromJSON(e){
					return new Ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)
				}
			}function yi(i){
				const e={};
				for(const t in i){
					e[t]={};
					for(const n in i[t]){
						const s=i[t][n];
						s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s
					}
				}return e
			}function St(i){
				const e={};
				for(let t=0;t<i.length;t++){
					const n=yi(i[t]);
					for(const s in n)e[s]=n[s]
				}return e
			}function Kl(i){
				const e=[];
				for(let t=0;t<i.length;t++)e.push(i[t].clone());
				return e
			}function mc(i){
				const e=i.getRenderTarget();
				return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace
			}const Zl={clone:yi,merge:St};
			var $l=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Sn extends Os{
	constructor(e){
		super(),
		this.isShaderMaterial=!0,
		this.type="ShaderMaterial",
		this.defines={},
		this.uniforms={},
		this.uniformsGroups=[],
		this.vertexShader=$l,
		this.fragmentShader=Jl,
		this.linewidth=1,
		this.wireframe=!1,
		this.wireframeLinewidth=1,
		this.fog=!1,
		this.lights=!1,
		this.clipping=!1,
		this.forceSinglePass=!0,
		this.extensions={clipCullDistance:!1,multiDraw:!1},
		this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},
		this.index0AttributeName=void 0,
		this.uniformsNeedUpdate=!1,
		this.glslVersion=null,
		e!==void 0&&this.setValues(e)
	}copy(e){
		return super.copy(e),
		this.fragmentShader=e.fragmentShader,
		this.vertexShader=e.vertexShader,
		this.uniforms=yi(e.uniforms),
		this.uniformsGroups=Kl(e.uniformsGroups),
		this.defines=Object.assign({},e.defines),
		this.wireframe=e.wireframe,
		this.wireframeLinewidth=e.wireframeLinewidth,
		this.fog=e.fog,this.lights=e.lights,
		this.clipping=e.clipping,
		this.extensions=Object.assign({},e.extensions),
		this.glslVersion=e.glslVersion,this
	}toJSON(e){
		const t=super.toJSON(e);
		t.glslVersion=this.glslVersion,t.uniforms={};
		for(const s in this.uniforms){
			const o=this.uniforms[s].value;
			o&&o.isTexture?t.uniforms[s]={
				type:"t",value:o.toJSON(e).uuid
			}:o&&o.isColor?t.uniforms[s]={
				type:"c",value:o.getHex()
			}:o&&o.isVector2?t.uniforms[s]={
				type:"v2",value:o.toArray()
			}:o&&o.isVector3?t.uniforms[s]={
				type:"v3",value:o.toArray()
			}:o&&o.isVector4?t.uniforms[s]={
				type:"v4",value:o.toArray()
			}:o&&o.isMatrix3?t.uniforms[s]={
				type:"m3",value:o.toArray()
			}:o&&o.isMatrix4?t.uniforms[s]={
				type:"m4",value:o.toArray()
			}:t.uniforms[s]={value:o}
		} Object.keys(this.defines).length>0&&(t.defines=this.defines),
		t.vertexShader=this.vertexShader,
		t.fragmentShader=this.fragmentShader,
		t.lights=this.lights,
		t.clipping=this.clipping;
		const n={};
		for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);
		return Object.keys(n).length>0&&(t.extensions=n),t
	}
}class _c extends Ut{
	constructor(){
		super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,
		this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,
		this.coordinateSystem=nn,this._reversedDepth=!1
	}get reversedDepth(){
		return this._reversedDepth
	}copy(e,t){
		return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this
	}getWorldDirection(e){
		return super.getWorldDirection(e).negate()
	}updateMatrixWorld(e){
		super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()
	}updateWorldMatrix(e,t){
		super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()
	}clone(){
		return new this.constructor().copy(this)
	}
}const Rn=new N,oo=new Ne,co=new Ne;
class Bt extends _c{
	constructor(e=50,t=1,n=.1,s=2e3){
		super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()
	}copy(e,t){
		return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this
	}setFocalLength(e){
		const t=.5*this.getFilmHeight()/e;
		this.fov=ca*2*Math.atan(t),this.updateProjectionMatrix()
	}getFocalLength(){
		const e=Math.tan(ws*.5*this.fov);
		return .5*this.getFilmHeight()/e
	}getEffectiveFOV(){
		return ca*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)
	}getFilmWidth(){
		return this.filmGauge*Math.min(this.aspect,1)
	}getFilmHeight(){
		return this.filmGauge/Math.max(this.aspect,1)
	}getViewBounds(e,t,n){
		Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,oo,co),t.subVectors(co,oo)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ws*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/h,t-=o.offsetY*n/c,s*=o.width/h,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ui=-90,fi=1;
class Ql extends Ut{
	constructor(e,t,n){
		super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;
		const s=new Bt(ui,fi,e,t);
		s.layers=this.layers,this.add(s);
		const r=new Bt(ui,fi,e,t);
		r.layers=this.layers,this.add(r);
		const o=new Bt(ui,fi,e,t);
		o.layers=this.layers,this.add(o);
		const a=new Bt(ui,fi,e,t);
		a.layers=this.layers,this.add(a);
		const h=new Bt(ui,fi,e,t);
		h.layers=this.layers,this.add(h);
		const c=new Bt(ui,fi,e,t);
		c.layers=this.layers,this.add(c)
	}updateCoordinateSystem(){
		const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,h]=t;
		for(const c of t)this.remove(c);
		if(e===nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);
		else if(e===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);
		else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);
		for(const c of t)this.add(c),c.updateMatrixWorld()
	}update(e,t){
		this.parent===null&&this.updateMatrixWorld();
		const{renderTarget:n,activeMipmapLevel:s}=this;
		this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());
		const[r,o,a,h,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;
		e.xr.enabled=!1;
		const v=n.texture.generateMipmaps;
		n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,h),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,l),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0
	}
}class xc extends vt{
	constructor(e=[],t=Si,n,s,r,o,a,h,c,l){
		super(e,t,n,s,r,o,a,h,c,l),this.isCubeTexture=!0,this.flipY=!1
	}get images(){
		return this.image
	}set images(e){
		this.image=e
	}
}class eh extends $n{
	constructor(e=1,t={}){
		super(e,e,t),this.isWebGLCubeRenderTarget=!0;
		const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];
		this.texture=new xc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0
	}fromEquirectangularTexture(e,t){
		this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;
		const n={
			uniforms:{tEquirect:{value:null}},vertexShader:`

			varying vec3 vWorldDirection;

			vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

				return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

			}

			void main() {

				vWorldDirection = transformDirection( position, modelMatrix );

				#include <begin_vertex>
				#include <project_vertex>

			}
		`,fragmentShader:`

			uniform sampler2D tEquirect;

			varying vec3 vWorldDirection;

			#include <common>

			void main() {

				vec3 direction = normalize( vWorldDirection );

				vec2 sampleUV = equirectUv( direction );

				gl_FragColor = texture2D( tEquirect, sampleUV );

			}
		`},
		s=new Ai(5,5,5),
		r=new Sn({
			name:"CubemapFromEquirect",
			uniforms:yi(n.uniforms),
			vertexShader:n.vertexShader,
			fragmentShader:n.fragmentShader,
			side:wt,blending:xn
		});
		r.uniforms.tEquirect.value=t;
		const o=new Nt(s,r),a=t.minFilter;
		return t.minFilter===Yn&&(t.minFilter=zt),new Ql(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this
	}clear(e,t=!0,n=!0,s=!0){
		const r=e.getRenderTarget();
		for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);
		e.setRenderTarget(r)
	}
}class xs extends Ut{
	constructor(){
		super(),this.isGroup=!0,this.type="Group"
	}
}const th={type:"move"};
class fr{
	constructor(){
		this._targetRay=null,this._grip=null,this._hand=null
	}getHandSpace(){
		return this._hand===null&&(
			this._hand=new xs,
			this._hand.matrixAutoUpdate=!1,
			this._hand.visible=!1,
			this._hand.joints={},
			this._hand.inputState={pinching:!1}
		),this._hand
	}getTargetRaySpace(){
		return this._targetRay===null&&(
			this._targetRay=new xs,
			this._targetRay.matrixAutoUpdate=!1,
			this._targetRay.visible=!1,
			this._targetRay.hasLinearVelocity=!1,
			this._targetRay.linearVelocity=new N,
			this._targetRay.hasAngularVelocity=!1,
			this._targetRay.angularVelocity=new N
		),this._targetRay
	}getGripSpace(){
		return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip
	}dispatchEvent(e){
		return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this
	}connect(e){
		if(e&&e.hand){
			const t=this._hand;
			if(t)for(const n of e.hand.values())this._getHandJoint(t,n)
		}return this.dispatchEvent({type:"connected",data:e}),this
	}disconnect(e){
		return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this
	}update(e,t,n){
		let s=null,r=null,o=null;
		const a=this._targetRay,h=this._grip,c=this._hand;
		if(e&&t.session.visibilityState!=="visible-blurred"){
			if(c&&e.hand){
				o=!0;
				for(const v of e.hand.values()){
					const m=t.getJointPose(v,n),f=this._getHandJoint(c,v);
					m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null
				}const l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=l.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))
			}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));
			a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(th)))
		}return a!==null&&(a.visible=s!==null),h!==null&&(h.visible=r!==null),c!==null&&(c.visible=o!==null),this
	}_getHandJoint(e,t){
		if(e.joints[t.jointName]===void 0){
			const n=new xs;
			n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)
		}return e.joints[t.jointName]
	}
}class nh extends Ut{
	constructor(){
		super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))
	}copy(e,t){
		return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this
	}toJSON(e){
		const t=super.toJSON(e);
		return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t
	}
}class ih extends vt{
	constructor(e=null,t=1,n=1,s,r,o,a,h,c=It,l=It,u,d){
		super(null,o,a,h,c,l,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1
	}
}const dr=new N,sh=new N,rh=new Ie;
class Pn{
	constructor(e=new N(1,0,0),t=0){
		this.isPlane=!0,this.normal=e,this.constant=t
	}set(e,t){
		return this.normal.copy(e),this.constant=t,this
	}setComponents(e,t,n,s){
		return this.normal.set(e,t,n),this.constant=s,this
	}setFromNormalAndCoplanarPoint(e,t){
		return this.normal.copy(e),this.constant=-t.dot(this.normal),this
	}setFromCoplanarPoints(e,t,n){
		const s=dr.subVectors(n,t).cross(sh.subVectors(e,t)).normalize();
		return this.setFromNormalAndCoplanarPoint(s,e),this
	}copy(e){
		return this.normal.copy(e.normal),this.constant=e.constant,this
	}normalize(){
		const e=1/this.normal.length();
		return this.normal.multiplyScalar(e),this.constant*=e,this
	}negate(){
		return this.constant*=-1,this.normal.negate(),this
	}distanceToPoint(e){
		return this.normal.dot(e)+this.constant
	}distanceToSphere(e){
		return this.distanceToPoint(e.center)-e.radius
	}projectPoint(e,t){
		return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))
	}intersectLine(e,t){
		const n=e.delta(dr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rh.getNormalMatrix(e),s=this.coplanarPoint(dr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Ma,ah=new Ne(.5,.5),gs=new N;
class gc{
	constructor(e=new Pn,t=new Pn,n=new Pn,s=new Pn,r=new Pn,o=new Pn){
		this.planes=[e,t,n,s,r,o]
	}set(e,t,n,s,r,o){
		const a=this.planes;
		return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this
	}copy(e){
		const t=this.planes;
		for(let n=0;n<6;n++)t[n].copy(e.planes[n]);
		return this
	}setFromProjectionMatrix(e,t=nn,n=!1){
		const s=this.planes,r=e.elements,o=r[0],a=r[1],h=r[2],c=r[3],l=r[4],u=r[5],d=r[6],p=r[7],g=r[8],v=r[9],m=r[10],f=r[11],T=r[12],E=r[13],A=r[14],C=r[15];
		if(s[0].setComponents(c-o,p-l,f-g,C-T).normalize(),s[1].setComponents(c+o,p+l,f+g,C+T).normalize(),s[2].setComponents(c+a,p+u,f+v,C+E).normalize(),s[3].setComponents(c-a,p-u,f-v,C-E).normalize(),n)s[4].setComponents(h,d,m,A).normalize(),s[5].setComponents(c-h,p-d,f-m,C-A).normalize();
		else if(s[4].setComponents(c-h,p-d,f-m,C-A).normalize(),t===nn)s[5].setComponents(c+h,p+d,f+m,C+A).normalize();
		else if(t===Ls)s[5].setComponents(h,d,m,A).normalize();
		else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);
		return this
	}intersectsObject(e){
		if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
		else{
			const t=e.geometry;
			t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)
		}return this.intersectsSphere(kn)
	}intersectsSprite(e){
		kn.center.set(0,0,0);
		const t=ah.distanceTo(e.center);
		return kn.radius=.7071067811865476+t,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)
	}intersectsSphere(e){
		const t=this.planes,n=e.center,s=-e.radius;
		for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;
		return!0
	}intersectsBox(e){
		const t=this.planes;
		for(let n=0;n<6;n++){
			const s=t[n];
			if(gs.x=s.normal.x>0?e.max.x:e.min.x,gs.y=s.normal.y>0?e.max.y:e.min.y,gs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gs)<0)return!1
		}return!0
	}containsPoint(e){
		const t=this.planes;
		for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;
		return!0
	}clone(){
		return new this.constructor().copy(this)
	}
}class vc extends vt{
	constructor(e,t,n=Kn,s,r,o,a=It,h=It,c,l=Vi,u=1){
		if(l!==Vi&&l!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
		const d={width:e,height:t,depth:u};
		super(d,s,r,o,a,h,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null
	}copy(e){
		return super.copy(e),this.source=new Sa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this
	}toJSON(e){
		const t=super.toJSON(e);
		return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t
	}
}class bc extends vt{
	constructor(e=null){
		super(),this.sourceTexture=e,this.isExternalTexture=!0
	}copy(e){
		return super.copy(e),this.sourceTexture=e.sourceTexture,this
	}
}class Bs extends Mn{
	constructor(e=1,t=1,n=1,s=1){
		super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};
		const r=e/2,o=t/2,a=Math.floor(n),h=Math.floor(s),c=a+1,l=h+1,u=e/a,d=t/h,p=[],g=[],v=[],m=[];
		for(let f=0;f<l;f++){
			const T=f*d-o;
			for(let E=0;E<c;E++){
				const A=E*u-r;g.push(A,-T,0),v.push(0,0,1),m.push(E/a),m.push(1-f/h)
			}
		}for(let f=0;f<h;f++)for(let T=0;T<a;T++){
			const E=T+c*f,A=T+c*(f+1),C=T+1+c*(f+1),y=T+1+c*f;p.push(E,A,y),p.push(A,C,y)
		}this.setIndex(p),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(v,3)),this.setAttribute("uv",new rn(m,2))
	}copy(e){
		return super.copy(e),this.parameters=Object.assign({},e.parameters),this
	}static fromJSON(e){
		return new Bs(e.width,e.height,e.widthSegments,e.heightSegments)
	}
}class zs extends Mn{
	constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){
		super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));
		const h=Math.min(o+a,Math.PI);
		let c=0;const l=[],u=new N,d=new N,p=[],g=[],v=[],m=[];
		for(let f=0;f<=n;f++){
			const T=[],E=f/n;let A=0;
			f===0&&o===0?A=.5/t:f===n&&h===Math.PI&&(A=-.5/t);
			for(let C=0;C<=t;C++){
				const y=C/t;
				u.x=-e*Math.cos(s+y*r)*Math.sin(o+E*a),u.y=e*Math.cos(o+E*a),u.z=e*Math.sin(s+y*r)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(y+A,1-E),T.push(c++)
			}l.push(T)
		}for(let f=0;f<n;f++)for(let T=0;T<t;T++){
			const E=l[f][T+1],A=l[f][T],C=l[f+1][T],y=l[f+1][T+1];
			(f!==0||o>0)&&p.push(E,A,y),(f!==n-1||h<Math.PI)&&p.push(A,C,y)
		}this.setIndex(p),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(v,3)),this.setAttribute("uv",new rn(m,2))
	}copy(e){
		return super.copy(e),this.parameters=Object.assign({},e.parameters),this
	}static fromJSON(e){
		return new zs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)
	}
}class oh extends Os{
	constructor(e){
		super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)
	}copy(e){
		return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this
	}
}class ch extends Os{
	constructor(e){
		super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)
	}copy(e){
		return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this
	}
}const pr={
	enabled:!1,files:{},
	add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},
	get:function(i){if(this.enabled!==!1)return this.files[i]},
	remove:function(i){delete this.files[i]},
	clear:function(){this.files={}}
};
class lh{
	constructor(e,t,n){
		const s=this;
		let r=!1,o=0,a=0,h;
		const c=[];
		this.onStart=void 0,this.onLoad=e,
		this.onProgress=t,this.onError=n,
		this._abortController=null,
		this.itemStart=function(l){
			a++,r===!1&&s.onStart!==void 0&&s.onStart(l,o,a),r=!0
		},this.itemEnd=function(l){
			o++,s.onProgress!==void 0&&s.onProgress(l,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())
		},this.itemError=function(l){
			s.onError!==void 0&&s.onError(l)
		},this.resolveURL=function(l){
			return h?h(l):l
		},this.setURLModifier=function(l){
			return h=l,this
		},this.addHandler=function(l,u){
			return c.push(l,u),this
		},this.removeHandler=function(l){
			const u=c.indexOf(l);
			return u!==-1&&c.splice(u,2),this
		},this.getHandler=function(l){
			for(let u=0,d=c.length;u<d;u+=2){
				const p=c[u],g=c[u+1];
				if(p.global&&(p.lastIndex=0),p.test(l))return g
			}return null
		},this.abort=function(){
			return this.abortController.abort(),this._abortController=null,this
		}
	}get abortController(){
		return this._abortController||(this._abortController=new AbortController),this._abortController
	}
}const hh=new lh;
class Ta{
	constructor(e){
		this.manager=e!==void 0?e:hh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}
	}load(){}
	loadAsync(e,t){
		const n=this;
		return new Promise(function(s,r){n.load(e,s,t,r)})
	}parse(){}
	setCrossOrigin(e){
		return this.crossOrigin=e,this
	}setWithCredentials(e){
		return this.withCredentials=e,this
	}setPath(e){
		return this.path=e,this
	}setResourcePath(e){
		return this.resourcePath=e,this
	}setRequestHeader(e){
		return this.requestHeader=e,this
	}abort(){
		return this
	}
}Ta.DEFAULT_MATERIAL_NAME="__DEFAULT";
const di=new WeakMap;
class uh extends Ta{
	constructor(e){
		super(e)
	}load(e,t,n,s){
		this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);
		const r=this,o=pr.get(`image:${e}`);
		if(o!==void 0){
			if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);
			else{
				let u=di.get(o);
				u===void 0&&(u=[],di.set(o,u)),u.push({onLoad:t,onError:s})
			}return o
		}const a=qi("img");
		function h(){
			l(),t&&t(this);
			const u=di.get(this)||[];
			for(let d=0;d<u.length;d++){
				const p=u[d];
				p.onLoad&&p.onLoad(this)
			}di.delete(this),r.manager.itemEnd(e)
		}function c(u){
			l(),s&&s(u),pr.remove(`image:${e}`);
			const d=di.get(this)||[];
			for(let p=0;p<d.length;p++){
				const g=d[p];
				g.onError&&g.onError(u)
			}di.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)
		}function l(){
			a.removeEventListener("load",h,!1),a.removeEventListener("error",c,!1)
		}return a.addEventListener("load",h,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),pr.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a
	}
}class fh extends Ta{
	constructor(e){
		super(e)
	}load(e,t,n,s){
		const r=new vt,o=new uh(this.manager);
		return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r
	}
}class dh extends _c{
	constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){
		super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()
	}copy(e,t){
		return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this
	}setViewOffset(e,t,n,s,r,o){
		this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()
	}clearViewOffset(){
		this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()
	}updateProjectionMatrix(){
		const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;
		let r=n-e,o=n+e,a=s+t,h=s-t;
		if(this.view!==null&&this.view.enabled){
			const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;
			r+=c*this.view.offsetX,o=r+c*this.view.width,a-=l*this.view.offsetY,h=a-l*this.view.height
		}this.projectionMatrix.makeOrthographic(r,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
	}toJSON(e){
		const t=super.toJSON(e);
		return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t
	}
}class ph extends Bt{
	constructor(e=[]){
		super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e
	}
}const lo=new ut;
class mh{
	constructor(e,t,n=0,s=1/0){
		this.ray=new Ea(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}
	}set(e,t){
		this.ray.set(e,t)
	}setFromCamera(e,t){
		t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)
	}setFromXRController(e){
		return lo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lo),this
	}intersectObject(e,t=!0,n=[]){
		return la(e,this,n,t),n.sort(ho),n
	}intersectObjects(e,t=!0,n=[]){
		for(let s=0,r=e.length;s<r;s++)la(e[s],this,n,t);
		return n.sort(ho),n
	}
}function ho(i,e){
	return i.distance-e.distance
}function la(i,e,t,n){
	let s=!0;
	if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){
		const r=i.children;
		for(let o=0,a=r.length;o<a;o++)la(r[o],e,t,!0)
	}
}class uo{
	constructor(e=1,t=0,n=0){
		this.radius=e,this.phi=t,this.theta=n
	}set(e,t,n){
		return this.radius=e,this.phi=t,this.theta=n,this
	}copy(e){
		return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this
	}makeSafe(){
		return this.phi=Oe(this.phi,1e-6,Math.PI-1e-6),this
	}setFromVector3(e){
		return this.setFromCartesianCoords(e.x,e.y,e.z)
	}setFromCartesianCoords(e,t,n){
		return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Oe(t/this.radius,-1,1))),this
	}clone(){
		return new this.constructor().copy(this)
	}
}class _h extends Jn{
	constructor(e,t=null){
		super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}
	}connect(e){
		if(e===void 0){
			De("Controls: connect() now requires an element.");
			return
		}this.domElement!==null&&this.disconnect(),this.domElement=e
	}disconnect(){}
	dispose(){}
	update(){}
}function fo(i,e,t,n){
	const s=xh(n);
	switch(t){
		case ac:return i*e;
		case cc:return i*e/s.components*s.byteLength;
		case xa:return i*e/s.components*s.byteLength;
		case ga:return i*e*2/s.components*s.byteLength;
		case va:return i*e*2/s.components*s.byteLength;
		case oc:return i*e*3/s.components*s.byteLength;
		case Zt:return i*e*4/s.components*s.byteLength;
		case ba:return i*e*4/s.components*s.byteLength;
		case Es:case ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;
		case Ts:case As:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;
		case Nr:case Or:return Math.max(i,16)*Math.max(e,8)/4;
		case Ur:case Fr:return Math.max(i,8)*Math.max(e,8)/2;
		case Br:case zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;
		case Gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;
		case Hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;
		case kr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;
		case Wr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;
		case Vr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;
		case Xr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;
		case qr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;
		case Yr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;
		case jr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;
		case Kr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;
		case Zr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;
		case $r:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;
		case Jr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;
		case Qr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;
		case ea:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;
		case ta:case na:case ia:return Math.ceil(i/4)*Math.ceil(e/4)*16;
		case sa:case ra:return Math.ceil(i/4)*Math.ceil(e/4)*8;
		case aa:case oa:return Math.ceil(i/4)*Math.ceil(e/4)*16
	}throw new Error(`Unable to determine texture byte length for ${t} format.`)
}function xh(i){
	switch(i){
		case vn:
		case nc:return{byteLength:1,components:1};
		case ki:
		case ic:
		case Ti:return{byteLength:2,components:1};
		case ma:
		case _a:return{byteLength:2,components:4};
		case Kn:
		case pa:
		case _n:return{byteLength:4,components:1};
		case sc:
		case rc:return{byteLength:4,components:3}
	}throw new Error(`Unknown texture type ${i}.`)
}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));
typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sc(){
	let i=null,e=!1,t=null,n=null;
	function s(r,o){
		t(r,o),n=i.requestAnimationFrame(s)
	}return{
		start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},
		stop:function(){i.cancelAnimationFrame(n),e=!1},
		setAnimationLoop:function(r){t=r},
		setContext:function(r){i=r}
	}
}function gh(i){
	const e=new WeakMap;
	function t(a,h){
		const c=a.array,l=a.usage,u=c.byteLength,d=i.createBuffer();
		i.bindBuffer(h,d),i.bufferData(h,c,l),a.onUploadCallback();
		let p;
		if(c instanceof Float32Array)p=i.FLOAT;
		else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;
		else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;
		else if(c instanceof Int16Array)p=i.SHORT;
		else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;
		else if(c instanceof Int32Array)p=i.INT;
		else if(c instanceof Int8Array)p=i.BYTE;
		else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;
		else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;
		else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);
		return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}
	}function n(a,h,c){
		const l=h.array,u=h.updateRanges;
		if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,l);
		else{
			u.sort((p,g)=>p.start-g.start);
			let d=0;
			for(let p=1;p<u.length;p++){
				const g=u[d],v=u[p];
				v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)
			}u.length=d+1;
			for(let p=0,g=u.length;p<g;p++){
				const v=u[p];
				i.bufferSubData(c,v.start*l.BYTES_PER_ELEMENT,l,v.start,v.count)
			}h.clearUpdateRanges()
		}h.onUploadCallback()
	}function s(a){
		return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)
	}function r(a){
		a.isInterleavedBufferAttribute&&(a=a.data);
		const h=e.get(a);
		h&&(i.deleteBuffer(h.buffer),e.delete(a))
	}function o(a,h){
		if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){
			const l=e.get(a);
			(!l||l.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});
			return
		}const c=e.get(a);
		if(c===void 0)e.set(a,t(a,h));
		else if(c.version<a.version){
			if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
			n(c.buffer,a,h),c.version=a.version
		}
	}return{get:s,remove:r,update:o}
}var vh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Th=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ah=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Rh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ch=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ph=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ih=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$h=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,su=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ru=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,au=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ou=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,du=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_u=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Su=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Au=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ru=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Du=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Nu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ou=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ku=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ju=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ku=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$u=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ju=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,af=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ff=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,df=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Af=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,If=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ff=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$f=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={
	alphahash_fragment:vh,alphahash_pars_fragment:bh,alphamap_fragment:Sh,
	alphamap_pars_fragment:Mh,alphatest_fragment:Eh,alphatest_pars_fragment:yh,
	aomap_fragment:Th,aomap_pars_fragment:Ah,batching_pars_vertex:wh,
	batching_vertex:Rh,begin_vertex:Ch,beginnormal_vertex:Ph,bsdfs:Dh,
	iridescence_fragment:Lh,bumpmap_pars_fragment:Ih,clipping_planes_fragment:Uh,
	clipping_planes_pars_fragment:Nh,clipping_planes_pars_vertex:Fh,
	clipping_planes_vertex:Oh,color_fragment:Bh,color_pars_fragment:zh,
	color_pars_vertex:Gh,color_vertex:Hh,common:kh,cube_uv_reflection_fragment:Wh,
	defaultnormal_vertex:Vh,displacementmap_pars_vertex:Xh,displacementmap_vertex:qh,
	emissivemap_fragment:Yh,emissivemap_pars_fragment:jh,colorspace_fragment:Kh,
	colorspace_pars_fragment:Zh,envmap_fragment:$h,envmap_common_pars_fragment:Jh,
	envmap_pars_fragment:Qh,envmap_pars_vertex:eu,envmap_physical_pars_fragment:uu,
	envmap_vertex:tu,fog_vertex:nu,fog_pars_vertex:iu,fog_fragment:su,
	fog_pars_fragment:ru,gradientmap_pars_fragment:au,lightmap_pars_fragment:ou,
	lights_lambert_fragment:cu,lights_lambert_pars_fragment:lu,
	lights_pars_begin:hu,lights_toon_fragment:fu,lights_toon_pars_fragment:du,
	lights_phong_fragment:pu,lights_phong_pars_fragment:mu,lights_physical_fragment:_u,
	lights_physical_pars_fragment:xu,lights_fragment_begin:gu,lights_fragment_maps:vu,
	lights_fragment_end:bu,logdepthbuf_fragment:Su,logdepthbuf_pars_fragment:Mu,
	logdepthbuf_pars_vertex:Eu,logdepthbuf_vertex:yu,map_fragment:Tu,
	map_pars_fragment:Au,map_particle_fragment:wu,map_particle_pars_fragment:Ru,
	metalnessmap_fragment:Cu,metalnessmap_pars_fragment:Pu,morphinstance_vertex:Du,
	morphcolor_vertex:Lu,morphnormal_vertex:Iu,morphtarget_pars_vertex:Uu,
	morphtarget_vertex:Nu,normal_fragment_begin:Fu,normal_fragment_maps:Ou,
	normal_pars_fragment:Bu,normal_pars_vertex:zu,normal_vertex:Gu,
	normalmap_pars_fragment:Hu,clearcoat_normal_fragment_begin:ku,
	clearcoat_normal_fragment_maps:Wu,clearcoat_pars_fragment:Vu,
	iridescence_pars_fragment:Xu,opaque_fragment:qu,packing:Yu,
	premultiplied_alpha_fragment:ju,project_vertex:Ku,dithering_fragment:Zu,
	dithering_pars_fragment:$u,roughnessmap_fragment:Ju,roughnessmap_pars_fragment:Qu,
	shadowmap_pars_fragment:ef,shadowmap_pars_vertex:tf,shadowmap_vertex:nf,
	shadowmask_pars_fragment:sf,skinbase_vertex:rf,skinning_pars_vertex:af,
	skinning_vertex:of,skinnormal_vertex:cf,specularmap_fragment:lf,
	specularmap_pars_fragment:hf,tonemapping_fragment:uf,tonemapping_pars_fragment:ff,
	transmission_fragment:df,transmission_pars_fragment:pf,uv_pars_fragment:mf,
	uv_pars_vertex:_f,uv_vertex:xf,worldpos_vertex:gf,background_vert:vf,
	background_frag:bf,backgroundCube_vert:Sf,backgroundCube_frag:Mf,
	cube_vert:Ef,cube_frag:yf,depth_vert:Tf,depth_frag:Af,distanceRGBA_vert:wf,
	distanceRGBA_frag:Rf,equirect_vert:Cf,equirect_frag:Pf,linedashed_vert:Df,
	linedashed_frag:Lf,meshbasic_vert:If,meshbasic_frag:Uf,meshlambert_vert:Nf,
	meshlambert_frag:Ff,meshmatcap_vert:Of,meshmatcap_frag:Bf,meshnormal_vert:zf,
	meshnormal_frag:Gf,meshphong_vert:Hf,meshphong_frag:kf,meshphysical_vert:Wf,
	meshphysical_frag:Vf,meshtoon_vert:Xf,meshtoon_frag:qf,points_vert:Yf,points_frag:jf,
	shadow_vert:Kf,shadow_frag:Zf,sprite_vert:$f,sprite_frag:Jf
},ae={
	common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},
	mapTransform:{value:new Ie},alphaMap:{value:null},
	alphaMapTransform:{value:new Ie},alphaTest:{value:0}},
	specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},
	envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},
	reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},
	dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},
	aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},
	lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},
	bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},
	normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},
	normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},
	displacementMapTransform:{value:new Ie},displacementScale:{value:1},
	displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},
	emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},
	metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},
	roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},
	fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},
	fogColor:{value:new Ze(16777215)}},lights:{
		ambientLightColor:{value:[]},lightProbe:{value:[]},
		directionalLights:{value:[],properties:{direction:{},color:{}}},
		directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},
		shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},
		directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},
		spotLights:{value:[],properties:{color:{},position:{},direction:{},
		distance:{},coneCos:{},penumbraCos:{},decay:{}}},
		spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},
		shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},
		spotShadowMap:{value:[]},spotLightMatrix:{value:[]},
		pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},
		pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},
		shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},
		shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},
		hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},
		rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},
		ltc_1:{value:null},ltc_2:{value:null}
	},points:{
		diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},
		scale:{value:1},map:{value:null},alphaMap:{value:null},
		alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},
		sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},
		center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},
		mapTransform:{value:new Ie},alphaMap:{value:null},
		alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},
		en={
			basic:{
				uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),
				vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag
			},lambert:{
				uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,
					ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,
					ae.lights,{emissive:{value:new Ze(0)}}]),
				vertexShader:Ue.meshlambert_vert,
				fragmentShader:Ue.meshlambert_frag
			},phong:{
				uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,
					ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,
					{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},
					shininess:{value:30}}]),
				vertexShader:Ue.meshphong_vert,
				fragmentShader:Ue.meshphong_frag
			},standard:{
				uniforms:St([
					ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,
					ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,
					ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)},
					roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}
				}]),vertexShader:Ue.meshphysical_vert,
				fragmentShader:Ue.meshphysical_frag
			},toon:{
				uniforms:St([
					ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,
					ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,
					{emissive:{value:new Ze(0)}}
				]),vertexShader:Ue.meshtoon_vert,
				fragmentShader:Ue.meshtoon_frag
			},matcap:{
				uniforms:St([
					ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,
					ae.fog,{matcap:{value:null}}]),
				vertexShader:Ue.meshmatcap_vert,
				fragmentShader:Ue.meshmatcap_frag
			},points:{
				uniforms:St([ae.points,ae.fog]),
				vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag
			},dashed:{
				uniforms:St([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},
				totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,
				fragmentShader:Ue.linedashed_frag
			},depth:{
				uniforms:St([ae.common,ae.displacementmap]),
				vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag
			},normal:{
				uniforms:St([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{
					opacity:{value:1}
				}]),
				vertexShader:Ue.meshnormal_vert,
				fragmentShader:Ue.meshnormal_frag
			},sprite:{
				uniforms:St([ae.sprite,ae.fog]),
				vertexShader:Ue.sprite_vert,
				fragmentShader:Ue.sprite_frag
			},background:{
				uniforms:{
					uvTransform:{value:new Ie},
					t2D:{value:null},
					backgroundIntensity:{value:1}
				},vertexShader:Ue.background_vert
				,fragmentShader:Ue.background_frag
			},backgroundCube:{
				uniforms:{
					envMap:{value:null},
					flipEnvMap:{value:-1},
					backgroundBlurriness:{value:0},
					backgroundIntensity:{value:1},
					backgroundRotation:{value:new Ie}
				},
				vertexShader:Ue.backgroundCube_vert,
				fragmentShader:Ue.backgroundCube_frag
			},cube:{
				uniforms:{
					tCube:{value:null},
					tFlip:{value:-1},
					opacity:{value:1}
				},vertexShader:Ue.cube_vert,
				fragmentShader:Ue.cube_frag
			},equirect:{
				uniforms:{tEquirect:{value:null}},
				vertexShader:Ue.equirect_vert,
				fragmentShader:Ue.equirect_frag
			},distanceRGBA:{
				uniforms:St([ae.common,ae.displacementmap,{
					referencePosition:{value:new N},
					nearDistance:{value:1},
					farDistance:{value:1e3}
				}]),
				vertexShader:Ue.distanceRGBA_vert,
				fragmentShader:Ue.distanceRGBA_frag
			},shadow:{
				uniforms:St([ae.lights,ae.fog,{
					color:{value:new Ze(0)},
					opacity:{value:1}
				}]),vertexShader:Ue.shadow_vert,
				fragmentShader:Ue.shadow_frag
			}
		};
		en.physical={
			uniforms:St([
				en.standard.uniforms,{
					clearcoat:{value:0},
					clearcoatMap:{value:null},
					clearcoatMapTransform:{value:new Ie},
					clearcoatNormalMap:{value:null},
					clearcoatNormalMapTransform:{value:new Ie},
					clearcoatNormalScale:{value:new Ne(1,1)},
					clearcoatRoughness:{value:0},
					clearcoatRoughnessMap:{value:null},
					clearcoatRoughnessMapTransform:{value:new Ie},
					dispersion:{value:0},iridescence:{value:0},
					iridescenceMap:{value:null},
					iridescenceMapTransform:{value:new Ie},
					iridescenceIOR:{value:1.3},
					iridescenceThicknessMinimum:{value:100},
					iridescenceThicknessMaximum:{value:400},
					iridescenceThicknessMap:{value:null},
					iridescenceThicknessMapTransform:{value:new Ie},
					sheen:{value:0},
					sheenColor:{value:new Ze(0)},
					sheenColorMap:{value:null},
					sheenColorMapTransform:{value:new Ie},
					sheenRoughness:{value:1},
					sheenRoughnessMap:{value:null},
					sheenRoughnessMapTransform:{value:new Ie},
					transmission:{value:0},
					transmissionMap:{value:null},
					transmissionMapTransform:{value:new Ie},
					transmissionSamplerSize:{value:new Ne},
					transmissionSamplerMap:{value:null},
					thickness:{value:0},
					thicknessMap:{value:null},
					thicknessMapTransform:{value:new Ie},
					attenuationDistance:{value:0},
					attenuationColor:{value:new Ze(0)},
					specularColor:{value:new Ze(1,1,1)},
					specularColorMap:{value:null},
					specularColorMapTransform:{value:new Ie},
					specularIntensity:{value:1},
					specularIntensityMap:{value:null},
					specularIntensityMapTransform:{value:new Ie},
					anisotropyVector:{value:new Ne},
					anisotropyMap:{value:null},
					anisotropyMapTransform:{value:new Ie}
				}]),
			vertexShader:Ue.meshphysical_vert,
			fragmentShader:Ue.meshphysical_frag
		};
		const vs={r:0,b:0,g:0},Wn=new bn,Qf=new ut;
		function ed(i,e,t,n,s,r,o){
			const a=new Ze(0);
			let h=r===!0?0:1,c,l,u=null,d=0,p=null;
			function g(E){
				let A=E.isScene===!0?E.background:null;
				return A&&A.isTexture&&(A=(E.backgroundBlurriness>0?t:e).get(A)),A
			}function v(E){
				let A=!1;
				const C=g(E);
				C===null?f(a,h):C&&C.isColor&&(f(C,1),A=!0);
				const y=i.xr.getEnvironmentBlendMode();
				y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))
			}function m(E,A){
				const C=g(A);
				C&&(C.isCubeTexture||C.mapping===Fs)?(l===void 0&&(l=new Nt(new Ai(1,1,1),
						new Sn({
							name:"BackgroundCubeMaterial",
							uniforms:yi(en.backgroundCube.uniforms),
							vertexShader:en.backgroundCube.vertexShader,
							fragmentShader:en.backgroundCube.fragmentShader,
							side:wt,depthTest:!1,
							depthWrite:!1,fog:!1,allowOverride:!1
						})
					),l.geometry.deleteAttribute("normal"),
					l.geometry.deleteAttribute("uv"),
					l.onBeforeRender=function(y,D,z){
						this.matrixWorld.copyPosition(z.matrixWorld)
					},Object.defineProperty(
						l.material,"envMap",{
							get:function(){
								return this.uniforms.envMap.value
							}
						}
					),s.update(l)
				),Wn.copy(A.backgroundRotation),
				Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,
				C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),
				l.material.uniforms.envMap.value=C,
				l.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,
				l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,
				l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,
				l.material.uniforms.backgroundRotation.value.setFromMatrix4(Qf.makeRotationFromEuler(Wn)),
				l.material.toneMapped=Ve.getTransfer(C.colorSpace)!==je,
				(u!==C||d!==C.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=C,d=C.version,p=i.toneMapping),
				l.layers.enableAll(),
				E.unshift(l,l.geometry,l.material,0,0,null)):C&&C.isTexture&&(
					c===void 0&&(
						c=new Nt(
							new Bs(2,2),
							new Sn({
								name:"BackgroundMaterial",
								uniforms:yi(en.background.uniforms),
								vertexShader:en.background.vertexShader,
								fragmentShader:en.background.fragmentShader,
								side:Fn,depthTest:!1,depthWrite:!1,
								fog:!1,allowOverride:!1
							})
						),c.geometry.deleteAttribute("normal"),
						Object.defineProperty(
							c.material,"map",{
								get:function(){
									return this.uniforms.t2D.value
								}
							}
						),s.update(c)
					),c.material.uniforms.t2D.value=C,
					c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,
					c.material.toneMapped=Ve.getTransfer(C.colorSpace)!==je,C.matrixAutoUpdate===!0&&C.updateMatrix(),
					c.material.uniforms.uvTransform.value.copy(C.matrix),
					(u!==C||d!==C.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=C,d=C.version,p=i.toneMapping),
					c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))
			}function f(E,A){
				E.getRGB(vs,mc(i)),n.buffers.color.setClear(vs.r,vs.g,vs.b,A,o)
			}function T(){
				l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)
			}return{
				getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),h=A,f(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(E){h=E,f(a,h)},render:v,addToRenderList:m,dispose:T
			}
		}function td(i,e){
			const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);
			let r=s,o=!1;
			function a(b,P,B,H,W){
				let j=!1;
				const q=u(H,B,P);
				r!==q&&(r=q,c(r.object)),j=p(b,H,B,W),j&&g(b,H,B,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,A(b,P,B,H),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))
			}function h(){
				return i.createVertexArray()
			}function c(b){
				return i.bindVertexArray(b)
			}function l(b){
				return i.deleteVertexArray(b)
			}function u(b,P,B){
				const H=B.wireframe===!0;
				let W=n[b.id];
				W===void 0&&(W={},n[b.id]=W);
				let j=W[P.id];
				j===void 0&&(j={},W[P.id]=j);
				let q=j[H];
				return q===void 0&&(q=d(h()),j[H]=q),q
			}function d(b){
				const P=[],B=[],H=[];
				for(let W=0;W<t;W++)P[W]=0,B[W]=0,H[W]=0;
				return{
					geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:H,object:b,attributes:{},index:null
				}
			}function p(b,P,B,H){
				const W=r.attributes,j=P.attributes;
				let q=0;
				const ne=B.getAttributes();
				for(const k in ne)if(ne[k].location>=0){
					const re=W[k];
					let Se=j[k];
					if(Se===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(Se=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(Se=b.instanceColor)),re===void 0||re.attribute!==Se||Se&&re.data!==Se.data)return!0;q++}return r.attributesNum!==q||r.index!==H}function g(b,P,B,H){const W={},j=P.attributes;let q=0;const ne=B.getAttributes();for(const k in ne)if(ne[k].location>=0){let re=j[k];re===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(re=b.instanceColor));const Se={};Se.attribute=re,re&&re.data&&(Se.data=re.data),W[k]=Se,q++}r.attributes=W,r.attributesNum=q,r.index=H}function v(){const b=r.newAttributes;for(let P=0,B=b.length;P<B;P++)b[P]=0}function m(b){f(b,0)}function f(b,P){const B=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;B[b]=1,H[b]===0&&(i.enableVertexAttribArray(b),H[b]=1),W[b]!==P&&(i.vertexAttribDivisor(b,P),W[b]=P)}function T(){const b=r.newAttributes,P=r.enabledAttributes;for(let B=0,H=P.length;B<H;B++)P[B]!==b[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function E(b,P,B,H,W,j,q){q===!0?i.vertexAttribIPointer(b,P,B,W,j):i.vertexAttribPointer(b,P,B,H,W,j)}function A(b,P,B,H){v();const W=H.attributes,j=B.getAttributes(),q=P.defaultAttributeValues;for(const ne in j){const k=j[ne];if(k.location>=0){let te=W[ne];if(te===void 0&&(ne==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),ne==="instanceColor"&&b.instanceColor&&(te=b.instanceColor)),te!==void 0){const re=te.normalized,Se=te.itemSize,ke=e.get(te);if(ke===void 0)continue;const Xe=ke.buffer,Je=ke.type,Qe=ke.bytesPerElement,X=Je===i.INT||Je===i.UNSIGNED_INT||te.gpuType===pa;if(te.isInterleavedBufferAttribute){const Z=te.data,fe=Z.stride,Le=te.offset;if(Z.isInstancedInterleavedBuffer){for(let ge=0;ge<k.locationSize;ge++)f(k.location+ge,Z.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ge=0;ge<k.locationSize;ge++)m(k.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let ge=0;ge<k.locationSize;ge++)E(k.location+ge,Se/k.locationSize,Je,re,fe*Qe,(Le+Se/k.locationSize*ge)*Qe,X)}else{if(te.isInstancedBufferAttribute){for(let Z=0;Z<k.locationSize;Z++)f(k.location+Z,te.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Z=0;Z<k.locationSize;Z++)m(k.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Z=0;Z<k.locationSize;Z++)E(k.location+Z,Se/k.locationSize,Je,re,Se*Qe,Se/k.locationSize*Z*Qe,X)}}else if(q!==void 0){const re=q[ne];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(k.location,re);break;case 3:i.vertexAttrib3fv(k.location,re);break;case 4:i.vertexAttrib4fv(k.location,re);break;default:i.vertexAttrib1fv(k.location,re)}}}}T()}function C(){z();for(const b in n){const P=n[b];for(const B in P){const H=P[B];for(const W in H)l(H[W].object),delete H[W];delete P[B]}delete n[b]}}function y(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const B in P){const H=P[B];for(const W in H)l(H[W].object),delete H[W];delete P[B]}delete n[b.id]}function D(b){for(const P in n){const B=n[P];if(B[b.id]===void 0)continue;const H=B[b.id];for(const W in H)l(H[W].object),delete H[W];delete B[b.id]}}function z(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:y,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function nd(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let p=0;for(let g=0;g<u;g++)p+=l[g];t.update(p,n,1)}function h(c,l,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],l[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,l,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=l[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function id(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==Zt&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const z=D===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==vn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==_n&&!z)}function h(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const l=h(c);l!==c&&(De("WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:A,vertexTextures:C,maxSamples:y}}function sd(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Pn,a=new Ie,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=l(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?l(null):c();else{const T=r?0:n,E=T*4;let A=f.clippingState||null;h.value=A,A=l(g,d,E,p);for(let C=0;C!==E;++C)A[C]=t[C];f.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=h.value,g!==!0||m===null){const f=p+v*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,A=p;E!==v;++E,A+=4)o.copy(u[E]).applyMatrix4(T,a),o.normal.toArray(m,A),m[A+3]=o.constant}h.value=m,h.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function rd(i){let e=new WeakMap;function t(o,a){return a===Pr?o.mapping=Si:a===Dr&&(o.mapping=Mi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pr||a===Dr)if(e.has(o)){const h=e.get(o).texture;return t(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const c=new eh(h.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const h=e.get(a);h!==void 0&&(e.delete(a),h.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const In=4,po=[.125,.215,.35,.446,.526,.582],qn=20,ad=512,Ui=new dh,mo=new Ze;let mr=null,_r=0,xr=0,gr=!1;
				const od=new N;
class _o{
	constructor(e){
		this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null
	}fromScene(e,t=0,n=.1,s=100,r={}){
		const{size:o=256,position:a=od}=r;
		mr=this._renderer.getRenderTarget(),_r=this._renderer.getActiveCubeFace(),xr=this._renderer.getActiveMipmapLevel(),gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,s,h,a),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mr,_r,xr),this._renderer.xr.enabled=gr,e.scissorTest=!1,pi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===Mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mr=this._renderer.getRenderTarget(),_r=this._renderer.getActiveCubeFace(),xr=this._renderer.getActiveMipmapLevel(),gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Ti,format:Zt,colorSpace:Ei,depthBuffer:!1},s=xo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xo(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cd(r)),this._blurMaterial=hd(r,e,t)}return s}_compileMaterial(e){const t=new Nt(new Mn,e);this._renderer.compile(t,Ui)}_sceneToCubeUV(e,t,n,s,r){const h=new Bt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(mo),u.toneMapping=Un,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nt(new Ai,new Nn({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let f=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,f=!0):(m.color.copy(mo),f=!0);for(let E=0;E<6;E++){const A=E%3;A===0?(h.up.set(0,c[E],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+l[E],r.y,r.z)):A===1?(h.up.set(0,0,c[E]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+l[E],r.z)):(h.up.set(0,c[E],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+l[E]));const C=this._cubeSize;pi(s,A*C,E>2?C:0,C,C),u.setRenderTarget(s),f&&u.render(v,h),u.render(e,h)}u.toneMapping=p,u.autoClear=d,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Si||e.mapping===Mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=go());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const h=this._cubeSize;pi(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(o,Ui)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget;if(this._ggxMaterial===null){const T=3*Math.max(this._cubeSize,16),E=4*this._cubeSize;this._ggxMaterial=ld(this._lodMax,T,E)}const o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const h=o.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l),d=.05+c*.95,p=u*d,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-In?n-g+In:0),f=4*(this._cubeSize-v);h.envMap.value=e.texture,h.roughness.value=p,h.mipInt.value=g-t,pi(r,m,f,3*v,2*v),s.setRenderTarget(r),s.render(a,Ui),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=g-n,pi(e,m,f,3*v,2*v),s.setRenderTarget(e),s.render(a,Ui)}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const h=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ct("blur direction must be either latitudinal or longitudinal!");const l=3,u=this._lodMeshes[s];u.material=c;const d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qn-1),v=r/g,m=isFinite(r)?1+Math.floor(l*v):qn;m>qn&&De(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`);const f=[];let T=0;for(let D=0;D<qn;++D){const z=D/v,S=Math.exp(-z*z/2);f.push(S),D===0?T+=S:D<m&&(T+=2*S)}for(let D=0;D<f.length;D++)f[D]=f[D]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const A=this._sizeLods[s],C=3*A*(s>E-In?s-E+In:0),y=4*(this._cubeSize-A);pi(t,C,y,3*A,2*A),h.setRenderTarget(t),h.render(u,Ui)}}function cd(i){const e=[],t=[],n=[];let s=i;const r=i-In+1+po.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let h=1/a;o>i-In?h=po[o-i+In-1]:o===0&&(h=0),t.push(h);const c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],p=6,g=6,v=3,m=2,f=1,T=new Float32Array(v*g*p),E=new Float32Array(m*g*p),A=new Float32Array(f*g*p);for(let y=0;y<p;y++){const D=y%3*2/3-1,z=y>2?0:-1,S=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];T.set(S,v*g*y),E.set(d,m*g*y);const b=[y,y,y,y,y,y];A.set(b,f*g*y)}const C=new Mn;C.setAttribute("position",new sn(T,v)),C.setAttribute("uv",new sn(E,m)),C.setAttribute("faceIndex",new sn(A,f)),n.push(new Nt(C,null)),s>In&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function xo(i,e,t){const n=new $n(i,e,t);return n.texture.mapping=Fs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ld(i,e,t){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ad,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function hd(i,e,t){const n=new Float32Array(qn),s=new N(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function go(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function vo(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Gs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ud(i){
		let e=new WeakMap,t=null;
		function n(a){
			if(a&&a.isTexture){
				const h=a.mapping,c=h===Pr||h===Dr,l=h===Si||h===Mi;
				if(c||l){
					let u=e.get(a);
					const d=u!==void 0?u.texture.pmremVersion:0;
					if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new _o(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;
					if(u!==void 0)return u.texture;
					{const p=a.image;
					return c&&p&&p.height>0||l&&p&&s(p)?(t===null&&(t=new _o(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null
					}
				}
			}return a
		}function s(a){
			let h=0;const c=6;for(let l=0;l<c;l++)a[l]!==void 0&&h++;return h===c}function r(a){const h=a.target;h.removeEventListener("dispose",r);const c=e.get(h);c!==void 0&&(e.delete(h),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function fd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Yi("WebGLRenderer: "+n+" extension not supported."),s}}}function dd(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function h(u){const d=u.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let E=0,A=T.length;E<A;E+=3){const C=T[E+0],y=T[E+1],D=T[E+2];d.push(C,y,y,D,D,C)}}else if(g!==void 0){const T=g.array;v=g.version;for(let E=0,A=T.length/3-1;E<A;E+=3){const C=E+0,y=E+1,D=E+2;d.push(C,y,y,D,D,C)}}else return;const m=new(hc(d)?pc:dc)(d,1);m.version=v;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function l(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:h,getWireframeAttribute:l}}function pd(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function h(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function l(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*v[T];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=h,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function md(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _d(i,e,t){const n=new WeakMap,s=new lt;function r(o,a,h){const c=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=l!==void 0?l.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let E=0;p===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let A=a.attributes.position.count*E,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const y=new Float32Array(A*C*4*u),D=new uc(y,A,C,u);D.type=_n,D.needsUpdate=!0;const z=E*4;for(let b=0;b<u;b++){const P=m[b],B=f[b],H=T[b],W=A*C*4*b;for(let j=0;j<P.count;j++){const q=j*z;p===!0&&(s.fromBufferAttribute(P,j),y[W+q+0]=s.x,y[W+q+1]=s.y,y[W+q+2]=s.z,y[W+q+3]=0),g===!0&&(s.fromBufferAttribute(B,j),y[W+q+4]=s.x,y[W+q+5]=s.y,y[W+q+6]=s.z,y[W+q+7]=0),v===!0&&(s.fromBufferAttribute(H,j),y[W+q+8]=s.x,y[W+q+9]=s.y,y[W+q+10]=s.z,y[W+q+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new Ne(A,C)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=a.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",g),h.getUniforms().setValue(i,"morphTargetInfluences",c)}h.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function xd(i,e,t,n){let s=new WeakMap;function r(h){const c=n.render.frame,l=h.geometry,u=e.get(h,l);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),s.get(h)!==c&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,c))),h.isSkinnedMesh){const d=h.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(h){const c=h.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Mc=new vt,bo=new vc(1,1),Ec=new uc,yc=new Ol,Tc=new xc,So=[],Mo=[],Eo=new Float32Array(16),yo=new Float32Array(9),To=new Float32Array(4);function wi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=So[s];if(r===void 0&&(r=new Float32Array(s),So[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hs(i,e){let t=Mo[e];t===void 0&&(t=new Int32Array(e),Mo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function vd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function bd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function Sd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function Md(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;To.set(n),i.uniformMatrix2fv(this.addr,!1,To),pt(t,n)}}function Ed(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;yo.set(n),i.uniformMatrix3fv(this.addr,!1,yo),pt(t,n)}}function yd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Eo.set(n),i.uniformMatrix4fv(this.addr,!1,Eo),pt(t,n)}}function Td(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ad(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function wd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function Rd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function Cd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Pd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function Dd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function Ld(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function Id(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bo.compareFunction=lc,r=bo):r=Mc,t.setTexture2D(e||r,s)}function Ud(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||yc,s)}function Nd(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Tc,s)}function Fd(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ec,s)}function Od(i){switch(i){case 5126:return gd;case 35664:return vd;case 35665:return bd;case 35666:return Sd;case 35674:return Md;case 35675:return Ed;case 35676:return yd;case 5124:case 35670:return Td;case 35667:case 35671:return Ad;case 35668:case 35672:return wd;case 35669:case 35673:return Rd;case 5125:return Cd;case 36294:return Pd;case 36295:return Dd;case 36296:return Ld;case 35678:case 36198:case 36298:case 36306:case 35682:return Id;case 35679:case 36299:case 36307:return Ud;case 35680:case 36300:case 36308:case 36293:return Nd;case 36289:case 36303:case 36311:case 36292:return Fd}}function Bd(i,e){i.uniform1fv(this.addr,e)}function zd(i,e){const t=wi(e,this.size,2);i.uniform2fv(this.addr,t)}function Gd(i,e){const t=wi(e,this.size,3);i.uniform3fv(this.addr,t)}function Hd(i,e){const t=wi(e,this.size,4);i.uniform4fv(this.addr,t)}function kd(i,e){const t=wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wd(i,e){const t=wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Vd(i,e){const t=wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Xd(i,e){i.uniform1iv(this.addr,e)}function qd(i,e){i.uniform2iv(this.addr,e)}function Yd(i,e){i.uniform3iv(this.addr,e)}function jd(i,e){i.uniform4iv(this.addr,e)}function Kd(i,e){i.uniform1uiv(this.addr,e)}function Zd(i,e){i.uniform2uiv(this.addr,e)}function $d(i,e){i.uniform3uiv(this.addr,e)}function Jd(i,e){i.uniform4uiv(this.addr,e)}function Qd(i,e,t){const n=this.cache,s=e.length,r=Hs(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Mc,r[o])}function ep(i,e,t){const n=this.cache,s=e.length,r=Hs(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||yc,r[o])}function tp(i,e,t){const n=this.cache,s=e.length,r=Hs(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Tc,r[o])}function np(i,e,t){const n=this.cache,s=e.length,r=Hs(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ec,r[o])}function ip(i){switch(i){case 5126:return Bd;case 35664:return zd;case 35665:return Gd;case 35666:return Hd;case 35674:return kd;case 35675:return Wd;case 35676:return Vd;case 5124:case 35670:return Xd;case 35667:case 35671:return qd;case 35668:case 35672:return Yd;case 35669:case 35673:return jd;case 5125:return Kd;case 36294:return Zd;case 36295:return $d;case 36296:return Jd;case 35678:case 36198:case 36298:case 36306:case 35682:return Qd;case 35679:case 36299:case 36307:return ep;case 35680:case 36300:case 36308:case 36293:return tp;case 36289:case 36303:case 36311:case 36292:return np}
		}class sp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Od(t.type)}
		}class rp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ip(t.type)}
		}class ap{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const vr=/(\w+)(\])?(\[|\.)?/g;function Ao(i,e){i.seq.push(e),i.map[e.id]=e}function op(i,e,t){const n=i.name,s=n.length;for(vr.lastIndex=0;;){const r=vr.exec(n),o=vr.lastIndex;let a=r[1];const h=r[2]==="]",c=r[3];if(h&&(a=a|0),c===void 0||c==="["&&o+2===s){Ao(t,c===void 0?new sp(a,i,e):new rp(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new ap(a),Ao(t,u)),t=u}}
		}class Rs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);op(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],h=n[a.id];h.needsUpdate!==!1&&a.setValue(e,h.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function wo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const cp=37297;let lp=0;function hp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ro=new Ie;function up(i){Ve._getMatrix(Ro,Ve.workingColorSpace,i);const e=`mat3( ${Ro.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(i)){case Ds:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Co(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+hp(i.getShaderSource(e),a)}else return r}function fp(i,e){const t=up(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function dp(i,e){let t;switch(e){case ll:t="Linear";break;case hl:t="Reinhard";break;case ul:t="Cineon";break;case fl:t="ACESFilmic";break;case pl:t="AgX";break;case ml:t="Neutral";break;case dl:t="Custom";break;default:De("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bs=new N;function pp(){Ve.getLuminanceCoefficients(bs);const i=bs.x.toFixed(4),e=bs.y.toFixed(4),t=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gi).join(`
`)}function _p(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Gi(i){return i!==""}function Po(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Do(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ha(i){return i.replace(gp,bp)}const vp=new Map;function bp(i,e){let t=Ue[e];if(t===void 0){const n=vp.get(e);if(n!==void 0)t=Ue[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ha(t)}const Sp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lo(i){return i.replace(Sp,Mp)}function Mp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Io(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ep(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fn&&(e="SHADOWMAP_TYPE_VSM"),e}function yp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Si:case Mi:e="ENVMAP_TYPE_CUBE";break;case Fs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Mi:e="ENVMAP_MODE_REFRACTION";break}return e}function Ap(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ec:e="ENVMAP_BLENDING_MULTIPLY";break;case ol:e="ENVMAP_BLENDING_MIX";break;case cl:e="ENVMAP_BLENDING_ADD";break}return e}function wp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Rp(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const h=Ep(t),c=yp(t),l=Tp(t),u=Ap(t),d=wp(t),p=mp(t),g=_p(r),v=s.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gi).join(`
`),f.length>0&&(f+=`
`)):(m=[
	Io(t),
	"#define SHADER_TYPE "+t.shaderType,
	"#define SHADER_NAME "+t.shaderName,
	g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",
	t.batching?"#define USE_BATCHING":"",
	t.batchingColor?"#define USE_BATCHING_COLOR":"",
	t.instancing?"#define USE_INSTANCING":"",
	t.instancingColor?"#define USE_INSTANCING_COLOR":"",
	t.instancingMorph?"#define USE_INSTANCING_MORPH":"",
	t.useFog&&t.fog?"#define USE_FOG":"",
	t.useFog&&t.fogExp2?"#define FOG_EXP2":"",
	t.map?"#define USE_MAP":"",
	t.envMap?"#define USE_ENVMAP":"",
	t.envMap?"#define "+l:"",
	t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",
	t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",
	t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",
	t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",
	t.displacementMap?"#define USE_DISPLACEMENTMAP":"",
	t.emissiveMap?"#define USE_EMISSIVEMAP":"",
	t.anisotropy?"#define USE_ANISOTROPY":"",
	t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",
	t.clearcoatMap?"#define USE_CLEARCOATMAP":"",
	t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",
	t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",
	t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",
	t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",
	t.specularMap?"#define USE_SPECULARMAP":"",
	t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",
	t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",
	t.roughnessMap?"#define USE_ROUGHNESSMAP":"",
	t.metalnessMap?"#define USE_METALNESSMAP":"",
	t.alphaMap?"#define USE_ALPHAMAP":"",
	t.alphaHash?"#define USE_ALPHAHASH":"",
	t.transmission?"#define USE_TRANSMISSION":"",
	t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",
	t.thicknessMap?"#define USE_THICKNESSMAP":"",
	t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",
	t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",
	t.mapUv?"#define MAP_UV "+t.mapUv:"",
	t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",
	t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",
	t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",
	t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",
	t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",
	t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",
	t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",
	t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",
	t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",
	t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",
	t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",
	t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",
	t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",
	t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",
	t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",
	t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",
	t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",
	t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",
	t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",
	t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",
	t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",
	t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",
	t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",
	t.vertexColors?"#define USE_COLOR":"",
	t.vertexAlphas?"#define USE_COLOR_ALPHA":"",
	t.vertexUv1s?"#define USE_UV1":"",
	t.vertexUv2s?"#define USE_UV2":"",
	t.vertexUv3s?"#define USE_UV3":"",
	t.pointsUvs?"#define USE_POINTS_UV":"",
	t.flatShading?"#define FLAT_SHADED":"",
	t.skinning?"#define USE_SKINNING":"",
	t.morphTargets?"#define USE_MORPHTARGETS":"",
	t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",
	t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",
	t.flipSided?"#define FLIP_SIDED":"",
	t.shadowMapEnabled?"#define USE_SHADOWMAP":"",
	t.shadowMapEnabled?"#define "+h:"",
	t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",
	t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",
	t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",
	t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"",
	"uniform mat4 modelMatrix;",
	"uniform mat4 modelViewMatrix;",
	"uniform mat4 projectionMatrix;",
	"uniform mat4 viewMatrix;",
	"uniform mat3 normalMatrix;",
	"uniform vec3 cameraPosition;",
	"uniform bool isOrthographic;",
	"#ifdef USE_INSTANCING",
	"	attribute mat4 instanceMatrix;",
	"#endif","#ifdef USE_INSTANCING_COLOR",
	"	attribute vec3 instanceColor;",
	"#endif","#ifdef USE_INSTANCING_MORPH",
	"	uniform sampler2D morphTexture;",
	"#endif","attribute vec3 position;",
	"attribute vec3 normal;","attribute vec2 uv;",
	"#ifdef USE_UV1","	attribute vec2 uv1;",
	"#endif","#ifdef USE_UV2","	attribute vec2 uv2;",
	"#endif","#ifdef USE_UV3","	attribute vec2 uv3;",
	"#endif","#ifdef USE_TANGENT",
	"	attribute vec4 tangent;",
	"#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;",
	"#elif defined( USE_COLOR )","	attribute vec3 color;",
	"#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;",
	"	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),f=[
	Io(t),
	"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,
	g,
	t.useFog&&t.fog?"#define USE_FOG":"",
	t.useFog&&t.fogExp2?"#define FOG_EXP2":"",
	t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",
	t.map?"#define USE_MAP":"",
	t.matcap?"#define USE_MATCAP":"",
	t.envMap?"#define USE_ENVMAP":"",
	t.envMap?"#define "+c:"",
	t.envMap?"#define "+l:"",
	t.envMap?"#define "+u:"",
	d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",
	d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",
	d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",
	t.lightMap?"#define USE_LIGHTMAP":"",
	t.aoMap?"#define USE_AOMAP":"",
	t.bumpMap?"#define USE_BUMPMAP":"",
	t.normalMap?"#define USE_NORMALMAP":"",
	t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",
	t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",
	t.emissiveMap?"#define USE_EMISSIVEMAP":"",
	t.anisotropy?"#define USE_ANISOTROPY":"",
	t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",
	t.clearcoat?"#define USE_CLEARCOAT":"",
	t.clearcoatMap?"#define USE_CLEARCOATMAP":"",
	t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",
	t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",
	t.dispersion?"#define USE_DISPERSION":"",
	t.iridescence?"#define USE_IRIDESCENCE":"",
	t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",
	t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",
	t.specularMap?"#define USE_SPECULARMAP":"",
	t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",
	t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",
	t.roughnessMap?"#define USE_ROUGHNESSMAP":"",
	t.metalnessMap?"#define USE_METALNESSMAP":"",
	t.alphaMap?"#define USE_ALPHAMAP":"",
	t.alphaTest?"#define USE_ALPHATEST":"",
	t.alphaHash?"#define USE_ALPHAHASH":"",
	t.sheen?"#define USE_SHEEN":"",
	t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",
	t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",
	t.transmission?"#define USE_TRANSMISSION":"",
	t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",
	t.thicknessMap?"#define USE_THICKNESSMAP":"",
	t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",
	t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",
	t.vertexAlphas?"#define USE_COLOR_ALPHA":"",
	t.vertexUv1s?"#define USE_UV1":"",
	t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",
	t.pointsUvs?"#define USE_POINTS_UV":"",
	t.gradientMap?"#define USE_GRADIENTMAP":"",
	t.flatShading?"#define FLAT_SHADED":"",
	t.doubleSided?"#define DOUBLE_SIDED":"",
	t.flipSided?"#define FLIP_SIDED":"",
	t.shadowMapEnabled?"#define USE_SHADOWMAP":"",
	t.shadowMapEnabled?"#define "+h:"",
	t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",
	t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",
	t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",
	t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",
	t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",
	t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"",
	"uniform mat4 viewMatrix;",
	"uniform vec3 cameraPosition;",
	"uniform bool isOrthographic;",
	t.toneMapping!==Un?"#define TONE_MAPPING":"",
	t.toneMapping!==Un?Ue.tonemapping_pars_fragment:"",
	t.toneMapping!==Un?dp("toneMapping",t.toneMapping):"",
	t.dithering?"#define DITHERING":"",
	t.opaque?"#define OPAQUE":"",
	Ue.colorspace_pars_fragment,
	fp("linearToOutputTexel",t.outputColorSpace),
	pp(),
	t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gi).join(`
`)),o=ha(o),o=Po(o,t),o=Do(o,t),a=ha(a),a=Po(a,t),a=Do(a,t),o=Lo(o),a=Lo(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Va?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Va?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);
const E=T+m+o,A=T+f+a,C=wo(s,s.VERTEX_SHADER,E),y=wo(s,s.FRAGMENT_SHADER,A);
s.attachShader(v,C),s.attachShader(v,y),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);
function D(P){
	if(i.debug.checkShaderErrors){
		const B=s.getProgramInfoLog(v)||"",H=s.getShaderInfoLog(C)||"",W=s.getShaderInfoLog(y)||"",j=B.trim(),q=H.trim(),ne=W.trim();
		let k=!0,te=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,y);
		else{
			const re=Co(s,C,"vertex"),Se=Co(s,y,"fragment");
			ct("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+j+`
`+re+`
`+Se)
}else j!==""?De("WebGLProgram: Program Info Log:",j):(q===""||ne==="")&&(te=!1);
te&&(P.diagnostics={runnable:k,programLog:j,vertexShader:{log:q,prefix:m},fragmentShader:{log:ne,prefix:f}})}s.deleteShader(C),s.deleteShader(y),z=new Rs(s,v),S=xp(s,v)
}let z;
this.getUniforms=function(){
	return z===void 0&&D(this),z};
	let S;
	this.getAttributes=function(){
		return S===void 0&&D(this),S
	};
	let b=t.rendererExtensionParallelShaderCompile===!1;
	return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,cp)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=y,this}let Cp=0;
class Pp{
	constructor(){
		this.shaderCache=new Map,this.materialCache=new Map
	}update(e){
		const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);
		return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this
	}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Dp(e),t.set(e,n)),n}
}class Dp{
	constructor(e){
		this.id=Cp++,this.code=e,this.usedTimes=0
	}
}function Lp(i,e,t,n,s,r,o){
	const a=new ya,h=new Pp,c=new Set,l=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;
	let p=s.precision;
	const g={
		MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",
		MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",
		MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",
		MeshToonMaterial:"toon",MeshStandardMaterial:"physical",
		MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",
		LineBasicMaterial:"basic",LineDashedMaterial:"dashed",
		PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"
	};
	function v(S){
		return c.add(S),S===0?"uv":`uv${S}`
	}function m(S,b,P,B,H){
		const W=B.fog,j=H.geometry,q=S.isMeshStandardMaterial?B.environment:null,ne=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),k=ne&&ne.mapping===Fs?ne.image.height:null,te=g[S.type];
		S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&De("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));
		const re=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Se=re!==void 0?re.length:0;
		let ke=0;
		j.morphAttributes.position!==void 0&&(ke=1),j.morphAttributes.normal!==void 0&&(ke=2),j.morphAttributes.color!==void 0&&(ke=3);
		let Xe,Je,Qe,X;
		if(te){
			const qe=en[te];
			Xe=qe.vertexShader,Je=qe.fragmentShader
		}else Xe=S.vertexShader,Je=S.fragmentShader,h.update(S),Qe=h.getVertexShaderID(S),X=h.getFragmentShaderID(S);
		const Z=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Le=H.isInstancedMesh===!0,ge=H.isBatchedMesh===!0,Be=!!S.map,_t=!!S.matcap,Fe=!!ne,nt=!!S.aoMap,w=!!S.lightMap,ze=!!S.bumpMap,Ge=!!S.normalMap,et=!!S.displacementMap,me=!!S.emissiveMap,it=!!S.metalnessMap,be=!!S.roughnessMap,Pe=S.anisotropy>0,M=S.clearcoat>0,_=S.dispersion>0,U=S.iridescence>0,V=S.sheen>0,K=S.transmission>0,G=Pe&&!!S.anisotropyMap,xe=M&&!!S.clearcoatMap,oe=M&&!!S.clearcoatNormalMap,Me=M&&!!S.clearcoatRoughnessMap,_e=U&&!!S.iridescenceMap,$=U&&!!S.iridescenceThicknessMap,ee=V&&!!S.sheenColorMap,Ae=V&&!!S.sheenRoughnessMap,ye=!!S.specularMap,he=!!S.specularColorMap,Re=!!S.specularIntensityMap,R=K&&!!S.transmissionMap,ce=K&&!!S.thicknessMap,ie=!!S.gradientMap,se=!!S.alphaMap,J=S.alphaTest>0,Y=!!S.alphaHash,de=!!S.extensions;
		let Ce=Un;
		S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ce=i.toneMapping);
		const tt={
			shaderID:te,shaderType:S.type,
			shaderName:S.name,vertexShader:Xe,
			fragmentShader:Je,defines:S.defines,
			customVertexShaderID:Qe,
			customFragmentShaderID:X,
			isRawShaderMaterial:S.isRawShaderMaterial===!0,
			glslVersion:S.glslVersion,
			precision:p,batching:ge,
			batchingColor:ge&&H._colorsTexture!==null,
			instancing:Le,instancingColor:Le&&H.instanceColor!==null,
			instancingMorph:Le&&H.morphTexture!==null,
			supportsVertexTextures:d,
			outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ei,alphaToCoverage:!!S.alphaToCoverage,
			map:Be,
			matcap:_t,envMap:Fe,
			envMapMode:Fe&&ne.mapping,
			envMapCubeUVHeight:k,aoMap:nt,lightMap:w,bumpMap:ze,
			normalMap:Ge,displacementMap:d&&et,
			emissiveMap:me,normalMapObjectSpace:Ge&&S.normalMapType===bl,
			normalMapTangentSpace:Ge&&S.normalMapType===vl,
			metalnessMap:it,
			roughnessMap:be,anisotropy:Pe,
			anisotropyMap:G,clearcoat:M,
			clearcoatMap:xe,clearcoatNormalMap:oe,
			clearcoatRoughnessMap:Me,
			dispersion:_,iridescence:U,
			iridescenceMap:_e,
			iridescenceThicknessMap:$,
			sheen:V,sheenColorMap:ee,
			sheenRoughnessMap:Ae,specularMap:ye,
			specularColorMap:he,
			specularIntensityMap:Re,transmission:K,
			transmissionMap:R,thicknessMap:ce,gradientMap:ie,
			opaque:S.transparent===!1&&S.blending===gi&&S.alphaToCoverage===!1,
			alphaMap:se,alphaTest:J,alphaHash:Y,combine:S.combine,
			mapUv:Be&&v(S.map.channel),
			aoMapUv:nt&&v(S.aoMap.channel),
			lightMapUv:w&&v(S.lightMap.channel),
			bumpMapUv:ze&&v(S.bumpMap.channel),
			normalMapUv:Ge&&v(S.normalMap.channel),
			displacementMapUv:et&&v(S.displacementMap.channel),
			emissiveMapUv:me&&v(S.emissiveMap.channel),
			metalnessMapUv:it&&v(S.metalnessMap.channel),
			roughnessMapUv:be&&v(S.roughnessMap.channel),
			anisotropyMapUv:G&&v(S.anisotropyMap.channel),
			clearcoatMapUv:xe&&v(S.clearcoatMap.channel),
			clearcoatNormalMapUv:oe&&v(S.clearcoatNormalMap.channel),
			clearcoatRoughnessMapUv:Me&&v(S.clearcoatRoughnessMap.channel),
			iridescenceMapUv:_e&&v(S.iridescenceMap.channel),
			iridescenceThicknessMapUv:$&&v(S.iridescenceThicknessMap.channel),
			sheenColorMapUv:ee&&v(S.sheenColorMap.channel),
			sheenRoughnessMapUv:Ae&&v(S.sheenRoughnessMap.channel),
			specularMapUv:ye&&v(S.specularMap.channel),
			specularColorMapUv:he&&v(S.specularColorMap.channel),
			specularIntensityMapUv:Re&&v(S.specularIntensityMap.channel),
			transmissionMapUv:R&&v(S.transmissionMap.channel),
			thicknessMapUv:ce&&v(S.thicknessMap.channel),
			alphaMapUv:se&&v(S.alphaMap.channel),
			vertexTangents:!!j.attributes.tangent&&(Ge||Pe),
			vertexColors:S.vertexColors,
			vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,
			pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(Be||se),fog:!!W,
			useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,
			flatShading:S.flatShading===!0&&S.wireframe===!1,
			sizeAttenuation:S.sizeAttenuation===!0,
			logarithmicDepthBuffer:u,reversedDepthBuffer:fe,
			skinning:H.isSkinnedMesh===!0,
			morphTargets:j.morphAttributes.position!==void 0,
			morphNormals:j.morphAttributes.normal!==void 0,
			morphColors:j.morphAttributes.color!==void 0,
			morphTargetsCount:Se,
			morphTextureStride:ke,
			numDirLights:b.directional.length,
			numPointLights:b.point.length,
			numSpotLights:b.spot.length,
			numSpotLightMaps:b.spotLightMap.length,
			numRectAreaLights:b.rectArea.length,
			numHemiLights:b.hemi.length,
			numDirLightShadows:b.directionalShadowMap.length,
			numPointLightShadows:b.pointShadowMap.length,
			numSpotLightShadows:b.spotShadowMap.length,
			numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,
			numLightProbes:b.numLightProbes,
			numClippingPlanes:o.numPlanes,
			numClipIntersection:o.numIntersection,
			dithering:S.dithering,
			shadowMapEnabled:i.shadowMap.enabled&&P.length>0,
			shadowMapType:i.shadowMap.type,
			toneMapping:Ce,decodeVideoTexture:Be&&S.map.isVideoTexture===!0&&Ve.getTransfer(S.map.colorSpace)===je,
			decodeVideoTextureEmissive:me&&S.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(S.emissiveMap.colorSpace)===je,
			premultipliedAlpha:S.premultipliedAlpha,
			doubleSided:S.side===pn,flipSided:S.side===wt,
			useDepthPacking:S.depthPacking>=0,
			depthPacking:S.depthPacking||0,
			index0AttributeName:S.index0AttributeName,
			extensionClipCullDistance:de&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),
			extensionMultiDraw:(de&&S.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),
			rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),
			customProgramCacheKey:S.customProgramCacheKey()
		};
		return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt
	}function f(S){
		const b=[];
		if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)b.push(P),b.push(S.defines[P]);
		return S.isRawShaderMaterial===!1&&(T(b,S),E(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()
	}function T(S,b){
		S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)
	}function E(S,b){
		a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)
	}function A(S){
		const b=g[S.type];
		let P;
		if(b){
			const B=en[b];
			P=Zl.clone(B.uniforms)
		}else P=S.uniforms;
		return P
	}function C(S,b){
		let P;
		for(let B=0,H=l.length;B<H;B++){
			const W=l[B];
			if(W.cacheKey===b){
				P=W,++P.usedTimes;
				break
			}
		}return P===void 0&&(P=new Rp(i,b,S,r),l.push(P)),P
	}function y(S){
		if(--S.usedTimes===0){
			const b=l.indexOf(S);
			l[b]=l[l.length-1],l.pop(),S.destroy()
		}
	}function D(S){
		h.remove(S)
	}function z(){
		h.dispose()
	}return{
		getParameters:m,getProgramCacheKey:f,getUniforms:A,acquireProgram:C,releaseProgram:y,releaseShaderCache:D,programs:l,dispose:z
	}
}function Ip(){
	let i=new WeakMap;
	function e(o){
		return i.has(o)
	}function t(o){
		let a=i.get(o);
		return a===void 0&&(a={},i.set(o,a)),a
	}function n(o){
		i.delete(o)
	}function s(o,a,h){
		i.get(o)[a]=h
	}function r(){
		i=new WeakMap
	}return{has:e,get:t,remove:n,update:s,dispose:r}
}function Up(i,e){
	return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id
}function Uo(i,e){
	return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id
}function No(){
	const i=[];
	let e=0;
	const t=[],n=[],s=[];
	function r(){
		e=0,t.length=0,n.length=0,s.length=0
	}function o(u,d,p,g,v,m){
		let f=i[e];
		return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f
	}function a(u,d,p,g,v,m){
		const f=o(u,d,p,g,v,m);
		p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)
	}function h(u,d,p,g,v,m){
		const f=o(u,d,p,g,v,m);
		p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)
	}function c(u,d){
		t.length>1&&t.sort(u||Up),n.length>1&&n.sort(d||Uo),s.length>1&&s.sort(d||Uo)
	}function l(){
		for(let u=e,d=i.length;u<d;u++){
			const p=i[u];
			if(p.id===null)break;
			p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null
		}
	}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:h,finish:l,sort:c}
}function Np(){
	let i=new WeakMap;
	function e(n,s){
		const r=i.get(n);
		let o;
		return r===void 0?(o=new No,i.set(n,[o])):s>=r.length?(o=new No,r.push(o)):o=r[s],o
	}function t(){
		i=new WeakMap
	}return{get:e,dispose:t}
}function Fp(){
	const i={};
	return{get:function(e){
		if(i[e.id]!==void 0)return i[e.id];
		let t;
		switch(e.type){
			case"DirectionalLight":t={direction:new N,color:new Ze};
			break;
			case"SpotLight":t={position:new N,direction:new N,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};
			break;
			case"PointLight":t={position:new N,color:new Ze,distance:0,decay:0};
			break;
			case"HemisphereLight":t={direction:new N,skyColor:new Ze,groundColor:new Ze};
			break;
			case"RectAreaLight":t={color:new Ze,position:new N,halfWidth:new N,halfHeight:new N};
			break
		}return i[e.id]=t,t
	}}
}function Op(){
	const i={};
	return{get:function(e){
		if(i[e.id]!==void 0)return i[e.id];
		let t;
		switch(e.type){
			case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;
			case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;
			case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break
		}return i[e.id]=t,t
	}}
}let Bp=0;
function zp(i,e){
	return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)
}function Gp(i){
	const e=new Fp,t=Op(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};
	for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new ut,o=new ut;
	function a(c){
		let l=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);
		let p=0,g=0,v=0,m=0,f=0,T=0,E=0,A=0,C=0,y=0,D=0;c.sort(zp);
		for(let S=0,b=c.length;S<b;S++){
			const P=c[S],B=P.color,H=P.intensity,W=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;
			if(P.isAmbientLight)l+=B.r*H,u+=B.g*H,d+=B.b*H;
			else if(P.isLightProbe){
				for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],H);D++
			}else if(P.isDirectionalLight){
				const q=e.get(P);
				if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){
					const ne=P.shadow,k=t.get(P);
					k.shadowIntensity=ne.intensity,k.shadowBias=ne.bias,k.shadowNormalBias=ne.normalBias,k.shadowRadius=ne.radius,k.shadowMapSize=ne.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=P.shadow.matrix,T++
				}n.directional[p]=q,p++
			}else if(P.isSpotLight){
				const q=e.get(P);
				q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(B).multiplyScalar(H),q.distance=W,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[v]=q;
				const ne=P.shadow;
				if(P.map&&(n.spotLightMap[C]=P.map,C++,ne.updateMatrices(P),P.castShadow&&y++),n.spotLightMatrix[v]=ne.matrix,P.castShadow){
					const k=t.get(P);
					k.shadowIntensity=ne.intensity,k.shadowBias=ne.bias,k.shadowNormalBias=ne.normalBias,k.shadowRadius=ne.radius,k.shadowMapSize=ne.mapSize,n.spotShadow[v]=k,n.spotShadowMap[v]=j,A++
				}v++
			}else if(P.isRectAreaLight){
				const q=e.get(P);
				q.color.copy(B).multiplyScalar(H),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=q,m++
			}else if(P.isPointLight){
				const q=e.get(P);
				if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){
					const ne=P.shadow,k=t.get(P);
					k.shadowIntensity=ne.intensity,k.shadowBias=ne.bias,k.shadowNormalBias=ne.normalBias,k.shadowRadius=ne.radius,k.shadowMapSize=ne.mapSize,k.shadowCameraNear=ne.camera.near,k.shadowCameraFar=ne.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=P.shadow.matrix,E++
				}n.point[g]=q,g++
			}else if(P.isHemisphereLight){
				const q=e.get(P);
				q.skyColor.copy(P.color).multiplyScalar(H),q.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[f]=q,f++
			}
		}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=u,n.ambient[2]=d;
		const z=n.hash;
		(z.directionalLength!==p||z.pointLength!==g||z.spotLength!==v||z.rectAreaLength!==m||z.hemiLength!==f||z.numDirectionalShadows!==T||z.numPointShadows!==E||z.numSpotShadows!==A||z.numSpotMaps!==C||z.numLightProbes!==D)
		&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=A+C-y,n.spotLightMap.length=C,
			n.numSpotLightShadowsWithMaps=y,n.numLightProbes=D,z.directionalLength=p,z.pointLength=g,z.spotLength=v,z.rectAreaLength=m,z.hemiLength=f,z.numDirectionalShadows=T,z.numPointShadows=E,z.numSpotShadows=A,z.numSpotMaps=C,z.numLightProbes=D,n.version=Bp++
		)
	}function h(c,l){
		let u=0,d=0,p=0,g=0,v=0;
		const m=l.matrixWorldInverse;
		for(let f=0,T=c.length;f<T;f++){
			const E=c[f];
			if(E.isDirectionalLight){
				const A=n.directional[u];
				A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),u++
			}else if(E.isSpotLight){
				const A=n.spot[p];
				A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),p++
			}else if(E.isRectAreaLight){
				const A=n.rectArea[g];
				A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),g++
			}else if(E.isPointLight){
				const A=n.point[d];
				A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(m),d++
			}else if(E.isHemisphereLight){
				const A=n.hemi[v];
				A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(m),v++
			}
		}
	}return{setup:a,setupView:h,state:n}
}function Fo(i){
	const e=new Gp(i),t=[],n=[];
	function s(l){
		c.camera=l,t.length=0,n.length=0
	}function r(l){t.push(l)}
	function o(l){n.push(l)}
	function a(){e.setup(t)}
	function h(l){e.setupView(t,l)}
	const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};
	return{init:s,state:c,setupLights:a,setupLightsView:h,pushLight:r,pushShadow:o}
}function Hp(i){
	let e=new WeakMap;
	function t(s,r=0){
		const o=e.get(s);
		let a;
		return o===void 0?(a=new Fo(i),e.set(s,[a])):r>=o.length?(a=new Fo(i),o.push(a)):a=o[r],a
	}function n(){
		e=new WeakMap
	}return{get:t,dispose:n}
}const kp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Vp(i,e,t){
	let n=new gc;
	const s=new Ne,r=new Ne,o=new lt,a=new oh({depthPacking:gl}),h=new ch,c={},l=t.maxTextureSize,u={[Fn]:wt,[wt]:Fn,[pn]:pn},d=new Sn({defines:{VSM_SAMPLES:8},
		uniforms:{
			shadow_pass:{value:null},
			resolution:{value:new Ne},
			radius:{value:4}},
			vertexShader:kp,
			fragmentShader:Wp
		}),p=d.clone();
	p.defines.HORIZONTAL_PASS=1;
	const g=new Mn;
	g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));
	const v=new Nt(g,d),m=this;
	this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo;
	let f=this.type;
	this.render=function(y,D,z){
		if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;
		const S=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),B=i.state;
		B.setBlending(xn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);
		const H=f!==fn&&this.type===fn,W=f===fn&&this.type!==fn;
		for(let j=0,q=y.length;j<q;j++){
			const ne=y[j],k=ne.shadow;
			if(k===void 0){
				De("WebGLShadowMap:",ne,"has no shadow.");
				continue
			}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;
			s.copy(k.mapSize);const te=k.getFrameExtents();
			if(s.multiply(te),r.copy(k.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/te.x),s.x=r.x*te.x,k.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/te.y),s.y=r.y*te.y,k.mapSize.y=r.y)),k.map===null||H===!0||W===!0){
				const Se=this.type!==fn?{minFilter:It,magFilter:It}:{};k.map!==null&&k.map.dispose(),k.map=new $n(s.x,s.y,Se),k.map.texture.name=ne.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();
				const re=k.getViewportCount();
				for(let Se=0;Se<re;Se++){
					const ke=k.getViewport(Se);
					o.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),B.viewport(o),k.updateMatrices(ne,Se),n=k.getFrustum(),A(D,z,k.camera,ne,this.type)
				}k.isPointLightShadow!==!0&&this.type===fn&&T(k,z),k.needsUpdate=!1
			}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,P)
		};function T(y,D){
			const z=e.update(v);
			d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new $n(s.x,s.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(D,null,z,d,v,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(D,null,z,p,v,null)
		}function E(y,D,z,S){
			let b=null;
			const P=z.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;
			if(P!==void 0)b=P;
			else if(b=z.isPointLight===!0?h:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){
				const B=b.uuid,H=D.uuid;
				let W=c[B];
				W===void 0&&(W={},c[B]=W);
				let j=W[H];
				j===void 0&&(j=b.clone(),W[H]=j,D.addEventListener("dispose",C)),b=j
			}if(b.visible=D.visible,b.wireframe=D.wireframe,S===fn?b.side=D.shadowSide!==null?D.shadowSide:D.side:b.side=D.shadowSide!==null?D.shadowSide:u[D.side],b.alphaMap=D.alphaMap,b.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,b.map=D.map,b.clipShadows=D.clipShadows,b.clippingPlanes=D.clippingPlanes,b.clipIntersection=D.clipIntersection,b.displacementMap=D.displacementMap,b.displacementScale=D.displacementScale,b.displacementBias=D.displacementBias,b.wireframeLinewidth=D.wireframeLinewidth,b.linewidth=D.linewidth,z.isPointLight===!0&&b.isMeshDistanceMaterial===!0){
				const B=i.properties.get(b);
				B.light=z
			}return b
		}function A(y,D,z,S,b){
			if(y.visible===!1)return;
			if(y.layers.test(D.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===fn)&&(!y.frustumCulled||n.intersectsObject(y))){
				y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld);
				const H=e.update(y),W=y.material;
				if(Array.isArray(W)){const j=H.groups;
					for(let q=0,ne=j.length;q<ne;q++){
						const k=j[q],te=W[k.materialIndex];
						if(te&&te.visible){
							const re=E(y,te,S,b);
							y.onBeforeShadow(i,y,D,z,H,re,k),i.renderBufferDirect(z,null,H,re,y,k),y.onAfterShadow(i,y,D,z,H,re,k)
						}
					}
				}else if(W.visible){
					const j=E(y,W,S,b);
					y.onBeforeShadow(i,y,D,z,H,j,null),i.renderBufferDirect(z,null,H,j,y,null),y.onAfterShadow(i,y,D,z,H,j,null)
				}
			}const B=y.children;
			for(let H=0,W=B.length;H<W;H++)A(B[H],D,z,S,b)
		}function C(y){
			y.target.removeEventListener("dispose",C);
			for(const z in c){
				const S=c[z],b=y.target.uuid;
				b in S&&(S[b].dispose(),delete S[b])
			}
		}
	}const Xp={[Er]:yr,[Tr]:Rr,[Ar]:Cr,[bi]:wr,[yr]:Er,[Rr]:Tr,[Cr]:Ar,[wr]:bi};
	function qp(i,e){
		function t(){
			let R=!1;
			const ce=new lt;
			let ie=null;
			const se=new lt(0,0,0,0);
			return{
				setMask:function(J){ie!==J&&!R&&(i.colorMask(J,J,J,J),ie=J)},
				setLocked:function(J){R=J},
				setClear:function(J,Y,de,Ce,tt){tt===!0&&(J*=Ce,Y*=Ce,de*=Ce),ce.set(J,Y,de,Ce),se.equals(ce)===!1&&(i.clearColor(J,Y,de,Ce),se.copy(ce))},
				reset:function(){R=!1,ie=null,se.set(-1,0,0,0)}
			}
		}function n(){
			let R=!1,ce=!1,ie=null,se=null,J=null;
			return{
				setReversed:function(Y){if(ce!==Y){const de=e.get("EXT_clip_control");Y?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),ce=Y;const Ce=J;J=null,this.setClear(Ce)}},
				getReversed:function(){return ce},
				setTest:function(Y){Y?Z(i.DEPTH_TEST):fe(i.DEPTH_TEST)},
				setMask:function(Y){ie!==Y&&!R&&(i.depthMask(Y),ie=Y)},
				setFunc:function(Y){if(ce&&(Y=Xp[Y]),se!==Y){switch(Y){case Er:i.depthFunc(i.NEVER);break;case yr:i.depthFunc(i.ALWAYS);break;case Tr:i.depthFunc(i.LESS);break;case bi:i.depthFunc(i.LEQUAL);break;case Ar:i.depthFunc(i.EQUAL);break;case wr:i.depthFunc(i.GEQUAL);break;case Rr:i.depthFunc(i.GREATER);break;case Cr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=Y}},
				setLocked:function(Y){R=Y},
				setClear:function(Y){J!==Y&&(ce&&(Y=1-Y),i.clearDepth(Y),J=Y)},
				reset:function(){R=!1,ie=null,se=null,J=null,ce=!1}
			}
		}function s(){
			let R=!1,ce=null,ie=null,se=null,J=null,Y=null,de=null,Ce=null,tt=null;
			return{
				setTest:function(qe){R||(qe?Z(i.STENCIL_TEST):fe(i.STENCIL_TEST))},
				setMask:function(qe){ce!==qe&&!R&&(i.stencilMask(qe),ce=qe)},
				setFunc:function(qe,Qt,Gt){(ie!==qe||se!==Qt||J!==Gt)&&(i.stencilFunc(qe,Qt,Gt),ie=qe,se=Qt,J=Gt)},
				setOp:function(qe,Qt,Gt){(Y!==qe||de!==Qt||Ce!==Gt)&&(i.stencilOp(qe,Qt,Gt),Y=qe,de=Qt,Ce=Gt)},
				setLocked:function(qe){R=qe},
				setClear:function(qe){tt!==qe&&(i.clearStencil(qe),tt=qe)},
				reset:function(){R=!1,ce=null,ie=null,se=null,J=null,Y=null,de=null,Ce=null,tt=null}
			}
		}const r=new t,o=new n,a=new s,h=new WeakMap,c=new WeakMap;
		let l={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,E=null,A=null,C=null,y=null,D=new Ze(0,0,0),z=0,S=!1,b=null,P=null,B=null,H=null,W=null;
		const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
		let q=!1,ne=0;
		const k=i.getParameter(i.VERSION);
		k.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(k)[1]),q=ne>=1):k.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),q=ne>=2);
		let te=null,re={};
		const Se=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),Xe=new lt().fromArray(Se),Je=new lt().fromArray(ke);
		function Qe(R,ce,ie,se){
			const J=new Uint8Array(4),Y=i.createTexture();
			i.bindTexture(R,Y),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);
			for(let de=0;de<ie;de++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(ce+de,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);
			return Y
		}const X={};
		X[i.TEXTURE_2D]=Qe(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(bi),ze(!1),Ge(Ba),Z(i.CULL_FACE),nt(xn);
		function Z(R){
			l[R]!==!0&&(i.enable(R),l[R]=!0)
		}function fe(R){
			l[R]!==!1&&(i.disable(R),l[R]=!1)
		}function Le(R,ce){
			return u[R]!==ce?(i.bindFramebuffer(R,ce),u[R]=ce,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ce),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ce),!0):!1
		}function ge(R,ce){
			let ie=p,se=!1;
			if(R){ie=d.get(ce),ie===void 0&&(ie=[],d.set(ce,ie));
				const J=R.textures;
				if(ie.length!==J.length||ie[0]!==i.COLOR_ATTACHMENT0){
					for(let Y=0,de=J.length;Y<de;Y++)ie[Y]=i.COLOR_ATTACHMENT0+Y;
					ie.length=J.length,se=!0
				}
			}else ie[0]!==i.BACK&&(ie[0]=i.BACK,se=!0);
			se&&i.drawBuffers(ie)
		}function Be(R){
			return g!==R?(i.useProgram(R),g=R,!0):!1
		}const _t={
			[Xn]:i.FUNC_ADD,[Vc]:i.FUNC_SUBTRACT,[Xc]:i.FUNC_REVERSE_SUBTRACT
		};
		_t[qc]=i.MIN,_t[Yc]=i.MAX;
		const Fe={[jc]:i.ZERO,[Kc]:i.ONE,[Zc]:i.SRC_COLOR,[Sr]:i.SRC_ALPHA,[nl]:i.SRC_ALPHA_SATURATE,[el]:i.DST_COLOR,[Jc]:i.DST_ALPHA,[$c]:i.ONE_MINUS_SRC_COLOR,[Mr]:i.ONE_MINUS_SRC_ALPHA,[tl]:i.ONE_MINUS_DST_COLOR,[Qc]:i.ONE_MINUS_DST_ALPHA,[il]:i.CONSTANT_COLOR,[sl]:i.ONE_MINUS_CONSTANT_COLOR,[rl]:i.CONSTANT_ALPHA,[al]:i.ONE_MINUS_CONSTANT_ALPHA};
		function nt(R,ce,ie,se,J,Y,de,Ce,tt,qe){
			if(R===xn){
				v===!0&&(fe(i.BLEND),v=!1);
				return
			}if(v===!1&&(Z(i.BLEND),v=!0),R!==Wc){
				if(R!==m||qe!==S){
					if((f!==Xn||A!==Xn)&&(i.blendEquation(i.FUNC_ADD),f=Xn,A=Xn),qe)switch(R){
						case gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;
						case za:i.blendFunc(i.ONE,i.ONE);break;
						case Ga:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;
						case Ha:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;
						default:ct("WebGLState: Invalid blending: ",R);break
					}else switch(R){
						case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;
						case za:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;
						case Ga:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;
						case Ha:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;
						default:ct("WebGLState: Invalid blending: ",R);break
					}T=null,E=null,C=null,y=null,D.set(0,0,0),z=0,m=R,S=qe
				}return
			}J=J||ce,Y=Y||ie,de=de||se,(ce!==f||J!==A)&&(i.blendEquationSeparate(_t[ce],_t[J]),f=ce,A=J),(ie!==T||se!==E||Y!==C||de!==y)&&(i.blendFuncSeparate(Fe[ie],Fe[se],Fe[Y],Fe[de]),T=ie,E=se,C=Y,y=de),(Ce.equals(D)===!1||tt!==z)&&(i.blendColor(Ce.r,Ce.g,Ce.b,tt),D.copy(Ce),z=tt),m=R,S=!1
		}function w(R,ce){
			R.side===pn?fe(i.CULL_FACE):Z(i.CULL_FACE);
			let ie=R.side===wt;ce&&(ie=!ie),ze(ie),R.blending===gi&&R.transparent===!1?nt(xn):nt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);
			const se=R.stencilWrite;
			a.setTest(se),se&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),me(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)
		}function ze(R){
			b!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),b=R)
		}function Ge(R){
			R!==Gc?(Z(i.CULL_FACE),R!==P&&(R===Ba?i.cullFace(i.BACK):R===Hc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),P=R
		}function et(R){
			R!==B&&(q&&i.lineWidth(R),B=R)
		}function me(R,ce,ie){
			R?(Z(i.POLYGON_OFFSET_FILL),(H!==ce||W!==ie)&&(i.polygonOffset(ce,ie),H=ce,W=ie)):fe(i.POLYGON_OFFSET_FILL)
		}function it(R){
			R?Z(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)
		}function be(R){
			R===void 0&&(R=i.TEXTURE0+j-1),te!==R&&(i.activeTexture(R),te=R)
		}function Pe(R,ce,ie){
			ie===void 0&&(te===null?ie=i.TEXTURE0+j-1:ie=te);
			let se=re[ie];
			se===void 0&&(se={type:void 0,texture:void 0},re[ie]=se),(se.type!==R||se.texture!==ce)&&(te!==ie&&(i.activeTexture(ie),te=ie),i.bindTexture(R,ce||X[R]),se.type=R,se.texture=ce)
		}function M(){
			const R=re[te];
			R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)
		}function _(){
			try{i.compressedTexImage2D(...arguments)}catch(R){R("WebGLState:",R)}
		}function U(){
			try{i.compressedTexImage3D(...arguments)}catch(R){R("WebGLState:",R)}
		}function V(){
			try{i.texSubImage2D(...arguments)}catch(R){R("WebGLState:",R)}
		}function K(){
			try{i.texSubImage3D(...arguments)}catch(R){R("WebGLState:",R)}
		}function G(){
			try{i.compressedTexSubImage2D(...arguments)}catch(R){R("WebGLState:",R)}
		}function xe(){
			try{i.compressedTexSubImage3D(...arguments)}catch(R){R("WebGLState:",R)}
		}function oe(){
			try{i.texStorage2D(...arguments)}catch(R){R("WebGLState:",R)}
		}function Me(){
			try{i.texStorage3D(...arguments)}catch(R){R("WebGLState:",R)}
		}function _e(){
			try{i.texImage2D(...arguments)}catch(R){R("WebGLState:",R)}
		}function $(){
			try{i.texImage3D(...arguments)}catch(R){R("WebGLState:",R)}
		}function ee(R){
			Xe.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Xe.copy(R))
		}function Ae(R){
			Je.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Je.copy(R))
		}function ye(R,ce){
			let ie=c.get(ce);
			ie===void 0&&(ie=new WeakMap,c.set(ce,ie));
			let se=ie.get(R);
			se===void 0&&(se=i.getUniformBlockIndex(ce,R.name),ie.set(R,se))
		}function he(R,ce){
			const se=c.get(ce).get(R);
			h.get(ce)!==se&&(i.uniformBlockBinding(ce,se,R.__bindingPointIndex),h.set(ce,se))
		}function Re(){
			i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},te=null,re={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,E=null,A=null,C=null,y=null,D=new Ze(0,0,0),z=0,S=!1,b=null,P=null,B=null,H=null,W=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:fe,bindFramebuffer:Le,drawBuffers:ge,useProgram:Be,setBlending:nt,setMaterial:w,setFlipSided:ze,setCullFace:Ge,setLineWidth:et,setPolygonOffset:me,setScissorTest:it,activeTexture:be,bindTexture:Pe,unbindTexture:M,compressedTexImage2D:_,compressedTexImage3D:U,texImage2D:_e,texImage3D:$,updateUBOMapping:ye,uniformBlockBinding:he,texStorage2D:oe,texStorage3D:Me,texSubImage2D:V,texSubImage3D:K,compressedTexSubImage2D:G,compressedTexSubImage3D:xe,scissor:ee,viewport:Ae,reset:Re}
		}function Yp(i,e,t,n,s,r,o){
			const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,l=new WeakMap;
			let u;
			const d=new WeakMap;
			let p=!1;
			try{
				p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null
			}catch{}
			function g(M,_){
				return p?new OffscreenCanvas(M,_):qi("canvas")
			}function v(M,_,U){
				let V=1;
				const K=Pe(M);
				if((K.width>U||K.height>U)&&(V=U/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){
					const G=Math.floor(V*K.width),xe=Math.floor(V*K.height);
					u===void 0&&(u=g(G,xe));const oe=_?g(G,xe):u;
					return oe.width=G,oe.height=xe,oe.getContext("2d").drawImage(M,0,0,G,xe),De("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+G+"x"+xe+")."),oe
				}else return"data"in M&&De("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),M;
				return M
			}function m(M){
				return M.generateMipmaps
			}function f(M){
				i.generateMipmap(M)
			}function T(M){
				return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D
			}function E(M,_,U,V,K=!1){
				if(M!==null){
					if(i[M]!==void 0)return i[M];
					De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")
				}let G=_;
				if(_===i.RED&&(U===i.FLOAT&&(G=i.R32F),U===i.HALF_FLOAT&&(G=i.R16F),U===i.UNSIGNED_BYTE&&(G=i.R8)),_===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(G=i.R8UI),U===i.UNSIGNED_SHORT&&(G=i.R16UI),U===i.UNSIGNED_INT&&(G=i.R32UI),U===i.BYTE&&(G=i.R8I),U===i.SHORT&&(G=i.R16I),U===i.INT&&(G=i.R32I)),_===i.RG&&(U===i.FLOAT&&(G=i.RG32F),U===i.HALF_FLOAT&&(G=i.RG16F),U===i.UNSIGNED_BYTE&&(G=i.RG8)),_===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(G=i.RG8UI),U===i.UNSIGNED_SHORT&&(G=i.RG16UI),U===i.UNSIGNED_INT&&(G=i.RG32UI),U===i.BYTE&&(G=i.RG8I),U===i.SHORT&&(G=i.RG16I),U===i.INT&&(G=i.RG32I)),_===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(G=i.RGB8UI),U===i.UNSIGNED_SHORT&&(G=i.RGB16UI),U===i.UNSIGNED_INT&&(G=i.RGB32UI),U===i.BYTE&&(G=i.RGB8I),U===i.SHORT&&(G=i.RGB16I),U===i.INT&&(G=i.RGB32I)),_===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),U===i.UNSIGNED_INT&&(G=i.RGBA32UI),U===i.BYTE&&(G=i.RGBA8I),U===i.SHORT&&(G=i.RGBA16I),U===i.INT&&(G=i.RGBA32I)),_===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),_===i.RGBA){const xe=K?Ds:Ve.getTransfer(V);U===i.FLOAT&&(G=i.RGBA32F),U===i.HALF_FLOAT&&(G=i.RGBA16F),U===i.UNSIGNED_BYTE&&(G=xe===je?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G
			}function A(M,_){
				let U;
				return M?_===null||_===Kn||_===Wi?U=i.DEPTH24_STENCIL8:_===_n?U=i.DEPTH32F_STENCIL8:_===ki&&(U=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Kn||_===Wi?U=i.DEPTH_COMPONENT24:_===_n?U=i.DEPTH_COMPONENT32F:_===ki&&(U=i.DEPTH_COMPONENT16),U
			}function C(M,_){
				return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==It&&M.minFilter!==zt?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1
			}function y(M){
				const _=M.target;
				_.removeEventListener("dispose",y),z(_),_.isVideoTexture&&l.delete(_)
			}function D(M){
				const _=M.target;_.removeEventListener("dispose",D),b(_)
			}function z(M){
				const _=n.get(M);
				if(_.__webglInit===void 0)return;
				const U=M.source,V=d.get(U);
				if(V){
					const K=V[_.__cacheKey];
					K.usedTimes--,K.usedTimes===0&&S(M),Object.keys(V).length===0&&d.delete(U)
				}n.remove(M)
			}function S(M){
				const _=n.get(M);
				i.deleteTexture(_.__webglTexture);
				const U=M.source,V=d.get(U);
				delete V[_.__cacheKey],o.memory.textures--
			}function b(M){
				const _=n.get(M);
				if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){
					if(Array.isArray(_.__webglFramebuffer[V]))for(let K=0;K<_.__webglFramebuffer[V].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[V][K]);
					else i.deleteFramebuffer(_.__webglFramebuffer[V]);
					_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[V])
				}else{
					if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)i.deleteFramebuffer(_.__webglFramebuffer[V]);
					else i.deleteFramebuffer(_.__webglFramebuffer);
					if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)
					}const U=M.textures;
				for(let V=0,K=U.length;V<K;V++){
					const G=n.get(U[V]);
					G.__webglTexture&&(i.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(U[V])}n.remove(M)
				}let P=0;
				function B(){
					P=0
				}function H(){
					const M=P;
					return M>=s.maxTextures&&De("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),P+=1,M
				}function W(M){
					const _=[];
					return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()
				}function j(M,_){
					const U=n.get(M);
					if(M.isVideoTexture&&it(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&U.__version!==M.version){
						const V=M.image;
						if(V===null)De("WebGLRenderer: Texture marked for update but no image data found.");
						else if(V.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");
						else{
							X(U,M,_);
							return
						}
					}else M.isExternalTexture&&(U.__webglTexture=M.sourceTexture?M.sourceTexture:null);
					t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+_)
				}function q(M,_){
					const U=n.get(M);
					if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){
						X(U,M,_);return
					}else M.isExternalTexture&&(U.__webglTexture=M.sourceTexture?M.sourceTexture:null);
					t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+_)
				}function ne(M,_){
					const U=n.get(M);
					if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){
						X(U,M,_);
						return
					}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+_)
				}function k(M,_){
					const U=n.get(M);
					if(M.version>0&&U.__version!==M.version){Z(U,M,_);
						return
					}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+_)
				}const te={
					[Lr]:i.REPEAT,[mn]:i.CLAMP_TO_EDGE,[Ir]:i.MIRRORED_REPEAT
				},re={
					[It]:i.NEAREST,[_l]:i.NEAREST_MIPMAP_NEAREST,
					[es]:i.NEAREST_MIPMAP_LINEAR,
					[zt]:i.LINEAR,
					[Vs]:i.LINEAR_MIPMAP_NEAREST,
					[Yn]:i.LINEAR_MIPMAP_LINEAR
				},Se={
					[Sl]:i.NEVER,[wl]:i.ALWAYS,[Ml]:i.LESS,[lc]:i.LEQUAL,
					[El]:i.EQUAL,[Al]:i.GEQUAL,[yl]:i.GREATER,[Tl]:i.NOTEQUAL
				};
				function ke(M,_){
					if(_.type===_n&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===zt||_.magFilter===Vs||_.magFilter===es||_.magFilter===Yn||_.minFilter===zt||_.minFilter===Vs||_.minFilter===es||_.minFilter===Yn)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,te[_.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,te[_.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,te[_.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,re[_.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,re[_.minFilter]),_.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,Se[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===It||_.minFilter!==es&&_.minFilter!==Yn||_.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}
				}function Xe(M,_){
					let U=!1;
					M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",y));
					const V=_.source;let K=d.get(V);
					K===void 0&&(K={},d.set(V,K));const G=W(_);
					if(G!==M.__cacheKey){
						K[G]===void 0&&(K[G]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),K[G].usedTimes++;const xe=K[M.__cacheKey];xe!==void 0&&(K[M.__cacheKey].usedTimes--,xe.usedTimes===0&&S(_)),M.__cacheKey=G,M.__webglTexture=K[G].texture
					}return U
				}function Je(M,_,U){
					return Math.floor(Math.floor(M/U)/_)
				}function Qe(M,_,U,V){
					const G=M.updateRanges;
					if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,U,V,_.data);else{G.sort(($,ee)=>$.start-ee.start);let xe=0;for(let $=1;$<G.length;$++){const ee=G[xe],Ae=G[$],ye=ee.start+ee.count,he=Je(Ae.start,_.width,4),Re=Je(ee.start,_.width,4);Ae.start<=ye+1&&he===Re&&Je(Ae.start+Ae.count-1,_.width,4)===he?ee.count=Math.max(ee.count,Ae.start+Ae.count-ee.start):(++xe,G[xe]=Ae)}G.length=xe+1;const oe=i.getParameter(i.UNPACK_ROW_LENGTH),Me=i.getParameter(i.UNPACK_SKIP_PIXELS),_e=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let $=0,ee=G.length;$<ee;$++){const Ae=G[$],ye=Math.floor(Ae.start/4),he=Math.ceil(Ae.count/4),Re=ye%_.width,R=Math.floor(ye/_.width),ce=he,ie=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(i.UNPACK_SKIP_ROWS,R),t.texSubImage2D(i.TEXTURE_2D,0,Re,R,ce,ie,U,V,_.data)}M.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}
				}function X(M,_,U){
					let V=i.TEXTURE_2D;
					(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=i.TEXTURE_3D);const K=Xe(M,_),G=_.source;t.bindTexture(V,M.__webglTexture,i.TEXTURE0+U);const xe=n.get(G);if(G.version!==xe.__version||K===!0){t.activeTexture(i.TEXTURE0+U);const oe=Ve.getPrimaries(Ve.workingColorSpace),Me=_.colorSpace===Ln?null:Ve.getPrimaries(_.colorSpace),_e=_.colorSpace===Ln||oe===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let $=v(_.image,!1,s.maxTextureSize);$=be(_,$);const ee=r.convert(_.format,_.colorSpace),Ae=r.convert(_.type);let ye=E(_.internalFormat,ee,Ae,_.colorSpace,_.isVideoTexture);ke(V,_);let he;const Re=_.mipmaps,R=_.isVideoTexture!==!0,ce=xe.__version===void 0||K===!0,ie=G.dataReady,se=C(_,$);if(_.isDepthTexture)ye=A(_.format===Xi,_.type),ce&&(R?t.texStorage2D(i.TEXTURE_2D,1,ye,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,ye,$.width,$.height,0,ee,Ae,null));else if(_.isDataTexture)if(Re.length>0){R&&ce&&t.texStorage2D(i.TEXTURE_2D,se,ye,Re[0].width,Re[0].height);for(let J=0,Y=Re.length;J<Y;J++)he=Re[J],R?ie&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,he.width,he.height,ee,Ae,he.data):t.texImage2D(i.TEXTURE_2D,J,ye,he.width,he.height,0,ee,Ae,he.data);_.generateMipmaps=!1}else R?(ce&&t.texStorage2D(i.TEXTURE_2D,se,ye,$.width,$.height),ie&&Qe(_,$,ee,Ae)):t.texImage2D(i.TEXTURE_2D,0,ye,$.width,$.height,0,ee,Ae,$.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){R&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,ye,Re[0].width,Re[0].height,$.depth);for(let J=0,Y=Re.length;J<Y;J++)if(he=Re[J],_.format!==Zt)if(ee!==null)if(R){if(ie)if(_.layerUpdates.size>0){const de=fo(he.width,he.height,_.format,_.type);for(const Ce of _.layerUpdates){const tt=he.data.subarray(Ce*de/he.data.BYTES_PER_ELEMENT,(Ce+1)*de/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Ce,he.width,he.height,1,ee,tt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,$.depth,ee,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ye,he.width,he.height,$.depth,0,he.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?ie&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,$.depth,ee,Ae,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,ye,he.width,he.height,$.depth,0,ee,Ae,he.data)}else{R&&ce&&t.texStorage2D(i.TEXTURE_2D,se,ye,Re[0].width,Re[0].height);for(let J=0,Y=Re.length;J<Y;J++)he=Re[J],_.format!==Zt?ee!==null?R?ie&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,he.width,he.height,ee,he.data):t.compressedTexImage2D(i.TEXTURE_2D,J,ye,he.width,he.height,0,he.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?ie&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,he.width,he.height,ee,Ae,he.data):t.texImage2D(i.TEXTURE_2D,J,ye,he.width,he.height,0,ee,Ae,he.data)}else if(_.isDataArrayTexture)if(R){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,ye,$.width,$.height,$.depth),ie)if(_.layerUpdates.size>0){const J=fo($.width,$.height,_.format,_.type);for(const Y of _.layerUpdates){const de=$.data.subarray(Y*J/$.data.BYTES_PER_ELEMENT,(Y+1)*J/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,$.width,$.height,1,ee,Ae,de)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ee,Ae,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,$.width,$.height,$.depth,0,ee,Ae,$.data);else if(_.isData3DTexture)R?(ce&&t.texStorage3D(i.TEXTURE_3D,se,ye,$.width,$.height,$.depth),ie&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ee,Ae,$.data)):t.texImage3D(i.TEXTURE_3D,0,ye,$.width,$.height,$.depth,0,ee,Ae,$.data);else if(_.isFramebufferTexture){if(ce)if(R)t.texStorage2D(i.TEXTURE_2D,se,ye,$.width,$.height);else{let J=$.width,Y=$.height;for(let de=0;de<se;de++)t.texImage2D(i.TEXTURE_2D,de,ye,J,Y,0,ee,Ae,null),J>>=1,Y>>=1}}else if(Re.length>0){if(R&&ce){const J=Pe(Re[0]);t.texStorage2D(i.TEXTURE_2D,se,ye,J.width,J.height)}for(let J=0,Y=Re.length;J<Y;J++)he=Re[J],R?ie&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ee,Ae,he):t.texImage2D(i.TEXTURE_2D,J,ye,ee,Ae,he);_.generateMipmaps=!1}else if(R){if(ce){const J=Pe($);t.texStorage2D(i.TEXTURE_2D,se,ye,J.width,J.height)}ie&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee,Ae,$)}else t.texImage2D(i.TEXTURE_2D,0,ye,ee,Ae,$);m(_)&&f(V),xe.__version=G.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version
				}function Z(M,_,U){
					if(_.image.length!==6)return;const V=Xe(M,_),K=_.source;
					t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+U);
					const G=n.get(K);
					if(K.version!==G.__version||V===!0){
						t.activeTexture(i.TEXTURE0+U);
						const xe=Ve.getPrimaries(Ve.workingColorSpace),oe=_.colorSpace===Ln?null:Ve.getPrimaries(_.colorSpace),Me=_.colorSpace===Ln||xe===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);
						const _e=_.isCompressedTexture||_.image[0].isCompressedTexture,$=_.image[0]&&_.image[0].isDataTexture,ee=[];
						for(let Y=0;Y<6;Y++)!_e&&!$?ee[Y]=v(_.image[Y],!0,s.maxCubemapSize):ee[Y]=$?_.image[Y].image:_.image[Y],ee[Y]=be(_,ee[Y]);
						const Ae=ee[0],ye=r.convert(_.format,_.colorSpace),he=r.convert(_.type),Re=E(_.internalFormat,ye,he,_.colorSpace),R=_.isVideoTexture!==!0,ce=G.__version===void 0||V===!0,ie=K.dataReady;
						let se=C(_,Ae);ke(i.TEXTURE_CUBE_MAP,_);
						let J;
						if(_e){
							R&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Re,Ae.width,Ae.height);
							for(let Y=0;Y<6;Y++){
								J=ee[Y].mipmaps;
								for(let de=0;de<J.length;de++){
									const Ce=J[de];
									_.format!==Zt?ye!==null?R?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,0,0,Ce.width,Ce.height,ye,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,Re,Ce.width,Ce.height,0,Ce.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,0,0,Ce.width,Ce.height,ye,he,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,Re,Ce.width,Ce.height,0,ye,he,Ce.data)
								}
							}
						}else{
							if(J=_.mipmaps,R&&ce){
								J.length>0&&se++;
								const Y=Pe(ee[0]);
								t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Re,Y.width,Y.height)
							}for(let Y=0;Y<6;Y++)if($){
								R?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ee[Y].width,ee[Y].height,ye,he,ee[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Re,ee[Y].width,ee[Y].height,0,ye,he,ee[Y].data);
								for(let de=0;de<J.length;de++){
									const tt=J[de].image[Y].image;
									R?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,0,0,tt.width,tt.height,ye,he,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,Re,tt.width,tt.height,0,ye,he,tt.data)
								}
							}else{
								R?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ye,he,ee[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Re,ye,he,ee[Y]);
								for(let de=0;de<J.length;de++){
									const Ce=J[de];R?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,0,0,ye,he,Ce.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,Re,ye,he,Ce.image[Y])
								}
							}
						}m(_)&&f(i.TEXTURE_CUBE_MAP),G.__version=K.version,_.onUpdate&&_.onUpdate(_)
					}M.__version=_.version
				}function fe(M,_,U,V,K,G){
					const xe=r.convert(U.format,U.colorSpace),oe=r.convert(U.type),Me=E(U.internalFormat,xe,oe,U.colorSpace),_e=n.get(_),$=n.get(U);
					if($.__renderTarget=_,!_e.__hasExternalTextures){
						const ee=Math.max(1,_.width>>G),Ae=Math.max(1,_.height>>G);
						K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,G,Me,ee,Ae,_.depth,0,xe,oe,null):t.texImage2D(K,G,Me,ee,Ae,0,xe,oe,null)
					}t.bindFramebuffer(i.FRAMEBUFFER,M),me(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,K,$.__webglTexture,0,et(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,K,$.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)
				}function Le(M,_,U){
					if(i.bindRenderbuffer(i.RENDERBUFFER,M),_.depthBuffer){
						const V=_.depthTexture,K=V&&V.isDepthTexture?V.type:null,G=A(_.stencilBuffer,K),xe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=et(_);
						me(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,G,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,G,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,G,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,M)
					}else{
						const V=_.textures;
						for(let K=0;K<V.length;K++){
							const G=V[K],xe=r.convert(G.format,G.colorSpace),oe=r.convert(G.type),Me=E(G.internalFormat,xe,oe,G.colorSpace),_e=et(_);
							U&&me(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,Me,_.width,_.height):me(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,Me,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Me,_.width,_.height)
						}
					}i.bindRenderbuffer(i.RENDERBUFFER,null)
				}function ge(M,_){
					if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");
					if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
					const V=n.get(_.depthTexture);
					V.__renderTarget=_,(!V.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);
					const K=V.__webglTexture,G=et(_);
					if(_.depthTexture.format===Vi)me(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);
					else if(_.depthTexture.format===Xi)me(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);
					else throw new Error("Unknown depthTexture format")
				}function Be(M){
					const _=n.get(M),U=M.isWebGLCubeRenderTarget===!0;
					if(_.__boundDepthTexture!==M.depthTexture){
						const V=M.depthTexture;
						if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){
							const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",K)};
							V.addEventListener("dispose",K),_.__depthDisposeCallback=K
						}_.__boundDepthTexture=V
					}if(M.depthTexture&&!_.__autoAllocateDepthBuffer){
						if(U)throw new Error("target.depthTexture not supported in Cube render targets");
						const V=M.texture.mipmaps;V&&V.length>0?ge(_.__webglFramebuffer[0],M):ge(_.__webglFramebuffer,M)
					}else if(U){
						_.__webglDepthbuffer=[];
						for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=i.createRenderbuffer(),Le(_.__webglDepthbuffer[V],M,!1);
						else{
							const K=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[V];
							i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,G)
						}
					}else{
						const V=M.texture.mipmaps;
						if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Le(_.__webglDepthbuffer,M,!1);
						else{
							const K=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer;
							i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,G)
						}
					}t.bindFramebuffer(i.FRAMEBUFFER,null)
				}function _t(M,_,U){
					const V=n.get(M);_!==void 0&&fe(V.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Be(M)
				}function Fe(M){
					const _=M.texture,U=n.get(M),V=n.get(_);
					M.addEventListener("dispose",D);
					const K=M.textures,G=M.isWebGLCubeRenderTarget===!0,xe=K.length>1;
					if(xe||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=_.version,o.memory.textures++),G){
						U.__webglFramebuffer=[];
						for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){
							U.__webglFramebuffer[oe]=[];
							for(let Me=0;Me<_.mipmaps.length;Me++)U.__webglFramebuffer[oe][Me]=i.createFramebuffer()
						}else U.__webglFramebuffer[oe]=i.createFramebuffer()
					}else{
						if(_.mipmaps&&_.mipmaps.length>0){
							U.__webglFramebuffer=[];
							for(let oe=0;oe<_.mipmaps.length;oe++)U.__webglFramebuffer[oe]=i.createFramebuffer()
						}else U.__webglFramebuffer=i.createFramebuffer();
						if(xe)for(let oe=0,Me=K.length;oe<Me;oe++){
							const _e=n.get(K[oe]);
							_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),o.memory.textures++)
						}if(M.samples>0&&me(M)===!1){
							U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);
							for(let oe=0;oe<K.length;oe++){
								const Me=K[oe];
								U.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[oe]);
								const _e=r.convert(Me.format,Me.colorSpace),$=r.convert(Me.type),ee=E(Me.internalFormat,_e,$,Me.colorSpace,M.isXRRenderTarget===!0),Ae=et(M);
								i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,ee,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,U.__webglColorRenderbuffer[oe])
							}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(U.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)
						}
					}if(G){
						t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),ke(i.TEXTURE_CUBE_MAP,_);
						for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)fe(U.__webglFramebuffer[oe][Me],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me);
						else fe(U.__webglFramebuffer[oe],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(_)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()
					}else if(xe){
						for(let oe=0,Me=K.length;oe<Me;oe++){
							const _e=K[oe],$=n.get(_e);
							let ee=i.TEXTURE_2D;
							(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ee=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,$.__webglTexture),ke(ee,_e),fe(U.__webglFramebuffer,M,_e,i.COLOR_ATTACHMENT0+oe,ee,0),m(_e)&&f(ee)
						}t.unbindTexture()
					}else{
						let oe=i.TEXTURE_2D;
						if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(oe=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,V.__webglTexture),ke(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)fe(U.__webglFramebuffer[Me],M,_,i.COLOR_ATTACHMENT0,oe,Me);
						else fe(U.__webglFramebuffer,M,_,i.COLOR_ATTACHMENT0,oe,0);
						m(_)&&f(oe),t.unbindTexture()
					}M.depthBuffer&&Be(M)
				}function nt(M){
					const _=M.textures;
					for(let U=0,V=_.length;U<V;U++){
						const K=_[U];
						if(m(K)){
							const G=T(M),xe=n.get(K).__webglTexture;
							t.bindTexture(G,xe),f(G),t.unbindTexture()
						}
					}
				}const w=[],ze=[];
				function Ge(M){
					if(M.samples>0){
						if(me(M)===!1){
							const _=M.textures,U=M.width,V=M.height;
							let K=i.COLOR_BUFFER_BIT;
							const G=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(M),oe=_.length>1;
							if(oe)for(let _e=0;_e<_.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);
							t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);
							const Me=M.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);
							for(let _e=0;_e<_.length;_e++){
								if(M.resolveDepthBuffer&&(M.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),oe){
									i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[_e]);
									const $=n.get(_[_e]).__webglTexture;
									i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)
								}i.blitFramebuffer(0,0,U,V,0,0,U,V,K,i.NEAREST),h===!0&&(w.length=0,ze.length=0,w.push(i.COLOR_ATTACHMENT0+_e),M.depthBuffer&&M.resolveDepthBuffer===!1&&(w.push(G),ze.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,w))
							}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let _e=0;_e<_.length;_e++){
								t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,xe.__webglColorRenderbuffer[_e]);
								const $=n.get(_[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,$,0)
							}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)
						}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&h){
							const _=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;
							i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])
						}
					}
				}function et(M){
					return Math.min(s.maxSamples,M.samples)
				}function me(M){
					const _=n.get(M);
					return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1
				}function it(M){
					const _=o.render.frame;l.get(M)!==_&&(l.set(M,_),M.update())
				}function be(M,_){
					const U=M.colorSpace,V=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||U!==Ei&&U!==Ln&&(Ve.getTransfer(U)===je?(V!==Zt||K!==vn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",U)),_
				}function Pe(M){
					return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=ne,this.setTextureCube=k,this.rebindTextures=_t,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=me
				}function jp(i,e){
					function t(n,s=Ln){
						let r;
						const o=Ve.getTransfer(s);
						if(n===vn)return i.UNSIGNED_BYTE;
						if(n===ma)return i.UNSIGNED_SHORT_4_4_4_4;
						if(n===_a)return i.UNSIGNED_SHORT_5_5_5_1;
						if(n===sc)return i.UNSIGNED_INT_5_9_9_9_REV;
						if(n===rc)return i.UNSIGNED_INT_10F_11F_11F_REV;
						if(n===nc)return i.BYTE;
						if(n===ic)return i.SHORT;
						if(n===ki)return i.UNSIGNED_SHORT;
						if(n===pa)return i.INT;
						if(n===Kn)return i.UNSIGNED_INT;
						if(n===_n)return i.FLOAT;
						if(n===Ti)return i.HALF_FLOAT;
						if(n===ac)return i.ALPHA;
						if(n===oc)return i.RGB;
						if(n===Zt)return i.RGBA;
						if(n===Vi)return i.DEPTH_COMPONENT;
						if(n===Xi)return i.DEPTH_STENCIL;
						if(n===cc)return i.RED;
						if(n===xa)return i.RED_INTEGER;
						if(n===ga)return i.RG;
						if(n===va)return i.RG_INTEGER;
						if(n===ba)return i.RGBA_INTEGER;
						if(n===Es||n===ys||n===Ts||n===As)if(o===je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){
							if(n===Es)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
							if(n===ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
							if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
							if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
						}else return null;
						else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){
							if(n===Es)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
							if(n===ys)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
							if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
							if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT
						}else return null;
						if(n===Ur||n===Nr||n===Fr||n===Or)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){
							if(n===Ur)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
							if(n===Nr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
							if(n===Fr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
							if(n===Or)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
						}else return null;
						if(n===Br||n===zr||n===Gr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){
							if(n===Br||n===zr)return o===je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;
							if(n===Gr)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC
						}else return null;
						if(n===Hr||n===kr||n===Wr||n===Vr||n===Xr||n===qr||n===Yr||n===jr||n===Kr||n===Zr||n===$r||n===Jr||n===Qr||n===ea)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){
							if(n===Hr)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;
							if(n===kr)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;
							if(n===Wr)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;
							if(n===Vr)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;
							if(n===Xr)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;
							if(n===qr)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;
							if(n===Yr)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;
							if(n===jr)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;
							if(n===Kr)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;
							if(n===Zr)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;
							if(n===$r)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;
							if(n===Jr)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;
							if(n===Qr)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;
							if(n===ea)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR
						}else return null;
						if(n===ta||n===na||n===ia)if(r=e.get("EXT_texture_compression_bptc"),r!==null){
							if(n===ta)return o===je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
							if(n===na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
							if(n===ia)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT
						}else return null;
						if(n===sa||n===ra||n===aa||n===oa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){
							if(n===sa)return r.COMPRESSED_RED_RGTC1_EXT;
							if(n===ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
							if(n===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
							if(n===oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
						}else return null;
						return n===Wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null
					}return{convert:t}
				}const Kp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class $p{
	constructor(){
		this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0
	}init(e,t){
		if(this.texture===null){
			const n=new bc(e.texture);
			(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n
		}
	}getMesh(e){
		if(this.texture!==null&&this.mesh===null){
			const t=e.cameras[0].viewport,n=new Sn({vertexShader:Kp,fragmentShader:Zp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});
			this.mesh=new Nt(new Bs(20,20),n)
		}return this.mesh
	}reset(){
		this.texture=null,this.mesh=null
	}getDepthTexture(){
		return this.texture
	}
}class Jp extends Jn{
	constructor(e,t){
		super();
		const n=this;
		let s=null,r=1,o=null,a="local-floor",h=1,c=null,l=null,u=null,d=null,p=null,g=null;
		const v=typeof XRWebGLBinding<"u",m=new $p,f={},T=t.getContextAttributes();
		let E=null,A=null;
		const C=[],y=[],D=new Ne;
		let z=null;const S=new Bt;
		S.viewport=new lt;
		const b=new Bt;
		b.viewport=new lt;
		const P=[S,b],B=new ph;
		let H=null,W=null;
		this.cameraAutoUpdate=!0,
		this.enabled=!1,this.isPresenting=!1,
		this.getController=function(X){
			let Z=C[X];return Z===void 0&&(Z=new fr,C[X]=Z),Z.getTargetRaySpace()
		},this.getControllerGrip=function(X){
			let Z=C[X];
			return Z===void 0&&(Z=new fr,C[X]=Z),Z.getGripSpace()
		},this.getHand=function(X){
			let Z=C[X];
			return Z===void 0&&(Z=new fr,C[X]=Z),Z.getHandSpace()
		};
		function j(X){
			const Z=y.indexOf(X.inputSource);
			if(Z===-1)return;
			const fe=C[Z];
			fe!==void 0&&(fe.update(X.inputSource,X.frame,c||o),fe.dispatchEvent({type:X.type,data:X.inputSource}))
		}function q(){
			s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ne);
			for(let X=0;X<C.length;X++){
				const Z=y[X];
				Z!==null&&(y[X]=null,C[X].disconnect(Z))
			}H=null,W=null,m.reset();
			for(const X in f)delete f[X];
			e.setRenderTarget(E),p=null,d=null,u=null,s=null,A=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})
		}this.setFramebufferScaleFactor=function(X){
			r=X,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")
		},this.setReferenceSpaceType=function(X){
			a=X,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")
		},this.getReferenceSpace=function(){
			return c||o
		},this.setReferenceSpace=function(X){c=X},
		this.getBaseLayer=function(){
			return d!==null?d:p
		},this.getBinding=function(){
			return u===null&&v&&(u=new XRWebGLBinding(s,t)),u
		},this.getFrame=function(){return g},
		this.getSession=function(){return s},
		this.setSession=async function(X){
			if(s=X,s!==null){
				if(E=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ne),T.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){
					let fe=null,Le=null,ge=null;
					T.depth&&(ge=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=T.stencil?Xi:Vi,Le=T.stencil?Wi:Kn);
					const Be={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};
					u=this.getBinding(),d=u.createProjectionLayer(Be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new $n(d.textureWidth,d.textureHeight,{format:Zt,type:vn,depthTexture:new vc(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})
				}else{
					const fe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};
					p=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new $n(p.framebufferWidth,p.framebufferHeight,{format:Zt,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})
				}A.isXRRenderTarget=!0,this.setFoveation(h),c=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})
			}
		},this.getEnvironmentBlendMode=function(){
			if(s!==null)return s.environmentBlendMode
		},this.getDepthTexture=function(){
			return m.getDepthTexture()
		};
		function ne(X){
			for(let Z=0;Z<X.removed.length;Z++){
				const fe=X.removed[Z],Le=y.indexOf(fe);
				Le>=0&&(y[Le]=null,C[Le].disconnect(fe))
			}for(let Z=0;Z<X.added.length;Z++){
				const fe=X.added[Z];let Le=y.indexOf(fe);
				if(Le===-1){
					for(let Be=0;Be<C.length;Be++)if(Be>=y.length){y.push(fe),Le=Be;
						break
					}else if(y[Be]===null){
						y[Be]=fe,Le=Be;
						break
					}if(Le===-1)break
				}const ge=C[Le];
				ge&&ge.connect(fe)
			}
		}const k=new N,te=new N;
		function re(X,Z,fe){
			k.setFromMatrixPosition(Z.matrixWorld),te.setFromMatrixPosition(fe.matrixWorld);const Le=k.distanceTo(te),ge=Z.projectionMatrix.elements,Be=fe.projectionMatrix.elements,_t=ge[14]/(ge[10]-1),Fe=ge[14]/(ge[10]+1),nt=(ge[9]+1)/ge[5],w=(ge[9]-1)/ge[5],ze=(ge[8]-1)/ge[0],Ge=(Be[8]+1)/Be[0],et=_t*ze,me=_t*Ge,it=Le/(-ze+Ge),be=it*-ze;if(Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(be),X.translateZ(it),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ge[10]===-1)X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Pe=_t+it,M=Fe+it,_=et-be,U=me+(Le-be),V=nt*Fe/M*Pe,K=w*Fe/M*Pe;X.projectionMatrix.makePerspective(_,U,V,K,Pe,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}
		}function Se(X,Z){
			Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Z=X.near,fe=X.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),B.near=b.near=S.near=Z,B.far=b.far=S.far=fe,(H!==B.near||W!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),H=B.near,W=B.far),B.layers.mask=X.layers.mask|6,S.layers.mask=B.layers.mask&3,b.layers.mask=B.layers.mask&5;const Le=X.parent,ge=B.cameras;Se(B,Le);for(let Be=0;Be<ge.length;Be++)Se(ge[Be],Le);ge.length===2?re(B,S,b):B.projectionMatrix.copy(S.projectionMatrix),ke(X,B,Le)};
		function ke(X,Z,fe){
			fe===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(fe.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ca*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&p===null))return h},this.setFoveation=function(X){h=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(X){return f[X]};let Xe=null;
		function Je(X,Z){
			if(l=Z.getViewerPose(c||o),g=Z,l!==null){
				const fe=l.views;
				p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));
				let Le=!1;fe.length!==B.cameras.length&&(B.cameras.length=0,Le=!0);
				for(let Fe=0;Fe<fe.length;Fe++){
					const nt=fe[Fe];let w=null;
					if(p!==null)w=p.getViewport(nt);
					else{
						const Ge=u.getViewSubImage(d,nt);w=Ge.viewport,Fe===0&&(e.setRenderTargetTextures(A,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(A))
					}let ze=P[Fe];
					ze===void 0&&(ze=new Bt,ze.layers.enable(Fe),ze.viewport=new lt,P[Fe]=ze),ze.matrix.fromArray(nt.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(nt.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(w.x,w.y,w.width,w.height),Fe===0&&(B.matrix.copy(ze.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Le===!0&&B.cameras.push(ze)
				}const ge=s.enabledFeatures;
				if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){
					u=n.getBinding();
					const Fe=u.getDepthInformation(fe[0]);
					Fe&&Fe.isValid&&Fe.texture&&m.init(Fe,s.renderState)
				}if(ge&&ge.includes("camera-access")&&v){
					e.state.unbindTexture(),u=n.getBinding();
					for(let Fe=0;Fe<fe.length;Fe++){
						const nt=fe[Fe].camera;
						if(nt){
							let w=f[nt];
							w||(w=new bc,f[nt]=w);
							const ze=u.getCameraImage(nt);
							w.sourceTexture=ze
						}
					}
				}
			}for(let fe=0;fe<C.length;fe++){
				const Le=y[fe],ge=C[fe];
				Le!==null&&ge!==void 0&&ge.update(Le,Z,c||o)
			}Xe&&Xe(X,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null
		}const Qe=new Sc;
		Qe.setAnimationLoop(Je),this.setAnimationLoop=function(X){Xe=X},this.dispose=function(){}
	}
}const Vn=new bn,Qp=new ut;
function em(i,e){
	function t(m,f){
		m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)
	}function n(m,f){
		f.color.getRGB(m.fogColor.value,mc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)
	}function s(m,f,T,E,A){
		f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),l(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,A)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?h(m,f,T,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)
	}function r(m,f){
		m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===wt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===wt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),E=T.envMap,A=T.envMapRotation;E&&(m.envMap.value=E,Vn.copy(A),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),m.envMapRotation.value.setFromMatrix4(Qp.makeRotationFromEuler(Vn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))
	}function o(m,f){
		m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))
	}function a(m,f){
		m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale
	}function h(m,f,T,E){
		m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)
	}function c(m,f){
		m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)
	}function l(m,f){
		m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)
	}function u(m,f){
		f.gradientMap&&(m.gradientMap.value=f.gradientMap)
	}function d(m,f){
		m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)
	}function p(m,f,T){
		m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))
	}function g(m,f){
		f.matcap&&(m.matcap.value=f.matcap)
	}function v(m,f){
		const T=e.get(f).light;
		m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far
	}return{refreshFogUniforms:n,refreshMaterialUniforms:s}
}function tm(i,e,t,n){
	let s={},r={},o=[];
	const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
	function h(T,E){
		const A=E.program;n.uniformBlockBinding(T,A)
	}function c(T,E){
		let A=s[T.id];
		A===void 0&&(g(T),A=l(T),s[T.id]=A,T.addEventListener("dispose",m));
		const C=E.program;n.updateUBOMapping(T,C);
		const y=e.render.frame;
		r[T.id]!==y&&(d(T),r[T.id]=y)
	}function l(T){
		const E=u();
		T.__bindingPointIndex=E;
		const A=i.createBuffer(),C=T.__size,y=T.usage;
		return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,C,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,A),A
	}function u(){
		for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;
		return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0
	}function d(T){
		const E=s[T.id],A=T.uniforms,C=T.__cache;
		i.bindBuffer(i.UNIFORM_BUFFER,E);
		for(let y=0,D=A.length;y<D;y++){
			const z=Array.isArray(A[y])?A[y]:[A[y]];
			for(let S=0,b=z.length;S<b;S++){
				const P=z[S];
				if(p(P,y,S,C)===!0){
					const B=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];
					let W=0;
					for(let j=0;j<H.length;j++){
						const q=H[j],ne=v(q);
						typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,B+W,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,W),W+=ne.storage/Float32Array.BYTES_PER_ELEMENT)
					}i.bufferSubData(i.UNIFORM_BUFFER,B,P.__data)
				}
			}
		}i.bindBuffer(i.UNIFORM_BUFFER,null)
	}function p(T,E,A,C){
		const y=T.value,D=E+"_"+A;
		if(C[D]===void 0)return typeof y=="number"||typeof y=="boolean"?C[D]=y:C[D]=y.clone(),!0;{const z=C[D];if(typeof y=="number"||typeof y=="boolean"){if(z!==y)return C[D]=y,!0}else if(z.equals(y)===!1)return z.copy(y),!0}return!1
	}function g(T){
		const E=T.uniforms;
		let A=0;
		const C=16;
		for(let D=0,z=E.length;D<z;D++){
			const S=Array.isArray(E[D])?E[D]:[E[D]];
			for(let b=0,P=S.length;b<P;b++){
				const B=S[b],H=Array.isArray(B.value)?B.value:[B.value];
				for(let W=0,j=H.length;W<j;W++){
					const q=H[W],ne=v(q),k=A%C,te=k%ne.boundary,re=k+te;
					A+=te,re!==0&&C-re<ne.storage&&(A+=C-re),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=A,A+=ne.storage
				}
			}
		}const y=A%C;return y>0&&(A+=C-y),T.__size=A,T.__cache={},this
	}function v(T){
		const E={boundary:0,storage:0};
		return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):De("WebGLRenderer: Unsupported uniform value type.",T),E
	}function m(T){
		const E=T.target;
		E.removeEventListener("dispose",m);
		const A=o.indexOf(E.__bindingPointIndex);
		o.splice(A,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]
	}function f(){
		for(const T in s)i.deleteBuffer(s[T]);
		o=[],s={},r={}
	}return{bind:h,update:c,dispose:f}
}const nm=new Uint16Array([
	11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,
	14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,
	12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,
	14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,
	14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,
	11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,
	10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,
	8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,
	15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,
	14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,
	13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,
	15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,
	4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,
	628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839
]);
let un=null;
function im(){
	return un===null&&(un=new ih(nm,32,32,ga,Ti),un.minFilter=zt,un.magFilter=zt,un.wrapS=mn,un.wrapT=mn,un.generateMipmaps=!1,un.needsUpdate=!0),un
}class sm{
	constructor(e={}){
		const{
			canvas:t=Rl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1
		}=e;
		this.isWebGLRenderer=!0;
		let p;
		if(n!==null){
			if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
			p=n.getContextAttributes().alpha
		}else p=o;
		const g=new Set([ba,va,xa]),v=new Set([vn,Kn,ki,Wi,ma,_a]),m=new Uint32Array(4),f=new Int32Array(4);
		let T=null,E=null;
		const A=[],C=[];
		this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;
		const y=this;
		let D=!1;
		this._outputColorSpace=Lt;
		let z=0,S=0,b=null,P=-1,B=null;
		const H=new lt,W=new lt;
		let j=null;const q=new Ze(0);
		let ne=0,k=t.width,te=t.height,re=1,Se=null,ke=null;
		const Xe=new lt(0,0,k,te),Je=new lt(0,0,k,te);
		let Qe=!1;
		const X=new gc;
		let Z=!1,fe=!1;
		const Le=new ut,ge=new N,Be=new lt,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};
		let Fe=!1;
		function nt(){
			return b===null?re:1
		}let w=n;
		function ze(x,L){
			return t.getContext(x,L)
		}try{
			const x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};
			if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${da}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",de,!1),w===null){
				const L="webgl2";
				if(w=ze(L,x),w===null)throw ze(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")
			}
		}catch(x){
			throw x("WebGLRenderer: "+x.message),x
		}let Ge,et,me,it,be,Pe,M,_,U,V,K,G,xe,oe,Me,_e,$,ee,Ae,ye,he,Re,R,ce;
		function ie(){
			Ge=new fd(w),Ge.init(),Re=new jp(w,Ge),et=new id(w,Ge,e,Re),me=new qp(w,Ge),et.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),it=new md(w),be=new Ip,Pe=new Yp(w,Ge,me,be,et,Re,it),M=new rd(y),_=new ud(y),U=new gh(w),R=new td(w,U),V=new dd(w,U,it,R),K=new xd(w,V,U,it),Ae=new _d(w,et,Pe),_e=new sd(be),G=new Lp(y,M,_,Ge,et,R,_e),xe=new em(y,be),oe=new Np,Me=new Hp(Ge),ee=new ed(y,M,_,me,K,p,h),$=new Vp(y,K,et),ce=new tm(w,it,et,me),ye=new nd(w,Ge,it),he=new pd(w,Ge,it),it.programs=G.programs,y.capabilities=et,y.extensions=Ge,y.properties=be,y.renderLists=oe,y.shadowMap=$,y.state=me,y.info=it
		}ie();
		const se=new Jp(y,w);
		this.xr=se,
		this.getContext=function(){return w},
		this.getContextAttributes=function(){return w.getContextAttributes()},
		this.forceContextLoss=function(){
			const x=Ge.get("WEBGL_lose_context");
			x&&x.loseContext()
		},this.forceContextRestore=function(){
			const x=Ge.get("WEBGL_lose_context");
			x&&x.restoreContext()
		},this.getPixelRatio=function(){return re},
		this.setPixelRatio=function(x){x!==void 0&&(re=x,this.setSize(k,te,!1))},
		this.getSize=function(x){return x.set(k,te)},
		this.setSize=function(x,L,F=!0){
			if(se.isPresenting){
				De("WebGLRenderer: Can't change size while VR device is presenting.");
				return
			}k=x,te=L,t.width=Math.floor(x*re),t.height=Math.floor(L*re),F===!0&&(t.style.width=x+"px",t.style.height=L+"px"),this.setViewport(0,0,x,L)
		},this.getDrawingBufferSize=function(x){return x.set(k*re,te*re).floor()},
		this.setDrawingBufferSize=function(x,L,F){k=x,te=L,re=F,t.width=Math.floor(x*F),t.height=Math.floor(L*F),this.setViewport(0,0,x,L)},
		this.getCurrentViewport=function(x){return x.copy(H)},
		this.getViewport=function(x){return x.copy(Xe)},
		this.setViewport=function(x,L,F,O){x.isVector4?Xe.set(x.x,x.y,x.z,x.w):Xe.set(x,L,F,O),me.viewport(H.copy(Xe).multiplyScalar(re).round())},
		this.getScissor=function(x){return x.copy(Je)},
		this.setScissor=function(x,L,F,O){x.isVector4?Je.set(x.x,x.y,x.z,x.w):Je.set(x,L,F,O),me.scissor(W.copy(Je).multiplyScalar(re).round())},
		this.getScissorTest=function(){return Qe},
		this.setScissorTest=function(x){me.setScissorTest(Qe=x)},
		this.setOpaqueSort=function(x){Se=x},
		this.setTransparentSort=function(x){ke=x},
		this.getClearColor=function(x){return x.copy(ee.getClearColor())},
		this.setClearColor=function(){ee.setClearColor(...arguments)},
		this.getClearAlpha=function(){return ee.getClearAlpha()},
		this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},
		this.clear=function(x=!0,L=!0,F=!0){
			let O=0;
			if(x){
				let I=!1;
				if(b!==null){
					const Q=b.texture.format;
					I=g.has(Q)
				}if(I){
					const Q=b.texture.type,le=v.has(Q),pe=ee.getClearColor(),ue=ee.getClearAlpha(),Te=pe.r,we=pe.g,ve=pe.b;le?(m[0]=Te,m[1]=we,m[2]=ve,m[3]=ue,w.clearBufferuiv(w.COLOR,0,m)):(f[0]=Te,f[1]=we,f[2]=ve,f[3]=ue,w.clearBufferiv(w.COLOR,0,f))
				}else O|=w.COLOR_BUFFER_BIT}L&&(O|=w.DEPTH_BUFFER_BIT),F&&(O|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(O)
			},this.clearColor=function(){
				this.clear(!0,!1,!1)
			},this.clearDepth=function(){
				this.clear(!1,!0,!1)
			},this.clearStencil=function(){
				this.clear(!1,!1,!0)
			},this.dispose=function(){
				t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",de,!1),ee.dispose(),oe.dispose(),Me.dispose(),be.dispose(),M.dispose(),_.dispose(),K.dispose(),R.dispose(),ce.dispose(),G.dispose(),se.dispose(),se.removeEventListener("sessionstart",Da),se.removeEventListener("sessionend",La),On.stop()
			};function J(x){
				x.preventDefault(),qa("WebGLRenderer: Context Lost."),D=!0
			}function Y(){
				qa("WebGLRenderer: Context Restored."),D=!1;
				const x=it.autoReset,L=$.enabled,F=$.autoUpdate,O=$.needsUpdate,I=$.type;
				ie(),it.autoReset=x,$.enabled=L,$.autoUpdate=F,$.needsUpdate=O,$.type=I
			}function de(x){
				ct("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)
			}function Ce(x){
				const L=x.target;
				L.removeEventListener("dispose",Ce),tt(L)
			}function tt(x){
				qe(x),be.remove(x)
			}function qe(x){
				const L=be.get(x).programs;
				L!==void 0&&(L.forEach(function(F){G.releaseProgram(F)}),x.isShaderMaterial&&G.releaseShaderCache(x))
			}this.renderBufferDirect=function(x,L,F,O,I,Q){
				L===null&&(L=_t);
				const le=I.isMesh&&I.matrixWorld.determinant()<0,pe=Uc(x,L,F,O,I);
				me.setMaterial(O,le);
				let ue=F.index,Te=1;
				if(O.wireframe===!0){
					if(ue=V.getWireframeAttribute(F),ue===void 0)return;
					Te=2
				}const we=F.drawRange,ve=F.attributes.position;
				let He=we.start*Te,Ye=(we.start+we.count)*Te;
				Q!==null&&(He=Math.max(He,Q.start*Te),Ye=Math.min(Ye,(Q.start+Q.count)*Te)),ue!==null?(He=Math.max(He,0),Ye=Math.min(Ye,ue.count)):ve!=null&&(He=Math.max(He,0),Ye=Math.min(Ye,ve.count));
				const at=Ye-He;
				if(at<0||at===1/0)return;
				R.setup(I,O,pe,F,ue);
				let ot,$e=ye;
				if(ue!==null&&(ot=U.get(ue),$e=he,$e.setIndex(ot)),I.isMesh)O.wireframe===!0?(me.setLineWidth(O.wireframeLinewidth*nt()),$e.setMode(w.LINES)):$e.setMode(w.TRIANGLES);
				else if(I.isLine){
					let Ee=O.linewidth;
					Ee===void 0&&(Ee=1),me.setLineWidth(Ee*nt()),I.isLineSegments?$e.setMode(w.LINES):I.isLineLoop?$e.setMode(w.LINE_LOOP):$e.setMode(w.LINE_STRIP)
				}else I.isPoints?$e.setMode(w.POINTS):I.isSprite&&$e.setMode(w.TRIANGLES);
				if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Yi("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);
				else if(Ge.get("WEBGL_multi_draw"))$e.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);
				else{
					const Ee=I._multiDrawStarts,st=I._multiDrawCounts,We=I._multiDrawCount,Rt=ue?U.get(ue).bytesPerElement:1,Qn=be.get(O).currentProgram.getUniforms();
					for(let Ct=0;Ct<We;Ct++)Qn.setValue(w,"_gl_DrawID",Ct),$e.render(Ee[Ct]/Rt,st[Ct])
				}else if(I.isInstancedMesh)$e.renderInstances(He,at,I.count);
				else if(F.isInstancedBufferGeometry){
					const Ee=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,st=Math.min(F.instanceCount,Ee);
					$e.renderInstances(He,at,st)
				}else $e.render(He,at)
			};
			function Qt(x,L,F){
				x.transparent===!0&&x.side===pn&&x.forceSinglePass===!1?(x.side=wt,x.needsUpdate=!0,Qi(x,L,F),x.side=Fn,x.needsUpdate=!0,Qi(x,L,F),x.side=pn):Qi(x,L,F)
			}this.compile=function(x,L,F=null){
				F===null&&(F=x),E=Me.get(F),E.init(L),C.push(E),F.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(E.pushLight(I),I.castShadow&&E.pushShadow(I))}),x!==F&&x.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(E.pushLight(I),I.castShadow&&E.pushShadow(I))}),E.setupLights();
				const O=new Set;
				return x.traverse(function(I){
					if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;
					const Q=I.material;
					if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){
						const pe=Q[le];Qt(pe,F,I),O.add(pe)
					}else Qt(Q,F,I),O.add(Q)
				}),E=C.pop(),O
			},this.compileAsync=function(x,L,F=null){
				const O=this.compile(x,L,F);
				return new Promise(I=>{
					function Q(){
						if(O.forEach(function(le){
							be.get(le).currentProgram.isReady()&&O.delete(le)
						}),O.size===0){
							I(x);
							return
						}setTimeout(Q,10)
					}Ge.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)
				})
			};
			let Gt=null;
			function Ic(x){Gt&&Gt(x)}
			function Da(){On.stop()}
			function La(){On.start()}
			const On=new Sc;
			On.setAnimationLoop(Ic),typeof self<"u"&&On.setContext(self),
			this.setAnimationLoop=function(x){
				Gt=x,se.setAnimationLoop(x),x===null?On.stop():On.start()
			},se.addEventListener("sessionstart",Da),
			se.addEventListener("sessionend",La),
			this.render=function(x,L){
				if(L!==void 0&&L.isCamera!==!0){
					ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
					return
				}if(D===!0)return;
				if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(L),L=se.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,L,b),E=Me.get(x,C.length),E.init(L),C.push(E),Le.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),X.setFromProjectionMatrix(Le,nn,L.reversedDepth),fe=this.localClippingEnabled,Z=_e.init(this.clippingPlanes,fe),T=oe.get(x,A.length),T.init(),A.push(T),se.enabled===!0&&se.isPresenting===!0){
					const Q=y.xr.getDepthSensingMesh();
					Q!==null&&ks(Q,L,-1/0,y.sortObjects)
				}ks(x,L,0,y.sortObjects),T.finish(),y.sortObjects===!0&&T.sort(Se,ke),Fe=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Fe&&ee.addToRenderList(T,x),this.info.render.frame++,Z===!0&&_e.beginShadows();
				const F=E.state.shadowsArray;
				$.render(F,x,L),Z===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();
				const O=T.opaque,I=T.transmissive;
				if(E.setupLights(),L.isArrayCamera){
					const Q=L.cameras;
					if(I.length>0)for(let le=0,pe=Q.length;le<pe;le++){
						const ue=Q[le];
						Ua(O,I,x,ue)
					}Fe&&ee.render(x);
					for(let le=0,pe=Q.length;le<pe;le++){
						const ue=Q[le];
						Ia(T,x,ue,ue.viewport)
					}
				}else I.length>0&&Ua(O,I,x,L),Fe&&ee.render(x),Ia(T,x,L);
				b!==null&&S===0&&(Pe.updateMultisampleRenderTarget(b),Pe.updateRenderTargetMipmap(b)),x.isScene===!0&&x.onAfterRender(y,x,L),R.resetDefaultState(),P=-1,B=null,C.pop(),C.length>0?(E=C[C.length-1],Z===!0&&_e.setGlobalState(y.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?T=A[A.length-1]:T=null
			};
			function ks(x,L,F,O){
				if(x.visible===!1)return;
				if(x.layers.test(L.layers)){
					if(x.isGroup)F=x.renderOrder;
					else if(x.isLOD)x.autoUpdate===!0&&x.update(L);
					else if(x.isLight)E.pushLight(x),x.castShadow&&E.pushShadow(x);
					else if(x.isSprite){
						if(!x.frustumCulled||X.intersectsSprite(x)){
							O&&Be.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Le);
							const le=K.update(x),pe=x.material;
							pe.visible&&T.push(x,le,pe,F,Be.z,null)
						}
					}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||X.intersectsObject(x))){
						const le=K.update(x),pe=x.material;
						if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Be.copy(x.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Be.copy(le.boundingSphere.center)),Be.applyMatrix4(x.matrixWorld).applyMatrix4(Le)),Array.isArray(pe)){
							const ue=le.groups;
							for(let Te=0,we=ue.length;Te<we;Te++){
								const ve=ue[Te],He=pe[ve.materialIndex];
								He&&He.visible&&T.push(x,le,He,F,Be.z,ve)
							}
						}else pe.visible&&T.push(x,le,pe,F,Be.z,null)
					}
				}const Q=x.children;
				for(let le=0,pe=Q.length;le<pe;le++)ks(Q[le],L,F,O)
				}function Ia(x,L,F,O){
					const{opaque:I,transmissive:Q,transparent:le}=x;
					E.setupLightsView(F),Z===!0&&_e.setGlobalState(y.clippingPlanes,F),O&&me.viewport(H.copy(O)),I.length>0&&Ji(I,L,F),Q.length>0&&Ji(Q,L,F),le.length>0&&Ji(le,L,F),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)
				}function Ua(x,L,F,O){
					if((F.isScene===!0?F.overrideMaterial:null)!==null)return;
					E.state.transmissionRenderTarget[O.id]===void 0&&(E.state.transmissionRenderTarget[O.id]=new $n(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Ti:vn,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));
					const Q=E.state.transmissionRenderTarget[O.id],le=O.viewport||H;
					Q.setSize(le.z*y.transmissionResolutionScale,le.w*y.transmissionResolutionScale);
					const pe=y.getRenderTarget(),ue=y.getActiveCubeFace(),Te=y.getActiveMipmapLevel();
					y.setRenderTarget(Q),y.getClearColor(q),ne=y.getClearAlpha(),ne<1&&y.setClearColor(16777215,.5),y.clear(),Fe&&ee.render(F);
					const we=y.toneMapping;
					y.toneMapping=Un;
					const ve=O.viewport;
					if(O.viewport!==void 0&&(O.viewport=void 0),E.setupLightsView(O),Z===!0&&_e.setGlobalState(y.clippingPlanes,O),Ji(x,F,O),Pe.updateMultisampleRenderTarget(Q),Pe.updateRenderTargetMipmap(Q),Ge.has("WEBGL_multisampled_render_to_texture")===!1){
						let He=!1;
						for(let Ye=0,at=L.length;Ye<at;Ye++){
							const ot=L[Ye],{object:$e,geometry:Ee,material:st,group:We}=ot;
							if(st.side===pn&&$e.layers.test(O.layers)){
								const Rt=st.side;st.side=wt,st.needsUpdate=!0,Na($e,F,O,Ee,st,We),st.side=Rt,st.needsUpdate=!0,He=!0
							}
						}He===!0&&(Pe.updateMultisampleRenderTarget(Q),Pe.updateRenderTargetMipmap(Q))
					}y.setRenderTarget(pe,ue,Te),y.setClearColor(q,ne),ve!==void 0&&(O.viewport=ve),y.toneMapping=we
				}function Ji(x,L,F){
					const O=L.isScene===!0?L.overrideMaterial:null;
					for(let I=0,Q=x.length;I<Q;I++){
						const le=x[I],{object:pe,geometry:ue,group:Te}=le;
						let we=le.material;
						we.allowOverride===!0&&O!==null&&(we=O),pe.layers.test(F.layers)&&Na(pe,L,F,ue,we,Te)
					}
				}function Na(x,L,F,O,I,Q){
					x.onBeforeRender(y,L,F,O,I,Q),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(y,L,F,O,x,Q),I.transparent===!0&&I.side===pn&&I.forceSinglePass===!1?(I.side=wt,I.needsUpdate=!0,y.renderBufferDirect(F,L,O,I,x,Q),I.side=Fn,I.needsUpdate=!0,y.renderBufferDirect(F,L,O,I,x,Q),I.side=pn):y.renderBufferDirect(F,L,O,I,x,Q),x.onAfterRender(y,L,F,O,I,Q)
				}function Qi(x,L,F){
					L.isScene!==!0&&(L=_t);
					const O=be.get(x),I=E.state.lights,Q=E.state.shadowsArray,le=I.state.version,pe=G.getParameters(x,I.state,Q,L,F),ue=G.getProgramCacheKey(pe);
					let Te=O.programs;O.environment=x.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(x.isMeshStandardMaterial?_:M).get(x.envMap||O.environment),O.envMapRotation=O.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Te===void 0&&(x.addEventListener("dispose",Ce),Te=new Map,O.programs=Te);
					let we=Te.get(ue);
					if(we!==void 0){
						if(O.currentProgram===we&&O.lightsStateVersion===le)return Oa(x,pe),we
					}else pe.uniforms=G.getUniforms(x),x.onBeforeCompile(pe,y),we=G.acquireProgram(pe,ue),Te.set(ue,we),O.uniforms=pe.uniforms;
					const ve=O.uniforms;
					return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&
					      (ve.clippingPlanes=_e.uniform),Oa(x,pe),O.needsLights=Fc(x),
						  O.lightsStateVersion=le,
						  O.needsLights&&
						  (ve.ambientLightColor.value=I.state.ambient,
							ve.lightProbe.value=I.state.probe,
							ve.directionalLights.value=I.state.directional,
							ve.directionalLightShadows.value=I.state.directionalShadow,
							ve.spotLights.value=I.state.spot,
							ve.spotLightShadows.value=I.state.spotShadow,
							ve.rectAreaLights.value=I.state.rectArea,
							ve.ltc_1.value=I.state.rectAreaLTC1,
							ve.ltc_2.value=I.state.rectAreaLTC2,
							ve.pointLights.value=I.state.point,
							ve.pointLightShadows.value=I.state.pointShadow,
							ve.hemisphereLights.value=I.state.hemi,
							ve.directionalShadowMap.value=I.state.directionalShadowMap,
							ve.directionalShadowMatrix.value=I.state.directionalShadowMatrix,
							ve.spotShadowMap.value=I.state.spotShadowMap,
							ve.spotLightMatrix.value=I.state.spotLightMatrix,
							ve.spotLightMap.value=I.state.spotLightMap,
							ve.pointShadowMap.value=I.state.pointShadowMap,
							ve.pointShadowMatrix.value=I.state.pointShadowMatrix
						  ),O.currentProgram=we,O.uniformsList=null,we
				}function Fa(x){
					if(x.uniformsList===null){
						const L=x.currentProgram.getUniforms();
						x.uniformsList=Rs.seqWithValue(L.seq,x.uniforms)
					}return x.uniformsList
				}function Oa(x,L){
					const F=be.get(x);
					F.outputColorSpace=L.outputColorSpace,
					F.batching=L.batching,F.batchingColor=L.batchingColor,
					F.instancing=L.instancing,
					F.instancingColor=L.instancingColor,
					F.instancingMorph=L.instancingMorph,
					F.skinning=L.skinning,
					F.morphTargets=L.morphTargets,
					F.morphNormals=L.morphNormals,
					F.morphColors=L.morphColors,
					F.morphTargetsCount=L.morphTargetsCount,
					F.numClippingPlanes=L.numClippingPlanes,
					F.numIntersection=L.numClipIntersection,
					F.vertexAlphas=L.vertexAlphas,
					F.vertexTangents=L.vertexTangents,
					F.toneMapping=L.toneMapping
				}function Uc(x,L,F,O,I){
					L.isScene!==!0&&(L=_t),Pe.resetTextureUnits();
					const Q=L.fog,le=O.isMeshStandardMaterial?L.environment:null,pe=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ei,ue=(O.isMeshStandardMaterial?_:M).get(O.envMap||le),Te=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,we=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),ve=!!F.morphAttributes.position,He=!!F.morphAttributes.normal,Ye=!!F.morphAttributes.color;
					let at=Un;
					O.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(at=y.toneMapping);
					const ot=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,$e=ot!==void 0?ot.length:0,Ee=be.get(O),st=E.state.lights;
					if(Z===!0&&(fe===!0||x!==B)){
						const bt=x===B&&O.id===P;
						_e.setState(O,x,bt)
					}let We=!1;
					O.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==st.state.version||Ee.outputColorSpace!==pe||I.isBatchedMesh&&Ee.batching===!1||!I.isBatchedMesh&&Ee.batching===!0||I.isBatchedMesh&&Ee.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ee.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ee.instancing===!1||!I.isInstancedMesh&&Ee.instancing===!0||I.isSkinnedMesh&&Ee.skinning===!1||!I.isSkinnedMesh&&Ee.skinning===!0||I.isInstancedMesh&&Ee.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ee.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ee.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ee.instancingMorph===!1&&I.morphTexture!==null||Ee.envMap!==ue||O.fog===!0&&Ee.fog!==Q||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==_e.numPlanes||Ee.numIntersection!==_e.numIntersection)||Ee.vertexAlphas!==Te||Ee.vertexTangents!==we||Ee.morphTargets!==ve||Ee.morphNormals!==He||Ee.morphColors!==Ye||Ee.toneMapping!==at||Ee.morphTargetsCount!==$e)&&(We=!0):(We=!0,Ee.__version=O.version);
					let Rt=Ee.currentProgram;
					We===!0&&(Rt=Qi(O,L,I));
					let Qn=!1,Ct=!1,Ri=!1;
					const rt=Rt.getUniforms(),Et=Ee.uniforms;
					if(me.useProgram(Rt.program)&&(Qn=!0,Ct=!0,Ri=!0),O.id!==P&&(P=O.id,Ct=!0),Qn||B!==x){
						me.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),rt.setValue(w,"projectionMatrix",x.projectionMatrix),rt.setValue(w,"viewMatrix",x.matrixWorldInverse);
						const yt=rt.map.cameraPosition;
						yt!==void 0&&yt.setValue(w,ge.setFromMatrixPosition(x.matrixWorld)),et.logarithmicDepthBuffer&&rt.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&rt.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),B!==x&&(B=x,Ct=!0,Ri=!0)
					}if(I.isSkinnedMesh){
						rt.setOptional(w,I,"bindMatrix"),rt.setOptional(w,I,"bindMatrixInverse");
						const bt=I.skeleton;
						bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),rt.setValue(w,"boneTexture",bt.boneTexture,Pe))
					}I.isBatchedMesh&&(rt.setOptional(w,I,"batchingTexture"),rt.setValue(w,"batchingTexture",I._matricesTexture,Pe),rt.setOptional(w,I,"batchingIdTexture"),rt.setValue(w,"batchingIdTexture",I._indirectTexture,Pe),rt.setOptional(w,I,"batchingColorTexture"),I._colorsTexture!==null&&rt.setValue(w,"batchingColorTexture",I._colorsTexture,Pe));
					const Ft=F.morphAttributes;
					if((Ft.position!==void 0||Ft.normal!==void 0||Ft.color!==void 0)&&Ae.update(I,F,Rt),(Ct||Ee.receiveShadow!==I.receiveShadow)&&(Ee.receiveShadow=I.receiveShadow,rt.setValue(w,"receiveShadow",I.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Et.envMap.value=ue,Et.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(Et.envMapIntensity.value=L.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=im()),Ct&&(rt.setValue(w,"toneMappingExposure",y.toneMappingExposure),Ee.needsLights&&Nc(Et,Ri),Q&&O.fog===!0&&xe.refreshFogUniforms(Et,Q),xe.refreshMaterialUniforms(Et,O,re,te,E.state.transmissionRenderTarget[x.id]),Rs.upload(w,Fa(Ee),Et,Pe)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Rs.upload(w,Fa(Ee),Et,Pe),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&rt.setValue(w,"center",I.center),rt.setValue(w,"modelViewMatrix",I.modelViewMatrix),rt.setValue(w,"normalMatrix",I.normalMatrix),rt.setValue(w,"modelMatrix",I.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){
						const bt=O.uniformsGroups;
						for(let yt=0,Ws=bt.length;yt<Ws;yt++){
							const Bn=bt[yt];
							ce.update(Bn,Rt),ce.bind(Bn,Rt)
						}
					}return Rt
				}function Nc(x,L){
					x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L
				}function Fc(x){
					return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0
				}this.getActiveCubeFace=function(){return z},
				this.getActiveMipmapLevel=function(){return S},
				this.getRenderTarget=function(){return b},
				this.setRenderTargetTextures=function(x,L,F){
					const O=be.get(x);
					O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),be.get(x.texture).__webglTexture=L,be.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:F,O.__hasExternalTextures=!0
				},this.setRenderTargetFramebuffer=function(x,L){
					const F=be.get(x);
					F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0
				};const Oc=w.createFramebuffer();
				this.setRenderTarget=function(x,L=0,F=0){
					b=x,z=L,S=F;
					let O=!0,I=null,Q=!1,le=!1;
					if(x){
						const ue=be.get(x);
						if(ue.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(w.FRAMEBUFFER,null),O=!1;
						else if(ue.__webglFramebuffer===void 0)Pe.setupRenderTarget(x);
						else if(ue.__hasExternalTextures)Pe.rebindTextures(x,be.get(x.texture).__webglTexture,be.get(x.depthTexture).__webglTexture);
						else if(x.depthBuffer){
							const ve=x.depthTexture;
							if(ue.__boundDepthTexture!==ve){
								if(ve!==null&&be.has(ve)&&(x.width!==ve.image.width||x.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
								Pe.setupDepthRenderbuffer(x)
							}
						}const Te=x.texture;
						(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(le=!0);
						const we=be.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(we[L])?I=we[L][F]:I=we[L],Q=!0):x.samples>0&&Pe.useMultisampledRTT(x)===!1?I=be.get(x).__webglMultisampledFramebuffer:Array.isArray(we)?I=we[F]:I=we,H.copy(x.viewport),W.copy(x.scissor),j=x.scissorTest}else H.copy(Xe).multiplyScalar(re).floor(),W.copy(Je).multiplyScalar(re).floor(),j=Qe;
						if(F!==0&&(I=Oc),me.bindFramebuffer(w.FRAMEBUFFER,I)&&O&&me.drawBuffers(x,I),me.viewport(H),me.scissor(W),me.setScissorTest(j),Q){
							const ue=be.get(x.texture);
							w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+L,ue.__webglTexture,F)
						}else if(le){
							const ue=L;
							for(let Te=0;Te<x.textures.length;Te++){
								const we=be.get(x.textures[Te]);
								w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Te,we.__webglTexture,F,ue)
							}
						}else if(x!==null&&F!==0){
							const ue=be.get(x.texture);
							w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ue.__webglTexture,F)
						}P=-1
					},this.readRenderTargetPixels=function(x,L,F,O,I,Q,le,pe=0){
						if(!(x&&x.isWebGLRenderTarget)){
							ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
							return
						}let ue=be.get(x).__webglFramebuffer;
						if(x.isWebGLCubeRenderTarget&&le!==void 0&&(ue=ue[le]),ue){
							me.bindFramebuffer(w.FRAMEBUFFER,ue);
							try{
								const Te=x.textures[pe],we=Te.format,ve=Te.type;
								if(!et.textureFormatReadable(we)){
									ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
									return
								}if(!et.textureTypeReadable(ve)){
									ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
									return
								}L>=0&&L<=x.width-O&&F>=0&&F<=x.height-I&&(x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+pe),w.readPixels(L,F,O,I,Re.convert(we),Re.convert(ve),Q))
							}finally{
								const Te=b!==null?be.get(b).__webglFramebuffer:null;me.bindFramebuffer(w.FRAMEBUFFER,Te)
							}
						}
					},this.readRenderTargetPixelsAsync=async function(x,L,F,O,I,Q,le,pe=0){
						if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
						let ue=be.get(x).__webglFramebuffer;
						if(x.isWebGLCubeRenderTarget&&le!==void 0&&(ue=ue[le]),ue)if(L>=0&&L<=x.width-O&&F>=0&&F<=x.height-I){
							me.bindFramebuffer(w.FRAMEBUFFER,ue);
							const Te=x.textures[pe],we=Te.format,ve=Te.type;
							if(!et.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
							if(!et.textureTypeReadable(ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
							const He=w.createBuffer();
							w.bindBuffer(w.PIXEL_PACK_BUFFER,He),w.bufferData(w.PIXEL_PACK_BUFFER,Q.byteLength,w.STREAM_READ),x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+pe),w.readPixels(L,F,O,I,Re.convert(we),Re.convert(ve),0);
							const Ye=b!==null?be.get(b).__webglFramebuffer:null;me.bindFramebuffer(w.FRAMEBUFFER,Ye);
							const at=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);
							return w.flush(),await Cl(w,at,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,He),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Q),w.deleteBuffer(He),w.deleteSync(at),Q
						}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")
					},this.copyFramebufferToTexture=function(x,L=null,F=0){
						const O=Math.pow(2,-F),I=Math.floor(x.image.width*O),Q=Math.floor(x.image.height*O),le=L!==null?L.x:0,pe=L!==null?L.y:0;Pe.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,F,0,0,le,pe,I,Q),me.unbindTexture()
					};const Bc=w.createFramebuffer(),zc=w.createFramebuffer();
					this.copyTextureToTexture=function(x,L,F=null,O=null,I=0,Q=null){
						Q===null&&(I!==0?(Yi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=I,I=0):Q=0);
						let le,pe,ue,Te,we,ve,He,Ye,at;
						const ot=x.isCompressedTexture?x.mipmaps[Q]:x.image;if(F!==null)le=F.max.x-F.min.x,pe=F.max.y-F.min.y,ue=F.isBox3?F.max.z-F.min.z:1,Te=F.min.x,we=F.min.y,ve=F.isBox3?F.min.z:0;else{const Ft=Math.pow(2,-I);le=Math.floor(ot.width*Ft),pe=Math.floor(ot.height*Ft),x.isDataArrayTexture?ue=ot.depth:x.isData3DTexture?ue=Math.floor(ot.depth*Ft):ue=1,Te=0,we=0,ve=0}O!==null?(He=O.x,Ye=O.y,at=O.z):(He=0,Ye=0,at=0);
						const $e=Re.convert(L.format),Ee=Re.convert(L.type);
						let st;
						L.isData3DTexture?(Pe.setTexture3D(L,0),st=w.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Pe.setTexture2DArray(L,0),st=w.TEXTURE_2D_ARRAY):(Pe.setTexture2D(L,0),st=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);
						const We=w.getParameter(w.UNPACK_ROW_LENGTH),Rt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Qn=w.getParameter(w.UNPACK_SKIP_PIXELS),Ct=w.getParameter(w.UNPACK_SKIP_ROWS),Ri=w.getParameter(w.UNPACK_SKIP_IMAGES);
						w.pixelStorei(w.UNPACK_ROW_LENGTH,ot.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ot.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Te),w.pixelStorei(w.UNPACK_SKIP_ROWS,we),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ve);const rt=x.isDataArrayTexture||x.isData3DTexture,Et=L.isDataArrayTexture||L.isData3DTexture;if(x.isDepthTexture){const Ft=be.get(x),bt=be.get(L),yt=be.get(Ft.__renderTarget),Ws=be.get(bt.__renderTarget);me.bindFramebuffer(w.READ_FRAMEBUFFER,yt.__webglFramebuffer),me.bindFramebuffer(w.DRAW_FRAMEBUFFER,Ws.__webglFramebuffer);for(let Bn=0;Bn<ue;Bn++)rt&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,be.get(x).__webglTexture,I,ve+Bn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,be.get(L).__webglTexture,Q,at+Bn)),w.blitFramebuffer(Te,we,le,pe,He,Ye,le,pe,w.DEPTH_BUFFER_BIT,w.NEAREST);me.bindFramebuffer(w.READ_FRAMEBUFFER,null),me.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(I!==0||x.isRenderTargetTexture||be.has(x)){const Ft=be.get(x),bt=be.get(L);me.bindFramebuffer(w.READ_FRAMEBUFFER,Bc),me.bindFramebuffer(w.DRAW_FRAMEBUFFER,zc);for(let yt=0;yt<ue;yt++)rt?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ft.__webglTexture,I,ve+yt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ft.__webglTexture,I),Et?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,bt.__webglTexture,Q,at+yt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,bt.__webglTexture,Q),I!==0?w.blitFramebuffer(Te,we,le,pe,He,Ye,le,pe,w.COLOR_BUFFER_BIT,w.NEAREST):Et?w.copyTexSubImage3D(st,Q,He,Ye,at+yt,Te,we,le,pe):w.copyTexSubImage2D(st,Q,He,Ye,Te,we,le,pe);me.bindFramebuffer(w.READ_FRAMEBUFFER,null),me.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Et?x.isDataTexture||x.isData3DTexture?w.texSubImage3D(st,Q,He,Ye,at,le,pe,ue,$e,Ee,ot.data):L.isCompressedArrayTexture?w.compressedTexSubImage3D(st,Q,He,Ye,at,le,pe,ue,$e,ot.data):w.texSubImage3D(st,Q,He,Ye,at,le,pe,ue,$e,Ee,ot):x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Q,He,Ye,le,pe,$e,Ee,ot.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Q,He,Ye,ot.width,ot.height,$e,ot.data):w.texSubImage2D(w.TEXTURE_2D,Q,He,Ye,le,pe,$e,Ee,ot);w.pixelStorei(w.UNPACK_ROW_LENGTH,We),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Rt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Qn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ct),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ri),Q===0&&L.generateMipmaps&&w.generateMipmap(st),me.unbindTexture()},this.initRenderTarget=function(x){be.get(x).__webglFramebuffer===void 0&&Pe.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Pe.setTextureCube(x,0):x.isData3DTexture?Pe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Pe.setTexture2DArray(x,0):Pe.setTexture2D(x,0),me.unbindTexture()},this.resetState=function(){z=0,S=0,b=null,me.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}
				}function rm(i){
					if(Object.prototype.hasOwnProperty.call(i,"__esModule"))return i;
					var e=i.default;
					if(typeof e=="function"){
						var t=function n(){
							var s=!1;
							try{s=this instanceof n}
							catch{}
							return s?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)
						};t.prototype=e.prototype
					}else t={};
					return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var s=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return i[n]}})}),t
				}var mi={};
				const Cs=2,Kt=4,tn=4,Ac=4,dn=new Int32Array(2),ua=new Float32Array(dn.buffer),fa=new Float64Array(dn.buffer),Hi=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1;
				var Is;
				(function(i){i[i.UTF8_BYTES=1]="UTF8_BYTES",i[i.UTF16_STRING=2]="UTF16_STRING"})(Is||(Is={}));
class ji{
	constructor(e){
		this.bytes_=e,this.position_=0,this.text_decoder_=new TextDecoder
	}static allocate(e){
		return new ji(new Uint8Array(e))
	}clear(){
		this.position_=0
	}bytes(){
		return this.bytes_
	}position(){
		return this.position_
	}setPosition(e){
		this.position_=e
	}capacity(){
		return this.bytes_.length
	}readInt8(e){
		return this.readUint8(e)<<24>>24
	}readUint8(e){
		return this.bytes_[e]
	}readInt16(e){
		return this.readUint16(e)<<16>>16
	}readUint16(e){
		return this.bytes_[e]|this.bytes_[e+1]<<8
	}readInt32(e){
		return this.bytes_[e]|this.bytes_[e+1]<<8|this.bytes_[e+2]<<16|this.bytes_[e+3]<<24
	}readUint32(e){
		return this.readInt32(e)>>>0
	}readInt64(e){
		return BigInt.asIntN(64,BigInt(this.readUint32(e))+(BigInt(this.readUint32(e+4))<<BigInt(32)))
	}readUint64(e){
		return BigInt.asUintN(64,BigInt(this.readUint32(e))+(BigInt(this.readUint32(e+4))<<BigInt(32)))
	}readFloat32(e){
		return dn[0]=this.readInt32(e),ua[0]
	}readFloat64(e){
		return dn[Hi?0:1]=this.readInt32(e),dn[Hi?1:0]=this.readInt32(e+4),fa[0]
	}writeInt8(e,t){
		this.bytes_[e]=t
	}writeUint8(e,t){
		this.bytes_[e]=t
	}writeInt16(e,t){
		this.bytes_[e]=t,this.bytes_[e+1]=t>>8
	}writeUint16(e,t){
		this.bytes_[e]=t,this.bytes_[e+1]=t>>8
	}writeInt32(e,t){
		this.bytes_[e]=t,this.bytes_[e+1]=t>>8,this.bytes_[e+2]=t>>16,this.bytes_[e+3]=t>>24
	}writeUint32(e,t){
		this.bytes_[e]=t,this.bytes_[e+1]=t>>8,this.bytes_[e+2]=t>>16,this.bytes_[e+3]=t>>24
	}writeInt64(e,t){
		this.writeInt32(e,Number(BigInt.asIntN(32,t))),this.writeInt32(e+4,Number(BigInt.asIntN(32,t>>BigInt(32))))
	}writeUint64(e,t){
		this.writeUint32(e,Number(BigInt.asUintN(32,t))),this.writeUint32(e+4,Number(BigInt.asUintN(32,t>>BigInt(32))))
	}writeFloat32(e,t){
		ua[0]=t,this.writeInt32(e,dn[0])
	}writeFloat64(e,t){
		fa[0]=t,this.writeInt32(e,dn[Hi?0:1]),this.writeInt32(e+4,dn[Hi?1:0])
	}getBufferIdentifier(){
		if(this.bytes_.length<this.position_+Kt+tn)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
		let e="";
		for(let t=0;t<tn;t++)e+=String.fromCharCode(this.readInt8(this.position_+Kt+t));
		return e
	}__offset(e,t){
		const n=e-this.readInt32(e);
		return t<this.readInt16(n)?this.readInt16(n+t):0
	}__union(e,t){
		return e.bb_pos=t+this.readInt32(t),e.bb=this,e
	}__string(e,t){
		e+=this.readInt32(e);
		const n=this.readInt32(e);
		e+=Kt;
		const s=this.bytes_.subarray(e,e+n);
		return t===Is.UTF8_BYTES?s:this.text_decoder_.decode(s)
	}__union_with_string(e,t){
		return typeof e=="string"?this.__string(t):this.__union(e,t)
	}__indirect(e){
		return e+this.readInt32(e)
	}__vector(e){
		return e+this.readInt32(e)+Kt
	}__vector_len(e){
		return this.readInt32(e+this.readInt32(e))
	}__has_identifier(e){
		if(e.length!=tn)throw new Error("FlatBuffers: file identifier must be length "+tn);
		for(let t=0;t<tn;t++)if(e.charCodeAt(t)!=this.readInt8(this.position()+Kt+t))return!1;
		return!0
	}createScalarList(e,t){
		const n=[];for(let s=0;s<t;++s){
			const r=e(s);
			r!==null&&n.push(r)
		}return n
	}createObjList(e,t){
		const n=[];
		for(let s=0;s<t;++s){
			const r=e(s);
			r!==null&&n.push(r.unpack())
		}return n
	}
}class Aa{
	constructor(e){
		this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null,this.text_encoder=new TextEncoder;let t;e?t=e:t=1024,this.bb=ji.allocate(t),this.space=t
	}clear(){
		this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null
	}forceDefaults(e){
		this.force_defaults=e
	}dataBuffer(){
		return this.bb
	}asUint8Array(){
		return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())
	}prep(e,t){
		e>this.minalign&&(this.minalign=e);
		const n=~(this.bb.capacity()-this.space+t)+1&e-1;
		for(;this.space<n+e+t;){
			const s=this.bb.capacity();
			this.bb=Aa.growByteBuffer(this.bb),this.space+=this.bb.capacity()-s
		}this.pad(n)
	}pad(e){
		for(let t=0;t<e;t++)this.bb.writeInt8(--this.space,0)
	}writeInt8(e){
		this.bb.writeInt8(this.space-=1,e)
	}writeInt16(e){
		this.bb.writeInt16(this.space-=2,e)
	}writeInt32(e){
		this.bb.writeInt32(this.space-=4,e)
	}writeInt64(e){this.bb.writeInt64(this.space-=8,e)}writeFloat32(e){this.bb.writeFloat32(this.space-=4,e)}writeFloat64(e){this.bb.writeFloat64(this.space-=8,e)}addInt8(e){this.prep(1,0),this.writeInt8(e)}addInt16(e){this.prep(2,0),this.writeInt16(e)}addInt32(e){this.prep(4,0),this.writeInt32(e)}addInt64(e){this.prep(8,0),this.writeInt64(e)}addFloat32(e){this.prep(4,0),this.writeFloat32(e)}addFloat64(e){this.prep(8,0),this.writeFloat64(e)}addFieldInt8(e,t,n){(this.force_defaults||t!=n)&&(this.addInt8(t),this.slot(e))}addFieldInt16(e,t,n){(this.force_defaults||t!=n)&&(this.addInt16(t),this.slot(e))}addFieldInt32(e,t,n){(this.force_defaults||t!=n)&&(this.addInt32(t),this.slot(e))}addFieldInt64(e,t,n){(this.force_defaults||t!==n)&&(this.addInt64(t),this.slot(e))}addFieldFloat32(e,t,n){(this.force_defaults||t!=n)&&(this.addFloat32(t),this.slot(e))}addFieldFloat64(e,t,n){(this.force_defaults||t!=n)&&(this.addFloat64(t),this.slot(e))}addFieldOffset(e,t,n){(this.force_defaults||t!=n)&&(this.addOffset(t),this.slot(e))}addFieldStruct(e,t,n){t!=n&&(this.nested(t),this.slot(e))}nested(e){if(e!=this.offset())throw new TypeError("FlatBuffers: struct must be serialized inline.")}notNested(){if(this.isNested)throw new TypeError("FlatBuffers: object serialization must not be nested.")}slot(e){this.vtable!==null&&(this.vtable[e]=this.offset())}offset(){return this.bb.capacity()-this.space}static growByteBuffer(e){const t=e.capacity();if(t&3221225472)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");const n=t<<1,s=ji.allocate(n);return s.setPosition(n-t),s.bytes().set(e.bytes(),n-t),s}addOffset(e){this.prep(Kt,0),this.writeInt32(this.offset()-e+Kt)}startObject(e){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=e;for(let t=0;t<e;t++)this.vtable[t]=0;this.isNested=!0,this.object_start=this.offset()}endObject(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);const e=this.offset();let t=this.vtable_in_use-1;for(;t>=0&&this.vtable[t]==0;t--);const n=t+1;for(;t>=0;t--)this.addInt16(this.vtable[t]!=0?e-this.vtable[t]:0);const s=2;this.addInt16(e-this.object_start);const r=(n+s)*Cs;this.addInt16(r);let o=0;const a=this.space;e:for(t=0;t<this.vtables.length;t++){const h=this.bb.capacity()-this.vtables[t];if(r==this.bb.readInt16(h)){for(let c=Cs;c<r;c+=Cs)if(this.bb.readInt16(a+c)!=this.bb.readInt16(h+c))continue e;o=this.vtables[t];break}}return o?(this.space=this.bb.capacity()-e,this.bb.writeInt32(this.space,o-e)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-e,this.offset()-e)),this.isNested=!1,e}finish(e,t,n){const s=n?Ac:0;if(t){const r=t;if(this.prep(this.minalign,Kt+tn+s),r.length!=tn)throw new TypeError("FlatBuffers: file identifier must be length "+tn);for(let o=tn-1;o>=0;o--)this.writeInt8(r.charCodeAt(o))}this.prep(this.minalign,Kt+s),this.addOffset(e),s&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)}finishSizePrefixed(e,t){this.finish(e,t,!0)}requiredField(e,t){const n=this.bb.capacity()-e,s=n-this.bb.readInt32(n);if(!(t<this.bb.readInt16(s)&&this.bb.readInt16(s+t)!=0))throw new TypeError("FlatBuffers: field "+t+" must be set")}startVector(e,t,n){this.notNested(),this.vector_num_elems=t,this.prep(Kt,e*t),this.prep(n,e*t)}endVector(){return this.writeInt32(this.vector_num_elems),this.offset()}createSharedString(e){if(!e)return 0;if(this.string_maps||(this.string_maps=new Map),this.string_maps.has(e))return this.string_maps.get(e);const t=this.createString(e);return this.string_maps.set(e,t),t}createString(e){if(e==null)return 0;let t;return e instanceof Uint8Array?t=e:t=this.text_encoder.encode(e),this.addInt8(0),this.startVector(1,t.length,1),this.bb.setPosition(this.space-=t.length),this.bb.bytes().set(t,this.space),this.endVector()}createByteVector(e){return e==null?0:(this.startVector(1,e.length,1),this.bb.setPosition(this.space-=e.length),this.bb.bytes().set(e,this.space),this.endVector())}createObjectOffset(e){return e===null?0:typeof e=="string"?this.createString(e):e.pack(this)}createObjectOffsetList(e){const t=[];for(let n=0;n<e.length;++n){const s=e[n];if(s!==null)t.push(this.createObjectOffset(s));else throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.")}return t}createStructOffsetList(e,t){return t(this,e.length),this.createObjectOffsetList(e.slice().reverse()),this.endVector()}}const am=Object.freeze(Object.defineProperty({__proto__:null,Builder:Aa,ByteBuffer:ji,get Encoding(){return Is},FILE_IDENTIFIER_LENGTH:tn,SIZEOF_INT:Kt,SIZEOF_SHORT:Cs,SIZE_PREFIX_LENGTH:Ac,float32:ua,float64:fa,int32:dn,isLittleEndian:Hi},Symbol.toStringTag,{value:"Module"})),$i=rm(am);var Vt={},Ni={},Oo;function om(){if(Oo)return Ni;Oo=1,Object.defineProperty(Ni,"__esModule",{value:!0}),Ni.Model=void 0;var i;return(function(e){e[e.undefined=0]="undefined",e[e.best_match=1]="best_match",e[e.gfs_seamless=2]="gfs_seamless",e[e.gfs_global=3]="gfs_global",e[e.gfs_hrrr=4]="gfs_hrrr",e[e.meteofrance_seamless=5]="meteofrance_seamless",e[e.meteofrance_arpege_seamless=6]="meteofrance_arpege_seamless",e[e.meteofrance_arpege_world=7]="meteofrance_arpege_world",e[e.meteofrance_arpege_europe=8]="meteofrance_arpege_europe",e[e.meteofrance_arome_seamless=9]="meteofrance_arome_seamless",e[e.meteofrance_arome_france=10]="meteofrance_arome_france",e[e.meteofrance_arome_france_hd=11]="meteofrance_arome_france_hd",e[e.jma_seamless=12]="jma_seamless",e[e.jma_msm=13]="jma_msm",e[e.jms_gsm=14]="jms_gsm",e[e.jma_gsm=15]="jma_gsm",e[e.gem_seamless=16]="gem_seamless",e[e.gem_global=17]="gem_global",e[e.gem_regional=18]="gem_regional",e[e.gem_hrdps_continental=19]="gem_hrdps_continental",e[e.icon_seamless=20]="icon_seamless",e[e.icon_global=21]="icon_global",e[e.icon_eu=22]="icon_eu",e[e.icon_d2=23]="icon_d2",e[e.ecmwf_ifs04=24]="ecmwf_ifs04",e[e.metno_nordic=25]="metno_nordic",e[e.era5_seamless=26]="era5_seamless",e[e.era5=27]="era5",e[e.cerra=28]="cerra",e[e.era5_land=29]="era5_land",e[e.ecmwf_ifs=30]="ecmwf_ifs",e[e.gwam=31]="gwam",e[e.ewam=32]="ewam",e[e.glofas_seamless_v3=33]="glofas_seamless_v3",e[e.glofas_forecast_v3=34]="glofas_forecast_v3",e[e.glofas_consolidated_v3=35]="glofas_consolidated_v3",e[e.glofas_seamless_v4=36]="glofas_seamless_v4",e[e.glofas_forecast_v4=37]="glofas_forecast_v4",e[e.glofas_consolidated_v4=38]="glofas_consolidated_v4",e[e.gfs025=39]="gfs025",e[e.gfs05=40]="gfs05",e[e.CMCC_CM2_VHR4=41]="CMCC_CM2_VHR4",e[e.FGOALS_f3_H_highresSST=42]="FGOALS_f3_H_highresSST",e[e.FGOALS_f3_H=43]="FGOALS_f3_H",e[e.HiRAM_SIT_HR=44]="HiRAM_SIT_HR",e[e.MRI_AGCM3_2_S=45]="MRI_AGCM3_2_S",e[e.EC_Earth3P_HR=46]="EC_Earth3P_HR",e[e.MPI_ESM1_2_XR=47]="MPI_ESM1_2_XR",e[e.NICAM16_8S=48]="NICAM16_8S",e[e.cams_europe=49]="cams_europe",e[e.cams_global=50]="cams_global",e[e.cfsv2=51]="cfsv2",e[e.era5_ocean=52]="era5_ocean",e[e.cma_grapes_global=53]="cma_grapes_global",e[e.bom_access_global=54]="bom_access_global",e[e.bom_access_global_ensemble=55]="bom_access_global_ensemble",e[e.arpae_cosmo_seamless=56]="arpae_cosmo_seamless",e[e.arpae_cosmo_2i=57]="arpae_cosmo_2i",e[e.arpae_cosmo_2i_ruc=58]="arpae_cosmo_2i_ruc",e[e.arpae_cosmo_5m=59]="arpae_cosmo_5m",e[e.ecmwf_ifs025=60]="ecmwf_ifs025",e[e.ecmwf_aifs025=61]="ecmwf_aifs025",e[e.gfs013=62]="gfs013",e[e.gfs_graphcast025=63]="gfs_graphcast025",e[e.ecmwf_wam025=64]="ecmwf_wam025",e[e.meteofrance_wave=65]="meteofrance_wave",e[e.meteofrance_currents=66]="meteofrance_currents",e[e.ecmwf_wam025_ensemble=67]="ecmwf_wam025_ensemble",e[e.ncep_gfswave025=68]="ncep_gfswave025",e[e.ncep_gefswave025=69]="ncep_gefswave025",e[e.knmi_seamless=70]="knmi_seamless",e[e.knmi_harmonie_arome_europe=71]="knmi_harmonie_arome_europe",e[e.knmi_harmonie_arome_netherlands=72]="knmi_harmonie_arome_netherlands",e[e.dmi_seamless=73]="dmi_seamless",e[e.dmi_harmonie_arome_europe=74]="dmi_harmonie_arome_europe",e[e.metno_seamless=75]="metno_seamless",e[e.era5_ensemble=76]="era5_ensemble",e[e.ecmwf_ifs_analysis=77]="ecmwf_ifs_analysis",e[e.ecmwf_ifs_long_window=78]="ecmwf_ifs_long_window",e[e.ecmwf_ifs_analysis_long_window=79]="ecmwf_ifs_analysis_long_window",e[e.ukmo_global_deterministic_10km=80]="ukmo_global_deterministic_10km",e[e.ukmo_uk_deterministic_2km=81]="ukmo_uk_deterministic_2km",e[e.ukmo_seamless=82]="ukmo_seamless",e[e.ncep_gfswave016=83]="ncep_gfswave016",e[e.ncep_nbm_conus=84]="ncep_nbm_conus",e[e.ukmo_global_ensemble_20km=85]="ukmo_global_ensemble_20km",e[e.ecmwf_aifs025_single=86]="ecmwf_aifs025_single",e[e.jma_jaxa_himawari=87]="jma_jaxa_himawari",e[e.eumetsat_sarah3=88]="eumetsat_sarah3",e[e.eumetsat_lsa_saf_msg=89]="eumetsat_lsa_saf_msg",e[e.eumetsat_lsa_saf_iodc=90]="eumetsat_lsa_saf_iodc",e[e.satellite_radiation_seamless=91]="satellite_radiation_seamless",e[e.kma_gdps=92]="kma_gdps",e[e.kma_ldps=93]="kma_ldps",e[e.kma_seamless=94]="kma_seamless",e[e.italia_meteo_arpae_icon_2i=95]="italia_meteo_arpae_icon_2i",e[e.ukmo_uk_ensemble_2km=96]="ukmo_uk_ensemble_2km",e[e.meteofrance_arome_france_hd_15min=97]="meteofrance_arome_france_hd_15min",e[e.meteofrance_arome_france_15min=98]="meteofrance_arome_france_15min",e[e.meteoswiss_icon_ch1=99]="meteoswiss_icon_ch1",e[e.meteoswiss_icon_ch2=100]="meteoswiss_icon_ch2",e[e.meteoswiss_icon_ch1_ensemble=101]="meteoswiss_icon_ch1_ensemble",e[e.meteoswiss_icon_ch2_ensemble=102]="meteoswiss_icon_ch2_ensemble",e[e.meteoswiss_icon_seamless=103]="meteoswiss_icon_seamless",e[e.ncep_nam_conus=104]="ncep_nam_conus",e[e.icon_d2_ruc=105]="icon_d2_ruc",e[e.ecmwf_seas5=106]="ecmwf_seas5",e[e.ecmwf_ec46=107]="ecmwf_ec46",e[e.ecmwf_seasonal_seamless=108]="ecmwf_seasonal_seamless",e[e.ecmwf_ifs_seamless=109]="ecmwf_ifs_seamless",e[e.jma_jaxa_mtg_fci=110]="jma_jaxa_mtg_fci"})(i||(Ni.Model=i={})),Ni}var Xt={},qt={},Fi={},Bo;function cm(){if(Bo)return Fi;Bo=1,Object.defineProperty(Fi,"__esModule",{value:!0}),Fi.Aggregation=void 0;var i;return(function(e){e[e.none=0]="none",e[e.minimum=1]="minimum",e[e.maximum=2]="maximum",e[e.mean=3]="mean",e[e.p10=4]="p10",e[e.p25=5]="p25",e[e.median=6]="median",e[e.p75=7]="p75",e[e.p90=8]="p90",e[e.dominant=9]="dominant",e[e.sum=10]="sum",e[e.spread=11]="spread",e[e.anomaly=12]="anomaly",e[e.sot10=13]="sot10",e[e.sot90=14]="sot90",e[e.efi=15]="efi"})(i||(Fi.Aggregation=i={})),Fi}var Oi={},zo;function lm(){if(zo)return Oi;zo=1,Object.defineProperty(Oi,"__esModule",{value:!0}),Oi.Probability=void 0;var i;return(function(e){e[e.none=0]="none",e[e.gt0=1]="gt0",e[e.gt0p1=2]="gt0p1",e[e.gt1=3]="gt1",e[e.gt2=4]="gt2",e[e.gt3=5]="gt3",e[e.gt4=6]="gt4",e[e.gt5=7]="gt5",e[e.gt8=8]="gt8",e[e.gt10=9]="gt10",e[e.gt15=10]="gt15",e[e.gt20=11]="gt20",e[e.gt25=12]="gt25",e[e.gt30=13]="gt30",e[e.gt35=14]="gt35",e[e.gt40=15]="gt40",e[e.gt50=16]="gt50",e[e.gt60=17]="gt60",e[e.gt75=18]="gt75",e[e.gt80=19]="gt80",e[e.gt100=20]="gt100",e[e.lt0=21]="lt0",e[e.lt0p1=22]="lt0p1",e[e.lt1=23]="lt1",e[e.ltm1=24]="ltm1",e[e.ltm2=25]="ltm2",e[e.ltm3=26]="ltm3",e[e.ltm4=27]="ltm4",e[e.ltm5=28]="ltm5",e[e.ltm8=29]="ltm8",e[e.ltm10=30]="ltm10",e[e.ltm15=31]="ltm15",e[e.ltm20=32]="ltm20",e[e.gt1stdev=33]="gt1stdev",e[e.gt1p5stdev=34]="gt1p5stdev",e[e.gt2stdev=35]="gt2stdev",e[e.lt1stdev=36]="lt1stdev",e[e.lt1p5stdev=37]="lt1p5stdev",e[e.lt2stdev=38]="lt2stdev"})(i||(Oi.Probability=i={})),Oi}var Bi={},Go;function hm(){if(Go)return Bi;Go=1,Object.defineProperty(Bi,"__esModule",{value:!0}),Bi.Unit=void 0;var i;return(function(e){e[e.undefined=0]="undefined",e[e.celsius=1]="celsius",e[e.centimetre=2]="centimetre",e[e.cubic_metre_per_cubic_metre=3]="cubic_metre_per_cubic_metre",e[e.cubic_metre_per_second=4]="cubic_metre_per_second",e[e.degree_direction=5]="degree_direction",e[e.dimensionless_integer=6]="dimensionless_integer",e[e.dimensionless=7]="dimensionless",e[e.european_air_quality_index=8]="european_air_quality_index",e[e.fahrenheit=9]="fahrenheit",e[e.feet=10]="feet",e[e.fraction=11]="fraction",e[e.gdd_celsius=12]="gdd_celsius",e[e.geopotential_metre=13]="geopotential_metre",e[e.grains_per_cubic_metre=14]="grains_per_cubic_metre",e[e.gram_per_kilogram=15]="gram_per_kilogram",e[e.hectopascal=16]="hectopascal",e[e.hours=17]="hours",e[e.inch=18]="inch",e[e.iso8601=19]="iso8601",e[e.joule_per_kilogram=20]="joule_per_kilogram",e[e.kelvin=21]="kelvin",e[e.kilopascal=22]="kilopascal",e[e.kilogram_per_square_metre=23]="kilogram_per_square_metre",e[e.kilometres_per_hour=24]="kilometres_per_hour",e[e.knots=25]="knots",e[e.megajoule_per_square_metre=26]="megajoule_per_square_metre",e[e.metre_per_second_not_unit_converted=27]="metre_per_second_not_unit_converted",e[e.metre_per_second=28]="metre_per_second",e[e.metre=29]="metre",e[e.micrograms_per_cubic_metre=30]="micrograms_per_cubic_metre",e[e.miles_per_hour=31]="miles_per_hour",e[e.millimetre=32]="millimetre",e[e.pascal=33]="pascal",e[e.per_second=34]="per_second",e[e.percentage=35]="percentage",e[e.seconds=36]="seconds",e[e.unix_time=37]="unix_time",e[e.us_air_quality_index=38]="us_air_quality_index",e[e.watt_per_square_metre=39]="watt_per_square_metre",e[e.wmo_code=40]="wmo_code",e[e.parts_per_million=41]="parts_per_million",e[e.kilogram_per_cubic_metre=42]="kilogram_per_cubic_metre"})(i||(Bi.Unit=i={})),Bi}var zi={},Ho;function um(){if(Ho)return zi;Ho=1,Object.defineProperty(zi,"__esModule",{value:!0}),zi.Variable=void 0;var i;return(function(e){e[e.undefined=0]="undefined",e[e.apparent_temperature=1]="apparent_temperature",e[e.cape=2]="cape",e[e.cloud_cover=3]="cloud_cover",e[e.cloud_cover_high=4]="cloud_cover_high",e[e.cloud_cover_low=5]="cloud_cover_low",e[e.cloud_cover_mid=6]="cloud_cover_mid",e[e.daylight_duration=7]="daylight_duration",e[e.dew_point=8]="dew_point",e[e.diffuse_radiation=9]="diffuse_radiation",e[e.diffuse_radiation_instant=10]="diffuse_radiation_instant",e[e.direct_normal_irradiance=11]="direct_normal_irradiance",e[e.direct_normal_irradiance_instant=12]="direct_normal_irradiance_instant",e[e.direct_radiation=13]="direct_radiation",e[e.direct_radiation_instant=14]="direct_radiation_instant",e[e.et0_fao_evapotranspiration=15]="et0_fao_evapotranspiration",e[e.evapotranspiration=16]="evapotranspiration",e[e.freezing_level_height=17]="freezing_level_height",e[e.growing_degree_days=18]="growing_degree_days",e[e.is_day=19]="is_day",e[e.latent_heat_flux=20]="latent_heat_flux",e[e.leaf_wetness_probability=21]="leaf_wetness_probability",e[e.lifted_index=22]="lifted_index",e[e.lightning_potential=23]="lightning_potential",e[e.precipitation=24]="precipitation",e[e.precipitation_hours=25]="precipitation_hours",e[e.precipitation_probability=26]="precipitation_probability",e[e.pressure_msl=27]="pressure_msl",e[e.rain=28]="rain",e[e.relative_humidity=29]="relative_humidity",e[e.runoff=30]="runoff",e[e.sensible_heat_flux=31]="sensible_heat_flux",e[e.shortwave_radiation=32]="shortwave_radiation",e[e.shortwave_radiation_instant=33]="shortwave_radiation_instant",e[e.showers=34]="showers",e[e.snow_depth=35]="snow_depth",e[e.snow_height=36]="snow_height",e[e.snowfall=37]="snowfall",e[e.snowfall_height=38]="snowfall_height",e[e.snowfall_water_equivalent=39]="snowfall_water_equivalent",e[e.sunrise=40]="sunrise",e[e.sunset=41]="sunset",e[e.soil_moisture=42]="soil_moisture",e[e.soil_moisture_index=43]="soil_moisture_index",e[e.soil_temperature=44]="soil_temperature",e[e.surface_pressure=45]="surface_pressure",e[e.surface_temperature=46]="surface_temperature",e[e.temperature=47]="temperature",e[e.terrestrial_radiation=48]="terrestrial_radiation",e[e.terrestrial_radiation_instant=49]="terrestrial_radiation_instant",e[e.total_column_integrated_water_vapour=50]="total_column_integrated_water_vapour",e[e.updraft=51]="updraft",e[e.uv_index=52]="uv_index",e[e.uv_index_clear_sky=53]="uv_index_clear_sky",e[e.vapour_pressure_deficit=54]="vapour_pressure_deficit",e[e.visibility=55]="visibility",e[e.weather_code=56]="weather_code",e[e.wind_direction=57]="wind_direction",e[e.wind_gusts=58]="wind_gusts",e[e.wind_speed=59]="wind_speed",e[e.vertical_velocity=60]="vertical_velocity",e[e.geopotential_height=61]="geopotential_height",e[e.wet_bulb_temperature=62]="wet_bulb_temperature",e[e.river_discharge=63]="river_discharge",e[e.wave_height=64]="wave_height",e[e.wave_period=65]="wave_period",e[e.wave_direction=66]="wave_direction",e[e.wind_wave_height=67]="wind_wave_height",e[e.wind_wave_period=68]="wind_wave_period",e[e.wind_wave_peak_period=69]="wind_wave_peak_period",e[e.wind_wave_direction=70]="wind_wave_direction",e[e.swell_wave_height=71]="swell_wave_height",e[e.swell_wave_period=72]="swell_wave_period",e[e.swell_wave_peak_period=73]="swell_wave_peak_period",e[e.swell_wave_direction=74]="swell_wave_direction",e[e.pm10=75]="pm10",e[e.pm2p5=76]="pm2p5",e[e.dust=77]="dust",e[e.aerosol_optical_depth=78]="aerosol_optical_depth",e[e.carbon_monoxide=79]="carbon_monoxide",e[e.nitrogen_dioxide=80]="nitrogen_dioxide",e[e.ammonia=81]="ammonia",e[e.ozone=82]="ozone",e[e.sulphur_dioxide=83]="sulphur_dioxide",e[e.alder_pollen=84]="alder_pollen",e[e.birch_pollen=85]="birch_pollen",e[e.grass_pollen=86]="grass_pollen",e[e.mugwort_pollen=87]="mugwort_pollen",e[e.olive_pollen=88]="olive_pollen",e[e.ragweed_pollen=89]="ragweed_pollen",e[e.european_aqi=90]="european_aqi",e[e.european_aqi_pm2p5=91]="european_aqi_pm2p5",e[e.european_aqi_pm10=92]="european_aqi_pm10",e[e.european_aqi_nitrogen_dioxide=93]="european_aqi_nitrogen_dioxide",e[e.european_aqi_ozone=94]="european_aqi_ozone",e[e.european_aqi_sulphur_dioxide=95]="european_aqi_sulphur_dioxide",e[e.us_aqi=96]="us_aqi",e[e.us_aqi_pm2p5=97]="us_aqi_pm2p5",e[e.us_aqi_pm10=98]="us_aqi_pm10",e[e.us_aqi_nitrogen_dioxide=99]="us_aqi_nitrogen_dioxide",e[e.us_aqi_ozone=100]="us_aqi_ozone",e[e.us_aqi_sulphur_dioxide=101]="us_aqi_sulphur_dioxide",e[e.us_aqi_carbon_monoxide=102]="us_aqi_carbon_monoxide",e[e.sunshine_duration=103]="sunshine_duration",e[e.convective_inhibition=104]="convective_inhibition",e[e.shortwave_radiation_clear_sky=105]="shortwave_radiation_clear_sky",e[e.global_tilted_irradiance=106]="global_tilted_irradiance",e[e.global_tilted_irradiance_instant=107]="global_tilted_irradiance_instant",e[e.ocean_current_velocity=108]="ocean_current_velocity",e[e.ocean_current_direction=109]="ocean_current_direction",e[e.cloud_base=110]="cloud_base",e[e.cloud_top=111]="cloud_top",e[e.mass_density=112]="mass_density",e[e.boundary_layer_height=113]="boundary_layer_height",e[e.formaldehyde=114]="formaldehyde",e[e.glyoxal=115]="glyoxal",e[e.non_methane_volatile_organic_compounds=116]="non_methane_volatile_organic_compounds",e[e.pm10_wildfires=117]="pm10_wildfires",e[e.peroxyacyl_nitrates=118]="peroxyacyl_nitrates",e[e.secondary_inorganic_aerosol=119]="secondary_inorganic_aerosol",e[e.residential_elementary_carbon=120]="residential_elementary_carbon",e[e.total_elementary_carbon=121]="total_elementary_carbon",e[e.pm2_5_total_organic_matter=122]="pm2_5_total_organic_matter",e[e.sea_salt_aerosol=123]="sea_salt_aerosol",e[e.nitrogen_monoxide=124]="nitrogen_monoxide",e[e.thunderstorm_probability=125]="thunderstorm_probability",e[e.rain_probability=126]="rain_probability",e[e.freezing_rain_probability=127]="freezing_rain_probability",e[e.ice_pellets_probability=128]="ice_pellets_probability",e[e.snowfall_probability=129]="snowfall_probability",e[e.carbon_dioxide=130]="carbon_dioxide",e[e.methane=131]="methane",e[e.sea_level_height_msl=132]="sea_level_height_msl",e[e.sea_surface_temperature=133]="sea_surface_temperature",e[e.invert_barometer_height=134]="invert_barometer_height",e[e.hail=135]="hail",e[e.albedo=136]="albedo",e[e.precipitation_type=137]="precipitation_type",e[e.convective_cloud_base=138]="convective_cloud_base",e[e.convective_cloud_top=139]="convective_cloud_top",e[e.snow_depth_water_equivalent=140]="snow_depth_water_equivalent",e[e.secondary_swell_wave_height=141]="secondary_swell_wave_height",e[e.secondary_swell_wave_period=142]="secondary_swell_wave_period",e[e.secondary_swell_wave_peak_period=143]="secondary_swell_wave_peak_period",e[e.secondary_swell_wave_direction=144]="secondary_swell_wave_direction",e[e.tertiary_swell_wave_height=145]="tertiary_swell_wave_height",e[e.tertiary_swell_wave_period=146]="tertiary_swell_wave_period",e[e.tertiary_swell_wave_peak_period=147]="tertiary_swell_wave_peak_period",e[e.tertiary_swell_wave_direction=148]="tertiary_swell_wave_direction",e[e.wind_u_component=149]="wind_u_component",e[e.wind_v_component=150]="wind_v_component",e[e.temperature_max24h=151]="temperature_max24h",e[e.temperature_min24h=152]="temperature_min24h",e[e.temperature_mean24h=153]="temperature_mean24h",e[e.snow_density=154]="snow_density",e[e.longwave_radiation=155]="longwave_radiation",e[e.sea_ice_cover=156]="sea_ice_cover",e[e.k_index=157]="k_index",e[e.roughness_length=158]="roughness_length",e[e.potential_evapotranspiration=159]="potential_evapotranspiration",e[e.wave_peak_period=160]="wave_peak_period",e[e.temperature_max6h=161]="temperature_max6h",e[e.temperature_min6h=162]="temperature_min6h"})(i||(zi.Variable=i={})),zi}var ko;function wc(){if(ko)return qt;ko=1;var i=qt&&qt.__createBinding||(Object.create?(function(c,l,u,d){d===void 0&&(d=u);var p=Object.getOwnPropertyDescriptor(l,u);(!p||("get"in p?!l.__esModule:p.writable||p.configurable))&&(p={enumerable:!0,get:function(){return l[u]}}),Object.defineProperty(c,d,p)}):(function(c,l,u,d){d===void 0&&(d=u),c[d]=l[u]})),e=qt&&qt.__setModuleDefault||(Object.create?(function(c,l){Object.defineProperty(c,"default",{enumerable:!0,value:l})}):function(c,l){c.default=l}),t=qt&&qt.__importStar||(function(){var c=function(l){return c=Object.getOwnPropertyNames||function(u){var d=[];for(var p in u)Object.prototype.hasOwnProperty.call(u,p)&&(d[d.length]=p);return d},c(l)};return function(l){if(l&&l.__esModule)return l;var u={};if(l!=null)for(var d=c(l),p=0;p<d.length;p++)d[p]!=="default"&&i(u,l,d[p]);return e(u,l),u}})();Object.defineProperty(qt,"__esModule",{value:!0}),qt.VariableWithValues=void 0;const n=t($i),s=cm(),r=lm(),o=hm(),a=um();
class h{
	constructor(){
		this.bb=null,this.bb_pos=0
	}__init(l,u){
		return this.bb_pos=l,this.bb=u,this
	}static getRootAsVariableWithValues(l,u){
		return(u||new h).__init(l.readInt32(l.position())+l.position(),l)
	}static getSizePrefixedRootAsVariableWithValues(l,u){
		return l.setPosition(l.position()+n.SIZE_PREFIX_LENGTH),(u||new h).__init(l.readInt32(l.position())+l.position(),l)
	}variable(){const l=this.bb.__offset(this.bb_pos,4);return l?this.bb.readUint8(this.bb_pos+l):a.Variable.undefined}unit(){const l=this.bb.__offset(this.bb_pos,6);return l?this.bb.readUint8(this.bb_pos+l):o.Unit.undefined}value(){const l=this.bb.__offset(this.bb_pos,8);return l?this.bb.readFloat32(this.bb_pos+l):0}values(l){const u=this.bb.__offset(this.bb_pos,10);return u?this.bb.readFloat32(this.bb.__vector(this.bb_pos+u)+l*4):0}valuesLength(){const l=this.bb.__offset(this.bb_pos,10);return l?this.bb.__vector_len(this.bb_pos+l):0}valuesArray(){const l=this.bb.__offset(this.bb_pos,10);return l?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+l),this.bb.__vector_len(this.bb_pos+l)):null}valuesInt64(l){const u=this.bb.__offset(this.bb_pos,12);return u?this.bb.readInt64(this.bb.__vector(this.bb_pos+u)+l*8):BigInt(0)}valuesInt64Length(){const l=this.bb.__offset(this.bb_pos,12);return l?this.bb.__vector_len(this.bb_pos+l):0}altitude(){const l=this.bb.__offset(this.bb_pos,14);return l?this.bb.readInt16(this.bb_pos+l):0}aggregation(){const l=this.bb.__offset(this.bb_pos,16);return l?this.bb.readUint8(this.bb_pos+l):s.Aggregation.none}pressureLevel(){const l=this.bb.__offset(this.bb_pos,18);return l?this.bb.readInt16(this.bb_pos+l):0}depth(){const l=this.bb.__offset(this.bb_pos,20);return l?this.bb.readInt16(this.bb_pos+l):0}depthTo(){const l=this.bb.__offset(this.bb_pos,22);return l?this.bb.readInt16(this.bb_pos+l):0}ensembleMember(){const l=this.bb.__offset(this.bb_pos,24);return l?this.bb.readInt16(this.bb_pos+l):0}previousDay(){const l=this.bb.__offset(this.bb_pos,26);return l?this.bb.readInt16(this.bb_pos+l):0}probability(){const l=this.bb.__offset(this.bb_pos,28);return l?this.bb.readUint8(this.bb_pos+l):r.Probability.none}}return qt.VariableWithValues=h,qt}var Wo;function fm(){if(Wo)return Xt;Wo=1;var i=Xt&&Xt.__createBinding||(Object.create?(function(o,a,h,c){c===void 0&&(c=h);var l=Object.getOwnPropertyDescriptor(a,h);(!l||("get"in l?!a.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return a[h]}}),Object.defineProperty(o,c,l)}):(function(o,a,h,c){c===void 0&&(c=h),o[c]=a[h]})),e=Xt&&Xt.__setModuleDefault||(Object.create?(function(o,a){Object.defineProperty(o,"default",{enumerable:!0,value:a})}):function(o,a){o.default=a}),t=Xt&&Xt.__importStar||(function(){var o=function(a){return o=Object.getOwnPropertyNames||function(h){var c=[];for(var l in h)Object.prototype.hasOwnProperty.call(h,l)&&(c[c.length]=l);return c},o(a)};return function(a){if(a&&a.__esModule)return a;var h={};if(a!=null)for(var c=o(a),l=0;l<c.length;l++)c[l]!=="default"&&i(h,a,c[l]);return e(h,a),h}})();Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.VariablesWithMonth=void 0;const n=t($i),s=wc();
class r{
	constructor(){
		this.bb=null,this.bb_pos=0
	}__init(a,h){
		return this.bb_pos=a,this.bb=h,this}static getRootAsVariablesWithMonth(a,h){return(h||new r).__init(a.readInt32(a.position())+a.position(),a)}static getSizePrefixedRootAsVariablesWithMonth(a,h){return a.setPosition(a.position()+n.SIZE_PREFIX_LENGTH),(h||new r).__init(a.readInt32(a.position())+a.position(),a)}year(){const a=this.bb.__offset(this.bb_pos,4);return a?this.bb.readInt16(this.bb_pos+a):0}month(){const a=this.bb.__offset(this.bb_pos,6);return a?this.bb.readInt8(this.bb_pos+a):0}count(){const a=this.bb.__offset(this.bb_pos,8);return a?this.bb.readInt32(this.bb_pos+a):0}variables(a,h){const c=this.bb.__offset(this.bb_pos,10);return c?(h||new s.VariableWithValues).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+c)+a*4),this.bb):null}variablesLength(){const a=this.bb.__offset(this.bb_pos,10);return a?this.bb.__vector_len(this.bb_pos+a):0}}return Xt.VariablesWithMonth=r,Xt}var Yt={},Vo;function dm(){if(Vo)return Yt;Vo=1;var i=Yt&&Yt.__createBinding||(Object.create?(function(o,a,h,c){c===void 0&&(c=h);var l=Object.getOwnPropertyDescriptor(a,h);(!l||("get"in l?!a.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return a[h]}}),Object.defineProperty(o,c,l)}):(function(o,a,h,c){c===void 0&&(c=h),o[c]=a[h]})),e=Yt&&Yt.__setModuleDefault||(Object.create?(function(o,a){Object.defineProperty(o,"default",{enumerable:!0,value:a})}):function(o,a){o.default=a}),t=Yt&&Yt.__importStar||(function(){var o=function(a){return o=Object.getOwnPropertyNames||function(h){var c=[];for(var l in h)Object.prototype.hasOwnProperty.call(h,l)&&(c[c.length]=l);return c},o(a)};return function(a){if(a&&a.__esModule)return a;var h={};if(a!=null)for(var c=o(a),l=0;l<c.length;l++)c[l]!=="default"&&i(h,a,c[l]);return e(h,a),h}})();Object.defineProperty(Yt,"__esModule",{value:!0}),Yt.VariablesWithTime=void 0;const n=t($i),s=wc();
class r{
	constructor(){
		this.bb=null,this.bb_pos=0
	}__init(a,h){return this.bb_pos=a,this.bb=h,this}static getRootAsVariablesWithTime(a,h){return(h||new r).__init(a.readInt32(a.position())+a.position(),a)}static getSizePrefixedRootAsVariablesWithTime(a,h){return a.setPosition(a.position()+n.SIZE_PREFIX_LENGTH),(h||new r).__init(a.readInt32(a.position())+a.position(),a)}time(){const a=this.bb.__offset(this.bb_pos,4);return a?this.bb.readInt64(this.bb_pos+a):BigInt("0")}timeEnd(){const a=this.bb.__offset(this.bb_pos,6);return a?this.bb.readInt64(this.bb_pos+a):BigInt("0")}interval(){const a=this.bb.__offset(this.bb_pos,8);return a?this.bb.readInt32(this.bb_pos+a):0}variables(a,h){const c=this.bb.__offset(this.bb_pos,10);return c?(h||new s.VariableWithValues).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+c)+a*4),this.bb):null}variablesLength(){const a=this.bb.__offset(this.bb_pos,10);return a?this.bb.__vector_len(this.bb_pos+a):0}}return Yt.VariablesWithTime=r,Yt}var Xo;function pm(){if(Xo)return Vt;Xo=1;var i=Vt&&Vt.__createBinding||(Object.create?(function(h,c,l,u){u===void 0&&(u=l);var d=Object.getOwnPropertyDescriptor(c,l);(!d||("get"in d?!c.__esModule:d.writable||d.configurable))&&(d={enumerable:!0,get:function(){return c[l]}}),Object.defineProperty(h,u,d)}):(function(h,c,l,u){u===void 0&&(u=l),h[u]=c[l]})),e=Vt&&Vt.__setModuleDefault||(Object.create?(function(h,c){Object.defineProperty(h,"default",{enumerable:!0,value:c})}):function(h,c){h.default=c}),t=Vt&&Vt.__importStar||(function(){var h=function(c){return h=Object.getOwnPropertyNames||function(l){var u=[];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(u[u.length]=d);return u},h(c)};return function(c){if(c&&c.__esModule)return c;var l={};if(c!=null)for(var u=h(c),d=0;d<u.length;d++)u[d]!=="default"&&i(l,c,u[d]);return e(l,c),l}})();Object.defineProperty(Vt,"__esModule",{value:!0}),Vt.WeatherApiResponse=void 0;const n=t($i),s=om(),r=fm(),o=dm();
class a{
	constructor(){
		this.bb=null,this.bb_pos=0}__init(c,l){return this.bb_pos=c,this.bb=l,this}static getRootAsWeatherApiResponse(c,l){return(l||new a).__init(c.readInt32(c.position())+c.position(),c)}static getSizePrefixedRootAsWeatherApiResponse(c,l){return c.setPosition(c.position()+n.SIZE_PREFIX_LENGTH),(l||new a).__init(c.readInt32(c.position())+c.position(),c)}latitude(){const c=this.bb.__offset(this.bb_pos,4);return c?this.bb.readFloat32(this.bb_pos+c):0}longitude(){const c=this.bb.__offset(this.bb_pos,6);return c?this.bb.readFloat32(this.bb_pos+c):0}elevation(){const c=this.bb.__offset(this.bb_pos,8);return c?this.bb.readFloat32(this.bb_pos+c):0}generationTimeMilliseconds(){const c=this.bb.__offset(this.bb_pos,10);return c?this.bb.readFloat32(this.bb_pos+c):0}locationId(){const c=this.bb.__offset(this.bb_pos,12);return c?this.bb.readInt64(this.bb_pos+c):BigInt("0")}model(){const c=this.bb.__offset(this.bb_pos,14);return c?this.bb.readUint8(this.bb_pos+c):s.Model.undefined}utcOffsetSeconds(){const c=this.bb.__offset(this.bb_pos,16);return c?this.bb.readInt32(this.bb_pos+c):0}timezone(c){const l=this.bb.__offset(this.bb_pos,18);return l?this.bb.__string(this.bb_pos+l,c):null}timezoneAbbreviation(c){const l=this.bb.__offset(this.bb_pos,20);return l?this.bb.__string(this.bb_pos+l,c):null}current(c){const l=this.bb.__offset(this.bb_pos,22);return l?(c||new o.VariablesWithTime).__init(this.bb.__indirect(this.bb_pos+l),this.bb):null}daily(c){const l=this.bb.__offset(this.bb_pos,24);return l?(c||new o.VariablesWithTime).__init(this.bb.__indirect(this.bb_pos+l),this.bb):null}hourly(c){const l=this.bb.__offset(this.bb_pos,26);return l?(c||new o.VariablesWithTime).__init(this.bb.__indirect(this.bb_pos+l),this.bb):null}minutely15(c){const l=this.bb.__offset(this.bb_pos,28);return l?(c||new o.VariablesWithTime).__init(this.bb.__indirect(this.bb_pos+l),this.bb):null}monthly(c){const l=this.bb.__offset(this.bb_pos,30);return l?(c||new r.VariablesWithMonth).__init(this.bb.__indirect(this.bb_pos+l),this.bb):null}}return Vt.WeatherApiResponse=a,Vt}var qo;function mm(){if(qo)return mi;qo=1;var i=mi&&mi.__awaiter||function(o,a,h,c){function l(u){return u instanceof h?u:new h(function(d){d(u)})}return new(h||(h=Promise))(function(u,d){function p(m){try{v(c.next(m))}catch(f){d(f)}}function g(m){try{v(c.throw(m))}catch(f){d(f)}}function v(m){m.done?u(m.value):l(m.value).then(p,g)}v((c=c.apply(o,a||[])).next())})};Object.defineProperty(mi,"__esModule",{value:!0}),mi.fetchWeatherApi=r;const e=$i,t=pm(),n=o=>new Promise(a=>setTimeout(a,o));function s(o){return i(this,arguments,void 0,function*(a,h=3,c=.5,l=2,u={}){const d=[500,502,504],p=[400,429];let g=0,v=yield fetch(a,u);for(;d.includes(v.status);){if(g++,g>=h)throw new Error(v.statusText);const m=Math.min(c*Math.pow(2,g),l)*1e3;yield n(m),v=yield fetch(a,u)}if(p.includes(v.status)){const m=yield v.json();throw"reason"in m?new Error(m.reason):new Error(v.statusText)}return v})}function r(o,a){return i(this,arguments,void 0,function*(h,c,l=3,u=.2,d=2,p={}){const g=new URLSearchParams(c);g.set("format","flatbuffers");const v=yield s(`${h}?${g.toString()}`,l,u,d,p),m=new e.ByteBuffer(new Uint8Array(yield v.arrayBuffer())),f=[];let T=0;for(;T<m.capacity();){m.setPosition(T);const E=m.readInt32(m.position());f.push(t.WeatherApiResponse.getSizePrefixedRootAsWeatherApiResponse(m)),T+=E+4}return f})}return mi}var _m=mm();const Yo={type:"change"},wa={type:"start"},Rc={type:"end"},Ss=new Ea,jo=new Pn,xm=Math.cos(70*Dl.DEG2RAD),ft=new N,At=2*Math.PI,Ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},br=1e-6;
class gm extends _h{
	constructor(e,t=null){super(e,t),this.state=Ke.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xi.ROTATE,MIDDLE:xi.DOLLY,RIGHT:xi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Zn,this._lastTargetPosition=new N,this._quat=new Zn().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uo,this._sphericalDelta=new uo,this._scale=1,this._panOffset=new N,this._rotateStart=new Ne,this._rotateEnd=new Ne,this._rotateDelta=new Ne,this._panStart=new Ne,this._panEnd=new Ne,this._panDelta=new Ne,this._dollyStart=new Ne,this._dollyEnd=new Ne,this._dollyDelta=new Ne,this._dollyDirection=new N,this._mouse=new Ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bm.bind(this),this._onPointerDown=vm.bind(this),this._onPointerUp=Sm.bind(this),this._onContextMenu=Rm.bind(this),this._onMouseWheel=ym.bind(this),this._onKeyDown=Tm.bind(this),this._onTouchStart=Am.bind(this),this._onTouchMove=wm.bind(this),this._onMouseDown=Mm.bind(this),this._onMouseMove=Em.bind(this),this._interceptControlDown=Cm.bind(this),this._interceptControlUp=Pm.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yo),this.update(),this.state=Ke.NONE}update(e=null){const t=this.object.position;ft.copy(t).sub(this.target),ft.applyQuaternion(this._quat),this._spherical.setFromVector3(ft),this.autoRotate&&this.state===Ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=At:n>Math.PI&&(n-=At),s<-Math.PI?s+=At:s>Math.PI&&(s-=At),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ft.setFromSpherical(this._spherical),ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ft.length();o=this._clampDistance(a*this._scale);const h=a-o;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),r=!!h}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=h!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ss.origin.copy(this.object.position),Ss.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ss.direction))<xm?this.object.lookAt(this.target):(jo.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ss.intersectPlane(jo,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>br||8*(1-this._lastQuaternion.dot(this.object.quaternion))>br||this._lastTargetPosition.distanceToSquared(this.target)>br?(this.dispatchEvent(Yo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?At/60*this.autoRotateSpeed*e:At/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ft.setFromMatrixColumn(t,0),ft.multiplyScalar(-e),this._panOffset.add(ft)}_panUp(e,t){this.screenSpacePanning===!0?ft.setFromMatrixColumn(t,1):(ft.setFromMatrixColumn(t,0),ft.crossVectors(this.object.up,ft)),ft.multiplyScalar(e),this._panOffset.add(ft)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ft.copy(s).sub(this.target);let r=ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(At*this._rotateDelta.x/t.clientHeight),this._rotateUp(At*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(At*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-At*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(At*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-At*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(At*this._rotateDelta.x/t.clientHeight),this._rotateUp(At*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function vm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function bm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Sm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rc),this.state=Ke.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Mm(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ke.DOLLY;break;case xi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ke.ROTATE}break;case xi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ke.PAN}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(wa)}function Em(i){switch(this.state){case Ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ym(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ke.NONE||(i.preventDefault(),this.dispatchEvent(wa),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Rc))}function Tm(i){this.enabled!==!1&&this._handleKeyDown(i)}function Am(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ke.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ke.TOUCH_PAN;break;default:this.state=Ke.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ke.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ke.TOUCH_DOLLY_ROTATE;break;default:this.state=Ke.NONE}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(wa)}function wm(i){switch(this._trackPointer(i),this.state){case Ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ke.NONE}}function Rm(i){this.enabled!==!1&&i.preventDefault()}function Cm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Pm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const jn=new nh,Cc=window.innerWidth*.8,Pc=500,Us=new Bt(75,Cc/Pc,.1,1e3),Jt=new sm({logarithmicDepthBuffer:!0});Jt.setSize(Cc,Pc);Jt.domElement.id="scene";document.body.appendChild(Jt.domElement);var Cn=document.getElementById("coordsLabel"),Dm=document.getElementById("loading");const Lm=new fh,Dc=Lm.load("assets/8081_earthmap4k.jpg");Dc.colorSpace=Lt;const Lc=new gm(Us,Jt.domElement);var Mt=[],Ko=new N(0,0,0),Zo=new N(0,0,0);const Ra=100;async function Im(i){return console.log("in readTextFile"),fetch(i,{mode:"cors"}).then(function(e){if(e.ok&&e.status==200)return e.json();if(e.ok){console.log("status is not ok:",e.status,e.statusText);return}else{console.log("fetch is not ok:",e.status,e.statusText);return}}).catch(e=>console.log("error loading json:",e)).then(function(e){Mt=e,Mt=[Mt[0],Mt[1],Mt[2],Mt[3]],Um()}).catch(e=>console.log("error setting up data:",e))}await Im("https://a.windbornesystems.com/treasure/00.json");function Um(){console.log("in setupData");for(var i=0;i<3;i++){var e=Mt.map(t=>t[i]);Ko.setComponent(i,Math.min(...e)),Zo.setComponent(i,Math.max(...e))}console.log("initialized max & min: ",Ko,Zo)}async function Nm(){const i="https://api.open-meteo.com/v1/forecast";
	for(var e={latitude:[0],longitude:[0],hourly:["cloud_cover_low","cloud_cover_mid","cloud_cover_high"],forecast_hours:1},t=[],n=0;n<Mt.length;n+=500)e.latitude=Mt.map(s=>Math.round(s[0]*10)/10).slice(n,Math.min(n+500,Mt.length)),e.longitude=Mt.map(s=>Math.round(s[1]*10)/10).slice(n,Math.min(n+500,Mt.length)),t=t.concat(await _m.fetchWeatherApi(i,e)),console.log("Fetched rows",n,"to",Math.min(n+500,Mt.length)),await new Promise(s=>setTimeout(s,500));return t}await Nm().then(function(i){Dm.style.display="none";const e=new Ai(4,4,4);var t,n;for(var s of i){const r=s.latitude(),o=s.longitude(),a=s.hourly(),h=a.variables(0).valuesArray()[0],c=a.variables(1).valuesArray()[0],l=a.variables(2).valuesArray()[0];console.log(`Cloud cover for (${r}, ${o}) is:
Low: ${h}
Mid: ${c}
High: ${l}
`),t=new Nn({color:16777215,opacity:h/100,transparent:!0}),n=new Nt(e,t),n.scale.fromArray([.95,1.5,.95]),n.rotateOnWorldAxis(new N(1,0,0),Dn(90-r)),n.rotateOnWorldAxis(new N(0,1,0),Dn(o)),n.position.fromArray(Ps([r,o,1.5])),n.name="cloud",console.log("low cloud mesh rotation:",n.rotation),jn.add(n),t=new Nn({color:16777215,opacity:c/100,transparent:!0}),n=new Nt(e,t),n.scale.setY(2.5),n.rotateOnWorldAxis(new N(1,0,0),Dn(90-r)),n.rotateOnWorldAxis(new N(0,1,0),Dn(o)),n.position.fromArray(Ps([r,o,5.5])),n.name="cloud",jn.add(n),t=new Nn({color:16777215,opacity:l/100,transparent:!0}),n=new Nt(e,t),n.scale.fromArray([1.05,4,1.05]),n.rotateOnWorldAxis(new N(1,0,0),Dn(90-r)),n.rotateOnWorldAxis(new N(0,1,0),Dn(o)),n.position.fromArray(Ps([r,o,12])),n.name="cloud",jn.add(n)}});
function Dn(i){return i/180*Math.PI}
function $o(i){return i/Math.PI*180}
function Ps(i){
	var e=Dn(i[1]),t=Dn(i[0]),n=Ra+i[2],s=[n*Math.sin(e)*Math.cos(t),n*Math.sin(t),n*Math.cos(e)*Math.cos(t)];
	return s
}function Fm(i){var e=i[0]*i[0],t=i[1]*i[1],n=i[2]*i[2],s=i[0],r=i[2],o=i[1],a=Math.sqrt(e+n+t),h=Math.acos(r/Math.sqrt(e+n))*(s>=0?1:-1),c=Math.asin(o/a),l=[$o(c),$o(h),a-Ra];return l}
class Om{
	constructor(){
		this.raycaster=new mh,this.pickedObject=null
	}pick(e,t,n){
		this.pickedObject&&(this.pickedObject=null),this.raycaster.setFromCamera(new Ne(e.x,e.y),n);
		const s=this.raycaster.intersectObjects(t.children);
		for(var r of s)if(r.object.name!=="bigSphere"&&r.object.name!=="cloud"){
			this.pickedObject=r.object;
			var o=Fm(this.pickedObject.position.toArray()).toString();
			Cn&&(Cn.innerHTML="Balloon #"+this.pickedObject.name+"<br>Position: ("+o+")<br>Original pos: ("+Mt[parseInt(this.pickedObject.name)],Cn.style.display="block",Cn.style.top=($t.screenY-20).toString()+"px",Cn.style.left=$t.screenX.toString()+"px");
			return
		}Cn&&(Cn.innerHTML="",Cn.style.display="none")
	}
}const $t={x:0,y:0,screenX:0,screenY:0};
Ca();
function Bm(i){
	const e=Jt.domElement.getBoundingClientRect();
	return{
		x:(i.clientX-e.left)*Jt.domElement.width/e.width,
		y:(i.clientY-e.top)*Jt.domElement.height/e.height
	}
}function zm(i){
	const e=Bm(i);
	$t.x=e.x/Jt.domElement.width*2-1,$t.y=e.y/Jt.domElement.height*-2+1,$t.screenX=i.clientX,$t.screenY=i.clientY
}function Ca(){
	$t.x=-1e5,$t.y=-1e5,$t.screenX=-1e5,$t.screenY=-1e5
}window.addEventListener("mousemove",zm);
window.addEventListener("mouseout",Ca);
window.addEventListener("mouseleave",Ca);
var Jo=new Nn({color:14540253}),Ns,Ms;
Mt.forEach(function(i,e){Ns=new zs(1,8,4),Jo=new Nn({color:16728160}),Ms=new Nt(Ns,Jo),Ms.position.fromArray(Ps(i)),e==0&&console.log("original pos:",i),Ms.name=e.toString(),jn.add(Ms)});
Ns=new zs(Ra,32,16);var Gm=new Nn({map:Dc});
const Pa=new Nt(Ns,Gm);
Pa.name="bigSphere";
Pa.rotateY(-Math.PI/2);
jn.add(Pa);
Us.position.z=200;
Lc.update();
const Hm=new Om;
function km(){
	Hm.pick($t,jn,Us),Jt.render(jn,Us),Lc.update()
}Jt.setAnimationLoop(km);
