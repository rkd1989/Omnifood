$(document).ready( function() {

    /* For sticky navigation */
    var waypoint = new Waypoint({
        element: $('.js--section-features'),
        handler: function(direction) {
          if (direction == "down"){
            $('nav').addClass('sticky');

        }
        else {
            $('nav').removeClass('sticky');
        }
        }
      })

    /* Scroll on buttons */
        $('.js--scroll-to-plans').click(function () {
          $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
        });
      
      $('.js--scroll-to-start').click(function () {
          $("html,body").animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
      });
      
    
    /* Navigation scroll */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

      var waypoint_wp_1 = new Waypoint({
        element: $('.js--section-features'),
        handler: function(direction) {
          $('.js--wp-1').addClass('animate__animated animate__fadeIn')
        },
        offset: '50%'
      });

      var waypoint_wp_2 = new Waypoint({
        element: $('.js--section-steps'),
        handler: function(direction) {
          $('.js--wp-2').addClass('animate__animated animate__fadeInUp')
        },
        offset: '50%'
      });

      var waypoint_wp_3 = new Waypoint({
        element: $('.js--section-cities'),
        handler: function(direction) {
          $('.js--wp-3').addClass('animate__animated animate__fadeIn')
        },
        offset: '50%'
      });

      var waypoint_wp_4 = new Waypoint({
        element: $('.js--section-plans'),
        handler: function(direction) {
          $('.js--wp-4').addClass('animate__animated animate__pulse')
        },
        offset: '50%'
      });


    /* Mobile navigation */
    
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-ios-menu')) {
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        } else {
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');
        }        
    });


});
