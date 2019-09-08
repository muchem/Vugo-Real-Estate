App.filter('PriceFilter',function(){
    return function (listing, price){
        let output = [];
        let min = price.min;
        let max = price.max;
        angular.forEach(listing, function (listing) {
            if(listing.price <= max && listing.price >= min) {
                output.push(listing);
        }
    });
    return output;
    }
});
 