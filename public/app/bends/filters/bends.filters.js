/**
 * Created by Nikola on 10.5.2015..
 */
angular.module('laravelAndAngular.bends.filter', [])

    .filter('bandsSearch', function() {

        return function(bandsArray, bandsString) {

            if(!bandsString) {
                return bandsArray;
            }

            var results = [];

            bandsString = bandsString.toLowerCase();

            angular.forEach(bandsArray, function(band) {

                if(band.bandName.toLowerCase().indexOf(bandsString) !== -1) {
                    results.push(band);
                }
            });
            return results;
        };
    });


