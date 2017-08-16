$(function(){
	var timer = null,m=0;
	//点击切换效果
	$(".pic_nav").on("click","li",function(){
		
		$(this).siblings().removeClass("on").css('background-color','rgba(0,0,0,0.4)');
		$(this).addClass("on");	  
		$(".on").css("background-color", $('.tittle').css("background-color"));
		var curleft =  $(this).position().left+$(this).innerWidth()/2;
		$(".curnav").animate({ "left":curleft },300)	    
	    var n = $(this).index(); 
	    $(".pics>img:eq("+n+")").siblings().fadeOut(300);
        $(".pics>img:eq("+n+")").fadeIn(400);
        m = $(".pic_nav>li.on").index();
	})	
	
	//自动切换效果
       
       automove();
       
       $(".pic_nav").on('mouseenter',function(){
       	clearInterval(timer);
       })
       
       $(".pic_nav").on('mouseleave',function(){
        m = $(".pic_nav>li.on").index();
        automove();
       })
       
	   function automove(){
             clearInterval(timer); 
		   	 timer = setInterval(function(){
		   	 	m++;
		   	 	if(m==5){m=0;}
			    $(".pics>img:eq("+m+")").siblings().fadeOut(300);
		        $(".pics>img:eq("+m+")").fadeIn(400);
				$(".pic_nav>li:eq("+m+")").siblings().removeClass("on").css('background-color','rgba(0,0,0,0.4)');
				$(".pic_nav>li:eq("+m+")").addClass("on");	  
				$(".on").css("background-color", $('.tittle').css("background-color"));
				var curleft = $(".pic_nav>li:eq("+m+")").position().left+$(".pic_nav>li:eq("+m+")").innerWidth()/2;
				$(".curnav").animate({ "left":curleft },300);
		   	 },2500);

	   	      
	   }
	
	
})


