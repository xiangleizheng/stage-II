            var app = angular.module('myApp',['ui.router',"videomodule"])
            app.config(function($stateProvider,$urlRouterProvider){
			 	 $urlRouterProvider.otherwise('/video')
			 	  $stateProvider
			 	  .state({
			 	  	 name:'showrole',
			 	  	 url:"/showrole",
			 	  	 templateUrl:"./views/showrole.html"
			 	  })
			 	   .state({
			 	  	 name:'video',
			 	  	 url:"/video",
			 	  	 templateUrl:"./views/fixed.html",
			 	  	 controller:"forvideo",
			 	  })
            });