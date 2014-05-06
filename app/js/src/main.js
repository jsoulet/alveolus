require( [
    'angular',
    'app',
    // 'routes'
], function(angular, app/*, routes*/) {
    'use strict';
    angular.element(document).ready(function() {
        angular.bootstrap(document, [app['name']]);
    });
});