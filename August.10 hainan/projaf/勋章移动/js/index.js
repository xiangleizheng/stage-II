$(function(){
		
		$(".options_xzWrap").on("click","li",function(){
			//获取上面ul的空li
		    var Empli = $("li[node-type='showMedal']:empty")
		    Empli.first().attr("class","").append($(this).html());
			$(this).remove();
		})

         //根据上面的ul独有的class名show来选中它，并且将它作为承载叉叉的a标签的委托元素 
		$('.show').on("click","a[action-type='hiddenMedal']",function(){
			//删除当前叉叉对应的li
			$(this).parents("li").remove();
			//在下面的ul中加入一个li标签
			$("ul[node-type='medalOfHidden']").append($("<li action-type='showMedal'></li>"));
			//因为加入了新成员，所以重新获取一遍下面的li  并且给新加入的最后一个li添加内容
		    $("li[action-type='showMedal']").last().append($(this).parent().parent().parent().html());
		    //还可以这样写.append($(this).parents("li").html()); 往上找到最近的li
		    //将叉叉对应的li样式设置为empty  同时将它的内容清空
		    $(this).parent().parent().parent().attr("class","empty").html("");
		    //上面的ul中加一个新的li
		    $("ul[node-type='medalOfShow']").append($("<li node-type='showMedal' class='empty'></li>"));
		})
		
})