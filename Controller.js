App.controller('main-controller',function($scope, listingFactory){
   $scope.data;
   listingFactory.getListing().then(function(responce){
       $scope.data = responce.data;
   },function(error){
        console.log(error);
   });
}); 