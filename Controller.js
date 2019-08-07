App.controller('main-controller',function($scope, listingFactory){
   $scope.data;
   $scope.message = "hello";
   listingFactory.getListing().then(function(responce){
       $scope.data = responce.data;
   },function(error){
        console.log(error);
   });
}); 