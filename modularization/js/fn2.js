define(function(require,exports,module){
		function fadeout(obj){
			obj.style.backgroundColor="yellow";
			obj.style.transition="all 1s";
		}
		exports.fadeout=fadeout
})