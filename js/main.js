'use strict';

TweenMax.from('#svg-animation', 2, {
    scale: 0,
});

TweenLite.from('#svg-animation', 3, {bottom: "70px", ease:Bounce.easeOut});

TweenMax.to('.cls-1', 2, {
    fill: "#FF0000",
    onComplete: function () {
        TweenMax.to('.cls-1', 2, {
            fill: "#262626"
        })

    }
});
    function svgAnime() {
    TweenLite.from('#svg-animation', 3, {bottom: "70px", ease:Bounce.easeOut});
}

// ПЛАВНЫЙ СКРОЛЛ
$(document).ready(function(){
    $("#menu, #mobileMenu, #softScroll").on("click","a", function (event) {
//отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
//забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
//анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});