!function($){$.fn.collapsible=function(e){var i={accordion:void 0};return e=$.extend(i,e),this.each(function(){function i(e){o=l.find("> li > .collapsible-header"),e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){$(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){$(this).css("height","")}}),o.not(e).removeClass("active").parent().removeClass("active"),o.not(e).parent().children(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){$(this).css("height","")}})}function a(e){e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){$(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){$(this).css("height","")}})}function s(e){var i=t(e);return i.length>0}function t(e){return e.closest("li > .collapsible-header")}var l=$(this),o=$(this).find("> li > .collapsible-header"),c=l.data("collapsible");l.off("click.collapse","> li > .collapsible-header"),o.off("click.collapse"),l.on("click.collapse","> li > .collapsible-header",function(l){var o=$(this),n=$(l.target);s(n)&&(n=t(n)),n.toggleClass("active"),e.accordion||"accordion"===c||void 0===c?i(n):(a(n),o.hasClass("active")&&a(o))});var o=l.find("> li > .collapsible-header");e.accordion||"accordion"===c||void 0===c?i(o.filter(".active").first()):o.filter(".active").each(function(){a($(this))})})},$(document).ready(function(){$(".collapsible").collapsible()})}(jQuery);