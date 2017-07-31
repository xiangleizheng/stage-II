var box = document.getElementById("box");
var pic = document.getElementById("pic");
var pics = pic.children;
var picW = pics[0].offsetWidth;
var dot = document.getElementById("dot");

//根据图片数量创建按钮
//获取图片数量，根据图片数量添加点
for (var i = 0; i < pics.length; i ++) {
	//创建一个li节点
	var dots = document.createElement('li');
	//给每个li一个index属性
	dots.index = i;
	if (i == 0) {
		//因为页面初始化时显示的是第一张图片，所以给第一个li添加上checked样式
		dots.className = 'checked';
	}
	//将创建的li节点追加到dot中
	dot.appendChild(dots);
}
//获取dot下面的所有li
var dots = dot.children;


//轮播时间函数，表示隔多久图片切换一次
function changePic(){
	//首先获取当前pic的left值
	var cur = pic.offsetLeft;
	
	//如果最后一张图片展示出来了，就将最第一张图片定位到最后一张图片的后面，第一张图的left值就应该是整个所有图片的总宽度
	if (pic.offsetLeft == -(pics.length-1) * picW) {
		pics[0].style.left = picW * pics.length + 'px';
	}
	//当上一步定位过来的图片展示出来后，将该图片的left还原为0，同时将整个pic的left值还原为0，并且重新获取当前的pic的left值，也就是0
	if (pic.offsetLeft == -pics.length * picW) {
		pics[0].style.left = 0;
		pic.style.left = 0;
		cur = 0;
	}
	//获取pic下一步要运动到的位置，即pic下一次运动结束时它的left值，每次轮播都只切换一张图，所以只要让当前的left减去一张图片的宽就可以了
	var target = cur - picW;
	//调用图片运动函数
	toRun(cur,target)
	
}
//轮播时间函数写进计时器，并让该计时器成为box的私有属性
box.timer = setInterval(function(){
	changePic()
},2000)

//图片运动函数
function toRun(cur,target){
	
//	var step = (pic.offsetLeft-target)/20;
	//设置步长为目标与当前距离 1/20，没10毫秒运动一次，200毫秒运动完
	var step = (cur-target)/20;
	//运动计时器
	var runpic = setInterval(function(){
		//每次运动后重新获取当前left
		var curs = pic.offsetLeft;
		//如果目标与当前距离的绝对值小于步长的绝对值，直接让当前位置等于目标位置，并停止计时器
		if (Math.abs(curs-target) < Math.abs(step)) {
			pic.style.left = target + 'px';
			clearInterval(runpic);
			//计时器停止后，让左右按钮重新获得点击事件
			toLeft.flag = true;
			toRight.flag = true;
			return;
		}
		runDots(target);
		//根据步长改变位置
		pic.style.left = curs-step + 'px';
	},20);
	

	
}

function runDots(target){
	//获取当前的图片的索引值，也就等于小点的索引值
	var dotIndex = parseInt(Math.abs(target / picW));
	
	//索引值最大为长度减一，如果索引值大于,该值，则重置为0
	if (dotIndex > dots.length-1) {
		dotIndex = 0;
	}
	
	//运动之后，取消所有的小点的样式
	for (var i = 0; i < dots.length; i ++) {
		dots[i].className = "";
	}
	//给当前索引找到的小点添加样式
	dots[dotIndex].className = "checked";
}

//鼠标移入box，停止计时器
box.onmouseenter = function(){
	clearInterval(box.timer)
}
//鼠标移出，重新打开计时器
box.onmouseleave = function(){
	this.timer = setInterval(function(){
		changePic()
	},2000)
}

//点击按钮切换图片
for (var i = 0; i < dots.length; i ++) {
	dots[i].onclick = function(){
		target = this.index * picW * -1;
		cur = pic.offsetLeft;
		toRun(cur,target)
	}
}


//左侧按钮事件
var toRight = document.getElementById("toRight");
toRight.flag = true;
toRight.onclick = function(){
	if (this.flag) {
		this.flag = false;
		var cur = pic.offsetLeft;
		if(pic.offsetLeft==0){

			pics[0].style.left=pics.length*picW+"px";

			pic.style.left=-pics.length*picW+'px';

		}
		if(pic.offsetLeft==-(pics.length-1)*picW){
			pics[0].style.left=0+'px';
		}
		var cur = pic.offsetLeft;
		var target = cur + picW ;
        var step = (cur-target)/20;

        toRun(cur,target); 
	}
}



//右侧按钮事件
var toLeft = document.getElementById("toLeft");
//给按钮一个私有属性flag，来控制按钮是否执行事件
toLeft.flag = true;
toLeft.onclick = function(){
	//只有当flag为true时，事件才能执行
	if (this.flag) {
		this.flag = false;
		//向左运动只要调用上面自动运动的函数就OK了
		changePic()
	}
}


