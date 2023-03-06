 // Use array to declare outside dependencies like ngMessages
var app = angular.module('app', [
    'ngMessages',
    'ngRoute'
]);

app.config(function($routeProvider) {
    $routeProvider
    .when('/main', {
        templateUrl: '../test/templates/main.html',
        controller: 'appController'
    })
    .when('/new', {
        templateUrl: '../test/templates/new.html',
        controller: 'newController'
    })
    .when('/new/:var', {
        templateUrl: '../test/templates/new.html',
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

app.controller('appController', ['$scope', '$log', function($scope, $log) {

    $scope.default = 'Warning Test!';

    $scope.logData = function() {
        $log.warn($scope.default);
    }
    $scope.logData();

    $scope.interpolationStr = "Home";
    
}]);

app.controller('httpController', ['$scope', '$log', '$http', function($scope, $log, $http) {    
    const URL   = 'http://localhost:8080/';

    $http.get(URL)
        .then(function(response) {
                $scope.response = response.data;
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
        templateUrl: '../test/directives/result.html',
        // scope: {
        //     object: "@"
        // }
    }
});
