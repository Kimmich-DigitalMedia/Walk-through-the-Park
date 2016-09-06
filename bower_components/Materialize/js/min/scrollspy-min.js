/**
 * Extend jquery with a scrollspy plugin.
 * This watches the window scroll and fires events when elements are scrolled into viewport.
 *
 * throttle() and getTime() taken from Underscore.js
 * https://github.com/jashkenas/underscore
 *
 * @author Copyright 2013 John Smart
 * @license https://raw.github.com/thesmart/jquery-scrollspy/master/LICENSE
 * @see https://github.com/thesmart
 * @version 0.1.2
 */
!function($){function t(t,e,r,i){var n=$();return $.each(o,function(o,a){if(a.height()>0){var l=a.offset().top,c=a.offset().left,s=c+a.width(),u=l+a.height(),f=!(c>e||i>s||l>r||t>u);f&&n.push(a)}}),n}function e(){++c;var e=n.scrollTop(),r=n.scrollLeft(),i=r+n.width(),o=e+n.height(),l=t(e+u.top+200,i+u.right,o+u.bottom,r+u.left);$.each(l,function(t,e){var r=e.data("scrollSpy:ticks");"number"!=typeof r&&e.triggerHandler("scrollSpy:enter"),e.data("scrollSpy:ticks",c)}),$.each(a,function(t,e){var r=e.data("scrollSpy:ticks");"number"==typeof r&&r!==c&&(e.triggerHandler("scrollSpy:exit"),e.data("scrollSpy:ticks",null))}),a=l}function r(){n.trigger("scrollSpy:winSize")}/**
	 * Returns a function, that, when invoked, will only be triggered at most once
	 * during a given window of time. Normally, the throttled function will run
	 * as much as it can, without ever going more than once per `wait` duration;
	 * but if you'd like to disable the execution on the leading edge, pass
	 * `{leading: false}`. To disable execution on the trailing edge, ditto.
	 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
	 * @param {function} func
	 * @param {number} wait
	 * @param {Object=} options
	 * @returns {Function}
	 */
function i(t,e,r){var i,n,o,a=null,l=0;r||(r={});var c=function(){l=r.leading===!1?0:f(),a=null,o=t.apply(i,n),i=n=null};return function(){var s=f();l||r.leading!==!1||(l=s);var u=e-(s-l);return i=this,n=arguments,0>=u?(clearTimeout(a),a=null,l=s,o=t.apply(i,n),i=n=null):a||r.trailing===!1||(a=setTimeout(c,u)),o}}var n=$(window),o=[],a=[],l=!1,c=0,s=1,u={top:0,right:0,bottom:0,left:0},f=Date.now||function(){return(new Date).getTime()};$.scrollSpy=function(t,r){var a=[];t=$(t),t.each(function(t,e){o.push($(e)),$(e).data("scrollSpy:id",t),$('a[href="#'+$(e).attr("id")+'"]').click(function(t){t.preventDefault();var e=$(this.hash).offset().top+1;$("html, body").animate({scrollTop:e-200},{duration:400,queue:!1,easing:"easeOutCubic"})})}),r=r||{throttle:100},u.top=r.offsetTop||0,u.right=r.offsetRight||0,u.bottom=r.offsetBottom||0,u.left=r.offsetLeft||0;var c=i(e,r.throttle||100),s=function(){$(document).ready(c)};return l||(n.on("scroll",s),n.on("resize",s),l=!0),setTimeout(s,0),t.on("scrollSpy:enter",function(){a=$.grep(a,function(t){return 0!=t.height()});var t=$(this);a[0]?($('a[href="#'+a[0].attr("id")+'"]').removeClass("active"),t.data("scrollSpy:id")<a[0].data("scrollSpy:id")?a.unshift($(this)):a.push($(this))):a.push($(this)),$('a[href="#'+a[0].attr("id")+'"]').addClass("active")}),t.on("scrollSpy:exit",function(){if(a=$.grep(a,function(t){return 0!=t.height()}),a[0]){$('a[href="#'+a[0].attr("id")+'"]').removeClass("active");var t=$(this);a=$.grep(a,function(e){return e.attr("id")!=t.attr("id")}),a[0]&&$('a[href="#'+a[0].attr("id")+'"]').addClass("active")}}),t},$.winSizeSpy=function(t){return $.winSizeSpy=function(){return n},t=t||{throttle:100},n.on("resize",i(r,t.throttle||100))},$.fn.scrollSpy=function(t){return $.scrollSpy($(this),t)}}(jQuery);