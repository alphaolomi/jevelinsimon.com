(function($) {
    "use strict";
    var $window = $(window),
        $body = $('body');
    jQuery(document).ready(
        function($) {
            $("span.red_color").on("click", function() {
                $("body").addClass("red_color_theme").removeClass("green_color_theme yellow_color_theme blue_color_theme pink_color_theme purple_color_theme");
            });
            $("span.green_color").on("click", function() {
                $("body").addClass("green_color_theme").removeClass("red_color_theme yellow_color_theme blue_color_theme pink_color_theme purple_color_theme");
            });
            $("span.yellow_color").on("click", function() {
                $("body").addClass("yellow_color_theme").removeClass("green_color_theme red_color_theme blue_color_theme pink_color_theme purple_color_theme");
            });
            $("span.blue_color").on("click", function() {
                $("body").addClass("blue_color_theme").removeClass("yellow_color_theme green_color_theme red_color_theme pink_color_theme purple_color_theme");
            });
            $("span.pink_color").on("click", function() {
                $("body").addClass("pink_color_theme").removeClass("green_color_theme red_color_theme yellow_color_theme purple_color_theme blue_color_theme");
            });
            $("span.purple_color").on("click", function() {
                $("body").addClass("purple_color_theme").removeClass("green_color_theme red_color_theme yellow_color_theme blue_color_theme pink_color_theme");
            });
            $(".spiner_button").on("click", function(event) {
                event.preventDefault();
                if ($(this).hasClass("slide_in_out")) {
                    $(".demo_panel_box").stop().animate({
                        left: "-180px"
                    }, 500);
                } else {
                    $(".demo_panel_box").stop().animate({
                        left: "0px"
                    }, 500);
                }
                $(this).toggleClass("slide_in_out");
                return false;
            });
            $('.navbar-collapse a').on('click', function() {
                $(".navbar-collapse").collapse('hide');
            });
            $window.on('scroll', function() {
                if ($(".navbar").offset().top > 100) {
                    $(".navbar-fixed-top").addClass("top-nav-collapse");
                } else {
                    $(".navbar-fixed-top").removeClass("top-nav-collapse");
                }
            });
            $(function() {
                $('a.smoth-scroll').on('click', function(event) {
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top - 0
                    }, 1000);
                    event.preventDefault();
                });
            });
            $body.scrollspy({
                target: ".navbar-collapse",
                offset: 95
            });
            $(".navbar-toggle").on("click", function() {
                $body.addClass("mobile-menu-activated");
            });
            $("ul.nav.navbar-nav li a").on("click", function() {
                $(".navbar-collapse").removeClass("in");
            });
            var bg = jQuery("#home");

            function resizeBackground() {
                bg.height(jQuery(window).height() + 60);
            }
            resizeBackground();
            var element = $(".element");
            $(function() {
                element.typed({
                    strings: ["Entrepreneur.", "Civil engineer.", "Life activist."],
                    typeSpeed: 100,
                    loop: true,
                });
            });
            $window.stellar({
                responsive: true,
                positionProperty: 'position',
                horizontalScrolling: false
            });
            $('.work-popup').magnificPopup({
                type: 'image'
            });
            $('.counter').counterUp({
                delay: 4,
                time: 800
            });
            new WOW({
                mobile: false
            }).init();
            $('.work-inner').mixItUp();
            $(".testimonial-list").owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                dots: true,
                autoplay: true,
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
            });
        });
    $window.load(function() {
        $('.spinner').fadeOut();
        $('.preloader').delay(350).fadeOut(500);
        $body.delay(350).css({
            'overflow': 'visible'
        });
    });
}(jQuery));
