weather.factory('geoSvc', [
    '$log',
    '$resource',
    'locationSvc',
    function($log, $resource, locationSvc) {
        var service = {};

        var geoAPI =
            $resource(`http://api.openweathermap.org/geo/1.0/direct`, 
                {query: {method: 'get', isArray: true}}
            );

        service.geoResult = geoAPI.query(
            {
                q: (`${locationSvc.city},${locationSvc.state},${locationSvc.country}`),
                limit: 1,
                appid: locationSvc.apiKey
            }
        );
        $log.info('Geo Location Result: ', service.geoResult);

        return service;
}])