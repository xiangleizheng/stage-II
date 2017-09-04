$(function(){
	var links = $(".nav .choose ul li");
	var tran = $(".nav .choose .triangle");
	links.on("click","a",function(){
		$(this).parent().siblings().children().removeClass("active");
		$(this).addClass("active");
		
		var aL = $(this).offset().left;
		var aW = $(this).outerWidth();
		
	    tran.offset({
	    	left:aL+aW/2-tran.outerWidth()/2
	    })
	})
	
})
