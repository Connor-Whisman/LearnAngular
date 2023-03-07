weather.controller('forecastCtrl', [
    '$scope',
    '$resource',
    'locationSvc',
    function($scope, $resource, locationSvc) {
        $scope.title = 'Forecast Page';

        // $scope.city = locationSvc.city;
        $scope.lat  = locationSvc.lat;
        $scope.lon  = locationSvc.lon;

        $scope.weatherAPI =
            $resource(`https://api.openweathermap.org/data/2.5/weather?lat=${$scope.lat}&lon=${$scope.lon}&appid=${locationSvc.apiKey}`, 
                {callback: 'JSON_CALLBACK'},
                {get: {method: 'JSONP'}}
            );

        $scope.weatherResult = $scope.weatherAPI.get(
            {
                lat: $scope.lat,
                lon: $scope.lon,
                
            }
        );

        console.log($scope.weatherResult);
    }
])