 // Use array to declare outside dependencies like ngMessages

app.config(function($routeProvider) {
    $routeProvider
    .when('/main', {
        templateUrl: '../templates/main.html',
        controller: 'appController'
    })
    .when('/new', {
        templateUrl: '../templates/new.html',
        controller: 'newController'
    })
    .when('/new/:var', {
        templateUrl: '../templates/new.html',
        controller: 'newController'
    })
})

app.service('nameSvc', function() {
    var self = this;

    this.name = 'default name';
    this.nameLen = function() {
        return self.name.length;
    };
});

app.controller('httpController', ['$scope', '$log', '$http', function($scope, $log, $http) {    
    const URL   = 'http://localhost:8080/';

    $http.get(URL)
        .then(function(response) {
                $scope.response = response;
            }, function(error) {
                $log.error('ERROR');
            }
        )
    $scope.showDataVar = false;
    $scope.showData = function() {
        $scope.showDataVar = !$scope.showDataVar;
    }

    $scope.addRow = function() {
        var object  = {
            "obj": {"id": 4, "val": 44}
        }
        $http.post({
            method: 'POST',
            url: URL,
            data: JSON.stringify(object),
            headers: JSON.stringify({
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            })
        }).then(function(response) {
                $log.log(response.data);
            });

}}]);

app.controller('newController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {    
    $scope.var = 'New: ' + ($routeParams.var || 'default');
}]);


app.directive('result', function() {
    return {
        restrict: 'AEC', // A = attribute, E = element, c = class
        templateUrl: '../directives/result.html',
        // scope: {
        //     object: "@"
        // }
    }
});
