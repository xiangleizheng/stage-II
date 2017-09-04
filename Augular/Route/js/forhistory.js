$(function(){
	
	
	
	var posarr=[],flag=true,flag1=true,a=1;
	
	$(document).on("mousemove",function(){
		if(flag==true){
			parent.scroll(1,10);
    	    parent.scroll(1,0);
    	    flag=false;
		}

	})

    
    	
	

   
    window.onscroll=function(){
    	var ul =$("#hang");
   
	    ul[0].style="margin-top:"+$(document).scrollTop()+"px;transition:all 0.001s";
	    
        var spans = $("#hang li span");
        
        
        
        

        if(flag1){
        	posarr.push(parseInt($("#section-1").offset().top))
	        posarr.push(parseInt($("#section-2").offset().top))
	        posarr.push(parseInt($("#section-3").offset().top))
	        posarr.push(parseInt($("#section-4").offset().top))
	        posarr.push(parseInt($("#section-5").offset().top))
	        flag1=false;
        }

	    if($(document).scrollTop()<=posarr[1]-30){
		    	$(".lol").removeAttr("style");
		    	spans[0].style="color:#fff;background-color: #F04040;border: 1px solid #F04040;box-shadow: 0 0 20px rgba(0,0,0,0.6) inset;"
	    	
	    }else if($(document).scrollTop()<=posarr[2]-30){
		    	$(".lol").removeAttr("style");
		    	spans[1].style="color:#fff;background-color: #F04040;border: 1px solid #F04040;box-shadow: 0 0 20px rgba(0,0,0,0.6) inset;"
	    }else if($(document).scrollTop()<=posarr[3]-30){
		    	$(".lol").removeAttr("style");
		    	spans[2].style="color:#fff;background-color: #F04040;border: 1px solid #F04040;box-shadow: 0 0 20px rgba(0,0,0,0.6) inset;"
	    }else if($(document).scrollTop()<=posarr[4]-30){
		    	$(".lol").removeAttr("style");
		    	spans[3].style="color:#fff;background-color: #F04040;border: 1px solid #F04040;box-shadow: 0 0 20px rgba(0,0,0,0.6) inset;"
	    }else{
		    	$(".lol").removeAttr("style");
		    	spans[4].style="color:#fff;background-color: #F04040;border: 1px solid #F04040;box-shadow: 0 0 20px rgba(0,0,0,0.6) inset;"
	    }

	    
	    
		spans.eq(0).click(function(){
		    	parent.scroll(a,posarr[0]);
		    	a=posarr[0];
		    	$(".lol").removeAttr("style");
		    	spans[0].style="color:#fff;background-color: #F04040;border: 1px solid #F04040;box-shadow: 0 0 20px rgba(0,0,0,0.6) inset;"
		})	

		spans.eq(1).click(function(){
		    	$(".lol").removeAttr("style");
		    	spans[1].style="color:#fff;background-color: #F04040;border: 1px solid #F04040;box-shadow: 0 0 20px rgba(0,0,0,0.6) inset;"
		    	parent.scroll(a,posarr[1]);
		    	a=posarr[1];
		})	

		spans.eq(2).click(function(){
		    	$(".lol").removeAttr("style");
		    	spans[2].style="color:#fff;background-color: #F04040;border: 1px solid #F04040;box-shadow: 0 0 20px rgba(0,0,0,0.6) inset;"
		    	parent.scroll(a,posarr[2]);
		    	a=posarr[2];
		})	
		
		spans.eq(3).click(function(){
		    	$(".lol").removeAttr("style");
		    	spans[3].style="color:#fff;background-color: #F04040;border: 1px solid #F04040;box-shadow: 0 0 20px rgba(0,0,0,0.6) inset;"
		    	parent.scroll(a,posarr[3]);
		    	a=posarr[3];
		})	
		
		spans.eq(4).click(function(){
		    	$(".lol").removeAttr("style");
		    	spans[4].style="color:#fff;background-color: #F04040;border: 1px solid #F04040;box-shadow: 0 0 20px rgba(0,0,0,0.6) inset;"
		    	parent.scroll(a,posarr[4]);
		    	a=posarr[4];
		})			
	}
		     
     
	


})
