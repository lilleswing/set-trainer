(this["webpackJsonpset-trainer"]=this["webpackJsonpset-trainer"]||[]).push([[0],[,,,,,,function(e,l,r){e.exports=r(13)},,,,,function(e,l,r){},function(e,l,r){},function(e,l,r){"use strict";r.r(l);var i=r(0),p=r.n(i),n=r(4),s=r.n(n),o=(r(11),r(5)),g=r(2);r(12);var t=function(e){return p.a.createElement("div",null,p.a.createElement("img",{alt:"",src:e.img,onClick:e.onClick}))},a=["green-double-outline-capsule.jpg","green-double-outline-diamond.jpg","green-double-outline-squiggle.jpg","green-double-solid-capsule.jpg","green-double-solid-diamond.jpg","green-double-solid-squiggle.jpg","green-double-stripes-capsule.jpg","green-double-stripes-diamond.jpg","green-double-stripes-squiggle.jpg","green-single-outline-capsule.jpg","green-single-outline-diamond.jpg","green-single-outline-squiggle.jpg","green-single-solid-capsule.jpg","green-single-solid-diamond.jpg","green-single-solid-squiggle.jpg","green-single-stripes-capsule.jpg","green-single-stripes-diamond.jpg","green-single-stripes-squiggle.jpg","green-triple-outline-capsule.jpg","green-triple-outline-diamond.jpg","green-triple-outline-squiggle.jpg","green-triple-solid-capsule.jpg","green-triple-solid-diamond.jpg","green-triple-solid-squiggle.jpg","green-triple-stripes-capsule.jpg","green-triple-stripes-diamond.jpg","green-triple-stripes-squiggle.jpg","purple-double-outline-capsule.jpg","purple-double-outline-diamond.jpg","purple-double-outline-squiggle.jpg","purple-double-solid-capsule.jpg","purple-double-solid-diamond.jpg","purple-double-solid-squiggle.jpg","purple-double-stripes-capsule.jpg","purple-double-stripes-diamond.jpg","purple-double-stripes-squiggle.jpg","purple-single-outline-capsule.jpg","purple-single-outline-diamond.jpg","purple-single-outline-squiggle.jpg","purple-single-solid-capsule.jpg","purple-single-solid-diamond.jpg","purple-single-solid-squiggle.jpg","purple-single-stripes-capsule.jpg","purple-single-stripes-diamond.jpg","purple-single-stripes-squiggle.jpg","purple-triple-outline-capsule.jpg","purple-triple-outline-diamond.jpg","purple-triple-outline-squiggle.jpg","purple-triple-solid-capsule.jpg","purple-triple-solid-diamond.jpg","purple-triple-solid-squiggle.jpg","purple-triple-stripes-capsule.jpg","purple-triple-stripes-diamond.jpg","purple-triple-stripes-squiggle.jpg","red-double-outline-capsule.jpg","red-double-outline-diamond.jpg","red-double-outline-squiggle.jpg","red-double-solid-capsule.jpg","red-double-solid-diamond.jpg","red-double-solid-squiggle.jpg","red-double-stripes-capsule.jpg","red-double-stripes-diamond.jpg","red-double-stripes-squiggle.jpg","red-single-outline-capsule.jpg","red-single-outline-diamond.jpg","red-single-outline-squiggle.jpg","red-single-solid-capsule.jpg","red-single-solid-diamond.jpg","red-single-solid-squiggle.jpg","red-single-stripes-capsule.jpg","red-single-stripes-diamond.jpg","red-single-stripes-squiggle.jpg","red-triple-outline-capsule.jpg","red-triple-outline-diamond.jpg","red-triple-outline-squiggle.jpg","red-triple-solid-capsule.jpg","red-triple-solid-diamond.jpg","red-triple-solid-squiggle.jpg","red-triple-stripes-capsule.jpg","red-triple-stripes-diamond.jpg","red-triple-stripes-squiggle.jpg"],u=[["red","green","purple"],["single","double","triple"],["solid","stripes","outline"],["diamond","squiggle","capsule"]];function d(e,l,r){for(var i=0;i<e.length;i++){var p=e[i];if(p!==l&&p!==r)return p}}function c(e){return JSON.parse(JSON.stringify(e))}var m=function(e){for(var l,r,i=e.length;0!==i;)r=Math.floor(Math.random()*i),l=e[i-=1],e[i]=e[r],e[r]=l;return e};function j(e,l){for(var r=[],i=0;i<e.length;i++)e[i]!==l&&r.push(e[i]);return(r=m(r))[0]}var f=function(){var e=Object(i.useState)({correct:0,wrong:0,startTime:(new Date).getTime()/1e3,solveTime:-1}),l=Object(g.a)(e,2),r=l[0],n=l[1],s=function(){console.log("LOLOLOL");var e=c(r);if(e.correct=e.correct+1,20===e.correct){var l=(new Date).getTime()/1e3-e.startTime;e.solveTime=l}n(e)},f=function(){var e=c(r);e.wrong=e.wrong+1,n(e)};function v(){var e=Math.floor(Math.random()*a.length);return p.a.createElement(t,{img:"labeled/"+a[e],fname:a[e],key:Math.random()+a[e],onClick:f})}function b(e){for(var l="",r=0;r<e.length;r++)0!==r&&(l+="-"),l+=e[r];return l+=".jpg"}var h=function(){for(var e=v(),l=v();e.props.fname===l.props.fname;)l=v();return[e,l]}(),q=Object(g.a)(h,2),w=q[0],E=q[1],k=function(e,l){for(var r=e.props.fname.slice(0,-4),i=l.props.fname.slice(0,-4),n=r.split("-"),g=i.split("-"),a=[],c=0;c<4;c++)if(n[c]!==g[c]){var h=d(u[c],n[c],g[c]);a.push(h)}else a.push(n[c]);console.log(a);var q=p.a.createElement(t,{img:"labeled/"+b(a),fname:b(a),onClick:s,key:Math.random()+"correctAnswer"}),w=function(e){for(var l=[],r=0;r<e.length;r++){for(var i=[],n=0;n<e.length;n++)if(r!==n)i.push(e[n]);else{var s=e[n],o=j(u[r],s);i.push(o)}l.push(i)}for(var g=[],a=0;a<l.length;a++){var d=p.a.createElement(t,{img:"labeled/"+b(l[a]),fname:b(l[a]),onClick:f,key:Math.random()+b(l[a])});g.push(d)}return g}(a);return function(e,l,r,i){var p={};i=m(i),p[r.props.fname]=r,console.log(i);var n,s=Object(o.a)(i);try{for(s.s();!(n=s.n()).done;){var g=n.value;Object.keys(p).length>=6||g.props.fname!==r.props.fname&&g.props.fname!==e.props.fname&&g.props.fname!==l.props.fname&&(p[g.props.fname]=g)}}catch(t){s.e(t)}finally{s.f()}return Object.values(p)}(e,l,q,w=w.concat([v(),v(),v()]))}(w,E);return p.a.createElement("div",{className:"App"},p.a.createElement("div",{className:"board"},p.a.createElement("div",{className:"rowC"},w,E,p.a.createElement("p",null,"Correct: ",r.correct,p.a.createElement("br",null),"Wrong: ",r.wrong,-1!==r.solveTime&&p.a.createElement("h1",null,"Total Time: ",r.solveTime))),p.a.createElement("div",{className:"rowC"},k[0],k[1],k[2]),p.a.createElement("div",{className:"rowC"},k[3],k[4],k[5])))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(p.a.createElement(p.a.StrictMode,null,p.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.0cfaf089.chunk.js.map