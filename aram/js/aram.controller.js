(function() {
	angular.module("aram")
		.controller("AramController", [
			"$scope",
			"AramFactory",
			AramControllerFunction
		])

		function AramControllerFunction($scope, AramFactory) {
			$scope.getUser = function() {
				$("#loading").html("Loading...");
				var name = $scope.input;
				AramFactory.user(name)
				.success(function(data) {
					$("#loading").html("");
					$scope.user = data;
				})
				.error(function() {
					$("#loading").html("");
					alert("Cannot find summoner " + name)
				})
			}
		}
}());