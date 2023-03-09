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


        var geoAPI =
            $resource(`http://api.openweathermap.org/geo/1.0/direct`, 
                {query: {method: 'get', isArray: true}}
            );
        var geoResult = geoAPI.query(
            {
                q: (`${$scope.city},${$scope.state},${$scope.country}`),
                limit: 1,
                appid: $scope.apiKey
            }
        )
        var weatherAPI =
            $resource(`https://api.openweathermap.org/data/2.5/weather`, 
                {callback: 'JSON_CALLBACK'},
                {get: {method: 'JSONP'}}
            );


        geoResult.$promise.then(function() {
            var lat = geoResult[0].lat;
            var lon = geoResult[0].lon;

            var weatherResult = weatherAPI.get(
                {
                    lat: lat,
                    lon: lon,
                    appid: $scope.apiKey
                }
            );

            $scope.weatherResult = weatherResult;
            console.log(weatherResult);
        });


        $scope.convertTemp = function(kelvin) {
            return ((kelvin - 273.15) * 1.8 + 32).toFixed(1)
        }

        $scope.convertDate = function(date) {
            return new Date(date * 1000)
        }
    }
])