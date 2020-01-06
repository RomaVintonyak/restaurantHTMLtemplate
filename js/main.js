$(function(){
    /*toogle class active to nav link*/
    $(".nav__link").on("click", function(event){
        event.preventDefault();
        $(this).toggleClass("nav__link--active");
    });
    /*toggle class show to burger button*/
    var navToggle = $("#navToggle");
    navToggle.on("click", function(event){
        event.preventDefault();
        $(".burger__icon").toggleClass("show");
    });
    /*slick slider*/
    const dataSlider = $('[data-slider="intro-slider"]');
    dataSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
        autoplay: true
      });
      /*waves evect*/
      Waves.attach(".wavesEfect");
      Waves.init();
});