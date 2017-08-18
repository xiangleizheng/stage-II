$(function(){
	
	var timer = null,i=1;
	move();
	
	function move(){
		var liH = $("li:eq(0)").height();
		var flag=false;
		
		timer = setInterval(function(){
		 if(flag==false&&i==1){	
				$("ul").animate({
					'top':-liH,
				},500);
				$("span:eq("+i+")").addClass("beRed");
				$("span:eq("+i+")").siblings().removeClass("beRed");
				flag =true;
		  }	else{
		  	    i++;
		  		$("ul").append($('<li>'+ $("li:eq(0)").html()+'</li>'));
				$("li:eq(0)").css("display","none").remove();
				$("ul").css("top","0");
		  	    $("ul").animate({
					'top':-liH,
				},500);
				$("span:eq("+i+")").addClass("beRed");
				$("span:eq("+i+")").siblings().removeClass("beRed");
				if(i==$("span").length-1){
					i=-1;
				}
		  }
			
		},2000)
	}
	
	
	$(".visualArea").hover(function(){
		clearInterval(timer);
	},function(){
		//移除时。获取当前有颜色的按钮索引，并将给i
		for(var m =0 ; m<$("span").length;m++){
			if($("span:eq("+m+")").attr('class')==="beRed"){
				var i = m;
			}
		}
		console.log(i);
		move();
	})
	
	
})
