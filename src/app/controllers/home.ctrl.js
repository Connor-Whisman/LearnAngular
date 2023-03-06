weather.controller('homeCtrl', [
    '$scope',
    'forecastSvc',
    function($scope, forecastSvc) {
        $scope.title = 'Home Page';

        $scope.city = forecastSvc.city;
        $scope.$watch('city', function() {
            forecastSvc.city = $scope.city;
        })
    }
])