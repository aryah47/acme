/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    //root app namespace
    //see vent.js for definition
    //putting anything else here causes circular dependencies

    var App = {
        init : null,
        vent : _.extend({}, Backbone.Events),
        api : {}
    };

    return App;
});
