$(function(){
    /*toogle class active to nav link*/
    $(".nav__link").on("click", function(event){
        event.preventDefault();
        $(this).toggleClass("nav__link--active");
    });
});