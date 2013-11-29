/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'app'
], function ($, _, Backbone, JST, App) {
    'use strict';

    App.RootView = Backbone.View.extend({
        el: '#all',
        template: JST['app/scripts/templates/root.hbs']
    });

    return App.RootView;
});
