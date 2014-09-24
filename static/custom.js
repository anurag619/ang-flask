var demo = angular.module('demo',['ngRoute']);

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

demo.controller('appctrl', ['$scope', function(a){
		a.categories = [
			{'id':0, 'name': 'development'},
			{'id':1, 'name': 'design'},
			{'id':2, 'name': 'exercise'},
			{'id':3, 'name': 'humor'}

		];

		a.notes = [
			{'id':0, 'title': 'angularjs', 'body': 'learning new things about angularjs today', 'category': 'development'},
			{'id':1, 'title': 'photoshop', 'body': 'i had learned PS in my 1st year', 'category': 'design'},
			{'id':2, 'title': 'gym', 'body': 'i like going to gym, thats it', 'category': 'exercise'},
			{'id':3, 'title': 'jokes', 'body': 'radio mirchi shows some really pathetic jokes', 'category': 'humor'},
		];

		a.currentcat = null;
		a.cat = {};

		function setcurrentcat(category){
			a.currentcat = category;
			a.cat.category = category.name;
			console.log(a.cat.category)
		}

		a.setcurrentcat = setcurrentcat;

	}])