/*global define*/

define([
    'underscore',
    'backbone',
    'models/redirect',
    'app'
], function (_, Backbone, RedirectModel, App) {
    'use strict';

    App.RedirectCollection = Backbone.Collection.extend({
        model: RedirectModel
    });

    return App.RedirectCollection;
});
