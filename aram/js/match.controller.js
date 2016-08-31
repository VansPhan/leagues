(function() {
	angular.module("aram")
		.controller("MatchController", [
			"$scope",
			"AramFactory",
			MatchControllerFunction
		])

		function MatchControllerFunction($scope, AramFactory) {
			$scope.blueTeam = [];
			$scope.redTeam = [];
			$scope.getMatch = function(id) {
				AramFactory.match(id)
				.success(function(data) {
					$scope.match = data;
					angular.forEach($scope.match.participants, function(game, id) {
						angular.forEach($scope.champions, function(val, key) {
							if (game.championId == key) {
								game.championId = val.image.full
							}
						})
						if (game.teamId == 100) {
							$scope.blueTeam.push(game)
						}
						else {
							$scope.redTeam.push(game)
						}
					})
				})
				.error(function() {
					alert("Cannot find match");
				})
			}
		}
}());