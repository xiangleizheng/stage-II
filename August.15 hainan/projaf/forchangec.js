$(function(){
	//点击更换主题颜色
	$(".changec").on("click","div.checkb",function(){
		$(this).css("background-position-y","-15px").siblings().css("background-position-y","0");
		var n = $(this).index();
		if(n==0){
		   $('#nav').css("background-color","rgba(61,91,155,1)");
		   $('.tittle').css("background-color","rgba(61,91,155,0.8)");
		   $(".on").css("background-color","rgba(61,91,155,0.9)");
		}else if(n==1){
		   $('#nav').css("background-color","rgba(180,214,0,1)");
		   $('.tittle').css("background-color","rgba(180,214,0,0.8)");
		   $(".on").css("background-color","rgba(180,214,0,0.9)");
		}else if(n==2){
		   $('#nav').css("background-color","rgba(251,174,15,1)");
		   $('.tittle').css("background-color","rgba(251,174,15,0.8)");
		   $(".on").css("background-color","rgba(251,174,15,0.9)");		   
		}else if(n==3){
		   $('#nav').css("background-color","rgba(11,194,209,1)");
		   $('.tittle').css("background-color","rgba(11,194,209,0.8)");
		   $(".on").css("background-color","rgba(11,194,209,0.9)");		   
		}else if(n==4){
		   $('#nav').css("background-color","rgba(227,21,92,1)");
		   $('.tittle').css("background-color","rgba(227,21,92,0.8)");
		   $(".on").css("background-color","rgba(227,21,92,0.9)");		   
		}else{
		   $('#nav').css("background-color","rgba(186,58,217,1)");
		   $('.tittle').css("background-color","rgba(186,58,217,0.8)");
		   $(".on").css("background-color","rgba(186,58,217,0.9)");		   
		}		
	})
	//左侧分类的文字 点击变粉色
	$(".sort").on("click","li",function(){
		$(this).css("color",'#fa5889');
		$('li.bg').removeClass("bg");
	    $(this).siblings().css("color","");
	    $(this).parent().siblings().children().css("color","");
	    $(this).parent().parent().siblings().find("ul").children().css("color","");
	})
	//右侧的通知信息鼠标滑过变颜色
	$(".info>ul").on("mouseenter","li",function(){
		$(this).css("color",'#fa5889');
	})
	$(".info>ul").on("mouseleave","li",function(){
		$(this).css("color",'');
	})
	
})