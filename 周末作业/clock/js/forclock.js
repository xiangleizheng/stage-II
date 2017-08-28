$(function(){
	var hhand = $(".hhand");
	var mhand = $(".mhand");
	var shand = $(".shand");
	var resetbtn = $(".reset");
	var matchbtn = $(".match");
	var n =0,s=0,m=0,h=0,timer=null,d=6/*秒针每次走的角度*/,numS=0,numM=0,numH=0;
	rotate();
	
	function rotate(){
		timer = setInterval(function(){
			if(numS==60){
				numS=0;
				if(numM==60){
					numM=0;
					
					if(numH==24){numH=0;};
					numH++;
					
				}
				numM++;
			}
		    numS++;	
		    
	        n++;	    
			s=n*d;
			shand[0].style.transform="rotate("+s+"deg)";
		    m=(n*d/360)*d;
		    mhand[0].style.transform="rotate("+m+"deg)";
		    h=m/360*d*5;
		    hhand[0].style.transform="rotate("+h+"deg)";
		    
	//------------------input显示  分 秒 时
		    
	        numS==60?$(".second").val(0):$(".second").val(numS);
	        numM==60?$(".minute").val(0):$(".minute").val(numM);
	        $(".hour").val(numH);
	        //60时的判断
	        if(numM==60){
	        	$(".minute").val(0);
	        	$(".hour").val(numH+1);
	        }else{$(".minute").val(numM);}	
	        
	        if(numS==60){
	        	$(".second").val(0);
	        	$(".minute").val(numM+1);
	        }else{$(".second").val(numS);}
	        
	//---------获取当前标准时间,添加到span中；
	
	//获取当前时间,格式 2015-09-05 10:00:00.000
	        function getnowtime() {
	            var nowtime = new Date();
	            var year = nowtime.getFullYear();
	            var month = padleft0(nowtime.getMonth() + 1);
	            var day = padleft0(nowtime.getDate());
	            var hour = padleft0(nowtime.getHours());
	            var minute = padleft0(nowtime.getMinutes());
	            var second = padleft0(nowtime.getSeconds());
	            return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
	        }
	//---------补齐两位数
	        function padleft0(obj) {
	            return obj.toString().replace(/^[0-9]{1}$/, "0" + obj);
	        }
	//---------加入span中 
	        $(".curtime").html(getnowtime());
	        
	        
		},1000);
	
	}
    
//------------重置钟表   
    resetbtn.on("click",function(){
    	n=0;numM=0;numH=0;numS=0;
    	timer;
    	$(".hour").val(0);
    	$(".minute").val(0);
    	$(".second").val(0);
    })
//------------时间校准   
    matchbtn.on("click",function(){
    	clearInterval(timer);
    	var datearr = $(".curtime").html().split(" ");
    	var timearr = datearr[1].split(":");
    	numH=parseInt(timearr[0]);
    	numM=parseInt(timearr[1]);
    	numS=parseInt(timearr[2]);
	    //显示数值
    	$(".hour").val(parseInt(timearr[0]));
    	$(".minute").val(parseInt(timearr[1]));
    	$(".second").val(parseInt(timearr[2]));
    	//确定n值.控制各个针旋转角度
    	n=numH*3600+numM*60+numS;
    	rotate();

    })
    
})
