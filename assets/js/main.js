$(document).ready(function () {
    /*start the loading page */
    $(window).on("load", function () {
        $(".loader")
            .fadeOut(2000, function () {
                $("body").css("overflow", "auto");
                $("this").fadeOut(1500, function () {
                    $(this).remove();
                });
            });
    });
    //change navbar color on scroll
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });
     //scroll to top make fade for button
     $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });
    //scroll to top button
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
    //start the toggle of the icons
    $(document).ready(function(){
        $('.toggle').click(function(){
            $('.toggle').toggleClass('active'),
            $('ul').toggleClass('active')
        });
    });
    //Wow intit
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    $('.shopping-card-btn').click(function(){
        $('.shopping-card').toggleClass('active-card');
        $('.favourite-card').removeClass('active-card');
        $('.search-card').removeClass('active-card');
    });
    $('.favourite-card-btn').click(function(){
        $('.favourite-card').toggleClass('active-card');
        $('.shopping-card').removeClass('active-card');
        $('.search-card').removeClass('active-card');
    });
    $('.search-card-btn').click(function(){
        $('.search-card').toggleClass('active-card');
        $('.shopping-card').removeClass('active-card');
        $('.favourite-card').removeClass('active-card');
    });
    $('.close').click(function(){
        $('.search-card').removeClass('active-card');
        $('.shopping-card').removeClass('active-card');
        $('.favourite-card').removeClass('active-card');
    })
    //start active nav toggler 
    $('.mobile-nav-toggler').click(function(){
        $('.mobile-nav-toggler').toggleClass('active-toggle');
        $('.nav-mobile-links').toggleClass('active-nav');
    });
    $('.overlay').click(function(){
        $('.mobile-nav-toggler').removeClass('active-toggle');
        $('.nav-mobile-links').removeClass('active-nav');
    });
    //shoping card in mobile
    $('.shopping-card-btn').click(function(){
        $('.shopping-card').addClass('shoping-card-active');
    });
    $('.close-shopping').click(function(){
        $('.shopping-card').removeClass('shoping-card-active');
    });
    //search card in mobile
    $('.favourite-card-btn').click(function(){
        $('.favourite-card ').addClass('shoping-card-active');
    });
    $('.favourite-colse').click(function(){
        $('.favourite-card').removeClass('shoping-card-active');
    });
    //favorite card in mobile
    $('.search-card-btn').click(function(){
        $('.search-card').addClass('shoping-card-active');
    });
    $('.close-search').click(function(){
        $('.search-card').removeClass('shoping-card-active');
    });
    $('main').click(function(){ 
        $('.search-card').removeClass('active-card');
        $('.shopping-card').removeClass('active-card');
        $('.favourite-card').removeClass('active-card');
    });
    //swipper plugin 
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        keyboard: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + ( 0 + index + 1) + '</span>';
            },
        },
    });
    //owl product 
    jQuery('.owl-product').owlCarousel({
        rtl: true,
        loop: true,
		autoplay: true,
        margin: 20,
        nav: true,
		dots: false,
		touchDrag  : false,
		mouseDrag  : false,
		autoWidth: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        center: true,
        autoplayHoverPause: true,
		navContainerClass: "container owl-nav",
		navText: [
            '<img class="arrow" src="assets/images/icons/right_arrow.svg" alt="" />',
            '<img class="arrow" src="assets/images/icons/left_arrow.svg" alt="" />'
        ],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 3
			}
		}
	
    });
    //popup close
    $('.popup-btn').click(function(){
        $('.popup').addClass('active-popup');
    });
    $('.popup').click(function(){
        $('.popup').removeClass('active-popup');
    });
});