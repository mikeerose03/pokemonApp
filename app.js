(function(){

	angular
		.module("pokemonApp", ['ngResource', 'ngRoute'])
		.constant('constants', {
			API_URL: 'http://pokeapi.co/api/v2/pokemon'
		})
}());