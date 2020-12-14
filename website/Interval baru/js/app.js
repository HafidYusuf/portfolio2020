$(document).ready(function () {

    var controller = new ScrollMagic.Controller();

    var tl = new TimelineMax();

    tl.to($(".one"), 1, { autoAlpha: 0, x: -300, y: -200, ease: Power4.easein })
        .to($(".two"), 1, { autoAlpha: 0, x: 300, y: 200, ease: Power4.easein }, .3)
        .to($(".three"), 1, { autoAlpha: 0, y: 300, ease: Power4.easein }, .5);


    var scene = new ScrollMagic.Scene({
        triggerElement: '.pengantar',
        triggerHook: 0.5
    })
        .setTween(tl)
        .addTo(controller);


    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();

        $('.jadwal div').css({
            'transform': 'translate(0px, -' + wScroll / 5 + '%)  rotate(-90deg)'
        });
        $('.jadwal div:nth-child(2)').css({
            'transform': 'translate(0px, ' + wScroll / 3 + '%)  rotate(-90deg)'
        });
    });

    $('.headline').each(function () {
        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8
        })
            .setClassToggle(this, 'comein')
            .addTo(controller);

    });
    $('p').each(function () {
        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8
        })
            .setClassToggle(this, 'fade-in')
            .addTo(controller);

    });
    $('h1, h2').each(function () {
        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8
        })
            .setClassToggle(this, 'fade-in')
            .addTo(controller);

    });

    /*$('.float').each(function () {
        var parallaxScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1,
            duration: '200%'
        })
            .setTween(TweenMax.from(this, 1, { y: '100%', ease: Power0.easeNone }))
            .addTo(controller);
    });*/

    const { NormalParallax, BackgroundParallax } = MiniParallax

    new NormalParallax('.float', {
        speed: 0.3
    })
    function build() {

        var tl = new TimelineLite();

        tl.from($(".int"), 2, { autoAlpha: 0, x: -30, ease: Power3.easeOut })
            .from($(".rvl"), 2, { autoAlpha: 0, x: -30, ease: Power3.easeOut }, '-=1.6')
            .from($(".nineteen"), 2, { autoAlpha: 0, y: -30, ease: Power3.easeOut }, '-=1.6')
            .from($(".tagline"), 0.5, { autoAlpha: 0, scaleX: 0, ease: Power3.easeOut }, '-=1')
            .from($("h3"), 2, { autoAlpha: 0, y: -20, ease: Power3.easeOut }, '-=.5')
            .from($(".induk img:nth-child(1)"), 1, { autoAlpha: 0, y: -10, ease: Power3.easeOut }, '-=.8')
            .from($(".induk img:nth-child(2)"), 1, { autoAlpha: 0, y: -10, ease: Power3.easeOut }, '-=.8')
            .from($(".induk img:nth-child(3)"), 1, { autoAlpha: 0, y: -10, ease: Power3.easeOut }, '-=.8');
    }
    function buildFlames() {

        var tl = new TimelineLite();

        tl.from($(".one"), 2, { autoAlpha: 0, x: -300, y: -200, ease: Power3.easeOut })
            .from($(".two"), 2, { autoAlpha: 0, x: 300, y: 200, ease: Power3.easeOut }, .3)
            .from($(".three"), 2, { autoAlpha: 0, y: 300, ease: Power3.easeOut }, 1);

    }
    build();
    buildFlames();

    $('nav').click(function () {
        $('.hiding-page').addClass('visible');
        $('nav').addClass('disappear');
    });
    $('.close').click(function () {
        $('.hiding-page').removeClass('visible');
        $('nav').removeClass('disappear');
    });
    $('.buttonisasi').click(function () {
        $('.hiding-page').removeClass('visible');
        $('nav').removeClass('disappear');
    });

})