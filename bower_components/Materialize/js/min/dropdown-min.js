!function($){$.fn.scrollTo=function(t){return $(this).scrollTop($(this).scrollTop()-$(this).offset().top+$(t).offset().top),this},$.fn.dropdown=function(t){var i={inDuration:300,outDuration:225,constrain_width:!0,hover:!1,gutter:0,belowOrigin:!1,alignment:"left"};this.each(function(){function n(){void 0!==a.data("induration")&&(r.inDuration=a.data("inDuration")),void 0!==a.data("outduration")&&(r.outDuration=a.data("outDuration")),void 0!==a.data("constrainwidth")&&(r.constrain_width=a.data("constrainwidth")),void 0!==a.data("hover")&&(r.hover=a.data("hover")),void 0!==a.data("gutter")&&(r.gutter=a.data("gutter")),void 0!==a.data("beloworigin")&&(r.belowOrigin=a.data("beloworigin")),void 0!==a.data("alignment")&&(r.alignment=a.data("alignment"))}function o(t){"focus"===t&&(s=!0),n(),d.addClass("active"),a.addClass("active"),r.constrain_width===!0?d.css("width",a.outerWidth()):d.css("white-space","nowrap");var i=window.innerHeight,o=a.innerHeight(),e=a.offset().left,c=a.offset().top-$(window).scrollTop(),u=r.alignment,l=0,h=0,f=0;r.belowOrigin===!0&&(f=o);var g=0,v=a.parent();if(!v.is("body")&&v[0].scrollHeight>v[0].clientHeight&&(g=v[0].scrollTop),e+d.innerWidth()>$(window).width()?u="right":e-d.innerWidth()+a.innerWidth()<0&&(u="left"),c+d.innerHeight()>i)if(c+o-d.innerHeight()<0){var p=i-c-f;d.css("max-height",p)}else f||(f+=o),f-=d.innerHeight();if("left"===u)l=r.gutter,h=a.position().left+l;else if("right"===u){var w=a.position().left+a.outerWidth()-d.outerWidth();l=-r.gutter,h=w+l}d.css({position:"absolute",top:a.position().top+f+g,left:h}),d.stop(!0,!0).css("opacity",0).slideDown({queue:!1,duration:r.inDuration,easing:"easeOutCubic",complete:function(){$(this).css("height","")}}).animate({opacity:1},{queue:!1,duration:r.inDuration,easing:"easeOutSine"})}function e(){s=!1,d.fadeOut(r.outDuration),d.removeClass("active"),a.removeClass("active"),setTimeout(function(){d.css("max-height","")},r.outDuration)}var a=$(this),r=$.extend({},i,t),s=!1,d=$("#"+a.attr("data-activates"));if(n(),a.after(d),r.hover){var c=!1;a.unbind("click."+a.attr("id")),a.on("mouseenter",function(t){c===!1&&(o(),c=!0)}),a.on("mouseleave",function(t){var i=t.toElement||t.relatedTarget;$(i).closest(".dropdown-content").is(d)||(d.stop(!0,!0),e(),c=!1)}),d.on("mouseleave",function(t){var i=t.toElement||t.relatedTarget;$(i).closest(".dropdown-button").is(a)||(d.stop(!0,!0),e(),c=!1)})}else a.unbind("click."+a.attr("id")),a.bind("click."+a.attr("id"),function(t){s||(a[0]!=t.currentTarget||a.hasClass("active")||0!==$(t.target).closest(".dropdown-content").length?a.hasClass("active")&&(e(),$(document).unbind("click."+d.attr("id")+" touchstart."+d.attr("id"))):(t.preventDefault(),o("click")),d.hasClass("active")&&$(document).bind("click."+d.attr("id")+" touchstart."+d.attr("id"),function(t){d.is(t.target)||a.is(t.target)||a.find(t.target).length||(e(),$(document).unbind("click."+d.attr("id")+" touchstart."+d.attr("id")))}))});a.on("open",function(t,i){o(i)}),a.on("close",e)})},$(document).ready(function(){$(".dropdown-button").dropdown()})}(jQuery);