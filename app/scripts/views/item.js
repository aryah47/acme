/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'app'
], function ($, _, Backbone, JST, App) {
    'use strict';

    App.ItemView = Backbone.View.extend({
        template: JST['app/scripts/templates/item.hbs']
    });

    return App.ItemView;
});
