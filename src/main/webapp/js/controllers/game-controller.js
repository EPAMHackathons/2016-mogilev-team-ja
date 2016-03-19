'use strict';

appControllers.controller('gameController', [ '$scope', '$http', 'wsHelper', '$location',
function($scope, $http, wsHelper, $location) {

	$scope.gameLink = 'TEst Undefined';
    $scope.game = {};
    $scope.players = [];
	$scope.count = 0;

	/*var initGameLink = function() {
		$http({
			method: 'GET',
			url: '/monopoly/init-game-link'

		}).then(function successCallback(response) {
			$scope.gameLink = response.data;

		}, function errorCallback(response) {
			console.log('Error: ' + response);
		});
	};*/

	$scope.createGame = function() {
	var temp='aa';
		$http({
			method: 'GET',
			url: '/monopoly/createGame'

		}).then(function successCallback(response) {
			//TODO - subscribe
            $scope.game = response.data;
            $scope.gameLink = document.location.host + document.location.pathname + 
            "game/" + $scope.game.id;
            
            $scope.client = wsHelper.createWS('/monopoly/monopoly');
            $scope.client.connect('guest', 'guest', onConnect);

		}, function errorCallback(response) {
			console.log('Error: ' + response.data);
		});
	};
    
    var onConnect = function() {
	//subscribe on all
		$scope.client.subscribe("/topic/updateParticipants", function(message) {
			console.log("New Participant:"+ message.body);
            $scope.players.push(JSON.parse(message.body));
			$scope.count++;
		});

		$scope.client.subscribe("/topic/startGame", function(message) {
			console.log("Game is Started:"+ message.body);
			$scope.$apply(function() { $location.path("/monopoly-field"); });
		});

	};
	


}]);