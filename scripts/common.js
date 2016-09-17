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
    $('.dm-card_item-slider').lightSlider({
        gallery:true,
        galleryMargin: 20,
        thumbMargin: 60,
        item:1,
        loop:true,
        thumbItem:3,
        slideMargin:0,
        enableDrag: false,
        enableTouch: false
    });
})();