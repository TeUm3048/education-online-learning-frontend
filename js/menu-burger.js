
$(document).ready(function () {
    $('.menu__burger-btn').click(function (event) {
        $('.menu__list').toggleClass('menu__list--visible-by-burger');
        $('.menu__item').toggleClass('menu__item--visible-by-burger');
        $('.menu__burger-btn').toggleClass('menu__burger-btn--active');

        $(document).on('click', function(e) {
            if (!$(e.target).closest(".menu").length) {
                $('.menu__list').removeClass('menu__list--visible-by-burger');
                $('.menu__burger-btn').removeClass('menu__burger-btn--active');

            }
            e.stopPropagation();
          });
    });

    $(window).on('resize', function () {
        $('.menu__list').removeClass('menu__list--visible-by-burger');
        $('.menu__item').removeClass('menu__item--visible-by-burger');
        $('.menu__link').removeClass('menu__link--visible-by-burger');
        $('.menu__burger-btn').removeClass('menu__burger-btn--active');
    }).trigger('resize');
});

