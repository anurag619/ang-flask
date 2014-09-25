var demo = angular.module('demo',['ngRoute', 'controllers']);

demo.config(function($routeProvider){

	$routeProvider.when('/',
	{
		templateUrl: 'static/templates/home.html',
		controller: 'appctrl'})

	.otherwise(
		{
		redirectTo: '/'
	})
});

