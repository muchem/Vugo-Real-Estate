App.filter('SearchFilter',function(){
    return function (listing, price, squareFt) {
        let output = [];
        let min = price.min;
        let max = price.max;
        let sizes = squareFt;
        angular.forEach(listing, function (listing) {
            if (listing.price <= max && listing.price >= min && listing.details.squareFt >= sizes) {
                output.push(listing);
        }

    });
    return output;
    }
});
