/*global define*/

define([
    'underscore',
    'backbone',
    'models/revision',
    'app'
], function (_, Backbone, RevisionModel, App) {
    'use strict';

    App.RevisionCollection = Backbone.Collection.extend({
        model: RevisionModel,
        url: '/api/revision'
    });

    return App.RevisionCollection;
});
