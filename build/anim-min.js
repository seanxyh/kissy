/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("anim/base",function(g,e,l,f,m,p,a){function q(c,d,b,h,k,r){if(!(c=e.get(c)))return a;if(!(this instanceof q))return new q(c,d,b,h,k,r);var u=g.isPlainObject(b);d=d;this.domEl=c;if(g.isPlainObject(d))d=String(g.param(d,";")).replace(/=/g,":").replace(/%23/g,"#").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();var A=d,v=c,y;c={};var B=t.length;v=e.insertAfter(v.cloneNode(true),v);y=v.style;for(i(v,A);B--;){var D=t[B];if(y[D])c[D]=(o[D]||o["*"]).getter(v,D)}A=n(A);for(var E in A)c[E]=(o[E]||
o["*"]).getter(v,E);e.remove(v);this.props=c;this.targetStyle=d;if(u)u=g.merge(C,b);else{u=g.clone(C);if(b)u.duration=parseFloat(b)||1;if(g.isString(h)||g.isFunction(h))u.easing=h;if(g.isFunction(k))u.complete=k;if(r!==a)u.nativeSupport=r}if(!g.isEmptyObject(n(d)))u.nativeSupport=false;this.config=u;if(u.nativeSupport&&w()&&g.isString(h=u.easing))if(/cubic-bezier\([\s\d.,]+\)/.test(h)||(h=f.NativeTimeFunction[h])){u.easing=h;this.transitionName=w()}if(g.isFunction(k))this.callback=k;return a}function z(c,
d){return d}function i(c,d){if(m.ie&&d.indexOf(x)>-1){var b=d.match(/opacity\s*:\s*([^;]+)(;|$)/);b&&e.css(c,x,parseFloat(b[1]))}c.style.cssText+=";"+d;b=n(d);for(var h in b)c[h]=b[h]}function n(c){for(var d={},b=0;b<s.length;b++){var h=s[b].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();if(h=c.match(RegExp(h+"\\s*:([^;]+)(;|$)")))d[s[b]]=g.trim(h[1])}return d}var t,s,x,C,j;l=l.Target;t="borderBottomWidth borderBottomStyle borderLeftWidth borderLeftStyle borderRightWidth borderRightStyle borderSpacing borderTopWidth borderTopStyle bottom fontFamily fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" ");
s=[];x="opacity";C={duration:1,easing:"easeNone",nativeSupport:true};q.PROPS=t;q.CUSTOM_ATTRS=s;q.PROP_OPS={"*":{getter:function(c,d){var b=e.css(c,d),h=parseFloat(b);b=(b+"").replace(/^[-\d.]+/,"");if(isNaN(h))return{v:b,u:"",f:z};return{v:h,u:b,f:this.interpolate}},setter:function(c,d,b){return e.css(c,d,b)},interpolate:function(c,d,b){return(c+(d-c)*b).toFixed(3)}}};var o=q.PROP_OPS;g.augment(q,l,{isRunning:false,elapsedTime:0,start:0,finish:0,duration:0,run:function(){var c=this.config,d=this.domEl,
b,h=this.props,k={},r;if(!this.isRunning)if(this.fire("start")!==false){this.stop();this.duration=b=c.duration*1E3;if(this.transitionName)this._nativeRun();else{for(r in h)k[r]=(o[r]||o["*"]).getter(d,r);this.source=k;d=g.now();b=d+b;c=c.easing;if(g.isString(c))c=f[c]||f.easeNone;this.start=d;this.finish=b;this.easing=c;p.start(this)}this.isRunning=true;return this}},_complete:function(){this.fire("complete");this.callback&&this.callback()},_runFrame:function(){var c=this.domEl,d=this.finish,b=this.start,
h=this.duration,k=g.now(),r=this.source,u=this.easing,A=this.props,v;b=k-b;h=k>d?1:b/h;var y,B;this.elapsedTime=b;for(v in A){b=r[v];y=A[v];if(y.v==0)y.u=b.u;if(b.u!==y.u){b.v=0;b.u=y.u}b=y.f(b.v,y.v,u(h))+y.u;(o[v]||o["*"]).setter(c,v,b)}if(this.fire("step")===false||(B=k>d)){this.stop();B&&this._complete()}},_nativeRun:function(){var c=this,d=c.domEl,b=c.duration,h=c.config.easing,k=c.transitionName,r={};r[k+"Property"]="all";r[k+"Duration"]=b+"ms";r[k+"TimingFunction"]=h;e.css(d,r);g.later(function(){i(d,
c.targetStyle)},0);g.later(function(){c.stop(true)},b)},stop:function(c){if(this.isRunning){if(this.transitionName)this._nativeStop(c);else{if(c){i(this.domEl,this.targetStyle);this._complete()}p.stop(this)}this.isRunning=false;return this}},_nativeStop:function(c){var d=this.domEl,b=this.transitionName,h=this.props,k;if(c){e.css(d,b+"Property","none");this._complete()}else{for(k in h)e.css(d,k,e._getComputedStyle(d,k));e.css(d,b+"Property","none")}}});q.supportTransition=function(){if(j)return j;
var c="transition",d,b=document.body;if(b.style[c]!==a)d=c;else g.each(["Webkit","Moz","O"],function(h){if(b.style[c=h+"Transition"]!==a){d=c;return false}});return j=d};var w=q.supportTransition;return q},{requires:["dom","event","./easing","ua","./manager"]});
KISSY.add("anim/color",function(g,e,l){function f(i){i=i.toLowerCase();var n;if(n=i.match(p))return[parseInt(n[1]),parseInt(n[2]),parseInt(n[3])];else if(n=i.match(a)){for(i=1;i<n.length;i++)if(n[i].length<2)n[i]+=n[i];return[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]}if(m[i])return m[i];return[255,255,255]}var m={black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],
olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255]},p=/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,a=/^#?([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})$/i,q="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color outlineColor".split(" "),z=l.PROP_OPS;l=l.PROPS;l.push.apply(l,q);z.color={getter:function(i,n){return{v:f(e.css(i,n)),u:"",f:this.interpolate}},setter:z["*"].setter,interpolate:function(i,n,t){var s=
z["*"].interpolate;return"rgb("+[Math.floor(s(i[0],n[0],t)),Math.floor(s(i[1],n[1],t)),Math.floor(s(i[2],n[2],t))].join(", ")+")"}};g.each(q,function(i){z[i]=z.color})},{requires:["dom","./base"]});
KISSY.add("anim/easing",function(){var g=Math,e=g.PI,l=g.pow,f=g.sin,m=1.70158,p={easeNone:function(a){return a},easeIn:function(a){return a*a},easeOut:function(a){return(2-a)*a},easeBoth:function(a){return(a*=2)<1?0.5*a*a:0.5*(1- --a*(a-2))},easeInStrong:function(a){return a*a*a*a},easeOutStrong:function(a){return 1- --a*a*a*a},easeBothStrong:function(a){return(a*=2)<1?0.5*a*a*a*a:0.5*(2-(a-=2)*a*a*a)},elasticIn:function(a){if(a===0||a===1)return a;return-(l(2,10*(a-=1))*f((a-0.075)*2*e/0.3))},elasticOut:function(a){if(a===
0||a===1)return a;return l(2,-10*a)*f((a-0.075)*2*e/0.3)+1},elasticBoth:function(a){if(a===0||(a*=2)===2)return a;if(a<1)return-0.5*l(2,10*(a-=1))*f((a-0.1125)*2*e/0.45);return l(2,-10*(a-=1))*f((a-0.1125)*2*e/0.45)*0.5+1},backIn:function(a){if(a===1)a-=0.0010;return a*a*((m+1)*a-m)},backOut:function(a){return(a-=1)*a*((m+1)*a+m)+1},backBoth:function(a){if((a*=2)<1)return 0.5*a*a*(((m*=1.525)+1)*a-m);return 0.5*((a-=2)*a*(((m*=1.525)+1)*a+m)+2)},bounceIn:function(a){return 1-p.bounceOut(1-a)},bounceOut:function(a){return a<
1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375},bounceBoth:function(a){if(a<0.5)return p.bounceIn(a*2)*0.5;return p.bounceOut(a*2-1)*0.5+0.5}};p.NativeTimeFunction={easeNone:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeBoth:"ease-in-out",easeInStrong:"cubic-bezier(0.9, 0.0, 0.9, 0.5)",easeOutStrong:"cubic-bezier(0.1, 0.5, 0.1, 1.0)",easeBothStrong:"cubic-bezier(0.9, 0.0, 0.1, 1.0)"};return p});
KISSY.add("anim/manager",function(g){function e(f){f[l]=f[l]||g.guid("anim-");return f[l]}var l=g.guid("anim-");return{interval:20,runnings:{},timer:null,start:function(f){var m=e(f);if(!this.runnings[m]){this.runnings[m]=f;this.startTimer()}},stop:function(f){this.notRun(f)},notRun:function(f){delete this.runnings[e(f)];g.isEmptyObject(this.runnings)&&this.stopTimer()},pause:function(f){this.notRun(f)},resume:function(f){this.start(f)},startTimer:function(){var f=this;if(!f.timer)f.timer=setTimeout(function(){if(f.runFrames())f.stopTimer();
else{f.timer=null;f.startTimer()}},f.interval)},stopTimer:function(){var f=this.timer;if(f){clearTimeout(f);this.timer=null}},runFrames:function(){var f=true,m=this.runnings,p;for(p in m)if(m.hasOwnProperty(p)){f=false;m[p]._runFrame()}return f}}});
KISSY.add("anim/node-plugin",function(g,e,l,f,m){function p(j,o,w,c,d){if(o==="toggle"){d=e.css(j,q)===z?1:0;o="show"}if(d)e.css(j,q,e.data(j,q)||"");var b={},h={};g.each(C[o],function(k){if(k===i){b[i]=e.css(j,i);e.css(j,i,n)}else if(k===t){b[t]=e.css(j,t);h.opacity=d?1:0;d&&e.css(j,t,0)}else if(k===s){b[s]=e.css(j,s);h.height=d?e.css(j,s)||j.naturalHeight:0;d&&e.css(j,s,0)}else if(k===x){b[x]=e.css(j,x);h.width=d?e.css(j,x)||j.naturalWidth:0;d&&e.css(j,x,0)}});return(new l(j,h,w,"easeOut",function(){if(!d){var k=
j.style,r=k[q];if(r!==z){r&&e.data(j,q,r);k[q]=z}b[s]&&e.css(j,{height:b[s]});b[x]&&e.css(j,{width:b[x]});b[t]&&e.css(j,{opacity:b[t]});b[i]&&e.css(j,{overflow:b[i]})}c&&g.isFunction(c)&&c()})).run()}f=g.require("node/node").prototype;var a=g.require("node/nodelist").prototype,q="display",z="none",i="overflow",n="hidden",t="opacity",s="height",x="width",C={show:[i,t,s,x],fade:[t],slide:[i,s]};g.each([f,a],function(j){j.animate=function(){var o=this,w=g.makeArray(arguments);o.__anims=o.__anims||[];
g.each(this,function(c){o.__anims.push(l.apply(m,[c].concat(w)).run())});return this};j.stopAnimate=function(o){g.each(this.__anims,function(w){w.stop(o)});this.__anims=[]};g.each({show:["show",1],hide:["show",0],toggle:["toggle"],fadeIn:["fade",1],fadeOut:["fade",0],slideDown:["slide",1],slideUp:["slide",0]},function(o,w){j[w]=function(c,d){var b=this;b.__anims=b.__anims||[];e[w]&&arguments.length===0?e[w](this):g.each(this,function(h){b.__anims.push(p(h,o[0],c,d,o[1]))});return this}})})},{requires:["dom",
"anim/base","node"]});KISSY.add("anim/scroll",function(g,e,l){var f=l.PROP_OPS;l.CUSTOM_ATTRS.push("scrollLeft","scrollTop");f.scrollLeft=f.scrollTop={getter:function(m,p){return{v:m[p],u:"",f:f["*"].interpolate}},setter:function(m,p,a){m[p]=a}}},{requires:["dom","./base"]});KISSY.add("anim",function(g,e,l){e.Easing=l;return e},{requires:["anim/base","anim/easing","anim/node-plugin","anim/color","anim/scroll"]});