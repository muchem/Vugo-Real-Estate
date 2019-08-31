App.filter('PriceFilter',function(){
    return function(price,listing){
        let output = [];
        let max = price.max;
        let min = price.min;
        angular.forEach(listing, function (listing) {
            if(listing.price <= max && listing.price >= min) {
                output.push(listing);
        }
    });
    return output;
    }
});
 