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
  .directive('history', function() {
    return {
      restrict: 'E',
      templateUrl: 'aram/templates/history.html'
    };
  })
}());
