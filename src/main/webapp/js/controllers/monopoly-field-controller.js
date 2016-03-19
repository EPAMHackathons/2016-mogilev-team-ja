'use strict';


appControllers.controller('monopolyFieldController', [ '$scope', 'wsHelper', function($scope, wsHelper) {
	$scope.name = "";
	$scope.messages = new Array();
	$scope.participants = new Array();
	
	$scope.cards = new Array
	$scope.cards.push({name: 'card1'}, {name: 'card2'});

	/*var onMessageCallback = function (event) {
		console.log('message: ', event.data);

		$scope.client.subscribe("/app/participants", function(message) {
			console.log("New Participant:"+ message.body);
			$scope.participants = JSON.parse(message.body);
		});
	
	};
	
	var onConnect = function() {
		$scope.client.subscribe("/topic/message-updates", function(message) {
			console.log("New Message:"+ message.body);
			$scope.messages.push(JSON.parse(message.body));
		});
	};

	//2016-mogilev-team-ja, angular-ws
	$scope.client = wsHelper.createWS('/2016-mogilev-team-ja/monopoly', onMessageCallback);
	$scope.client.connect('guest', 'guest', onConnect);

	$scope.sendMessage = function() {
		if($scope.message == '') {
			return;
		}
		$scope.client.send('/app/newmessage', {}, $scope.message);
		$scope.message = '';
	};*/

} ]);