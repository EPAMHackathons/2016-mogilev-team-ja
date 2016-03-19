appServices.factory('cardService', function ($http) {

	return {
		getFieldCells: function(controllerCallback) {
			$http.get('/monopoly/json/field.json').then(function(result) {
				var obj = result.data;
				var cells = obj.field;
				controllerCallback(cells);
			});
		},

		getCards: function(controllerCallback) {
			$http.get('/monopoly/json/cards.json').then(function(result) {
				var obj = result.data;
				var cards = obj.cards;
				controllerCallback(cards);
			});
		}
	};

});
