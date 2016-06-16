(function(){
	angular
		.module('pokemonApp')
		.service('pokemonService', ['$q','$http', 'constants', pokemonService]);

	function pokemonService($q, $http, constants){
		console.log('service here')

		var getData = function(){
			var defer = $q.defer();

			$http.get(constants.API_URL).then(function(response){
				defer.resolve(response.data);
				console.log('data received! ', response.data)
			}, function(response){
				defer.reject(response.status)
			});
				
			return defer.promise
		};

		// console.log('pokemon details: ', getPokemon(1))

		// var getPokemon = function(id){
		// 	var defer = $q.defer();

		// 	$http.get(constants.API_URL+ '/' + id + '/').then(function(response){
		// 		defer.resolve('data received! ', response.data)

		// 	}, function(response){
		// 		defer.reject(response.status)
		// 	});

		// 	return defer.promise
		// };

		return{
			getData: getData
			// getPokemon: getPokemon
		};


	}
}());