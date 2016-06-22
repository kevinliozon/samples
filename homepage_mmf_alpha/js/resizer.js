/* Resizer to make images fitting to their patterns */ 
function resize_me(){
$("#filter").width($("#mmf_header").width());
$("#filter").height($("#mmf_header").height());
}
$( document ).ready(function(){
	resize_me();	
});
$(window).resize(function(){
	resize_me();
});
function same_height(){
	$("#logo_medium").height($("#top_header").height());
}
$( document ).ready(function(){
	same_height();	
});
$(window).resize(function(){
	same_height();
});
/* Resizer to make divs (with background)... */ 
$(document).ready(function(){
	/* ...squared */
	/*$(".squared").height($(".squared").width());
	$(window).resize(function(){
	$(".squared").height($(".squared").width());
	});*/
	/* ...rectangular */
	/*$(".rect img").height($(".squared:nth-child(2) img:eq(4)").height());*/
	/* SLICK SLIDER RESIZER */
	/* make the gallery the same height as the lateral filters and squared */
	$('.uploads_slide>img').height($('#uploads_filters').height());
	$('.uploads_slide>img').width($('#uploads_filters').height());
	/* make the shadow boxes of the slider's nav the same height as the gallery */
	$('#uploads_slider .slick-arrow').height($('.uploads_slide>img').height());
	/* BANNERS RESIZER */
	/* Go through each square, take the largest one (unhidden so) and use its height to define the rectangles' ones */
	var biggerOfTwo=0;
	$(".squared img").each(function()
	{
		if ($(this).height()>biggerOfTwo)
		{
			biggerOfTwo=$(this).height();
		}
	});
	$(".rect img").height(biggerOfTwo);
	$(window).resize(function(){
		/*$(".rect img").height($(".squared:nth-child(2) img:eq(4)").height());*/
		$('.uploads_slide>img').height($('#uploads_filters').height());
		$('.uploads_slide>img').width($('#uploads_filters').height());
		$('#uploads_slider .slick-arrow').height($('.uploads_slide>img').height());
		var biggerOfTwo=0;
		$(".squared img").each(function()
		{
			if ($(this).height()>biggerOfTwo)
			{
				biggerOfTwo=$(this).height();
			}
		});
		$(".rect img").height(biggerOfTwo);
	});
});