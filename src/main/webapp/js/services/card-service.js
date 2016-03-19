appServices.factory('cardService', function ($http) {

	var fieldCards = [];
	//!!!sync

	function getFileContent (path) {
		return $http.get(path);
	}

	$http.get('/monopoly/json/cards.json').then(function(result) {
		var cardsObj = result.data;
		fieldCards = cardsObj.field;
	});

	return {
		getCards: function() {
			return fieldCards;
		}
	};

});
