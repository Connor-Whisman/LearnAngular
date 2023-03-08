weather.controller('forecastCtrl', [
    '$scope',
    '$resource',
    'locationSvc',
    function($scope, $resource, locationSvc) {
        $scope.title = 'Forecast Page';

        // $scope.city = locationSvc.city;
        $scope.lat    = locationSvc.lat;
        $scope.lon    = locationSvc.lon;
        $scope.apiKey = locationSvc.apiKey;

        $scope.weatherAPI =
            $resource(`https://api.openweathermap.org/data/2.5/weather`, 
                {callback: 'JSON_CALLBACK'},
                {get: {method: 'JSONP'}}
            );

        $scope.weatherResult = $scope.weatherAPI.get(
            {
                lat: $scope.lat,
                lon: $scope.lon,
                apiKey: $scope.apiKey
            }
        );

        console.log($scope.weatherResult);
    }
])