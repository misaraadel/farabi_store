"use strict";

$(document).ready(function () {
  /*start the loading page */
  $(window).on("load", function () {
    $(".loader").fadeOut(2000, function () {
      $("body").css("overflow", "auto");
      $("this").fadeOut(1500, function () {
        $(this).remove();
      });
    });
  }); //change navbar color on scroll

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  }); //scroll to top make fade for button

  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".scroll-top-button").fadeIn();
    } else {
      $(".scroll-top-button").fadeOut();
    }
  }); //scroll to top button

  $(".scroll-top-button").on('click', function () {
    $('html , body').animate({
      scrollTop: 0
    }, 100);
  }); //start the toggle of the icons

  $(document).ready(function () {
    $('.toggle').click(function () {
      $('.toggle').toggleClass('active'), $('ul').toggleClass('active');
    });
  }); //the nav icon 

  $('.togller-btn').click(function () {
    $('.togller-btn').toggleClass('active-toggle');
    $('.nav-mobile-links').toggleClass('active-nav');
  });
  $('.overlay').click(function () {
    $('.togller-btn').removeClass('active-toggle');
    $('.nav-mobile-links').removeClass('active-nav');
  }); //service slider 

  $('.owl-service').owlCarousel({
    rtl: true,
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    touchDrag: false,
    mouseDrag: false,
    autoWidth: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayTimeout: 6000,
    smartSpeed: 2000,
    dragEndSpeed: 2000,
    slidSpeed: 900,
    paginationSpeed: 900,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  }); //service slider 

  $('.owl-partner').owlCarousel({
    rtl: true,
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoWidth: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayTimeout: 6000,
    smartSpeed: 2000,
    dragEndSpeed: 2000,
    slidSpeed: 900,
    paginationSpeed: 900,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 7
      }
    }
  }); //Wow intit

  wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 200,
    mobile: true,
    live: false
  });
  wow.init();
});