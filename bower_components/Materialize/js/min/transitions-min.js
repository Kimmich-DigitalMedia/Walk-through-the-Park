!function($){Materialize.fadeInImage=function(e){var t=$(e);t.css({opacity:0}),$(t).velocity({opacity:1},{duration:650,queue:!1,easing:"easeOutSine"}),$(t).velocity({opacity:1},{duration:1300,queue:!1,easing:"swing",step:function(e,t){t.start=100;var i=e/100,n=150-(100-e)/1.75;100>n&&(n=100),e>=0&&$(this).css({"-webkit-filter":"grayscale("+i+")brightness("+n+"%)",filter:"grayscale("+i+")brightness("+n+"%)"})}})},Materialize.showStaggeredList=function(e){var t=0;$(e).find("li").velocity({translateX:"-100px"},{duration:0}),$(e).find("li").each(function(){$(this).velocity({opacity:"1",translateX:"0"},{duration:800,delay:t,easing:[60,10]}),t+=120})},$(document).ready(function(){var e=!1,t=!1;$(".dismissable").each(function(){$(this).hammer({prevent_default:!1}).bind("pan",function(i){if("touch"===i.gesture.pointerType){var n=$(this),a=i.gesture.direction,r=i.gesture.deltaX,s=i.gesture.velocityX;n.velocity({translateX:r},{duration:50,queue:!1,easing:"easeOutQuad"}),4===a&&(r>n.innerWidth()/2||-.75>s)&&(e=!0),2===a&&(r<-1*n.innerWidth()/2||s>.75)&&(t=!0)}}).bind("panend",function(i){if(Math.abs(i.gesture.deltaX)<$(this).innerWidth()/2&&(t=!1,e=!1),"touch"===i.gesture.pointerType){var n=$(this);if(e||t){var a;a=e?n.innerWidth():-1*n.innerWidth(),n.velocity({translateX:a},{duration:100,queue:!1,easing:"easeOutQuad",complete:function(){n.css("border","none"),n.velocity({height:0,padding:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){n.remove()}})}})}else n.velocity({translateX:0},{duration:100,queue:!1,easing:"easeOutQuad"});e=!1,t=!1}})})})}(jQuery);