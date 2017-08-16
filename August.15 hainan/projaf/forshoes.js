$(function(){
	$(".shoesNav>ul").on('click',"li",function(){
		$(this).addClass("pink").siblings().removeClass("pink");
		var chosleft = $(this).parent().position().left+$(this).position().left+$(this).outerWidth(true)/2+2;
		$(".chos").animate({ "left":chosleft },300);
		var n = $(this).index();
		var li_left = $("li.name").outerWidth(true);
		$(".show_shoes ul").animate({
			left:-n*4*li_left+"px",
		},500);
	})
})