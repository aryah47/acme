/*global define*/

define([
    'underscore',
    'backbone',
    'models/text',
    'app'
], function (_, Backbone, TextModel, App) {
    'use strict';

    App.TextCollection = Backbone.Collection.extend({
        model: TextModel
    });

    return App.TextCollection;
});
