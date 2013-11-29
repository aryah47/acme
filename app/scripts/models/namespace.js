/*global define*/

define([
    'underscore',
    'backbone',
    'app'
], function (_, Backbone, App) {
    'use strict';

    App.NamespaceModel = Backbone.Model.extend({
        idAttribute: 'path',
        defaults: {
        }
    });

    return App.NamespaceModel;
});
