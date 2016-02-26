jmDataSharing.factory('ShareData', function() {
    
    var factory = { Data: '' };
    
    return {
        
        getData: function () {
            return factory.Data;
        },
        setData: function (saveData) {
            factory.Data = saveData;
        }
        
    }
    
});