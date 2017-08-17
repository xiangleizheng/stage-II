$(function(){
	
	$("#box").on("mouseenter","li",function(){
		$(this).css({
			"background-color":"rgba(0,0,0,0.8)",
			"color":"#fff",
	    })
	})	
	$("#box").on("mouseleave","li",function(){
		$(this).css({
			"background-color":"transparent",
			"color":"#000",
	    })
	})
	
	
	$("#txt").on('click',function(e){
		event.stopPropagation();
		$(this).css('border-color','#000');
		$(this).attr("placeholder","");
		$("#box").css("display","block");
		$.ajax({
			type:"get",
			url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+$("#txt").val(),
			dataType:"jsonp",
			jsonp:"cb",
			success:function(data){
				$("#box").html("");	
				var arr = data.s;
				for(var i = 0 ; i<arr.length; i++){
                    $("#box").append($("<li><a target='_blank'>"+arr[i]+"</a></li>"));
				}
				
			}
		})
	})
	$("#txt").on('blur',function(){
		$(this).css('border-color','');
		$(this).attr("placeholder","请输入搜索关键字");
	})
	
	$("#txt").on("keyup",function(){
		$("#box").css("display","block");
		$.ajax({
			type:"get",
			url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+$("#txt").val(),
			dataType:"jsonp",
			jsonp:"cb",
			success:function(data){
		        $("#box").html("");				
				var arr = data.s;
				for(var i = 0 ; i<arr.length; i++){
                    $("#box").append($("<li><a target='_blank'>"+arr[i]+"</a></li>"));
				}
				
			}
		})
	})
	
	
	$("#box").on("click","li",function(e){
		    event.stopPropagation();
			$(this).children().attr('href',"https://www.baidu.com/s?wd="+$(this).children().html());
			$("#txt").val( $(this).text());
		    $("#box").css("display","none");
	})
	
	$(".sear").on("click",function(){
		$(this).attr("href","https://www.baidu.com/s?wd="+$("#txt").val());
	})
	$(document).on("click",function(){
		$("#box").css("display","none");
	})
})
