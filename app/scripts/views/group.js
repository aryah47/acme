/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'app'
], function ($, _, Backbone, JST, App) {
    'use strict';

    App.GroupView = Backbone.View.extend({
        template: JST['app/scripts/templates/group.hbs']
    });

    return App.GroupView;
});
