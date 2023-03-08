weather.controller('forecastCtrl', [
    '$scope',
    '$resource',
    'locationSvc',
    function($scope, $resource, locationSvc) {
        $scope.title = 'Forecast Page';

        $scope.city     = locationSvc.city;
        $scope.state    = locationSvc.state;
        $scope.country  = locationSvc.country;

        $scope.lat      = locationSvc.lat;
        $scope.lon      = locationSvc.lon;
        
        $scope.apiKey   = locationSvc.apiKey;


        $scope.geoAPI =
            $resource(`http://api.openweathermap.org/geo/1.0/direct`, 
                // {query: {method: 'get', isArray: true}}
                {callback: 'JSON_CALLBACK'},
                {get: {method: 'GET'}}
            );
        $scope.geoResult = $scope.geoAPI.get(
            {
                q: ($scope.city, $scope.state, $scope.country),
                limit: 1,
                appid: $scope.apiKey
            }
        );
        
        console.log($scope.geoResult);

        // $scope.weatherAPI =
        //     $resource(`https://api.openweathermap.org/data/2.5/weather`, 
        //         {callback: 'JSON_CALLBACK'},
        //         {get: {method: 'JSONP'}}
        //     );

        // $scope.weatherResult = $scope.weatherAPI.get(
        //     {
        //         lat: $scope.geoResult.lat,
        //         lon: $scope.geoResult.lon,
        //         appid: $scope.apiKey
        //     }
        // );

        $scope.convert = function(kelvin) {
            return ((kelvin - 273.15) * 1.8 + 32).toFixed(1)
        }
    }
])