(function() {
    "use strict"; // Start of use strict

    //Collect clicks in the page
    $(document).click(function(loc){
        var x = loc.pageX;
        var y = loc.pageY;
        console.log("x" +x);
        console.log("y" +y);
    });

   var loadingScreen = pleaseWait({
                logo: "../img/loading.png",
                backgroundColor: '#b07bb1',
                loadingHtml: "<div class='row animation-container'> <div class='col-xs-2 col-xs-offset-5 animation-parent '> <div class=' animation blue'></div><div class=' animation red'></div><div class=' animation green'></div></div></div> "
               });
 

setTimeout(function(){
loadingScreen.finish();
},3000);

new WOW().init();
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
        
          if(x=="Skills"){
anime({
  targets: '.skill[data-skill="html"]',
    delay: 80,
  width: '80%',  
  borderRadius: 8,
  duration: 1000,
  loop:false 
});
anime({
  targets: '.skill[data-skill="javascript"]',
   easing:'easeOutElastic',
  width: '85%',  
   borderRadius: 8,
  duration: 2000,
  loop:false 
});
anime({
  targets: '.skill[data-skill="css"]',
  width: '65%', 
   borderRadius: 8,
  duration: 3000,
  loop:false 
});
anime({
  targets: '.skill[data-skill="wordpress"]',
  width: '60%',  
   borderRadius: 8,
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
