let app = new angular.module('weatherForecastingApp', [])

app.controller('mainCtrl', function($scope){
    $scope.title = 'Weather Forecasting'
    $scope.company = 'Bajai SZC Türr István Technikum'
    $scope.author = '2/14.SZFT Szoftverfejlesztő'
    $scope.newdata = {}

    $scope.data = angular.fromJson(window.localStorage.getItem('forecast'))
    if ($scope.data == null) $scope.data == []

    $scope.addWeather = function(){
        if($scope.newdata.minimum == null || $scope.newdata.maximum == null || $scope.newdata.weather == null){
            $scope.message = "Some data is either missing or invalid!"
        }else{
            $scope.data.push()
        }
    }
    
})