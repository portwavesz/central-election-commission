
$(document).ready(function(){
	$('.header__boorger').click(function(event){
		$('.header__boorger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


