/*global define*/

define([
    'underscore',
    'backbone',
    'models/namespace',
    'app'
], function (_, Backbone, NamespaceModel, App) {
    'use strict';

    App.NamespaceCollection = Backbone.Collection.extend({
        model: NamespaceModel
    });

    return App.NamespaceCollection;
});
