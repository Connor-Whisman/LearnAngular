app.controller('appController', [
    '$scope',
    '$log',
    
    function($scope, $log) {

    $scope.default = "Injection";
    $scope.logData = function() {
        $log.warn($scope.default);
    }
    $scope.logData();

    $scope.titleField = String($scope.default);
    $scope.interpolationStr = "Home";
    
}]);