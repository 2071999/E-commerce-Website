


shopv.render();

        shopv.cart.on('shopv_checkout', function(evt) {
            var items, len, i;

            if (this.subtotal() > 0) {
                items = this.items();

                for (i = 0, len = items.length; i < len; i++) {}
            }
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