App.controller('main-controller',function($scope, listingFactory,agentFactory){
   $scope.data;
   $scope.price = {
       min: 0,
       max:10000000
   }
   $scope.squareFt = 900;
   $scope.bedrooms = 2;
    $scope.bathrooms = 1;
   listingFactory.getListing().then(function(responce){
       $scope.data = responce.data;
   },function(error){
        console.log(error);
   });

agentFactory.getAgents().then(function (responce) {
       $scope.agents = responce.data;
   }
   });

}); 





