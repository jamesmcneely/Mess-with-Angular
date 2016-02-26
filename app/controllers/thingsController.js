jmDataSharing.controller('ThingsController', ['$scope', 'ShareData', function ($scope, ShareData) {
    //pull data from display factory on load
        $scope.whatWasSaid = ShareData.getData();

}]);