weather.controller('homeCtrl', [
    '$scope',
    'locationSvc',
    function($scope, locationSvc) {
        $scope.title = 'Home Page';

        $scope.lat = locationSvc.lat;
        $scope.$watch('lat', function() {
            locationSvc.lat = $scope.lat;
        })
    }
])