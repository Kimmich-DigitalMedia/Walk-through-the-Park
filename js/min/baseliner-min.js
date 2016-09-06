/**
 * An object to overlay a dynamically created baseline grid
 * on a webpage.
 *
 * @version 1.0
 * @author John Keyes <john@keyes.ie>
 * @copyright Copyright (c) 2011, John Keyes
 * @link https://github.com/jkeyes/baseline
 * @license http://jkeyes.mit-license.org/
 *
 */
function getDimension(e,t){if(e===window){var i=e.document.documentElement["client"+t],o=e.document.body;return"CSS1Compat"===e.document.compatMode&&i||o&&o["client"+t]||i}return Math.max(e.documentElement["client"+t],e.body["scroll"+t],e.documentElement["scroll"+t],e.body["offset"+t],e.documentElement["offset"+t])}var merge=function(e,t){for(prop in e)prop in t||(t[prop]=e[prop])},Baseliner=function(e){var t={gridColor:[196,196,196],gridHeight:10,gridOffset:0,gridOpacity:100,gridSpace:1};if(null==e)e={};else{var i=parseInt(e);0==i||isNaN(i)||(e={gridHeight:i})}merge(t,e),this.opts=e;var o=this;this.overlay_id="baseline-overlay",this.overlay=null,this.showText=document.createTextNode("Show Baseline"),this.hideText=document.createTextNode("Hide Baseline"),this.resize=function(){this.overlay&&(height=getDimension(document,"Height"),width=getDimension(window,"Width"),this.overlay.style.width=width+"px",this.overlay.style.height=height+"px")},this.create=function(){var e=document.getElementById(this.overlay_id);if(!e){this.overlay=document.createElement("div"),this.overlay.id=this.overlay_id,document.body.appendChild(this.overlay);var t="url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='"+this.opts.gridSpace+"' height='"+this.opts.gridHeight+"'><rect style='fill: "+this.opts.gridColor+";'  width='1' height='0.25px' x='0' y='"+(this.opts.gridHeight-1)+"'/></svg>\")";this.overlay.style.backgroundImage=t,this.overlay.style.position="absolute",this.overlay.style.top=this.opts.gridOffset+"px",this.overlay.style.left="0px",this.overlay.style.zIndex=9998,this.overlay.style.pointerEvents="none",this.overlay.style.opacity=this.opts.gridOpacity/100,this.resize()}},this.toggle=function(e){if(e){var t=document.getElementById(this.overlay_id);t&&document.body.removeChild(t)}this.create(),e||"block"!=this.overlay.style.display?(this.showText.parentNode&&this.overlay_it.replaceChild(this.hideText,this.showText),this.overlay.style.display="block"):(this.hideText.parentNode&&this.overlay_it.replaceChild(this.showText,this.hideText),this.overlay.style.display="none")},this.refresh=function(e){var e=parseInt(e);return 1>e||isNaN(e)?(this.value=o.opts.gridHeight,o.grid_size.style.backgroundColor="red",void(o.grid_size.style.color="white")):(o.grid_size.style.backgroundColor="white",o.grid_size.style.color="black",o.overlay&&(document.body.removeChild(o.overlay),o.overlay=null),o.opts.gridHeight=e,void o.toggle(!0))},this.refreshOffset=function(e){var e=parseInt(e);return 0>e||isNaN(e)?(this.value=o.opts.gridOffset,o.grid_offset.style.backgroundColor="red",void(o.grid_offset.style.color="white")):(o.grid_offset.style.backgroundColor="white",o.grid_offset.style.color="black",o.overlay&&(document.body.removeChild(o.overlay),o.overlay=null),o.opts.gridOffset=e,void o.toggle(!0))},init=function(){switch(o.opts.gridColor){case"green":o.opts.gridColor=[0,255,0];break;case"blue":o.opts.gridColor=[0,0,255];break;case"red":o.opts.gridColor=[255,0,0];break;case"black":o.opts.gridColor=[0,0,0]}o.opts.gridColor="rgb("+o.opts.gridColor[0]+","+o.opts.gridColor[1]+","+o.opts.gridColor[2]+")";var e=document.createElement("a");e.setAttribute("href",""),e.style.color="#EEE",e.style.marginRight="12px",e.appendChild(o.showText),e.onclick=function(e){if(!e)var e=window.event;return o.toggle(),e.cancelBubble=!0,e.stopPropagation&&(e.stopPropagation(),e.preventDefault()),!1},o.overlay_it=e;var t=document.createElement("label");t.setAttribute("for","baseliner-grid-size"),t.innerText="Grid Size: ";var i=document.createElement("input");i.setAttribute("name","baseliner-grid-size"),i.size=3,i.type="number",i.value=o.opts.gridHeight,i.style.textAlign="center",i.style.border="1px solid #CCC",i.style.padding="1px",i.style.marginRight="5px",o.grid_size=i;var r=document.createElement("label");r.setAttribute("for","baseliner-grid-size"),r.innerText="Grid Offset: ";var s=document.createElement("input");s.setAttribute("name","baseliner-grid-size"),s.size=3,s.type="number",s.value=o.opts.gridOffset,s.style.textAlign="center",s.style.border="1px solid #CCC",s.style.padding="1px",o.grid_offset=s;var l=document.createElement("div");l.style.position="relative",l.style.zIndex=2e4,l.style.marginTop="0px";var n=document.createElement("div");n.id="overlay-it",n.style.position="fixed",n.style.bottom="0px",n.style.left="10px",n.style.display="inline",n.style.padding="5px 15px",n.style.fontFamily="Arial, sans-serif",n.style.fontSize="12px",n.style.fontWeight="bold",n.style.textAlign="center",n.style.backgroundColor="#333",n.style.color="#EEE",n.appendChild(e),n.appendChild(t),n.appendChild(i),n.appendChild(r),n.appendChild(s),l.appendChild(n),document.body.appendChild(l);var d,a=function(){window.clearTimeout(d),d=window.setTimeout(function(){o.refresh(i.value)},400)};i.onchange=i.onkeyup=a;var h=function(){window.clearTimeout(d),d=window.setTimeout(function(){o.refreshOffset(s.value)},400)};s.onchange=s.onkeyup=h,window.onresize=function(){o.resize()},document.onkeyup=function(e){if(!e)var e=window.event;var t=e.keyCode||e.which;27==t&&(window.clearTimeout(d),d=window.setTimeout(function(){o.toggle()},400))}},init()};