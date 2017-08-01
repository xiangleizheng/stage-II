window.onload = function(){
	var lis = document.getElementsByTagName('li')
	var box = document.getElementById("box");
	var boxW = box.offsetWidth;
	
	for (var i = 0; i < lis.length; i ++) {
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
	}
	
	//鼠标移出box,还原所有li的宽度
	box.onmouseout = function(){
		for (var i = 0; i < lis.length; i ++) {
			lis[i].style.width = 0.2 * boxW + 'px';
		}
	}
	
}




