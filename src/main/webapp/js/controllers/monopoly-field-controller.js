'use strict';


appControllers.controller('monopolyFieldController', [ '$scope', 'wsHelper', 'cardService',
function($scope, wsHelper, cardService) {
	$scope.name = "";
	$scope.messages = new Array();
	$scope.participants = new Array();

	var getCardsCallback = function(cards) {
		$scope.cards = cards;
	};
	cardService.getCards(getCardsCallback);

	/*var onMessageCallback = function (event) {
		console.log('message: ', event.data);

		$scope.client.subscribe("/app/participants", function(message) {
			console.log("New Participant:"+ message.body);
			$scope.participants = JSON.parse(message.body);
		});
	
	};
	//for gamer
	var onConnect = function() {
	//subscribe on all
		$scope.client.subscribe("/topic/message-updates", function(message) {
			console.log("New Message:"+ message.body);
			$scope.messages.push(JSON.parse(message.body));
		});
		//send Message to Server, request place
		
	};

	//2016-mogilev-team-ja, angular-ws
	$scope.client = wsHelper.createWS('/monopoly/monopoly', onMessageCallback);
	$scope.client.connect('guest', 'guest', onConnect);

	$scope.sendMessage = function() {
		if($scope.message == '') {
			return;
		}
		$scope.client.send('/app/newmessage', {}, $scope.message);
		$scope.message = '';
	};*/

} ]);