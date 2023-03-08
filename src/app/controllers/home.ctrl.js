weather.controller('homeCtrl', [
    '$scope',
    'locationSvc',
    function($scope, locationSvc) {
        $scope.title = 'Home Page';

        $scope.lat = locationSvc.lat;
        $scope.lon = locationSvc.lon;

        $scope.$watch('lat', function() {
            locationSvc.lat = $scope.lat;
        })
        $scope.$watch('lon', function() {
            locationSvc.lon = $scope.lon;
        })
        
    }
])