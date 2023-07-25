import{d as ut,r as k,_ as J,o as ft,a as ht,b as T,c as K,e as f,f as G,w as S,g as I,h as B,t as Z,i as O,j as M,k as V,p as dt,l as pt,m as vt}from"./index-012b8d6a.js";var L=function(u,s){return L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])},L(u,s)};function et(u,s){if(typeof s!="function"&&s!==null)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");L(u,s);function e(){this.constructor=u}u.prototype=s===null?Object.create(s):(e.prototype=s.prototype,new e)}function H(u,s){var e=typeof Symbol=="function"&&u[Symbol.iterator];if(!e)return u;var i=e.call(u),a,c=[],m;try{for(;(s===void 0||s-- >0)&&!(a=i.next()).done;)c.push(a.value)}catch(E){m={error:E}}finally{try{a&&!a.done&&(e=i.return)&&e.call(i)}finally{if(m)throw m.error}}return c}function tt(u,s,e){if(e||arguments.length===2)for(var i=0,a=s.length,c;i<a;i++)(c||!(i in s))&&(c||(c=Array.prototype.slice.call(s,0,i)),c[i]=s[i]);return u.concat(c||Array.prototype.slice.call(s))}var ot=function(){function u(){this.t=0}return Object.defineProperty(u.prototype,"length",{get:function(){return this.t},enumerable:!1,configurable:!0}),u.prototype.size=function(){return this.t},u.prototype.empty=function(){return this.t===0},u}();(function(u){et(s,u);function s(){return u!==null&&u.apply(this,arguments)||this}return s})(ot);var yt=function(u){et(s,u);function s(e,i,a){e===void 0&&(e=[]),i===void 0&&(i=function(A,w){return A>w?-1:A<w?1:0}),a===void 0&&(a=!0);var c=u.call(this)||this;if(c.i=i,Array.isArray(e))c.u=a?tt([],H(e),!1):e;else{c.u=[];var m=c;e.forEach(function(A){m.u.push(A)})}c.t=c.u.length;for(var E=c.t>>1,j=c.t-1>>1;j>=0;--j)c.o(j,E);return c}return s.prototype.h=function(e){for(var i=this.u[e];e>0;){var a=e-1>>1,c=this.u[a];if(this.i(c,i)<=0)break;this.u[e]=c,e=a}this.u[e]=i},s.prototype.o=function(e,i){for(var a=this.u[e];e<i;){var c=e<<1|1,m=c+1,E=this.u[c];if(m<this.t&&this.i(E,this.u[m])>0&&(c=m,E=this.u[m]),this.i(E,a)>=0)break;this.u[e]=E,e=c}this.u[e]=a},s.prototype.clear=function(){this.t=0,this.u.length=0},s.prototype.push=function(e){this.u.push(e),this.h(this.t),this.t+=1},s.prototype.pop=function(){if(this.t!==0){var e=this.u[0],i=this.u.pop();return this.t-=1,this.t&&(this.u[0]=i,this.o(0,this.t>>1)),e}},s.prototype.top=function(){return this.u[0]},s.prototype.find=function(e){return this.u.indexOf(e)>=0},s.prototype.remove=function(e){var i=this.u.indexOf(e);return i<0?!1:(i===0?this.pop():i===this.t-1?(this.u.pop(),this.t-=1):(this.u.splice(i,1,this.u.pop()),this.t-=1,this.h(i),this.o(i,this.t>>1)),!0)},s.prototype.updateItem=function(e){var i=this.u.indexOf(e);return i<0?!1:(this.h(i),this.o(i,this.t>>1),!0)},s.prototype.toArray=function(){return tt([],H(this.u),!1)},s}(ot);const C=u=>(dt("data-v-9487125d"),u=u(),pt(),u),_t={class:"d-flex justify-center"},gt={class:"d-flex flex-column align-center"},mt={style:{width:"100%",position:"relative"}},wt={class:"d-flex flex-column align-center",style:{width:"90%"}},bt=C(()=>f("div",{class:"pb-5"},[f("span",{class:"text-h5 font-weight-black text-red"},"Go "),f("span",{class:"text-h5 font-weight-black text-blue"},"Blobs")],-1)),Et=C(()=>f("div",{class:"d-flex justify-center w-100"},[f("div",{class:"pb-4 text-h6"},"Rules")],-1)),xt=C(()=>f("div",{style:{"padding-left":"20%"}},[f("ul",null,[f("li",null,"Take turns placing blobs on the playing area"),f("li",null,"Alternatively, you may pass your turn"),f("li",null,"If you tightly surround an opponent's blob, it is captured"),f("li",null,"Two consecutive passes end the game"),f("li",null,"A player's territory consists of their blobs and any uncontested areas they have surrounded"),f("li",null,"The player with the most territory wins")])],-1)),St={class:"mt-6"},kt=C(()=>f("div",{class:"mt-6"},"Click or tap to make your first move",-1)),Ct={key:0},At={class:"d-flex flex-wrap mb-3 text-body-1"},Bt=C(()=>f("div",{class:"mr-auto"},"Red territory:",-1)),Ot=C(()=>f("div",{class:"break"},null,-1)),Mt=C(()=>f("div",{class:"mr-auto"},"Blue territory:",-1)),d=500,jt=3086,U="white",x=-1,Dt=ut({__name:"GoBlobs",setup(u){const s=k("red"),e=k(!1),i=k(!0),a={winner:void 0,territory:{red:void 0,blue:void 0,total:d*d}},c=k(!0),m=new Map([["red",[244,67,54,255]],["blue",[33,150,243,255]],["white",[255,255,255,255]]].map(([t,o])=>[t,new Uint8ClampedArray(o)]));function E(t){if(t==="red")return"blue";if(t==="blue")return"red";throw new Error(`Invalid other color request: ${t}`)}const j=k("human"),A=k(!1),w=Array.from(Array(d),()=>J.range(d).map(()=>x)),$=new ImageData(new Uint8ClampedArray(Array.from(Array(d*d*4),(t,o)=>m.get(U)[o%4])),d,d),v=new Map;let F=-1;const N={color:U,locationSet:new Map,boundary:[]};function D({x:t,y:o},r){var l;if(w[t][o]=r,r!==x){const n=v.get(r).locationSet;((l=n.get(t))==null?void 0:l.add(o))??n.set(t,new Set([o]))}}const Q=k(null);let R=null;ft(()=>{R=Q.value.getContext("2d")}),ht(()=>{var t;document.title="Go Blobs",(t=document.querySelector("meta[name=viewport]"))==null||t.setAttribute("content","width=542")});function W({offsetX:t,offsetY:o}){if(c.value=!1,!!i.value&&0<=t&&o<d&&0<=t&&o<d){const{isSelfCapture:r,isMerged:l}=X(t,o,s.value,P);r?(e.value=!l,setTimeout(P,300)):(P(),e.value=!1),s.value=E(s.value)}}function P(){var o;const t=$.data;for(let r=0;r<d;r++)for(let l=0;l<d;l++){const n=((o=v.get(w[l][r]))==null?void 0:o.color)??U;t.set(m.get(n),(r*d+l)*4)}R.putImageData($,0,0),A.value&&(R.strokeStyle="rgb(0 0 0 / 20%)",v.forEach(({boundary:r})=>r.forEach(({x:l,y:n})=>R.strokeRect(l,n,1,1))))}function nt(){c.value=!1,e.value?rt():(s.value=E(s.value),e.value=!0)}function rt(){i.value=!1,v.forEach(({color:t,boundary:o},r)=>{o.forEach(({x:l,y:n})=>{if(w[l][n]===x){const{isFound:p,locationSet:h}=ct({x:l,y:n},E(t));p||h.forEach((g,_)=>g.forEach(y=>D({x:_,y},r)))}})}),P(),a.territory.red=0,a.territory.blue=0,v.forEach(({color:t,locationSet:o})=>{o.forEach(r=>{a.territory[t]+=r.size})}),a.territory.red>a.territory.blue?a.winner="red":a.territory.red<a.territory.blue?a.winner="blue":a.winner=void 0}function st(){for(let t=0;t<d;t++)for(let o=0;o<d;o++)w[t][o]=x;v.clear(),N.locationSet.forEach(t=>t.clear()),P(),s.value="red",e.value=!1,i.value=!0}function X(t,o,r,l){let n={isSelfCapture:!1,isMerged:!1};const p=g=>Math.sqrt((g.x-t)**2+(g.y-o)**2);let h=w[t][o]??Z();if(h===x){v.set(++F,{color:r,locationSet:new Map([[t,new Set([o])]]),boundary:q({x:t,y:o})}),h=F,D({x:t,y:o},h);const g=new yt(v.get(h).boundary,(y,b)=>p(y)-p(b),!1);let _=0;for(;!g.empty()&&_<jt;){const y=g.pop(),b=w[y.x][y.y];b!==h&&(b===x?(D(y,h),q(y).forEach(z=>g.push(z)),_++):v.get(b).color===s.value&&(n.isMerged=!0,it(b,h,g,v.get(h).boundary),h=b))}n.isSelfCapture=at(h,l)}else({x:t,y:o}=lt(v.get(h).boundary,p)??Z("Group with no boundary")),n=X(t,o,r,l);return n}function q({x:t,y:o}){return[{x:t-1,y:o},{x:t,y:o-1},{x:t+1,y:o},{x:t,y:o+1}].filter(r=>0<=r.x&&r.x<d&&0<=r.y&&r.y<d)}function it(t,o,r,l){if(t===o)throw new Error(`Attempting to merge group ${t} into itself`);const n=v.get(t);v.get(o).locationSet.forEach((h,g)=>h.forEach(_=>D({x:g,y:_},t))),n.boundary.forEach(h=>r.push(h)),n.boundary=l,v.delete(o)}function at(t,o){const r=new Set,l=n=>{for(;n.length>0;){const{x:p,y:h}=n[n.length-1];if(w[p][h]===x)break;n.pop()}return n.length===0};if(v.forEach(({boundary:n},p)=>{p!==t&&l(n)&&r.add(p)}),r.size>0)r.forEach(n=>Y(n));else if(l(v.get(t).boundary))return o==null||o(),Y(t),!0;return!1}function Y(t){v.get(t).locationSet.forEach((o,r)=>o.forEach(l=>{D({x:r,y:l},x),J.chain(q({x:r,y:l})).map(({x:n,y:p})=>w[n][p]).filter(n=>n!==t&&n!==x).uniq().forEach(n=>v.get(n).boundary.push({x:r,y:l})).value()})),v.delete(t)}function lt(t,o){let r=1/0,l=null;return t.forEach(n=>{if(w[n.x][n.y]===x){const p=o(n);p<r&&(r=p,l=n)}}),l}function ct(t,o){var p,h,g;const r=[t];let l=!1;const n=new Map;for(;!l&&r.length>0;){const{x:_,y}=r.pop();if(!((p=n.get(_))!=null&&p.has(y))){const b=w[_][y];b===x?(h=N.locationSet.get(_))!=null&&h.has(y)?l=!0:(((g=n.get(_))==null?void 0:g.add(y))??n.set(_,new Set([y])),r.push(...q({x:_,y}))):v.get(b).color===o&&(l=!0)}}return l&&n.forEach((_,y)=>_.forEach(b=>{var z;return((z=N.locationSet.get(y))==null?void 0:z.add(b))??N.locationSet.set(y,new Set([b]))})),{isFound:l,locationSet:n}}return(t,o)=>{const r=T("v-sheet"),l=T("v-btn"),n=T("v-col"),p=T("v-row"),h=T("v-container");return O(),K("div",_t,[f("div",gt,[f("div",mt,[c.value?(O(),G(r,{key:0,contained:"",width:d,height:d,class:"intro-overlay d-flex justify-center align-center",style:{position:"absolute"}},{default:S(()=>[f("div",wt,[bt,Et,xt,f("div",St,"Playing against "+M(j.value.toUpperCase())+" on this device",1),kt])]),_:1})):I("",!0),c.value?(O(),G(r,{key:1,onClick:W,width:d,height:d,class:"intro-overlay",style:{position:"absolute",opacity:"0","z-index":"2000"}})):I("",!0)]),f("canvas",{id:"canvas",ref_key:"canvas",ref:Q,width:d,height:d,onClick:W},null,512),B(h,{id:"controls"},{default:S(()=>[i.value?(O(),G(p,{key:0},{default:S(()=>[B(n,{offset:"3",cols:"6",class:"d-flex flex-column align-center"},{default:S(()=>[B(l,{color:s.value,onClick:nt,elevation:"1",style:{"padding-left":"70px","padding-right":"70px"}},{default:S(()=>[V("Pass")]),_:1},8,["color"]),e.value?(O(),K("div",Ct,"(End game)")):I("",!0)]),_:1})]),_:1})):(O(),G(p,{key:1},{default:S(()=>[B(n,{offset:"2",cols:"8",class:"d-flex flex-column align-center"},{default:S(()=>[B(r,{color:a.winner,class:"mb-2 px-16 lineWidth text-h6"},{default:S(()=>[V(M((a.winner===void 0?"Draw":`${a.winner} wins`).toUpperCase()),1)]),_:1},8,["color"]),f("div",At,[Bt,f("div",null,M(a.territory.red)+" / "+M(a.territory.total),1),Ot,Mt,f("div",null,M(a.territory.blue)+" / "+M(a.territory.total),1)]),B(l,{onClick:st,elevation:"1"},{default:S(()=>[V("New game")]),_:1})]),_:1})]),_:1}))]),_:1})])])}}});const Tt=vt(Dt,[["__scopeId","data-v-9487125d"]]);export{Tt as default};
