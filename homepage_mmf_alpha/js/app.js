$(document).ready(function(){
	$(document).foundation();
	/* SLICK SLIDER */
	$('#uploads_slider').slick({
    dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		/*autoplay: true,
 		autoplaySpeed: 2000,*/
		variableWidth: true,
		adaptiveHeight: true,
		responsive: 
		[
			{
				breakpoint: 1024,
				settings: 
				{
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false
				}
			}
		]
  });
	$('#home_slider').slick({
    dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		fade: true,
		cssEase: 'linear',
 		autoplaySpeed: 2000
  });
});
