const MIN_DEVICE_WIDTH = 670;

function resetMenu() {
    $('ul.menu__more-list li.menu__item').appendTo('ul.menu__list').removeClass('menu__more-item').children('.menu__link').removeClass('menu__more-link');

}
function responseMenu() {
    resetMenu();
    var items = $('ul.menu__list li.menu__item');
    var max_width = $('ul.menu__list').width() - $('.menu__more').outerWidth(true);
    var width = 0;
    var hide_from = 0;

    items.each(function (index) {
        if (width + $(this).outerWidth() > max_width) {
            return false;
        }
        else {
            hide_from = index;
            width += $(this).outerWidth();
        }
    });

    if (hide_from < items.length - 1) {
        items.eq(hide_from).nextAll('li.menu__item').appendTo('ul.menu__more-list').addClass('menu__more-item').children('.menu__link').addClass('menu__more-link');
        // items.css({'width':(max_width / (hide_from + 1)) + 'px'});
        $('.menu__more').show();
    }
    else {
        $('.menu__more').hide();
    }
}

$(document).ready(function () {
    $('.menu__more-btn').click(function (event) {
        $('.menu__more-list').toggleClass('menu__more-list--active');
        $('.menu__more-btn').toggleClass('menu__more-btn--active');
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest(".menu").length) {
            $('.menu__more-list').removeClass('menu__more-list--active');
            $('.menu__more-btn').removeClass('menu__more-btn--active');

        }
        e.stopPropagation();
      });

    $(function () {

        $(window).on('resize', function () {
            if ($(window).width() >= MIN_DEVICE_WIDTH) {

                responseMenu();
            }
            else {
                resetMenu();
            }
        }).trigger('resize');


    });

});