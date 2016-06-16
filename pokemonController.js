(function(){

	angular
		.module('pokemonApp')
		.controller('pokemonController', ['$scope', '$q', '$routeParams', 'pokemonService', pokemonController]);

		function pokemonController($scope, $q, $routeParams, pokemonService){
			var vm = this;
	
			pokemonService.getData().then(function(data){
				vm.data = data.results;
			}).catch(function(){
				vm.error = 'unable to get pokemon data'
			});

			// var getPokemon = function(id){
			// 	pokemonService.getPokemon(id).then(function(data){
			// 		vm.pokemonDetails = data;
			// 	}).catch(function(){
			// 		vm.error='unable to get pokemon details'
			// 	})
			// };
		};

}());