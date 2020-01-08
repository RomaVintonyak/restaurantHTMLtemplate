$(function() {
  /*toogle class active to nav link*/
  $(".nav__link").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("nav__link--active");
  });
  /*toggle class show to burger button*/
  var navToggle = $("#navToggle");
  navToggle.on("click", function(event) {
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
  /*features slider*/
  const featureSlid = $("#featuresSlider");
  featureSlid.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });
  $(".features__btn__left").on("click", function() {
    var currentSlider = $(this)
      .parents(".features__block")
      .find("#featuresSlider");
    currentSlider.slick("slickPrev");
  });
  $(".features__btn__right").on("click", function(){
    var currentSlider = $(this)
    .parent(".features__block")
    .find("#featuresSlider");
    currentSlider.slick("slickNext");
  });
});
