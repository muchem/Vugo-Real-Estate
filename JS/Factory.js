App.factory('listingFactory',function($http) {
    function getListing(){
        return $http.get('Data/Data.json');
    }
        return{
            getListing:getListing
        }

})
App.factory('agentFactory',function(){
    function getAgents(){
        return $http.get('Data/Agents.json');
    }
        return{
            getAgents:getAgents
        }
})