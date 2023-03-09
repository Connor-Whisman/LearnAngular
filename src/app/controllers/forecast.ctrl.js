weather.controller('forecastCtrl', [
    '$scope',
    '$resource',
    'locationSvc',
    'geoSvc',
    'forecastSvc',
    function($scope, $resource, locationSvc, geoSvc, forecastSvc) {

        $scope.forecastSvc  = forecastSvc;

        $scope.title = 'Forecast';

        $scope.city     = locationSvc.city;
        $scope.state    = locationSvc.state;



        $scope.convertTemp = function(kelvin) {
            return ((kelvin - 273.15) * 1.8 + 32).toFixed(1)
        }

        $scope.convertDate = function(date) {
            return new Date(date * 1000);
        }
    }
])