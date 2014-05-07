define('services',['angular'], function (angular) {
    

  /* Services */

  // Demonstrate how to register services
  // In this case it is a simple value service.
    angular.module('alveolus.services', [])
        .value('version', '0.1');
});
define('filters',['angular', 'services'], function (angular, services) {
    

    /* Filters */
  
    angular.module('alveolus.filters', ['alveolus.services']);
});
define('directives',['angular', 'services'], function(angular, services) {
    

  /* Directives */

    angular.module('alveolus.directives', ['alveolus.services']);
});
define('controllers',['angular', 'services'], function (angular) {
    

    /* Controllers */

    return angular.module('alveolus.controllers', ['alveolus.services']);
});
require.config({
    paths: {
        angular: ['//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min'],
        ngRoute: ['//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.min'],
        jquery: ['//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min'],
        bootstrap:['//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min']
    },
    shim: {
        angular: {exports: "angular"},
        ngRoute: {
            exports: "ngRoute",
            deps: ['angular']
        },
        jquery: {exports: "jquery"},
        bootstrap: {
            exports: "bootstrap",
            deps: ['jquery']
        }
    }
});

define('app',[
    'jquery',
    'angular',
    'filters',
    'services',
    'directives',
    'controllers',
    'ngRoute',
    'bootstrap',
    ], function ($, angular, filters, services, directives, controllers) {
        
        console.log($('html'));
        // Declare app level module which depends on filters, and services

        return angular.module('alveolus', [
            'ngRoute',
            'alveolus.controllers',
            'alveolus.filters',
            'alveolus.services',
            'alveolus.directives'
        ]);
});


require( [
    'jquery',
    'angular',
    'app',
    // 'routes'
], function($, angular, app/*, routes*/) {
    
    angular.element(document).ready(function() {
        angular.bootstrap(document, [app['name']]);
    });
});
define("main", function(){});

