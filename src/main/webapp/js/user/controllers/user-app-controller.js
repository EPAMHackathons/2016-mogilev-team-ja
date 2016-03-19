userAppControllers.controller('userAppCtrl', [ '$scope', '$http', 'wsHelper', function($scope, $http, wsHelper) {
        $scope.userName = "ToDo";
        
        $scope.createPlayer = function() {
            console.log("Strt createing player...");
            
            $http({
			method: 'GET',
			url: '/monopoly/createPlayer/' + $scope.userName

		}).then(function successCallback(response) {
			//TODO - subscribe
            /*$scope.game = response.data;
            $scope.gameLink = document.location.host + document.location.pathname + "/createPlayer"
            
            $scope.client = wsHelper.createWS('/monopoly/monopoly', onMessageCallback);
            $scope.client.connect('guest', 'guest', onConnect);*/
        
        console.log('Player is created: ' + response.data);

		}, function errorCallback(response) {
			console.log('Error: ' + response);
		});
            
        };

}]);