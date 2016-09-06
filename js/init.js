//This is the init file

/***************** Materialize Init ******************/

(function($){
  $(function(){
      $('.parallax').parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

/***************** fwMenu Init ******************/

fwShowHideMenu("object-desktopNav", 600);
fwAddListener(document.getElementById("fwNav1-toggle"), "click", function(){
	fwToggleMenu(this);
});
fwAddListener(window, "resize", function() {
    fwShowHideMenu("object-desktopNav", 600);
});

/***************** Smooth Scroll Menu Init ******************/

$('#object-desktopNav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    scrollOffset: 53,
    filter: '',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});

/***************** Animation https://github.com/michalsnik/aos ******************/
AOS.init({
      offset: 200,
      duration: 1000,
    });

/***************** Baseliner https://keyes.ie/things/baseliner/ ******************/

            window.onload = function() {
                baseliner = new Baseliner(12);
            }