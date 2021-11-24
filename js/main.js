$(document).ready(function() {
    $('#icon').click(function() {
        $('ul').toggleClass('show');
    });

    var options = {
        strings: ['An Enthusiast Photograper^1000', 'A Visual Artist^1000', 'A Legal Reseacher^1000'],
        typeSpeed: 70,
        loop: Infinity,
        smartBackspace: true,
        backDelay: 900,
        backSpeed: 30,
        showCursor: false,
    };
    var typed = new Typed('#typer', options);

    //WOW plugins;
    new WOW().init();

    //top
    $('.top').click(function() {
        $('html,body').animate({
            scrollTop: 0,
        }, 800);
    });

    //link scroll smothing
    $('a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html.body').animate({
                scrollTop: $(hash).offset().top
            })
        }
        var hash = this.hash;
        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {
            window.location.hash = hash;
        });
    });
});

//nav menu remove
$(window).scroll(function() {
    var scrolling = $(this).scrollTop();
    if (scrolling >= 500) {
        $(".top").fadeIn();
    } else {
        $(".top").fadeOut();
    };
    if (scrolling <= 400) {
        $(".remove").fadeIn();
    } else {
        $(".remove").hide();
    };
});