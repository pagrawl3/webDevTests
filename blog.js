// JavaScript Document

$(document).ready(function() 
{	
	
	$("#wrap_main").css({'top' : '-=250px'});
	$(".videos").css({'opacity' : '0'});
	//$(".videos").hide();
	var toggle = 0;
  //toggle the componenet with class msg_body
  $("#cText p").click(function()
  {
	if (toggle == 0)
	{ 
		
    	$(".videos").animate({'opacity' : '1'}, 
									{duration:500, easing:'easeOutExpo'});
		$("#wrap_main").animate({'top' : '+=250px'}, 
									{duration:500, easing:'easeOutExpo'});
		//$(".videos").show();
		toggle = 1;
	}
	else if (toggle == 1)
	{
		$(".videos").animate({'opacity' : '0'}, 
									{duration:500, easing:'easeOutExpo'});
		$("#wrap_main").animate({'top' : '-=250px'}, 
									{duration:500, easing:'easeOutExpo'});
		//$(".videos").hide();
		toggle = 0;
		
	}
  });
  
  
	
	(function($) {
    $.extend($.fx.step,{
        backgroundPosition: function(fx) {
            if (fx.state === 0 && typeof fx.end == 'string') {
                var start = $.curCSS(fx.elem,'backgroundPosition');
                start = toArray(start);
                fx.start = [start[0],start[2]];
                var end = toArray(fx.end);
                fx.end = [end[0],end[2]];
                fx.unit = [end[1],end[3]];
            }
            var nowPosX = [];
            nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
            nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];
            fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

           function toArray(strg){
               strg = strg.replace(/left|top/g,'0px');
               strg = strg.replace(/right|bottom/g,'100%');
               strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
               var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
               return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
           }
        }
    });
})(jQuery);
	
			
			$('#button1').stop().delay(700).animate( {
				opacity: 1,
				top: '+=40px',
			},{
				duration:{opacity:100, top:'fast'},
				easing:'easeOutBack'
			});
			
			$('div#icon').stop().delay(700).animate( {
				opacity: 1,
				top: '+=40px',
			},{
				duration:{opacity:100, top:'fast'},
				easing:'easeOutBack'
			});
			
			$('#blog_content').stop().delay(900).animate( {
				opacity: 1,
				top: '-=100px',
			},{
				duration:800,
				easing:'easeOutBounce'
			});
			 
			$('#sidebar').stop().delay(1200).animate( {
				opacity: 1,
				top: '-=100px',
			},{
				duration:800,
				easing:'easeOutBounce'
			});
			
			$('#sidebar2').stop().delay(1200).animate( {
				opacity: 1,
			});
			
			
			$('ul.menu li.inactive ')
				.css( {backgroundPosition: "-43px -590px"} )
				.mouseover(function(){
					$(this).stop().animate(
						{backgroundPosition : ("-43px -80px"),
						 'color' : '#000'}, 
						{duration:1000,
						easing:'easeOutExpo'})
				
				})
				.mouseout(function(){
				$(this).stop().animate(
					{backgroundPosition : ("-43px -590px")
				     //'background-position-y' : '-590px'
					 }, 
					{duration:500,
					easing:'easeInExpo'})
				})
				
			$('ul.menu li.inactive a ')
				.mouseover(function(){
					$(this).stop().animate(
						{'color' : '#FFF'}, 
						{duration:1000,
						easing:'easeOutExpo'})
				
				})
				.mouseout(function(){
				$(this).stop().animate(
					{'color' : '#000'}, 
					{duration:500,
					easing:'easeInExpo'})
				})
				
				
			$('#accordion ul li a ')
				.mouseover(function(){
					$(this).stop().animate(
						{'color' : '#000'}, 
						{duration:500,
						easing:'easeInExpo'})
				
				})
				.mouseout(function(){
				$(this).stop().animate(
					{'color' : '#CCC'}, 
					{duration:500,
					easing:'easeOutExpo'})
				})

		$('#accordion a.item').click(function () {
 
       		 //slideup or hide all the Submenu
       		 $('#accordion li').children('ul').slideUp('fast');  
        
         
      	     //show the selected submenu
       		 $(this).siblings('ul').slideDown('fast');
         
      
        return false;
 
    });

});

