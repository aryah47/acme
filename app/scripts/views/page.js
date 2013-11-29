/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'app'
], function ($, _, Backbone, JST, App) {
    'use strict';

    App.PageView = Backbone.View.extend({
        el: '#center',
        template: JST['app/scripts/templates/page.hbs']
    });

    return App.PageView;
});
