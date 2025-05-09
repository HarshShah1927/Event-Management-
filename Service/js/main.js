// navigation on scroll stick on top
var num = 50; //number of pixels before modifying styles
$(window).bind('scroll', function() {
    if ($(window).scrollTop() > num) {
        $('.logo-menu').addClass('nav-position-fixed');
    } else {
        $('.logo-menu').removeClass('nav-position-fixed');
    }
});


// video popup
$('#play-video').on('click', function(e) {
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="700" height="400" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function(e) {
    e.preventDefault();
    close_video();
});

$(document).keyup(function(e) {
    if (e.keyCode === 27) {
        close_video();
    }
});

function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
};


// // scroll to top
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function() {
    $(".scroll").click(function() {
        $("html,body").animate({
            scrollTop: $("body").offset().top
        }, "1000");
        return false
    })
})


// main Slider for swiper

var slider1 = new Swiper('.slider1', {
    slidesPerView: 1,
    autoHeight: true,
    loop: true,
    nested: true,
    noSwiping: true,
    touchRatio: 0,
    updateOnWindowResize: true,
    centeredSlides: true,
    allowTouchMove: true,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

//  testimonial for swiper
var slider2 = new Swiper('.slider2', {
    slidesPerView: 1,
    autoHeight: true,
    loop: true,
    nested: true,
    noSwiping: true,
    touchRatio: 0,
    updateOnWindowResize: true,
    centeredSlides: true,
    allowTouchMove: true,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// awards for swiper
var slider3 = new Swiper('.slider3', {
    slidesPerView: 3,
    loop: true,
    // nested:true,
    noSwiping: true,
    touchRatio: 1,
    updateOnWindowResize: true,
    speed: 400,
    // spaceBetween:30,
    centeredSlides: false,
    allowTouchMove: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1600: {
            slidesPerView: 3,
        },
        1360: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        675: {
            slidesPerView: 3,
        },
        540: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 2,
        }
    }
});




// our team mobile for swiper
var slider4 = new Swiper('.slider4', {
    slidesPerView: 3,
    // autoHeight: true,
    loop: true,
    nested: true,
    noSwiping: true,
    // allowTouchMove:false,
    touchRatio: 1,
    updateOnWindowResize: true,
    speed: 400,
    spaceBetween: 30,
    centeredSlides: true,
    allowTouchMove: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2,
        },
        675: {
            slidesPerView: 2,
        },
        540: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
            loopedSlides: 1,
        }
    }
});