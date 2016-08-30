(function() {
	angular.module('aram')
		.factory("AramFactory", [
			'$http',
			AramFactoryFunction
		])

		function AramFactoryFunction($http) {
			return {
				user: function(name) {
					return $http({
						url: "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + name + "?api_key=d4095fd1-ec30-4403-8db7-fdacebef9b17",
						method: "GET"
					})
				},
				history: function(id) {
					return $http({
						url: "https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/" + id + "/recent?api_key=d4095fd1-ec30-4403-8db7-fdacebef9b17",
						method: "GET"
					})
				},
				champions: function() {
					return $http({
						url: "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?dataById=true&champData=image&api_key=d4095fd1-ec30-4403-8db7-fdacebef9b17",
						method: "GET"
					})
				},
				spells: function() {
					return $http({
						url: "https://global.api.pvp.net/api/lol/static-data/na/v1.2/summoner-spell?dataById=true&spellData=image&api_key=d4095fd1-ec30-4403-8db7-fdacebef9b17",
						method: "GET"
					})
				},
				items: function() {
					return $http({
						url: "https://global.api.pvp.net/api/lol/static-data/na/v1.2/item?itemListData=image&api_key=d4095fd1-ec30-4403-8db7-fdacebef9b17",
						method: "GET"
					})
				}
			}
		}
}());