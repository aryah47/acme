/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'app'
], function ($, _, Backbone, JST, App) {
    'use strict';

    App.ListView = Backbone.View.extend({
        template: JST['app/scripts/templates/list.hbs']
    });

    return App.ListView;
});
