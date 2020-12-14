$(document).ready(function ($) {

  $("body").queryLoader2({
    barColor: "#f94e53",
    backgroundColor: "#fff",
    percentage: false,
    barHeight: 3,
    minimumTime: 1000,
    fadeOutTime: 1000
  });

  $(".justifying-page .horizontalBox:first-child").addClass("the-chosen-one");

  function buildUpPage() {
    var tl = new TimelineLite();

    tl.from($("nav"), 1, { autoAlpha: 0, y: -30 }, 0.5)
      .from($(".slide"), 1, { autoAlpha: 0, x: 30 }, 0.8)
      .from($(".slideDescription"), 1, { autoAlpha: 0, x: -30 }, 1)
      .from($(".buttonContainer"), 0.5, { autoAlpha: 0, bottom: -60 });
  }

  setTimeout(function () {
    buildUpPage();
    var tl = new TimelineLite();

    tl.to($(".pulling-down"), 0.8, { delay: 1, y: 450 })
      .set($(".pulling-down"), { display: "none" })
      .from($(".article"), 1, { y: 20, autoAlpha: 0 });

    var thisTime = new TimelineLite();

    thisTime
      .from($(".newsline h1"), 1, { y: 10, autoAlpha: 0 }, 1)
      .staggerTo($(".lets-build"), 1, { className: "+=get-down" }, 0.15);
  }, 1000);

  /*function initialshare() {
        TweenMax.set($(".shareSocmed"), {autoAlpha: 0, rotation: 90, scale: 0})
    }
    initialshare()*/

  function pilihanMu() {
    TweenLite.set($(".pictures-section"), { className: "-=yang-terpilih" });
    TweenLite.set($(".videos-section"), { className: "-=yang-terpilih" });
    TweenLite.to($(".container-pics"), 1, { display: "none", autoAlpha: 0 });
    TweenLite.to($(".container-vids"), 1, { display: "none", autoAlpha: 0 });
    TweenLite.to($(".pictures"), 0.8, { autoAlpha: 0 });
  }

  function pilihanVids() {
    var tl = new TimelineMax();

    tl.to($(".videos-section"), 0.3, { className: "+=yang-terpilih" })
      .to($(".container-vids"), 1, { display: "block", autoAlpha: 1 })
      .staggerTo($(".container-vids .pictures"), 0.8, { autoAlpha: 1 }, 0.2);
  }

  function pilihanPics() {
    var tl = new TimelineMax();

    tl.to($(".pictures-section"), 0.3, { className: "+=yang-terpilih" })
      .to($(".container-pics"), 1, { display: "block", autoAlpha: 1 })
      .staggerTo($(".container-pics .pictures"), 0.8, { autoAlpha: 1 }, 0.2);
  }

  pilihanMu();
  var tl = new TimelineMax();

  tl.to($(".pictures-section"), 0.3, { delay: 3, className: "+=yang-terpilih" })
    .to($(".container-pics"), 1, { display: "block", autoAlpha: 1 }, 0.3)
    .staggerTo($(".container-pics .pictures"), 0.8, { autoAlpha: 1 }, 0.2);

  $(".videos-section").click(function () {
    pilihanMu();
    pilihanVids();
  });
  $(".pictures-section").click(function () {
    pilihanMu();
    pilihanPics();
  });

  $(".share").click(function () {
    event.preventDefault()
    //TweenMax.to($(this).children(".shareSocmed"), .3, {autoAlpha: 1, rotation: 0, scale: 1})
    $(this)
      .parent(".content-description")
      .toggleClass("now-stay");
    $(".content-description now-stay").removeClass("now-stay");
    $(this)
      .children(".shareSocmed")
      .toggleClass("actived");
  });

  $(".triple").click(function () {
    $("#line:nth-child(1)").toggleClass("satu");
    $("#line:nth-child(2)").toggleClass("dua");
    $("#line:nth-child(3)").toggleClass("tiga");
    $(".menu").slideToggle(600);
  });

  function initialState() {
    TweenLite.set($(".side h1"), { y: -10, autoAlpha: 0 });
    TweenLite.set($(".sepperate"), { x: -10, autoAlpha: 0 });
  }

  initialState();

  var distance = $(".side").offset().top - $(window).height() / 2;
  $window = $(window);

  $window.scroll(function () {
    if ($window.scrollTop() >= distance) {
      // Your div has reached the top
      var tl = new TimelineMax();

      tl.staggerTo($(".side h1"), 0.8, { y: 0, autoAlpha: 1 }, 0.2)
        .staggerTo($(".info"), 1, { className: "+=get-down" }, 0.2)
        .staggerTo($(".sepperate"), 1, { x: 0, autoAlpha: 1 }, 0.15, 0.3);
    }
  });

  var distancetwo =
    $(".tides")
      .not(".lets-build")
      .offset().top -
    $(window).height() / 2;
  $window = $(window);

  $window.scroll(function () {
    if ($window.scrollTop() >= distancetwo) {
      $(".horizontalBox").each(function (i) {
        setTimeout(function () {
          $(".horizontalBox")
            .eq(i)
            .addClass("get-down");
        }, 200 * (i + 1));
      });
    }
  });

  function thisThing() {
    TweenLite.set($(".anakPerusahaan div"), { width: 0, autoAlpha: 0 });
    TweenLite.set($(".anakPerusahaan img"), { y: -10, autoAlpha: 0 });
  }

  thisThing();

  var distancethree =
    $(".anakPerusahaan").offset().top - $(window).height() / 2;
  $window = $(window);

  $window.scroll(function () {
    if ($window.scrollTop() >= distancethree) {
      // Your div has reached the top
      var tl = new TimelineMax();

      tl.staggerTo(
        $(".anakPerusahaan div"),
        0.8,
        { width: "50%", autoAlpha: 1 },
        0.2
      ).staggerTo($(".anakPerusahaan img"), 0.8, { y: 0, autoAlpha: 1 }, 0.3);
    }
  });

  function fullWidth() {
    $(".arrow img").click(function () {
      $.each($(".testi-box"), function (i, element) {
        if ($(this).css("display") == "none") {
          TweenLite.set($(this), { autoAlpha: 0 });
          TweenLite.to($(this), 0.5, {
            delay: 0.5,
            autoAlpha: 1,
            display: "inline-block"
          });
          //$(this).css('display','inline-block');
        } else {
          TweenLite.to($(this), 0.5, { autoAlpha: 0, display: "none" });
        }
      });
    });
  }
  function halfWidth() {
    function allOpacity() {
      TweenLite.set($(".batas"), { autoAlpha: 0 });
      TweenLite.set($(".batasan"), { autoAlpha: 0 });
    }

    allOpacity();

    $(".arrow img#right").click(function () {
      if (batas == 1) {
        var tl = new TimelineLite();
        tl.to($(".bat"), 0.5, { autoAlpha: 0, display: "none" })
          .to($(".batas"), 0.5, { autoAlpha: 1, display: "inline-block" })
          .set($(".batasan"), { autoAlpha: 0, display: "none" });

        batas = 2;
      } else if (batas == 2) {
        var tl = new TimelineLite();
        tl.set($(".bat"), { autoAlpha: 0, display: "none" })
          .to($(".batas"), 0.5, { autoAlpha: 0, display: "none" })
          .to($(".batasan"), 0.5, { autoAlpha: 1, display: "inline-block" });

        batas = 3;
      } else if (batas == 3) {
        var tl = new TimelineLite();
        tl.to($(".batasan"), 0.5, { autoAlpha: 0, display: "none" })
          .to($(".bat"), 0.5, { autoAlpha: 1, display: "inline-block" })
          .set($(".batas"), { autoAlpha: 0, display: "none" });

        batas = 1;
      }
    });

    $(".arrow img#left").click(function () {
      if (batas == 1) {
        var tl = new TimelineLite();
        tl.to($(".bat"), 0.5, { autoAlpha: 0, display: "none" })
          .to($(".batasan"), 0.5, { autoAlpha: 1, display: "inline-block" })
          .set($(".batas"), { autoAlpha: 0, display: "none" });

        batas = 3;
      } else if (batas == 3) {
        var tl = new TimelineLite();
        tl.set($(".bat"), { autoAlpha: 0, display: "none" })
          .to($(".batasan"), 0.5, { autoAlpha: 0, display: "none" })
          .to($(".batas"), 0.5, { autoAlpha: 1, display: "inline-block" });

        batas = 2;
      } else if (batas == 2) {
        var tl = new TimelineLite();
        tl.to($(".batas"), 0.5, { autoAlpha: 0, display: "none" })
          .to($(".bat"), 0.5, { autoAlpha: 1, display: "inline-block" })
          .set($(".batasan"), { autoAlpha: 0, display: "none" });

        batas = 1;
      }
    });
  }
  function smallWidth() {
    $(".testimoni > .testi-box:gt(0)").hide();

    $(".arrow img").click(function () {
      $(".testimoni > .testi-box:first")
        .fadeOut(500)
        .next()
        .delay(500)
        .fadeIn(500)
        .end()
        .appendTo(".testimoni");
    });
  }

  if ($(window).width() < 580) {
    smallWidth();
  } else if ($(window).width() < 785) {
    var batas = 1;
    halfWidth();
  } else {
    fullWidth();
  }
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $(".parallax").css({ transform: "translateY(-" + wScroll / 25 + "%)" });
  $(".second-parallax").css({ transform: "translateY(" + wScroll / 50 + "%)" });
});

$(".slide-images")
  .first()
  .addClass("active");

(function ($) {
  //giving variable, duh...
  var slide = $(".slide-images"),
    active = $(".active"),
    textSlide = $(".slideDescription"),
    next = $(".buttonRight"),
    prev = $(".buttonLeft");

  //write init function on first page load
  function init() {
    //this thing is for hiding the second and the third image slide
    TweenLite.set(slide.not(active), { autoAlpha: 0 });

    //this thing is for hiding the second and the third text slide
    TweenLite.set(textSlide.not(active), { autoAlpha: 0 });
  }

  //run init function
  init();

  slideIndex = 1;

  function goToFirstSlide(slideOut, slideInFirst) {
    var tl = new TimelineLite();

    tl.set(slideInFirst, {
      width: "0px",
      right: "0px",
      left: "",
      autoAlpha: 1,
      className: "+=active"
    })
      .set(slideOut, { className: "-=active" })
      .to(
        slideInFirst,
        1,
        { width: "100%", left: "0px", right: "", ease: Power3.easeInOut },
        1.5
      )
      .to(
        slideOut,
        1,
        { width: "0px", left: "0px", right: "", ease: Power3.easeInOut },
        0
      );
  }

  function goToNextSlide(slideOut, slideIn) {
    var tl = new TimelineLite();

    tl.set(slideIn, {
      width: "0px",
      right: "0px",
      left: "",
      autoAlpha: 1,
      className: "+=active"
    })
      .set(slideOut, { className: "-=active" })
      .to(
        slideIn,
        1,
        { width: "100%", left: "0px", right: "", ease: Power3.easeInOut },
        1.5
      )
      .to(
        slideOut,
        1,
        { width: "0px", left: "0px", right: "", ease: Power3.easeInOut },
        0
      );
  }

  //same like image slide above, only this one is for the text

  function goToFirstText(slideOutText, slideInFirstText) {
    var tl = new TimelineLite();

    tl.set(slideInFirstText, {
      left: "-50px",
      autoAlpha: 0,
      className: "+=active"
    })
      .set(slideOutText, { className: "-=active" })
      .to(slideInFirstText, 1, { left: "-=-50px", autoAlpha: 1 }, 1)
      .to(slideOutText, 1, { left: "50px", autoAlpha: 0 }, 0.5);
  }

  function goToNextText(slideOutText, slideInText) {
    var tl = new TimelineLite();

    tl.set(slideInText, { left: "-50px", autoAlpha: 0, className: "+=active" })
      .set(slideOutText, { className: "-=active" })
      .to(slideInText, 1, { left: "-=-50px", autoAlpha: 1 }, 1)
      .to(slideOutText, 1, { left: "50px", autoAlpha: 0 }, 0.5);
  }

  //This is when the next button is clicked
  next.click(function (e) {
    slideIndex += 1;

    console.log(slideIndex);
    //disable the default behavior, so it doesn't go to the href link
    e.preventDefault();

    //giving variable for the parameter function
    var slideOut = $(".slide-images.active"),
      slideIn = $(".slide-images.active").next(".slide-images"),
      slideOutText = $(".slideDescription.active"),
      slideInText = $(".slideDescription.active").next(".slideDescription"),
      slideInFirst = $(".slide-images").first(),
      slideInFirstText = $(".slideDescription").first();

    //RUN THE MAGIC !! WINGARDIUM LEVIOSA !!
    if (slideIndex > 3) {
      goToFirstSlide(slideOut, slideInFirst);
      goToFirstText(slideOutText, slideInFirstText);
      slideIndex = 1;
    } else {
      goToNextSlide(slideOut, slideIn);
      goToNextText(slideOutText, slideInText);
    }
  });

  setInterval(function () {
    slideIndex += 1;

    //giving variable for the parameter function
    var slideOut = $(".slide-images.active"),
      slideIn = $(".slide-images.active").next(".slide-images"),
      slideOutText = $(".slideDescription.active"),
      slideInText = $(".slideDescription.active").next(".slideDescription"),
      slideInFirst = $(".slide-images").first(),
      slideInFirstText = $(".slideDescription").first();

    //RUN THE MAGIC !! WINGARDIUM LEVIOSA !!
    if (slideIndex > 3) {
      goToFirstSlide(slideOut, slideInFirst);
      goToFirstText(slideOutText, slideInFirstText);
      slideIndex = 1;
    } else {
      goToNextSlide(slideOut, slideIn);
      goToNextText(slideOutText, slideInText);
    }
  }, 10000);

  // previous slide, its basically same like the code above
  //just rename every 'next' code to 'prev'
  //and invert the value
  //yup, thats pretty much it
  function goToLastSlide(slideOut, slideInLast) {
    var tl = new TimelineLite();

    tl.set(slideInLast, {
      width: "0px",
      left: "0px",
      right: "",
      autoAlpha: 1,
      className: "+=active"
    })
      .set(slideOut, { className: "-=active" })
      .to(
        slideInLast,
        1,
        { width: "100%", right: "0px", left: "", ease: Power3.easeInOut },
        1.5
      )
      .to(
        slideOut,
        1,
        { width: "0px", right: "0px", left: "", ease: Power3.easeInOut },
        0
      );
  }
  function goToPrevSlide(slideOut, slideIn) {
    var tl = new TimelineLite();

    tl.set(slideIn, {
      width: "0px",
      left: "0px",
      right: "",
      autoAlpha: 1,
      className: "+=active"
    })
      .set(slideOut, { className: "-=active" })
      .to(
        slideIn,
        1,
        { width: "100%", right: "0px", left: "", ease: Power3.easeInOut },
        1.5
      )
      .to(
        slideOut,
        1,
        { width: "0px", right: "0px", left: "", ease: Power3.easeInOut },
        0
      );
  }

  function goToLastText(slideOutText, slideInLastText) {
    var tl = new TimelineLite();

    tl.set(slideInLastText, {
      left: "50px",
      autoAlpha: 0,
      className: "+=active"
    })
      .set(slideOutText, { className: "-=active" })
      .to(slideInLastText, 1, { left: "-=50px", autoAlpha: 1 }, 1)
      .to(slideOutText, 1, { left: "-50px", autoAlpha: 0 }, 0.5);
  }
  function goToPrevText(slideOutText, slideInText) {
    var tl = new TimelineLite();

    tl.set(slideInText, { left: "50px", autoAlpha: 0, className: "+=active" })
      .set(slideOutText, { className: "-=active" })
      .to(slideInText, 1, { left: "-=50px", autoAlpha: 1 }, 1)
      .to(slideOutText, 1, { left: "-50px", autoAlpha: 0 }, 0.5);
  }

  prev.click(function (e) {
    slideIndex -= 1;

    e.preventDefault();

    var slideOut = $(".slide-images.active"),
      slideIn = $(".slide-images.active").prev(".slide-images"),
      slideOutText = $(".slideDescription.active"),
      slideInText = $(".slideDescription.active").prev(".slideDescription"),
      slideInLast = $(".slide-images").last(),
      slideInLastText = $(".slideDescription").last();

    if (slideIndex < 1) {
      goToLastSlide(slideOut, slideInLast);
      goToLastText(slideOutText, slideInLastText);
      slideIndex = 3;
    } else {
      goToPrevSlide(slideOut, slideIn);
      goToPrevText(slideOutText, slideInText);
    }
  });
})(jQuery);
