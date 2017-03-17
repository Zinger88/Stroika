
$(function() {
	
	$('.menu-trigger').click(function() {
	$('nav ul').slideToggle(1000);
	});
	
	$(window).resize(function() {
	if ($(window).width() > 1000) {
	  $('nav ul').removeAttr('style');
	}
	});
	
	$('.image-link').magnificPopup({type:'image'});
	$('.popup').magnificPopup();
	

	$('.slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			pauseOnHover:true,
			pauseOnFocus: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 5000,
			responsive: [
				{
				  breakpoint: 768,
				  settings: {
					arrows: false,
					slidesToShow: 1
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					arrows: false,
					slidesToShow: 1
				  }
				}
			  ]

		});
});
	

