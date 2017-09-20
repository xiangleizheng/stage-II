define(function(require,exports,module){
    function DRAG(){ 
		  var img = document.querySelector("#img");
		  var box1 = document.querySelector("#box1")
		  var box2 = document.querySelector("#box2")
		  var box3 = document.querySelector("#box3")
		  var box4 = document.querySelector("#box4")
		  var box5 = document.querySelector("#box5")
		  var box6 = document.querySelector("#box6")
		  
		  box1.ondragover=function(e){e.preventDefault();}
		  box2.ondragover=function(e){e.preventDefault();}
		  box3.ondragover=function(e){e.preventDefault();}
		  box4.ondragover=function(e){e.preventDefault();}
		  box5.ondragover=function(e){e.preventDefault();}
		  box6.ondragover=function(e){e.preventDefault();}
		  
		  img.ondragstart=function(e){
		  	e.dataTransfer.setData("id","img");
		  }
		  
		  
		  function putinto(e){
		     var img = document.getElementById(e.dataTransfer.getData("id"));
		     e.target.appendChild(img);
		  }
		  
	
		  box1.ondrop=putinto;
		  box2.ondrop=putinto;
		  box3.ondrop=putinto;
		  box4.ondrop=putinto;
		  box5.ondrop=putinto;
		  box6.ondrop=putinto;
	}  
	  exports.DRAG=DRAG;
})