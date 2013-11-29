/*global define*/

define([
    'underscore',
    'backbone',
    'app'
], function (_, Backbone, App) {
    'use strict';

    App.RevisionModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return App.RevisionModel;
});
