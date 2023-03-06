weather.controller('forecastCtrl', [
    '$scope',
    '$resource',
    'forecastSvc',
    function($scope, $resource, forecastSvc) {
        $scope.title = 'Forecast Page';

        $scope.city = forecastSvc.city;
        $scope.lat  = '';
        $scope.lon  = '';

        $scope.weatherAPI =
            $resource(`https://api.openweathermap.org/data/2.5/weather?lat=${$scope.lat}&lon=${$scope.lon}&appid=${forecastSvc.apiKey}`, 
                {callback: 'JSON_CALLBACK'},
                {get: {method: 'JSONP'}}
            )
    }
])