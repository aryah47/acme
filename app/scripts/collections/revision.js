/*global define*/

define([
    'underscore',
    'backbone',
    'models/revision',
    'app'
], function (_, Backbone, RevisionModel, App) {
    'use strict';

    App.RevisionCollection = Backbone.Collection.extend({
        model: RevisionModel
    });

    return App.RevisionCollection;
});
