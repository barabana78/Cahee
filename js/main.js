'use strict';
//animation LOGO when the page loads
document.getElementById('svg-animation').removeAttribute('style');
TweenMax.from('#svg-animation', 2, {
    scale: 0,
});

TweenLite.from('#svg-animation', 3, {bottom: "70px", ease:Bounce.easeOut});//page down

TweenMax.to('.cls-1', 2, {
    fill: "#FF0000",
    onComplete: function () {
        TweenMax.to('.cls-1', 2, {
            fill: "#262626"
        })

    }
});
function svgAnime() {
    TweenLite.from('#svg-animation', 3, {bottom: "70px", ease:Bounce.easeOut});//on click
}
//animation header when the page loads
document.getElementById('menu').removeAttribute('style');
document.getElementById('mobileMenu').removeAttribute('style');
TweenMax.from('#menu, #mobileMenu', 3, {
    bottom: 70,
});
document.getElementById('headerInfoAnimation').removeAttribute('style');
TweenMax.from('#headerInfoAnimation', 3, {
    right: 500,
});
document.getElementById('scrollTop').removeAttribute('style');
TweenMax.from('#scrollTop', 3, {
    top: 100,
});
var BG = document.getElementById('home').style.background;
TweenMax.from('BG', 3, {
    top: 100,
});

//MODAL
function showModal() {
    document.getElementById('modal').classList.add("open");
}
function clouseModal() {
    var x = document.getElementsByClassName('open');
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("open")
    }
}
document.onkeydown = function(event) {
      if (event.keyCode === 27) clouseModal();
};

/*
//blog item animation
function blogAnimation() {
    TweenMax.from('#rightItem', 3, {
        left: 500,
    });
    TweenMax.from('#centerItem', 3, {
        scale: 0,
    });
    TweenMax.from('#leftItem', 3, {
        right: 500,
    });
}
*/


// ПЛАВНЫЙ СКРОЛЛ
$(document).ready(function(){
    $("#menu, #mobileMenu, #home").on("click","a", function (event) {
//отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
//забираем идентификатор блока с атрибута href
        var id  = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top + 2;
//анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


/*
var scroll = document.getElementById('scroll');
var services = document.getElementById('services');
var gallery = document.getElementById('gallery');
var blog = document.getElementById('blog');
var contact = document.getElementById('contact');
var box;

var myIdObj = {scroll: 0, services: 0, gallery: 0, blog: 0, contact: 0};
var myIdArr = [scroll, services, gallery, blog, contact];

var p = getCoords(myIdArr[0]);
console.log('p= ', p);
// window.addEventListener('scroll', function () {alert('scroll!')});

window.addEventListener('scroll', function () {

    for (var i = 0; i < myIdArr.length; i++) {
        var y = getCoords(myIdArr[i]);
        console.log('y=', y.top);
       myIdObj[myIdArr[i]] = y.top;
       console.log('myIdArr[i]= ', myIdArr[i], typeof (myIdArr[i]));
        console.log('box= ', box, 'myIdObj= ', myIdObj, 'myIdArr=', myIdArr);
    }
});

function getCoords(elem) {
    return box = elem.getBoundingClientRect();
}*/

$(document).ready(function(){
// cache the navigation links
var $navigationLinks = $('.link__nav-decor');
// cache (in reversed order) the sections
var $sections = $($(".section").get().reverse());

// map each section id to their corresponding navigation link
var sectionIdTonavigationLink = {};
$sections.each(function() {
    var id = $(this).attr('id');
    sectionIdTonavigationLink[id] = $('.link__nav-decor > a[href=\\#' + id + ']');
});
// throttle function, enforces a minimum time interval
function throttle(fn, interval) {
    var lastCall, timeoutId;
    return function () {
        var now = new Date().getTime();
        if (lastCall && now < (lastCall + interval) ) {
            // if we are inside the interval we wait
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                lastCall = now;
                fn.call();
            }, interval - (now - lastCall) );
        } else {
            // otherwise, we directly call the function
            lastCall = now;
            fn.call();
        }
    };
}

function highlightNavigation() {
    // get the current vertical position of the scroll bar
    var scrollPosition = $(window).scrollTop();

    // iterate the sections
    $sections.each(function() {
        var currentSection = $(this);
        // get the position of the section
        var sectionTop = currentSection.offset().top;

        // if the user has scrolled over the top of the section
        if (scrollPosition >= sectionTop) {
            // get the section id
            var id = currentSection.attr('id');
            // get the corresponding navigation link
            var $navigationLink = sectionIdTonavigationLink[id].parent();
            // if the link is not active
            if (!$navigationLink.hasClass('active')) {
                // remove .active class from all the links
                $navigationLinks.removeClass('active');
                // add .active class to the current link
                $navigationLink.addClass('active');
            }
            // we have found our section, so we return false to exit the each loop
            return false;
        }
    });
}

$(window).scroll( throttle(highlightNavigation,100) );

// if you don't want to throttle the function use this instead:
// $(window).scroll( highlightNavigation );

});