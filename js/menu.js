function responseMenu(){
	$('ul.menu__more-list li.menu__item').appendTo('ul.menu__list');
	var items = $('ul.menu__list li.menu__item');
	var max_width = $('ul.menu__list').width() - $('.menu__more').outerWidth();
	// var max_width = $('ul.menu__list').width();
	var width = 0;
	var hide_from = 0;

	// items.css({'width':'auto'});

	items.each(function(index){
		if (width + $(this).outerWidth() > max_width)
		{
			return false;
		}
		else
		{
			hide_from = index;
			width += $(this).outerWidth();
		}
	});
	if (hide_from < items.length - 1) {
		items.eq(hide_from).nextAll('li.menu__item').appendTo('ul.menu__more-list');
		// items.css({'width':(max_width / (hide_from + 1)) + 'px'});
		$('ul.menu__list li.menu__more').show();
	}
	else
	{
		$('ul.menu__list li.menu__more').hide();
	}
}

$(document).ready(function () {
	$('.menu__more-btn').click(function(event) {
		$('.menu__more-list').toggleClass('menu__more-list--active');
		$('.menu__more-btn').toggleClass('menu__more-btn--active');
	});

	$(window).on('resize', function(){
		responseMenu();
	}).trigger('resize');

});