window.onload = function(){
	var lis = document.getElementsByTagName('li')
	var box = document.getElementById("box");
	var boxW = box.offsetWidth;
	for (var i = 0; i < lis.length; i ++) {
		lis[i].index = i;
	}
	/*for (var i = 0; i < lis.length; i ++) {
		lis[i].index = i;
		lis[i].onmouseover = function(){
			var $this = this;
			for (var j = 0; j < lis.length; j ++) {
				//获取所有index属性不等于当前选中的li的index值的其他li，并改变他们的样式
				if (lis[j].index != $this.index) {
					lis[j].style.width = 0.1 * boxW + "px";
				}
			}
			this.style.width = 0.6 * boxW + "px";
		}
	}*/
	
	/*var timer = setInterval(function(){
		var cur = document.getElementsByClassName('checked')[0];
		cur.style.width = 0.6 * boxW + 'px';
		for (var j = 0; j < lis.length; j ++) {
			//获取所有index属性不等于当前选中的li的index值的其他li，并改变他们的样式
			if (lis[j].index != cur.index) {
				lis[j].style.width = 0.1 * boxW + "px";
			}
		}
		cur.className = "";
		if (cur.index == 4) {
			lis[0].className = "checked";
		}else {
			cur.nextElementSibling.className = 'checked';
		}
	},1000)*/
	var ind = 0;
	var timer = setInterval(function(){
		lis[ind].style.width = 0.6 * boxW + 'px';
		for (var j = 0; j < lis.length; j ++) {
			//获取所有index属性不等于当前选中的li的index值的其他li，并改变他们的样式
			if (lis[j].index != lis[ind].index) {
				lis[j].style.width = 0.1 * boxW + "px";
			}
		}
		ind++;
		if (ind>4) {
			ind = 0
		}
	},1000)
	
}




