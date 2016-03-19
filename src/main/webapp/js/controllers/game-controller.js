'use strict';

appControllers.controller('gameController', [ '$scope', '$http', 'wsHelper', 
function($scope, $http, wsHelper) {

	$scope.gameLink = 'TEst Undefined';
    $scope.game = {};
    $scope.players = [];

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
            "createPlayer/" + $scope.game.id;
            
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
            $scope.players.add(JSON.parse(message.body));
			//$scope.messages.push(JSON.parse(message.body));
		});
		//send Message to Server, request place
		
	};

	//2016-mogilev-team-ja, angular-ws
	


}]);