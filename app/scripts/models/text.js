/*global define*/

define([
    'underscore',
    'backbone',
    'app'
], function (_, Backbone, App) {
    'use strict';

    App.TextModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return App.TextModel;
});
