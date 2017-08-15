$(function(){
	$(".nav").on("click","li",function(){
		$(this).addClass("on").siblings().removeClass("on");
		var curleft =  $(this).position().left-($(".curnav").width()-$(this).innerWidth())/2;
		$(".curnav").animate({ "left":curleft },500)	    
	    var n = $(this).index(); 
	    $("img:eq("+n+")").siblings().fadeOut(300);
        $("img:eq("+n+")").fadeIn(500);
	})		
})