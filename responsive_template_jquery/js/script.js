$(document).ready(function() {
	/* menu */
    $('.menu li').hover(
        function() 
		{ 
            $('ul:first', this).stop().slideDown();
			$('ul').addClass('active');
        },       
        function() 
		{ 
            $('ul:first', this).stop().slideUp();
        },
        function() 
		{ 
            $('ul:first', this).stop().slideDown();
			$('ul').addClass('active');
        },       
        function() { 
            $('ul:first', this).stop().slideUp();
    });
	/* sections */
	$('#content_area section').click(
		function() 
		{		
			$('#content_area section p').hide(); // hide the section already displayed
			$('p', this).toggle(); // show the clicked section
		}
	);
});