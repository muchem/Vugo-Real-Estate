App.filter('SearchFilter',function(){
    return function (listing, price, squareFt,bedrooms,bathrooms) {
        let output = [];
        let min = price.min;
        let max = price.max;
        let sizes = squareFt;
        let beds = bedrooms;
        let baths = bathrooms;
        angular.forEach(listing, function (listing) {
            if (listing.price <= max && listing.price >= min 
            && listing.details.squareFt >= sizes && listing.details.bedrooms >= beds
            && listing.details.bathrooms >= baths) {
                output.push(listing);
        }

    });
    return output;
    }
});
