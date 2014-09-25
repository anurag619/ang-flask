var demo = angular.module('demo',['ngRoute', 'controllers']);

demo.config(function($routeProvider){

	$routeProvider.when('/',
	{
		templateUrl: 'templates/home.html',
		controller: 'appctrl'})

	.otherwise(
		{
		redirectTo: '/'
	})
});

