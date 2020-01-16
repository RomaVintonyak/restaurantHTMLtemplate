jQuery(document).ready(function() {
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
  $(".features__btn__right").on("click", function() {
    var currentSlider = $(this)
      .parent(".features__block")
      .find("#featuresSlider");
    currentSlider.slick("slickNext");
  });
  /*progress bar to scroll page*/
  $(function() {
    $(window).on("scroll resize", function() {
      var prog =
        $(window).scrollTop() / ($(document).height() - $(window).height());
      $(".progress__bar").css({
        width: ((100 * prog) | 0) + "%"
      });
    });
  });
  /*fixed header*/
  var introH = $("#intro").innerHeight();
  var header = $(".nav__menu");
  var scrollOfset = $(window).scrollTop();
  checkScroll(scrollOfset);
  $(window).on("scroll", function() {
    scrollOfset = $(this).scrollTop();
    checkScroll(scrollOfset);
  });
  function checkScroll(scrollOfset) {
    scrollOfset = $(this).scrollTop();
    if (scrollOfset >= introH) {
      header.addClass("fixed__header");
    } else {
      header.removeClass("fixed__header");
    }
  }
  /*acardeon script*/
  var acardeonBtn = $('[data-acardeon="show-text"]');
  acardeonBtn.on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("acardeon__item__header--active");
    $(this)
      .parent(".acardeon__item")
      .find(".acardeon__text")
      .toggleClass("acardeon__text--active");
  });
  /*filter category*/
  var filter = $("[data-filter]");
  filter.on("click", function(event) {
    event.preventDefault();
    /*add clas active for links*/
    $("[data-filter]")
      .click(function(event) {
        event.preventDefault();
        $("[data-filter]")
          .removeClass("link__itmem--active")
          .eq($(this).index())
          .addClass("link__itmem--active");
      })
      .eq($(this))
      .addClass("link__itmem--active");
    /*filter menu block*/
    var cat = $(this).data("filter");
    if (cat == "all") {
      $("[data-cat]").removeClass("hide");
    } else {
      $("[data-cat]").each(function() {
        var workCat = $(this).data("cat");
        if (workCat != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });
  /*menu button*/
  var btnMenu = $("#toggleMenu");
  btnMenu.on("click", function(event) {
    event.preventDefault();
    $(".menu__colum__content").removeClass("hide");
    $(".link__itmem").removeClass("link__itmem--active");
  });
  /*visible class to card stuff*/
  var cardHover = $(".slider__card__img");
  cardHover.hover(function(event) {
    event.preventDefault();
    $(this)
      .parent(".slider__card")
      .find(".card__img__btn")
      .toggleClass("card__img__btn--visible");
  });
  /*stuff slider*/
  const stuffSlider = $("#sliderStuff");
  stuffSlider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });
  $(".stuff__btn__left").on("click", function() {
    var currentSlider = $(this)
      .parents(".stuff__content")
      .find("#sliderStuff");
    currentSlider.slick("slickPrev");
  });
  $(".stuff__btn__right").on("click", function() {
    var currentSlider = $(this)
      .parent(".stuff__content")
      .find("#sliderStuff");
    currentSlider.slick("slickNext");
  });
  /*reset tags a standard behavior*/
  /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
  /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
  /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
  var aHref = $("a");
  aHref.click(function(event) {
    event.preventDefault();
    event.stopPropagation();
    /*return false;*/
  }); //!!!!!!!!!!!remove this script to active all links!!!!!!!!!!
  /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
  /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
  /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
  /*slider to section feedback*/
  const feedbackSlider = $("#feedbackSlider");
  feedbackSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });
  $(".feedback__btn__left").on("click", function() {
    var feedbackCurent = $(this)
      .parent(".feedback__slider")
      .find("#feedbackSlider");
    feedbackCurent.slick("slickPrev");
  });
  $(".feedback__btn__right").on("click", function() {
    var feedbackCurent = $(this)
      .parent(".feedback__slider")
      .find("#feedbackSlider");
    feedbackCurent.slick("slickNext");
  });
  /*latest blog hover*/
  var blogHover = $(".slider__blog__img");
  blogHover.hover(function() {
    $(this)
      .parent(".blog__slider__card")
      .find(".slider__blog__text")
      .find("h4")
      .toggleClass("blue__header");
  });
  /*slider to blog sevtion*/
  const blogSlider = $("#blogSlider");
  blogSlider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });
  $(".blog__bnt__left").on("click", function() {
    var blogCurent = $(this)
      .parent(".blog__content")
      .find("#blogSlider");
    blogCurent.slick("slickPrev");
  });
  $(".blog__bnt__right").on("click", function() {
    var blogCurent = $(this)
      .parent(".blog__content")
      .find("#blogSlider");
    blogCurent.slick("slickNext");
  });
  /*bad script*/
  $("#iputText").keyup(function() {
    var val = $(this).val();
    $("#showText").text(val);
  });
  /********************************/
  /*back to top script*/
  var scrollBtn = $("#toggleTop");
  scrollBtn.hide(600);
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 300) {
      scrollBtn.fadeIn(1000);
    } else {
      scrollBtn.fadeOut(600);
    }
  });
  scrollBtn.on("click", function(event) {
    event.preventDefault();
    $("body, html").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });
});
