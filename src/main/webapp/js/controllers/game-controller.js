appControllers.controller('gameController', [ '$scope', '$http', function($scope, $http) {

	$scope.gameLink = 'Undefined';

	var createGame = function() {
		$http({
			method: 'GET',
			url: '/monopoly/create-game'

		}).then(function successCallback(response) {
			$scope.gameLink = response.data;

		}, function errorCallback(response) {
			console.log('Error: ' + response);
		});
	};


}]);