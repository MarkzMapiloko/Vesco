/*======================================================
                        SERVICES
========================================================*/
$(function () {
    //animate on scroll
    new WOW().init();
});
/*======================================================
                        WORK
========================================================*/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*======================================================
                        TEAM
========================================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});
/*======================================================
                       TESTIMONIALS
========================================================*/
$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});
/*======================================================
                       STATS
========================================================*/
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});
/*======================================================
                        CLIENTS
========================================================*/
$(function () {
    $("#client-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});
/*======================================================
                        Navigation
========================================================*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            //Hide Nav
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();

        } else {
            //show Nav
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();

        }
    });
});

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html,body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
}); 