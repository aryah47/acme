/*global define*/

define([
    'underscore',
    'backbone',
    'models/text',
    'app'
], function (_, Backbone, TextModel, App) {
    'use strict';

    App.TextCollection = Backbone.Collection.extend({
        model: TextModel,
        url : '/api/text'
    });

    return App.TextCollection;
});
