var app = angular.module('app', ['ngMessages', 'ngRoute']); // Use array to declare outside dependencies like ngMessages

app.config(function($routeProvider) {
    $routeProvider
    .when('/main', {
        templateUrl: 'templates/main.html',
        controller: 'appController'
    })
    .when('/new', {
        templateUrl: 'templates/new.html',
        controller: 'newController'
    })
    .when('/new/:var', {
        templateUrl: 'templates/new.html',
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

// $scope is an angular service. Uses dependency injection to pass dynamic data between model and view
// $log is another service with features to log data in a clean way. Instead of console.log

// Best way to write dependency injection. Minifying will not break because angular will look
// at the strings to see what should be injected into the functions variables. Order of array elements matters
app.controller('appController', ['$scope', '$log', 'nameSvc', function($scope, $log, nameSvc) {

    $scope.default = "Injection v2";
    $scope.logData = function() {
        $log.warn($scope.default);
    }
    $scope.logData();

    $scope.titleField = String($scope.default);
    $scope.interpolationStr = "Angular!";

    $log.info(nameSvc.name);
    $log.info(nameSvc.nameLen());
    
}]);


app.controller('httpController', ['$scope', '$log', '$http', function($scope, $log, $http) {    
    const URL   = 'http://localhost:8080';

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

    // $http.post(URL)
    //     .success(function(response) {
    //         $log.log(response);
    //     })

}]);

app.controller('newController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {    
    $scope.var = 'New: ' + ($routeParams.var || 'default');
}]);


