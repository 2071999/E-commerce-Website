


shopv.render();

        shopv.cart.on('shopv_checkout', function(evt) {
            var items, len, i;

            if (this.subtotal() > 0) {
                items = this.items();

                for (i = 0, len = items.length; i < len; i++) {}
            }
        });

$(document).ready(function() {
    $('.owl-one').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            667: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
})

$(document).ready(function() {
    $("#owl-demo2").owlCarousel({
        loop: true,
        nav: false,
        margin: 50,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            736: {
                items: 1,
                nav: false
            },
            991: {
                items: 2,
                margin: 30,
                nav: false
            },
            1080: {
                items: 2,
                nav: false
            }
        }
    })
})

$(document).ready(function() {
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });
});

$(window).on("scroll", function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("#site-header").addClass("nav-fixed");
    } else {
        $("#site-header").removeClass("nav-fixed");
    }
});

//Main navigation Active Class Add Remove
$(".navbar-toggler").on("click", function() {
    $("header").toggleClass("active");
});
$(document).on("ready", function() {
    if ($(window).width() > 991) {
        $("header").removeClass("active");
    }
    $(window).on("resize", function() {
        if ($(window).width() > 991) {
            $("header").removeClass("active");
        }
    });
});

$(function() {
    $('.navbar-toggler').click(function() {
        $('body').toggleClass('noscroll');
    })
});