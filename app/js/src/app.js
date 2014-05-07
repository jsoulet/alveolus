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

define([
    'jquery',
    'angular',
    'filters',
    'services',
    'directives',
    'controllers',
    'ngRoute',
    'bootstrap',
    ], function ($, angular, filters, services, directives, controllers) {
        'use strict';
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