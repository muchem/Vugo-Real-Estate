App.factory('agentFactory',function($http){
    function getAgents(){
        return $http.get('Data/Agents.json');
    }
    return{
        getAgents:getAgents
    }
})