/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'app'
], function ($, _, Backbone, JST, App) {
    'use strict';

    App.RedirectView = Backbone.View.extend({
        template: JST['app/scripts/templates/redirect.hbs']
    });

    return App.RedirectView;
});
