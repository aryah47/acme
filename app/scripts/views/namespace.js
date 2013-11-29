/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'app'
], function ($, _, Backbone, JST, App) {
    'use strict';

    App.NamespaceView = Backbone.View.extend({
        template: JST['app/scripts/templates/namespace.hbs']
    });

    return App.NamespaceView;
});
