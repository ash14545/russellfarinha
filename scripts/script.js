// Sticky top navbar
function stickyNav(elemLoc) {
    if(elemLoc >= $(window).scrollTop()) {
        if($('.navbar').hasClass('fixed-navbar')) {
            $('.navbar').removeClass('fixed-navbar');
        }
    } else { 
        if(!$('.navbar').hasClass('fixed-navbar')) {
            $('.navbar').addClass('fixed-navbar');
        }
    }
}

$(document).ready(function() {
    var elemLoc = $('.navbar').position().top;
    stickyNav(elemLoc);
    $(window).scroll(function() {
        stickyNav(elemLoc);
    });
});