/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'app'
], function ($, _, Backbone, JST, App) {
    'use strict';

    App.FormView = Backbone.View.extend({
        template: JST['app/scripts/templates/form.hbs']
    });

    return App.FormView;
});
