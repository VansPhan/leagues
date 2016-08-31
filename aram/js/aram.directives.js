(function() {
  angular.module('aram')
  .directive('user', function() {
    return {
      restrict: 'E',
      templateUrl: 'aram/templates/user.html'
    };
  })
  .directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'aram/templates/navbar.html'
    };
  })
  .directive('match', function() {
    return {
      restrict: 'E',
      templateUrl: 'aram/templates/match.html'
    };
  })
  .directive('history', function() {
    return {
      restrict: 'E',
      templateUrl: 'aram/templates/history.html'
    };
  })
}());
