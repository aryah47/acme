/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'app'
], function ($, _, Backbone, JST, App) {
    'use strict';

    App.TemplateView = Backbone.View.extend({
        template: JST['app/scripts/templates/template.hbs']
    });

    return App.TemplateView;
});
