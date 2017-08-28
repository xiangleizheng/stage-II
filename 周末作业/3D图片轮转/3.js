window.onload=function() {
var hezi=document.getElementById('hezi');
var as=hezi.getElementsByTagName('a');
var imgs=hezi.getElementsByTagName('img');






for(var i=0;i<as.length;i++)
{
	as[i].index=i;
	as[i].onmouseover=function() {
		 hezi.style.animationPlayState="paused";
          this.style.boxShadow="0px 0px 10px 10px #00FFFF inset";

		 imgs[this.index].style.display="block";


				as[this.index].onmouseout=function() {
					   as[this.index].style.boxShadow="0px 0px 0px 0px #00FFFF inset";
						 for(var j=0;j<imgs.length;j++)
		 	             {imgs[j].style.display="none";}
			      hezi.style.animationPlayState="running";
		         }
	}
}





}