/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'app'
], function ($, _, Backbone, JST, App) {
    'use strict';

    App.UserView = Backbone.View.extend({
        template: JST['app/scripts/templates/user.hbs']
    });

    return App.UserView;
});
