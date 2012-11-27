// JavaScript Document
$(document).ready(function() 
{
	$(window).resize(function(){

  $('#header').css({
   position:'absolute',
   left: ($(window).width() 
     - $('#header').outerWidth())/2
  });
		
 });
 
 // To initially run the function:
 $(window).resize();
	
	
	
		
		$( '#bg' )			.hide().fadeIn('fast');
		$( '#art' )			.hide().fadeIn('fast');
		$( '#bubble' )		.hide().fadeIn(700);
		$( '#mfont' )		.hide().fadeIn(700);
		$( '#bubbleFont')	.hide().fadeIn(700);
		$( '#mtext' )		.hide().fadeIn(700);
		$( '#mtext2' )		.hide();
		
		
		$( '#mask' ).stop().hover(function() 
		{
			$('#mtext2').stop().slideDown({duration:10});
			$('#art').stop().animate({opacity:0}, "slow")
			$('#art2').stop().animate({opacity:1}, "slow");
			$('#left_line').stop().delay(600).animate({
							opacity:1,
							width:"300px", 
							left:"273"},{queue:false, duration:600, easing: 'easeOutBounce'});
			$('#right_line').stop().delay(600).animate({
							opacity:1,
							width:"276px", 
							left:"808"},{queue:false, duration:600, easing: 'easeOutBounce'});
			$('#right_line p').stop().delay(900).animate({opacity:1},"fast");
			$('#left_line p').stop().delay(900).animate({opacity:1},"fast");
		},function() 
		{
			$('#mtext2').stop().slideUp('Fast');
			$('#art2').stop().animate({opacity:0}, "slow");
			$('#art').stop().animate({opacity:1}, "slow");
			$('#left_line').stop().animate({
							opacity:0,
							width:"0px", 
							left:"570"},"fast");
			$('#right_line').stop().animate({
							opacity:0,
							width:"0px", 
							left:"809"},"fast");
			$('#right_line p').stop().animate({opacity:0},1);
			$('#left_line p').stop().animate({opacity:0},1);
		});
		
		
		$( '#bubble' ).hover(
			function() {$('#bubbleFont').stop().animate({color: 'red'}, 'slow');}
			,function() {$('#bubbleFont').stop().animate({color: '#0F4E79'}, 'slow');}
		);
		
		$( '#bubble' ).click( function()
		{ 
			$('div#box2').animate({top:"-1050px"}, 500, "swing", function(){window.location = "blog.html";});
		});
		
		
		
	
});

