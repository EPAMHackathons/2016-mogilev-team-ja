appServices.factory('cardService', function ($http) {

	return {
		getCards: function(getCardsCallback) {
			$http.get('/monopoly/json/cards.json').then(function(result) {
				var cardsObj = result.data;
				var fieldCards = cardsObj.field;
				getCardsCallback(fieldCards);
			});
		}
	};

});
