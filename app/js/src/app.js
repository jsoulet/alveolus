define([
    'angular',
    'filters',
    'services',
    'directives',
    'controllers',
    'angularRoute',
    ], function (angular, filters, services, directives, controllers) {
        'use strict';

        // Declare app level module which depends on filters, and services

        return angular.module('alveolus', [
            'ngRoute',
            'alveolus.controllers',
            'alveolus.filters',
            'alveolus.services',
            'alveolus.directives'
        ]);
});