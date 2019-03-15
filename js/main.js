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