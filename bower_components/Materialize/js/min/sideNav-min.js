!function($){var e={init:function(e){var t={menuWidth:240,edge:"left",closeOnClick:!1};e=$.extend(t,e),$(this).each(function(){function t(t){s=!1,o=!1,$("body").css({overflow:"",width:""}),$("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){$(this).remove()}}),"left"===e.edge?(a.css({width:"",right:"",left:"0"}),n.velocity({translateX:"-100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){t===!0&&(n.removeAttr("style"),n.css("width",e.menuWidth))}})):(a.css({width:"",right:"0",left:""}),n.velocity({translateX:"100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){t===!0&&(n.removeAttr("style"),n.css("width",e.menuWidth))}}))}var i=$(this),n=$("#"+i.attr("data-activates"));240!=e.menuWidth&&n.css("width",e.menuWidth);var a=$('<div class="drag-target"></div>');$("body").append(a),"left"==e.edge?(n.css("transform","translateX(-100%)"),a.css({left:0})):(n.addClass("right-aligned").css("transform","translateX(100%)"),a.css({right:0})),n.hasClass("fixed")&&window.innerWidth>992&&n.css("transform","translateX(0)"),n.hasClass("fixed")&&$(window).resize(function(){window.innerWidth>992?0!=$("#sidenav-overlay").length&&o?t(!0):n.css("transform","translateX(0%)"):o===!1&&("left"===e.edge?n.css("transform","translateX(-100%)"):n.css("transform","translateX(100%)"))}),e.closeOnClick===!0&&n.on("click.itemclick","a:not(.collapsible-header)",function(){t()});var s=!1,o=!1;a.on("click",function(){t()}),a.hammer({prevent_default:!1}).bind("pan",function(i){if("touch"==i.gesture.pointerType){var a=i.gesture.direction,s=i.gesture.center.x,d=i.gesture.center.y,u=i.gesture.velocityX,r=$("body"),c=r.innerWidth();if(r.css("overflow","hidden"),r.width(c),0===$("#sidenav-overlay").length){var l=$('<div id="sidenav-overlay"></div>');l.css("opacity",0).click(function(){t()}),$("body").append(l)}if("left"===e.edge&&(s>e.menuWidth?s=e.menuWidth:0>s&&(s=0)),"left"===e.edge)s<e.menuWidth/2?o=!1:s>=e.menuWidth/2&&(o=!0),n.css("transform","translateX("+(s-e.menuWidth)+"px)");else{s<window.innerWidth-e.menuWidth/2?o=!0:s>=window.innerWidth-e.menuWidth/2&&(o=!1);var h=s-e.menuWidth/2;0>h&&(h=0),n.css("transform","translateX("+h+"px)")}var v;"left"===e.edge?(v=s/e.menuWidth,$("#sidenav-overlay").velocity({opacity:v},{duration:10,queue:!1,easing:"easeOutQuad"})):(v=Math.abs((s-window.innerWidth)/e.menuWidth),$("#sidenav-overlay").velocity({opacity:v},{duration:10,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(t){if("touch"==t.gesture.pointerType){var i=t.gesture.velocityX,d=t.gesture.center.x,u=d-e.menuWidth,r=d-e.menuWidth/2;u>0&&(u=0),0>r&&(r=0),s=!1,"left"===e.edge?o&&.3>=i||-.5>i?(0!=u&&n.velocity({translateX:[0,u]},{duration:300,queue:!1,easing:"easeOutQuad"}),$("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),a.css({width:"50%",right:0,left:""})):(!o||i>.3)&&($("body").css({overflow:"",width:""}),n.velocity({translateX:[-1*e.menuWidth-10,u]},{duration:200,queue:!1,easing:"easeOutQuad"}),$("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){$(this).remove()}}),a.css({width:"10px",right:"",left:0})):o&&i>=-.3||i>.5?(n.velocity({translateX:[0,r]},{duration:300,queue:!1,easing:"easeOutQuad"}),$("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),a.css({width:"50%",right:"",left:0})):(!o||-.3>i)&&($("body").css({overflow:"",width:""}),n.velocity({translateX:[e.menuWidth+10,r]},{duration:200,queue:!1,easing:"easeOutQuad"}),$("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){$(this).remove()}}),a.css({width:"10px",right:0,left:""}))}}),i.click(function(){if(o===!0)o=!1,s=!1,t();else{var i=$("body"),d=i.innerWidth();i.css("overflow","hidden"),i.width(d),$("body").append(a),"left"===e.edge?(a.css({width:"50%",right:0,left:""}),n.velocity({translateX:[0,-1*e.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})):(a.css({width:"50%",right:"",left:0}),n.velocity({translateX:[0,e.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"}));var u=$('<div id="sidenav-overlay"></div>');u.css("opacity",0).click(function(){o=!1,s=!1,t(),u.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$(this).remove()}})}),$("body").append(u),u.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){o=!0,s=!1}})}return!1})})},show:function(){this.trigger("click")},hide:function(){$("#sidenav-overlay").trigger("click")}};$.fn.sideNav=function(t){return e[t]?e[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void $.error("Method "+t+" does not exist on jQuery.sideNav"):e.init.apply(this,arguments)}}(jQuery);