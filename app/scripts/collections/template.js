/*global define*/

define([
    'underscore',
    'backbone',
    'models/template',
    'app'
], function (_, Backbone, TemplateModel, App) {
    'use strict';

    App.TemplateCollection = Backbone.Collection.extend({
        model: TemplateModel
    });

    return App.TemplateCollection;
});
