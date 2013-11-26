/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var NamespaceModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return NamespaceModel;
});