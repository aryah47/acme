/*global define*/

define([
    'underscore',
    'backbone',
    'app'
], function (_, Backbone, App) {
    'use strict';

    App.NamespaceModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return App.NamespaceModel;
});
