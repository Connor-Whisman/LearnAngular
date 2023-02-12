var appMain = angular.module('app', ['ngMessages']); // Use array to declare outside dependencies like ngMessages

// $scope is an angular service. Uses dependency injection to pass dynamic data between model and view
// $log is another service with features to log data in a clean way. Instead of console.log

// Best way to write dependency injection. Minifying will not break because angular will look
// at the strings to see what should be injected into the functions variables. Order of array elements matters
appMain.controller('appController', ['$scope', '$log', '$http', function($scope, $log, $http) {
    $scope.default = "Injection v2";
    $scope.logData = function() {
        $log.warn($scope.default);
    }
    $scope.logData();

    
    $scope.titleField = String($scope.default);
    $scope.interpolationStr = "Angular!";

    
    $http.get('http://localhost:8080')
    .then(function(response) {
        $scope.data = response;
    }, function(error) {
        console.log('error');
    })

    
    $scope.showDataVar = false;
    $scope.showData = function() {
        $scope.showDataVar = !$scope.showDataVar;
    }

}]);


appMain.controller('httpController', ['$scope', '$log', function($scope, $log) {    

}]);