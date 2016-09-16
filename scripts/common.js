/**
 * Created by GloryManU on 04.07.2016.
 */
(function(){
    var slider = $('.dm-slider-main').lightSlider({
        item: 1,
        pager: false,
        controls: false,
        slideMargin: 0,
        speed: 1000,
        loop: true
    });
    $(".dm-slider-controls--left").click(function(e){
        e.preventDefault();
        slider.goToPrevSlide();
    });
    $(".dm-slider-controls--right").click(function(e){
        e.preventDefault();
        slider.goToNextSlide();
    });
})();