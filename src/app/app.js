var appMain = angular.module('app', ['ngMessages']); // Use array to declare outside dependencies like ngMessages

// $scope is an angular service. Uses dependency injection to pass dynamic data between model and view
// $log is another service with features to log data in a clean way. Instead of console.log

// Best way to write dependency injection. Minifying will not break because angular will look
// at the strings to see what should be injected into the functions variables. Order of array elements matters
appMain.controller('appController', ['$scope', '$log', function($scope, $log) {
    $scope.default = "Injection v2";
    $scope.logData = function() {
        $log.warn($scope.default);
    }
    $scope.logData();

    $scope.titleField = String($scope.default);

    $scope.interpolationStr = "Angular!";
}]);