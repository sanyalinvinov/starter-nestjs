import{c as l}from"./index-ee5db018.js";import{I as n}from"./button-af00bb43.js";import{I as d,l as o}from"./wrapEmojiText-7a9a7c39.js";class h{constructor(i,e){this.container=i,this.input=e,this.passwordVisible=!1,this.onVisibilityClick=r=>{l(r),this.passwordVisible=!this.passwordVisible,this.toggleVisible.replaceChildren(n(this.passwordVisible?"eye2":"eye1")),this.input.type=this.passwordVisible?"text":"password",this.onVisibilityClickAdditional?.()},e.type="password",e.setAttribute("required",""),e.name="notsearch_password",e.autocomplete="off";const s=document.createElement("input");s.classList.add("stealthy"),s.tabIndex=-1,s.type="password",e.parentElement.prepend(s),e.parentElement.insertBefore(s.cloneNode(),e.nextSibling);const a=this.toggleVisible=document.createElement("span");a.classList.add("toggle-visible"),a.append(n("eye1")),i.classList.add("input-field-password"),i.append(a),a.addEventListener("click",this.onVisibilityClick),a.addEventListener("touchend",this.onVisibilityClick)}}class u extends d{constructor(i={}){super({plainText:!0,...i}),this.helpers=new h(this.container,this.input)}}class w{constructor(i,e){this.passwordInputField=i,this.size=e,this.needFrame=0,this.container=document.createElement("div"),this.container.classList.add("media-sticker-wrapper")}load(){return this.loadPromise?this.loadPromise:this.loadPromise=o.loadAnimationAsAsset({container:this.container,loop:!1,autoplay:!1,width:this.size,height:this.size,noCache:!0},"TwoFactorSetupMonkeyPeek").then(i=>(this.animation=i,this.animation.addEventListener("enterFrame",e=>{(this.animation.direction===1&&e>=this.needFrame||this.animation.direction===-1&&e<=this.needFrame)&&(this.animation.setSpeed(1),this.animation.pause())}),this.passwordInputField.helpers.onVisibilityClickAdditional=()=>{this.passwordInputField.helpers.passwordVisible?(this.animation.setDirection(1),this.animation.curFrame=0,this.needFrame=16,this.animation.play()):(this.animation.setDirection(-1),this.animation.curFrame=16,this.needFrame=0,this.animation.play())},o.waitForFirstFrame(i)))}remove(){this.animation&&this.animation.remove()}}function b(t){const i=document.createElement("span");return typeof t=="string"?i.innerHTML=t:i.append(t),i}export{u as P,w as a,h as b,b as h};
//# sourceMappingURL=htmlToSpan-98a776a3.js.map
