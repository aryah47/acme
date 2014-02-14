/*global define*/

define([
    'underscore',
    'backbone',
    'models/namespace',
    'vent'
], function (_, Backbone, NamespaceModel, vent) {
    'use strict';

    return Backbone.Collection.extend({
        model: NamespaceModel,
        url: '/api/namespace'
    });

});
