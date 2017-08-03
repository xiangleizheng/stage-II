
var lis = document.getElementsByTagName("li");
var hot = document.getElementById("hot");
var ind = document.getElementById("ind");
var find = document.getElementById("find");var cityList = obj.cityList;
var cur;

for(var i = 0 ;i<obj.hotList.length;i++){
	var li = document.createElement("li");
	li.innerHTML = obj.hotList[i][0];	
	li.onclick = function(){
		find.innerHTML="";
        getFromName(this.innerText);
        getBlue(this);
	}
	hot.appendChild(li);
}


for(var i =65 ; i<=90;i++){		
	var y =String.fromCharCode(i);
	var li = document.createElement("li");
	li.onclick =function(){
		find.innerHTML="";
		getCity(this.innerText);
		getBlue(this);
	}
	li.innerHTML = y;
	ind.appendChild(li);	
}


function getCity(liContent){
    var keyW = liContent.toLowerCase();

    for(var i =0;i<obj.cityList.length ; i++){
		    if(obj.cityList[i][1].charAt(0).toLowerCase()==keyW){
		       	   var li = document.createElement("li");
		       	   li.innerHTML = obj.cityList[i][0];
		       	   find.appendChild(li); 
		    }
     }	
}


function getBlue(li){
		for(var j = 0 ; j<lis.length ; j++){
			lis[j].className="";
		}
		li.className="checked";
}

function getFromName(hCName){	 
    for(var j = 0 ; j<obj.hotList.length ; j++){
		if(hCName==obj.hotList[j][0]){
			var keyW = obj.hotList[j][2].toLowerCase();
		}
	}     
    for(var i = 0 ; i<obj.cityList.length ; i++){

	        var x = hCName.split("");  
    	    var y =obj.cityList[i][0].split("");

		    if(x[0]==y[0]){
		    	var li = document.createElement("li")
		       	li.innerHTML = obj.cityList[i][0];
		       	find.appendChild(li); 
		    }
    }	
}  


