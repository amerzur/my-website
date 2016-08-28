(function() {
    "use strict"; // Start of use strict

    //Collect clicks in the page
    $(document).click(function(loc){
        var x = loc.pageX;
        var y = loc.pageY;
        console.log("x" +x);
        console.log("y" +y);
    });
 window.onload =function(){
  //animation for the three balls 
var ani= anime({
  targets: '.animation',
 translateY: {
  value:-15+'rem',
 easing: 'easeOutBack'
 }  
  // translateY: function() { return anime.random(-6, 6) + 'rem'; }
  ,delay: function(el, index) {
    return index * 80 ;
  },
  direction: 'alternate',
  loop: true,
  duration: 500 
});
 
   var waves = new SineWaves({
  // Canvas Element
  el: document.getElementById('waves'),

  // General speed of entire wave system
  speed: 8,
   width: function() {
        return $(window).width();
      },
      
      height: function() {
        return $(window).height();
      },
  // How many degress should we rotate all of the waves
  rotate: 0,

  // Ease function from left to right
  ease: 'Linear',

  // Specific how much the width of the canvas the waves should be
  // This can either be a number or a percent
  waveWidth: '95%',

  // An array of wave options
  waves: [{}],
set1: [
        {
          timeModifier: 4,
          lineWidth: 1,
          amplitude: -25,
          wavelength: 25
        },
        {
          timeModifier: 2,
          lineWidth: 1,
          amplitude: -50,
          wavelength: 50
        },
        {
          timeModifier: 1,
          lineWidth: 1,
          amplitude: 100,
          wavelength: 100
        },
        {
          timeModifier: 0.5,
          lineWidth: 1,
          amplitude: -200,
          wavelength: 200
        },
        {
          timeModifier: 0.25,
          lineWidth: 1,
          amplitude: -300,
          wavelength: 320
        }
      ],
      
      set2: [
        {
          lineWidth: 3,
          amplitude: 150,
          wavelength: 200,
          segmentLength: 20
        },
        {
          lineWidth: 2,
          amplitude: 150,
          wavelength: 100
        },
        {
          lineWidth: 1,
          amplitude: -150,
          wavelength: 50,
          segmentLength: 10
        },
        {
          lineWidth: 0.5,
          amplitude: -100,
          wavelength: 100,
          segmentLength: 10
        }
      ], 
  // Perform any additional initializations here
  initialize: function (){
     this.options.switchToSet.call(this, 'set1');
       
  },
  switchToSet: function(set) {
        this.waves = this.options[set];
        this.options.resizeEvent.call(this);
      },

  // This function is called whenver the window is resized
  resizeEvent: function() {

    // Here is an example on how to create a gradient stroke
    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
    gradient.addColorStop(0,"rgba(255, 255, 255, 0)");
    gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
    gradient.addColorStop(1,"rgba(255, 255, 255, 0.1)");

    var index = -1;
    var length = this.waves.length;
      while(++index < length){
      this.waves[index].strokeStyle = gradient;
    }
  }
});
 }
    /*
     * Demo of https://github.com/isuttell/sine-waves
     */
   
  
var skillsNotRenderd=true; ; 
   var loadingScreen = pleaseWait({
                logo: "../img/loading.png",
                backgroundColor: '#bac8e3',
                loadingHtml: "<div class='row animation-container'> <div class='col-xs-2 col-xs-offset-5 animation-parent '> <div class=' animation blue'></div><div class=' animation red'></div><div class=' animation green'></div></div></div> "
               });
 

setTimeout(function(){
loadingScreen.finish();
},3000);
// initialize wow sliders 

new WOW().init();


    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 600
        }
    })

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });


    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
         
    });
 
  $(".navbar").on("activate.bs.scrollspy", function(){
    
          var x = $(".nav li.active > a").text();
        
  if(x=="Skills" && skillsNotRenderd){

    skillsNotRenderd=false; 
anime({
  targets: '.skill[data-skill="html"]',
    delay: 80,
  width: '80%',  
  borderRadius: '8px',
  duration: 1000,
  loop:false 
});
anime({
  targets: '.skill[data-skill="javascript"]',
   easing:'easeOutElastic',
  width: '85%',  
   borderRadius: '8px',
  duration: 2000,
  loop:false 
});
anime({
  targets: '.skill[data-skill="css"]',
  width: '70%', 
   borderRadius: '8px',
  duration: 3000,
  loop:false 
});
anime({
  targets: '.skill[data-skill="wordpress"]',
  width: '65%',  
   borderRadius: '8px',
  duration: 2500,
  loop:false 
});
          }
                 

    })
 
    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '30px',
            maxFontSize: '60px'
        }
    );

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    //Place dialog in the center of the screen
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');

        // Dividing by two centers the modal exactly, but dividing by three
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }

    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);

    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });


})(); // End of use strict
