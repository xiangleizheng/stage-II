define(function(require,exports,module){
	    var n = require("./fn3").n
	    
		function fadein(obj){
			obj.style.borderRadius="50%";
			alert(n);
		}
		
		exports.fadein=fadein
})