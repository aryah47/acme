/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'app'
], function ($, _, Backbone, JST, App) {
    'use strict';

    App.RevisionView = Backbone.View.extend({
        template: JST['app/scripts/templates/revision.hbs']
    });

    return App.RevisionView;
});
