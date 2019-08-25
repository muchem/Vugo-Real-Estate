App.controller('AgentCtrl',function($scope){
   agentFactory.getAgents().then(function (responce) {
        $scope.agents = responce.data;
    },function (error) {
        console.log(error);
    })
})