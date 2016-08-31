(function() {
  angular.module('aram')
  .directive('user', function() {
    return {
      restrict: 'E',
      templateUrl: 'assets/templates/user.html'
    };
  })
  .directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'assets/templates/navbar.html'
    };
  })
  .directive('match', function() {
    return {
      restrict: 'E',
      templateUrl: 'assets/templates/match.html'
    };
  })
  .directive('landing', function() {
    return {
      restrict: 'E',
      templateUrl: 'assets/templates/landing.html'
    };
  })
  .directive('history', function() {
    return {
      restrict: 'E',
      templateUrl: 'assets/templates/history.html'
    };
  })
}());
