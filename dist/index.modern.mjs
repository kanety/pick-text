class e{constructor(e){this.element="string"==typeof e?document.querySelector(e):e}get isInput(){let e=this.element.tagName.toLowerCase();return"input"==e||"textarea"==e}run(e={}){this.select(),e.copy&&this.copy()}select(){this.isInput?this.selectInput():this.selectRange()}selectInput(){let e=this.element.readOnly;this.element.readOnly=!1,this.element.select(),this.element.readOnly=e}selectRange(){let e=document.createRange();e.selectNodeContents(this.element);let t=window.getSelection();t.removeAllRanges(),t.addRange(e)}copy(){this.isInput?this.copyInput():this.copyRange()}copyInput(){let e=this.element.value.substring(this.element.selectionStart,this.element.selectionEnd);this.copyToClipboard(e)}copyRange(){let e=window.getSelection().toString();this.copyToClipboard(e)}copyToClipboard(e){navigator.clipboard?navigator.clipboard.writeText(e):document.execCommand("copy")}static run(t,n={}){null==n.copy&&(n.copy=!0),new e(t).run(n)}}export{e as default};
//# sourceMappingURL=index.modern.mjs.map