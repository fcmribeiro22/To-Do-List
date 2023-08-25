(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>d});var o=t(81),r=t.n(o),a=t(645),c=t.n(a)()(r());c.push([n.id,'body {\n  font-family: Arial, sans-serif;\n  background-color: #f0f0f0;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n#darkOverlay {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 1;\n}\n\np {\n  padding: 10px;\n}\n\nheader,\nfooter {\n  flex-shrink: 0;\n  background-color: #e2d7d7;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n}\n\nmain {\n  display: flex;\n  flex-grow: 1;\n  padding: 20px;\n  padding-top: 10px;\n  background-color: rgb(235, 224, 211);\n}\n\n.projects-tab {\n  flex: 0.5;\n  padding: 20px;\n  padding-top: 10px;\n  border-right: solid 1px #e2d7d7;\n}\n\n.projects-tab-header:hover,\n.tasks-tab-header:hover {\n  background-color: #e7d2d2;\n}\n\n.tasks-tab {\n  flex: 1;\n  padding: 20px;\n  padding-top: 10px;\n}\n\n/* Projects Input form , ommited by default */\n\n.projects-form-popup,\n.task-form-popup {\n  display: none;\n  text-align: center;\n  flex-direction: column;\n  align-items: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  padding: 20px;\n  z-index: 2;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  border-radius: 20px;\n  width: 300px;\n}\n\n.form-container {\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  border: 3px solid #f1f1f1;\n  width: fit-content;\n  padding: 10px 20px;\n  margin-top: 10px;\n  border-radius: 20px;\n}\n\n.form-container input[type="text"],\n.form-container input[type="number"] {\n  width: 90%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n  border-radius: 5px;\n}\n\n/* When the inputs get focus, do something */\n.form-container input[type="text"]:focus,\n.form-container input[type="number"]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for the submit/login button */\n.form-container .btn {\n  background-color: #04aa6d;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  opacity: 0.8;\n  border-radius: 10px;\n}\n\n.form-container .close-button {\n  background-color: red;\n}\n\n.form-container .btn:hover,\n.open-button:hover {\n  opacity: 1;\n}\n\n.project-card {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px;\n  align-items: center;\n  height: 25px;\n  border-radius: 30px;\n  margin-top: 15px;\n}\n\n.project-delete-btn {\n  border: none;\n  cursor: pointer;\n  background-color: rgb(219, 83, 83);\n  border-radius: 30px;\n  height: 25px;\n}\n\n.project-selected {\n  background-color: #04aa6d;\n  opacity: 0.8;\n}\n\n.project-selected:hover {\n  opacity: 1;\n}\n\n.project-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n',""]);const d=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(o)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(c[i]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);o&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},c=[],d=0;d<n.length;d++){var i=n[d],s=o.base?i[0]+o.base:i[0],p=a[s]||0,l="".concat(s," ").concat(p);a[s]=p+1;var u=t(l),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=r(f,o);o.byIndex=d,e.splice(d,0,{identifier:l,updater:m,references:1})}c.push(l)}return c}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var d=t(a[c]);e[d].references--}for(var i=o(n,r),s=0;s<a.length;s++){var p=t(a[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=i}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),c=t.n(a),d=t(565),i=t.n(d),s=t(216),p=t.n(s),l=t(589),u=t.n(l),f=t(28),m={};m.styleTagTransform=u(),m.setAttributes=i(),m.insert=c().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=p(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const y=[{project:"General",tasks:[],selected:!0}];function g(){return y}function h(n,e){y[n].tasks.push(e)}function v(n){n.preventDefault();const e=document.getElementById("proj-name"),t=e.value.trim();g().length<5&&""!==t?(function(n){const e=function(n){return{project:n,tasks:[],selected:!1}}(n);y.push(e)}(t),e.value="",b()):alert("Maximum of 5 projects achieved. Upgrade to premium to get full access."),x()}function x(){document.getElementById("proj-name").value="";const n=document.querySelector(".projects-form-popup"),e=document.getElementById("darkOverlay");n.style.display="none",e.style.display="none"}function b(){let n=g();const e=document.querySelector(".project-container");e.innerHTML="",n.forEach(((t,o)=>{const r=document.createElement("div");r.classList.add("project-card"),n[o].selected&&r.classList.add("project-selected"),e.appendChild(r);const a=document.createElement("h2");if(a.classList.add("project-created"),a.textContent=t.project,r.appendChild(a),n.length>1){const n=document.createElement("button");n.classList.add("project-delete-btn"),n.textContent="-",r.appendChild(n),n.addEventListener("click",(()=>{!function(n){(function(n){y.splice(n,1)})(n),b()}(o)}))}}))}function k(n){const e=g();n.preventDefault();const t=document.getElementById("task-name").value,o=document.getElementById("description-task").value,r=document.getElementById("due-date-task").value,a=document.getElementById("projects-switch");h(parseInt(a.value),{task:t,description:o,duedate:r}),function(){const n=document.querySelector(".task-form-popup"),e=document.getElementById("darkOverlay");n.style.display="none",e.style.display="none"}(),function(){const n=g(),e=document.querySelector(".task-container");e.innerHTML="",n.forEach((n=>{n.tasks.forEach((n=>{const t=document.createElement("div");t.classList.add("task-card"),e.appendChild(t);const o=document.createElement("h2");o.classList.add("task-created"),o.textContent=`Task: ${n.task}`,t.appendChild(o)}))}))}(),console.log(e)}(function(){const n=document.querySelector(".projects-tab-header"),e=document.querySelector(".projects-form-popup"),t=document.getElementById("darkOverlay");n.addEventListener("click",(()=>{e.style.display="flex",t.style.display="block"}));const o=document.querySelector(".submit-button"),r=document.querySelector(".close-button");o.addEventListener("click",v),r.addEventListener("click",x)})(),function(){const n=document.querySelector(".tasks-tab-header"),e=document.querySelector(".task-form-popup"),t=document.getElementById("darkOverlay");n.addEventListener("click",(()=>{e.style.display="flex",t.style.display="block",function(){const n=document.getElementById("task-name"),e=document.getElementById("description-task"),t=document.getElementById("due-date-task");n.value="",e.value="",t.value="";const o=document.getElementById("projects-switch");o.innerHTML="";g().forEach(((n,e)=>{const t=document.createElement("option");t.value=e,t.textContent=n.project,o.appendChild(t)}))}()})),document.querySelector(".submit-task-btn").addEventListener("click",k)}(),b()})()})();