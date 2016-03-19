userAppControllers.controller('userAppCtrl', [ '$scope', '$http', 'wsHelper', function($scope, $http, wsHelper) {
        $scope.gameIsStarted = false;
		$scope.playerIsCreated = false;
        
        $scope.userName = "Input Name";
		$scope.user = {};
        
        $scope.createPlayer = function() {
            console.log("Strt createing player...");
            
            $http({
			method: 'GET',
			url: '/monopoly/createPlayer/' + $scope.userName

		}).then(function successCallback(response) {
        
			console.log('Player is created: ' + response.data);
			
			$scope.user = response.data;
		           
            
			
			$scope.playerIsCreated = true;
		

		}, function errorCallback(response) {
			console.log('Error: ' + response);
		});

        };

		var onConnect = function() {

			$scope.client.subscribe("/topic/startGame", function(message) {
				console.log("Game is Started For user:"+ message.body);
				$scope.gameIsStarted = true;
				$scope.$apply();
			});
		};
		
		var init = function() {

			$scope.client = wsHelper.createWS('/monopoly/monopoly');
            $scope.client.connect('guest', 'guest', onConnect);
            
			
			
		};
		
		init();
		
		$scope.throwDice = function() {
			var stompClient = $scope.client.getClient();
			stompClient.send("/topic/dice", {}, message);
		};

}]);