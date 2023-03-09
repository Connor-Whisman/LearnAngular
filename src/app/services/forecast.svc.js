weather.factory('forecastSvc', [
    '$log',
    '$resource',
    'geoSvc',
    'locationSvc',
    function($log, $resource, geoSvc, locationSvc) {
        var service = {};

        var weatherAPI =
            $resource(`https://api.openweathermap.org/data/2.5/weather`, 
                {callback: 'JSON_CALLBACK'},
                {get: {method: 'JSONP'}}
            );

        geoSvc.geoResult.$promise.then(function() {
            var lat = geoSvc.geoResult[0].lat;
            var lon = geoSvc.geoResult[0].lon;

            service.weatherResult = weatherAPI.get(
                {
                    lat: lat,
                    lon: lon,
                    appid: locationSvc.apiKey
                }
            );
            $log.info('Weather Result: ', service.weatherResult);
        });        

        return service;
}])