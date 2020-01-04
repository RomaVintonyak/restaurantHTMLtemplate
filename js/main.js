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
    })
});