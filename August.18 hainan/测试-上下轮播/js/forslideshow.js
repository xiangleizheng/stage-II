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
			
		},1000);
		return i;
	}
	
	
	$(".visualArea").hover(function(){
		clearInterval(timer);
	},function(){
		//移除时。获取当前有颜色的按钮索引，并给i
		for(var m =0 ; m<$("span").length;m++){
			if($("span:eq("+m+")").attr('class')==="beRed"){
				var i = m;
			}
		}
//		console.log(i);
		move();
	})
	
	$(".btn").on("click","span",function(){
		(function(){
			for(var m =0 ; m<$("span").length;m++){
				if($("span:eq("+m+")").attr('class')==="beRed"){
				var i = m;
				}
		    }
		})()
		
		$(this).addClass("beRed");
		$(this).siblings().removeClass("beRed");
	

		
		if(i-$(this).index()>0){
		    prepend(i-$(this).index());
	   }else if(i-$(this).index()<0){
	   	    append(i-$(this).index());
	   }
		
		$("ul").animate({
			'top':-$("li:eq(0)").height(),
		});
		
		
	})
	
		//将t项移动到ul前面，
		function prepend(t){
			for(var s = 4 ; s>=5-t ; s--){
				$("ul").prepend($('<li>'+ $("li:eq(4)").html()+'</li>'));
				$("li:eq(5)").css("display","none").remove();
			}
		}
		function append(t){
			for(var s = 4 ; s>=5+t ; s--){
	   	   	$("ul").append($('<li>'+ $("li:eq(0)").html()+'</li>'));
			$("li:eq(0)").css("display","none").remove();				
			}	
		}	
	
})
