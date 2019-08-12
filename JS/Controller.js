App.controller('main-controller',function($scope, listingFactory){
   $scope.data;
   $scope.price = {
       min:100,
       max:1000000
   }
   listingFactory.getListing().then(function(responce){
       $scope.data = responce.data;
   },function(error){
        console.log(error);
   });
}); 