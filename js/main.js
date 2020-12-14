// Hover shows up image that follow cursor with some Lerping

$('.one').hover(function() {
  $("#one").toggleClass("porto-hover");
});
$('.two').hover(function() {
  $("#two").toggleClass("porto-hover");
});
$('.three').hover(function() {
  $("#three").toggleClass("porto-hover");
});
$('.four').hover(function() {
  $("#four").toggleClass("porto-hover");
});
$('.five').hover(function() {
  $("#five").toggleClass("porto-hover");
});

let targetX = 0
let targetY = 0
let currentX = 0
let currentY = 0

const ease = 0.15
const element = document.querySelectorAll('.porto-img')


window.addEventListener('mousemove', (e) => {
  targetX = e.pageX // Stores the mouse (X) positon
  targetY = e.pageY // Stores the mouse (Y) positon
})

function animate() {
  currentX += ((targetX - currentX) * ease) // This is where the magic happens
  currentY += ((targetY - currentY) * ease) 
  
var index = 0, length = element.length
  for ( ; index < length; index++) {
    element[index].style.left = `${currentX + 100}px`
    element[index].style.top = `${currentY - 200}px`
  }
  
  requestAnimationFrame(animate)
}

animate() // Runs 60 times per second






var mobile = (/iphone|ipod|ipad|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));  
if (mobile !== true) { 

  // Smooth Scroll with Skew
  
  const math = {
    lerp: (a, b, n) => {
      return (1 - n) * a + n * b
    },
    norm: (value, min, max) => {
        return (value - min) / (max - min)
    }
  }
  
  const config = {
    height: window.innerHeight,
    width: window.innerWidth
  }
  
  class Smooth {
    constructor() {
      this.bindMethods()
  
      this.data = {
        ease: 0.1,
        current: 0,
        last: 0
      }
  
      this.dom = {
        el: document.querySelector('[data-scroll-container]'),
        content: document.querySelector('[data-scroll-content]')
      }
  
      this.rAF = null
  
      this.init()
    }
  
    bindMethods() {
      ['scroll', 'run', 'resize']
      .forEach((fn) => this[fn] = this[fn].bind(this))
    }
  
    setStyles() {
      Object.assign(this.dom.el.style, {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        overflow: 'hidden'        
      })   
    }
  
    setHeight() {
      document.body.style.height = `${this.dom.content.offsetHeight}px`
    }
  
    resize() {
      this.setHeight()
      this.scroll()
    }
  
    preload() {
      imagesLoaded(this.dom.content, (instance) => {
        this.setHeight()
      })
    }
  
    scroll() {
      this.data.current = window.scrollY
    }
  
    run() {
      this.data.last = math.lerp(this.data.last, this.data.current, this.data.ease)
      if (this.data.last < .1) {
        this.data.last = 0
      }
      
      const diff = this.data.current - this.data.last
      const acc = diff / config.width
      const velo =+ acc
      const skew = velo * 7.5
      
      this.dom.content.style.transform = `translate3d(0, -${this.data.last}px, 0) skewY(${skew}deg)`
  
      this.requestAnimationFrame()
    }
  
    on() { 
      this.setStyles()
      this.setHeight()
      this.addEvents()
  
      this.requestAnimationFrame()
    }
  
    off() {
      this.cancelAnimationFrame()
  
      this.removeEvents()
    }
  
    requestAnimationFrame() {
      this.rAF = requestAnimationFrame(this.run)
    }
  
    cancelAnimationFrame() {
      cancelAnimationFrame(this.rAF)
    }
  
    destroy() {
      document.body.style.height = ''
  
      this.data = null
  
      this.removeEvents()
      this.cancelAnimationFrame()
    }
  
    resize() {
      this.setHeight()
    }
  
    addEvents() {
      window.addEventListener('resize', this.resize, { passive: true })
      window.addEventListener('scroll', this.scroll, { passive: true })
    }
  
    removeEvents() {
      window.removeEventListener('resize', this.resize, { passive: true })
      window.removeEventListener('scroll', this.scroll, { passive: true })
    }
  
    init() {
      this.preload()
      this.on()
    }
  }
  
  new Smooth()
} 






// Smooth Scroll Anchor Links

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
        });
      }
    }
  });





  // Cute Hover Egg Yolk Face

const faceButton = document.querySelector('.face-button');
const faceContainer = document.querySelector('.face-container');
const containerCoords = document.querySelector('#container');
const wrapper = document.querySelector('.thewrapper');
const speech = document.querySelector('.bubble');
const mouseCoords = containerCoords.getBoundingClientRect();

wrapper.addEventListener('mousemove', function(e) {
  const mouseX = e.pageX - containerCoords.offsetLeft;
  const mouseY = e.pageY - containerCoords.offsetTop;
  
  TweenMax.to(faceButton, 0.3, {
     x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 70,
     y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 70,
     ease: Power4.easeOut
   });
   
});

wrapper.addEventListener('mousemove', function(e) {
  const mouseX = e.pageX - containerCoords.offsetLeft;
  const mouseY = e.pageY - containerCoords.offsetTop;
  
  TweenMax.to(faceContainer, 0.3, {
     x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 10,
     y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 10,
     ease: Power4.easeOut
   })
});

wrapper.addEventListener('mousemove', function(e) {
  const mouseX = e.pageX - containerCoords.offsetLeft;
  const mouseY = e.pageY - containerCoords.offsetTop;
  
  TweenMax.to(speech, 0.3, {
     x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 70,
     y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 70,
     ease: Power4.easeOut
   })
});

wrapper.addEventListener('mouseenter', function(e) {
  TweenMax.to(faceButton, 0.3, {
    scale: 0.975
  })
});

wrapper.addEventListener('mouseleave', function(e) {
  TweenMax.to(faceButton, 0.3, {
    x: 0,
    y: 0,
    scale: 1
  })
  
  TweenMax.to(faceContainer, 0.3, {
    x: 0,
    y: 0,
    scale: 1
  })

  TweenMax.to(speech, 0.3, {
    x: 0,
    y: 0,
    scale: 1
  })
});





// Press and Hold Button to show a VIDEO Autoplay and reset automaticaly

TweenMax.set($(".so-real"), {scale: .3, autoAlpha: .3})
TweenMax.set($(".reel-button"), {css:{border: "rgba(255,255,255,.3)"}})
TweenMax.set($(".ricardo-container"), {autoAlpha: 0})
TweenMax.set($(".found"), {autoAlpha: 0})
TweenMax.set($(".ricardo"), {autoAlpha: 0, skewY: '10deg', y: '-80%'})
//TweenMax.set($(".found"), {autoAlpha: 0})

$(".reel-button").mouseenter(function() {
  $(".reel-button").css('border','solid 1px rgba(255,255,255,1)')
})

$(".reel-button").mouseleave(function() {
  TweenMax.to($(".so-real"), .1, {scale: .3, autoAlpha: .3, ease: Power4.out})
  $(".reel-button").css('border','solid 1px rgba(255,255,255,.3)')
})

var tId = 0; 

$('.reel-button').on('mousedown', function() { 
  TweenMax.to($(".so-real"), 1, {scale: 1.05, autoAlpha: 1, ease: Power4.out})
  tId = setTimeout(letsgo, 1000); 
  })
  .on('mouseup mouseleave', function() { 
    clearTimeout(tId);
    TweenMax.to($(".ricardo-container"), 1, {autoAlpha: 0})
    TweenMax.to($(".ricardo"), .5, {autoAlpha: 0, skewY: '10deg', y: '-80%'})
    TweenMax.to($(".so-real"), .1, {scale: .3, autoAlpha: .3, ease: Power4.out})
    $('.ricardo').get(0).pause();
}); 

function letsgo() {
  TweenMax.to($(".ricardo-container"), .5, {autoAlpha: 1, delay: .5})
  TweenMax.to($(".found"), .5, {autoAlpha: 1, delay: 1})
  TweenMax.to($(".ricardo"), 1, {autoAlpha: 1, skewY: '0deg', y: '0%', ease: Power4.easeOut, delay: 2})
  $('.ricardo').get(0).load();
  $('.ricardo').get(0).play();
}





// Loader Screen

$(window).on("load", function() {
  $(".loader-container").addClass("move-up");
})





//menu show

$('.hamburger').click(function () {
  $('.ham-menu').addClass('visible');
});
$('.closeit').click(function () {
  $('.ham-menu').removeClass('visible');
});
$('.ham-menu a').click(function () {
  $('.ham-menu').removeClass('visible');
});