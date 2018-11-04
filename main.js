(function($) {
    $(function() {

        //initialize all modals           
        $('.modal').modal();

        //or by click on trigger
        $('.trigger-modal').modal();

    }); // end of document ready
})(jQuery);

$(document).ready(function() {
    $('.parallax').parallax();
});

$('a[href*="#equipment"]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});

$('a[href*="#services"]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});

$('a[href*="#map"]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});