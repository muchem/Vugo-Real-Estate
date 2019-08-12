App.factory('listingFactory',function($http) {
    function getListing(){
        return $http.get('Data/Data.json');
    }
        return{
            getListing:getListing
        }

})