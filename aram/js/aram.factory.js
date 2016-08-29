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
				}
			}
		}
}());