App.factory('listingFactory',function($http) {
    function getListing(){
        return $http.get('Data/Data.json');
    }
        return{
            getListing:getListing
        }

});
App.factory('agentFactory',function($http){
    function getAgents(){
        return $http.get('Data/Agents.json');
    }
    return {
        getAgents:getAgents
    }
})





