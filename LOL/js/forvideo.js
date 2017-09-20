   $(function(){
	   var AllHet = $(window).height();
	   var mainHet= $('.floatCtro').height();
	   var fixedTop = (AllHet - mainHet)/2
	 //  $('div.floatCtro').css({top:fixedTop+'px'}); 
	   $('div.floatCtro p').click(function(){
			var ind = $('div.floatCtro p').index(this)+1;
			var topVal = $('#float0'+ind).offset().top;
			$('body,html').animate({scrollTop:topVal},1000)
		})
		$('div.floatCtro a').click(function(){
			$('body,html').animate({scrollTop:0},1000)
			})
	   $(window).scroll(scrolls)
	   scrolls()
	   function scrolls(){
		   var f1,f2,f3,f4,f5,f6,f7,bck;
		   var fixRight = $('div.floatCtro p');
		   var blackTop = $('div.floatCtro a')
		   var sTop = $(window).scrollTop();
		   fl = $('#float01').offset().top;
		   f2 = $('#float02').offset().top;
		   f3 = $('#float03').offset().top;
		   f4 = $('#float04').offset().top;
		   f5 = $('#float05').offset().top;
		   f6 = $('#float06').offset().top;
		   f7 = $('#float07').offset().top;
		   
			
		   if(sTop<=f2-100){
			   blackTop.fadeOut(300).css('display','none')
			   }
		   else{
			   blackTop.fadeIn(300).css('display','block')
			   }
		   
		   if(sTop>=fl){
			   fixRight.eq(0).addClass('cur').siblings().removeClass('cur');
			   }
		   if(sTop>=f2-100){
			   fixRight.eq(1).addClass('cur').siblings().removeClass('cur');
			   }
		   if(sTop>=f3-100){
			   fixRight.eq(2).addClass('cur').siblings().removeClass('cur');
			   }
		   if(sTop>=f4-100){
			   fixRight.eq(3).addClass('cur').siblings().removeClass('cur');
			   }
		   if(sTop>=f5-100){
			   fixRight.eq(4).addClass('cur').siblings().removeClass('cur');
			   }
		   if(sTop>=f6-100){
			   fixRight.eq(5).addClass('cur').siblings().removeClass('cur');
			   }
		   if(sTop>=f7-100){
			   fixRight.eq(6).addClass('cur').siblings().removeClass('cur');
			   } 
		
	     }
	   })