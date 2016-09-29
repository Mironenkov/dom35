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

    //Services
    $(".dm-services-block__hidden").hide();
    $(".dm-services-block__parametr").click(function(){
        $(this).next().slideToggle();
        return false;
    }).next().hide();

    //Btn-up
    var top_show = 350; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
    var delay = 1000; // Задержка прокрутки
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('.btn-up').fadeIn();
      else $('.btn-up').fadeOut();
    });
    $('.btn-up').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });

    //Modal
    $('.modal_btn').click( function(event){ // лoвим клик пo ссылки с id="go"
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
                $('#modal_form') 
                    .css('display', 'flex') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({opacity: 1}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
        });
    });
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('#modal_form')
            .animate({opacity: 0}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });

})();