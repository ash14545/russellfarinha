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

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var target = $(this.getAttribute('href'));
        if (target.length) {
            var remValue = 3; // Adjust this value to your desired rem value
            var rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
            var offset = remValue * rootFontSize;

            var targetPosition = target.offset().top - offset;
            $('html, body').animate({
                scrollTop: targetPosition
            }, 1000); // Adjust the duration as needed
        }
    });
});