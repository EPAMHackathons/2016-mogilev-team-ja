appServices.factory('wsHelper', function () {

	var createWS = function(endpointStr, onMessageCallback) {

		var socket = new SockJS(endpointStr);
		var client = Stomp.over(socket);

		socket.onopen = function(e) {
			console.log('connection open');
			client.send('HELLO SERVER');
			console.log("message", e.data);
		};

		return {
			send: function (message) {
				if (angular.isString(message)) {
					client.send(message);
				}
				else if (angular.isObject(message)) {
					client.send(JSON.stringify(message));
				}
			},
			subscribe : function(topicStr, onTopicMessageCallback) { 
				client.subscribe(topicStr, onTopicMessageCallback);
			},
			connect : function(name, pass, onConnect) { 
				client.connect(name, pass, onConnect);
			}
		};

	};

	return {
		createWS : createWS 
	};		

});
