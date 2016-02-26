jmDataSharing.controller('StuffController', ['$scope', 'ShareData', function ($scope, ShareData) {
    //ensure data is saved even when moving across controllers
    var Data = ShareData.getData();
    
    //this ensures the bound data repopulates from the factory
    $scope.saySomething = Data;
    
    //allows automatic updating of the saved data via ng-change
    $scope.ctl = function () {
        
        Data = $scope.saySomething;
        
        ShareData.setData(Data);
  
    };

}]);