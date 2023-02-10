var app = angular.module('myApp', ['ngMessages']); // Use array to declare outside dependencies like ngMessages

// $scope is an angular service. Uses dependency injection to pass dynamic data between model and view
// $log is another service with features to log data in a clean way. Instead of console.log
app.controller('appController', function($scope, $log) {
    $scope.default = "New";
    $scope.logData = function() {
        $log.warn($scope.default);
    }
    $scope.logData();

    $scope.titleField = String($scope.default);
});