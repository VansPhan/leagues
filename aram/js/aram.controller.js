(function() {
	angular.module("aram")
		.controller("AramController", [
			"$scope",
			"AramFactory",
			AramControllerFunction
		])

		function AramControllerFunction($scope, AramFactory) {
			$scope.getUser = function() {
				var name = $scope.input;
				AramFactory.user(name)
				.success(function(data) {
					$scope.user = data;
				})
			}
		}
}());