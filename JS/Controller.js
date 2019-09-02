App.controller('main-controller',function($scope, listingFactory,agentFactory){
   $scope.data;
   listingFactory.getListing().then(function(responce){
       $scope.data = responce.data;
   },function(error){
        console.log(error);
   });

agentFactory.getAgents().then(function (responce) {
       $scope.agents = responce.data;
   },function(error){
       console.log(error);
   });

}); 





