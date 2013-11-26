/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var RevisionModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return RevisionModel;
});