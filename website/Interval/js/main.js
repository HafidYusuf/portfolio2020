$(document).ready(function () {

    //Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    $('.floating').each(function () {
        // Create a scene for each project

        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1,
            duration: '200%'
        })
            .setTween(TweenMax.from(this, 1, { y: '100%', ease: Power0.easeNone }))
            .addTo(controller)
    });

    $('h1').each(function () {
        // Create a scene for each project

        var scene = new ScrollMagic.Scene({
            triggerElement: this
        })
            .setClassToggle(this, 'judul-fade-in')
            .addTo(controller)
    });

    $('.tagline').each(function () {
        // Create a scene for each project

        var scene = new ScrollMagic.Scene({
            triggerElement: this
        })
            .setClassToggle(this, 'judul-fade-in')
            .addTo(controller)
    });
    $('p').each(function () {
        // Create a scene for each project

        var scene = new ScrollMagic.Scene({
            triggerElement: this
        })
            .setClassToggle(this, 'p-fade-in')
            .addTo(controller)
    });
    $('.brebet').each(function () {
        // Create a scene for each project

        var scene = new ScrollMagic.Scene({
            triggerElement: this
        })
            .setClassToggle(this, 'fade-in')
            .addTo(controller)
    });
    $('.kuas').each(function () {
        // Create a scene for each project

        var scene = new ScrollMagic.Scene({
            triggerElement: this
        })
            .setClassToggle(this, 'kuasin')
            .addTo(controller)
    });

    setTimeout(function () {
        $('.logo').addClass('fade-in');
    }, 1000);
    setTimeout(function () {
        $('.co-logo').addClass('p-fade-in');
    }, 1500);

    $('.socmeding').each(function (i) {
        setTimeout(function () {
            $('.socmeding').eq(i).addClass('judul-fade-in');
        }, 100 * i);
    });
    $('.menu').click(function () {
        $('.hiding-page').addClass('visible');
    });
    $('.close').click(function () {
        $('.hiding-page').removeClass('visible');
    });
    $('.buttonisasi').click(function () {
        $('.hiding-page').removeClass('visible');
    });
});