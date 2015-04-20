$(function() {

  var $m_btn = $("#m_btn"),
    $m_menu = $("#m_menu"),
    $menu = $("#menu"),
    $window = $(window);

  /* header background image animation */
  if (navigator.userAgent.indexOf("Firefox") != -1) {
    $('header').animate({
      'border-spacing': 50
    }, {
      step: function(now, fx) {
        $(fx.elem).css("background-position", "50% " + now + "%");
      },
      duration: 2000
    });
  } else {
    $("header").animate({
      backgroundPositionY: "50%"
    }, 3000);
  }

  /* menu bar animation */

  $menu.addClass('opened');





  /* show menu smoothly */
  // function testFunc() {
  //   $menu.animate({
  //     opacity: 1,
  //     top: 80
  //   }, 2500, "easeOutQuint");
  // }
  
  // setTimeout(testFunc, 500);

  
  /* make main menu sticky on the top when scrolling */
  $menu.each(function() {    
    $window.on('scroll', $.throttle(1000 / 15, function() {
      if ($window.scrollTop() >  80) {
        $menu
          .addClass('fixed inverted')
          .removeClass("secondary");
      } else {
        $menu
          .removeClass('fixed inverted')
          .addClass("secondary");
      }
    }));
  });

  /* make menu item active when been clicked */
  $(".menu .item")
  .on('click', function(event) {
    event.preventDefault();
    $(".menu .item").removeClass('active');
    $(this).addClass('active');})
  .on('mouseover', function(event) {
    event.preventDefault();
    if ($menu.hasClass('fixed')) {
      $(this).css('color', '#fff');
    }
  });
 

  /* show sidebar whem user clicks mobile menu */ 
  $m_btn.on('click', function() {
    $m_menu
      .sidebar('setting', 'transition', 'push')
      .sidebar("toggle");
  });


  /* hide sidebar menu when screen > 768px */
  $window.on('resize', function() {
    var winW = $window.width();
    if (winW > 768) {
      $m_menu.sidebar("hide");
    }
  });

  /* slider-show configuration */
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: true,
    smartSpeed: 1000,
    items: 1
  });

  
  /* show .slider-nav-control when .image-show is hovered */
  (function() {
    var sliderNavControl = $('.slider-nav-control'),
        hoverMask = $('.hover-mask'),
        imageShow = $('.image-show');
        
    imageShow.hover(
      function() {
        sliderNavControl.fadeIn('slow');
        hoverMask.fadeIn('slow');
        $('.owl-carousel').trigger('stop.owl.autoplay');
      }, function() {
        sliderNavControl.fadeOut('slow');
        hoverMask.fadeOut('slow');
        function autoPlay() {
          $('.owl-carousel').trigger('play.owl.autoplay');
        }
        setTimeout(autoPlay, 2000);
      }
    );

  }());


  /* make next and prev icon work */
  (function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel();

    $('i.chevron.left.icon').click(function() {
    owl.trigger('prev.owl.carousel');
    });

    $('i.chevron.right.icon').click(function() {
    owl.trigger('next.owl.carousel');
    });
  }());

  

  /* fix .image-show until finishing .desc content  */
  function makeSliderFixed() {
    var scrollTop          = $(window).scrollTop(),
        windowHeight       = $(window).height(),
        aboutOffset        = $('#about').offset().top,
        skillOffset        = $('#skill').offset().top;

    if(scrollTop >= aboutOffset && scrollTop <= (skillOffset - windowHeight)) {
      $("#about .image-show").addClass('fixed').removeClass('finishFixed');
    } else if(scrollTop > (skillOffset - windowHeight)){
      $("#about .image-show").removeClass('fixed').addClass('finishFixed');
    }else {
      $("#about .image-show").removeClass('fixed').removeClass('finishFixed');
    }
  }
  $(window).on('scroll', function(event) {
    event.preventDefault();
    makeSliderFixed();
  });
  


  function circleAnimate() {
    $('#circle').circleProgress({
        value: 0.3,
        size: 100,
        startAngle: 5,
        thickness: 10,
        lineCap: 'round',
        fill: {
            gradient: ["red", "orange"]
        }
    });
  }

  
  
  setTimeout(circleAnimate, 5000);

});