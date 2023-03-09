weather.controller('homeCtrl', [
    '$scope',
    'locationSvc',
    function($scope, locationSvc) {
        $scope.title = 'Home Page';

        
        $scope.city = locationSvc.city;
        $scope.state = locationSvc.state;
        $scope.country = locationSvc.country;


        $scope.$watch('city', function() {
            locationSvc.city = $scope.city;
        });
        $scope.$watch('state', function() {
            locationSvc.state = $scope.state;
        });
        $scope.$watch('country', function() {
            locationSvc.country = $scope.country;
        });
    }
])