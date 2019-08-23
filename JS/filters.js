//Price Filter
App.filter('PriceFilter', function () {
    return function (listing, price) {
        let results = [];
        let max = price.max;
        let min = price.min;

        angular.forEach(listing, function (listing) {
            if (listing.price >= min && listing.price <= max) {
                results.push(listing);
            }

        });

        return results;

    }
})


