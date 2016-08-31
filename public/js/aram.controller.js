(function() {
	angular.module("aram")
		.controller("AramController", [
			"$scope",
			"AramFactory",
			AramControllerFunction
		])

		function AramControllerFunction($scope, AramFactory) {
			$scope.landingSwitch = true;
			$scope.toggleLanding = function() {
				$scope.landingSwitch = false;
			}
			$scope.matchSwitch = false;
			$scope.toggleMatch = function() {
				$scope.matchSwitch = true;
			}
			$scope.historySwitch = true;
			$scope.toggleHistory = function() {
				$scope.historySwitch = !$scope.historySwitch;
				$scope.matchSwitch = false;
			}
			AramFactory.items().success(function(data) {
				$scope.items = data.data;
			})
			.error(function() {
				console.log("Cannot find items");
			})
			AramFactory.champions().success(function(data) {
				$scope.champions = data.data;
			})
			.error(function() {
				console.log("Cannot find champions");
			})
			AramFactory.spells().success(function(data) {
				$scope.spells = data.data;
			})
			.error(function() {
				console.log("Cannot find spells");
			})
			$scope.getUser = function() {
				$("#loading").html("Loading...");
				var name = $scope.input;
				AramFactory.user(name)
				.success(function(data) {
					console.log(data)
					$("#loading").html("");
					$scope.user = data;
					angular.forEach($scope.user, function(val, key) {
						$scope.id = val.id;
					})
					$scope.getHistory();
				})
				.error(function() {
					$("#loading").html("");
					alert("Cannot find summoner " + name);
				})
			}
			$scope.getHistory = function() {
				AramFactory.history($scope.id)
				.success(function(data) {
					$scope.games = data.games;
					angular.forEach($scope.games, function(game, id) {
						angular.forEach($scope.champions, function(val, key) {
							if (game.championId == key) {
								game.championId = val.image.full
							}
						})
					})
					angular.forEach($scope.games, function(game, id) {
						angular.forEach($scope.spells, function(val, key) {
							if (game.spell1 == key) {
								game.spell1 = val.image.full
							}
							if (game.spell2 == key) {
								game.spell2 = val.image.full
							}
						})
					})
				})
				.error(function() {
					console.log("Cannot find history..");
				})
			}
		}
}());