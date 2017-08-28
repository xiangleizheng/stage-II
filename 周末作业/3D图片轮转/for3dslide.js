window.onload=function(){
	var wrap = document.getElementsByClassName("wrap")[0];
	var timer=null,curdeg=0;
	
	timer=setInterval(rot,1000);
		
	function rot(){
		curdeg+=60;
		wrap.style.transform="rotateY("+curdeg+"deg)";
	}
    
    wrap.onmouseenter=function(){
    	clearInterval(timer);
    }
    wrap.onmouseleave=function(){
    	timer=setInterval(rot,1000);
    }
	
}
