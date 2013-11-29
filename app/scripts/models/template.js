/*global define*/

define([
    'underscore',
    'backbone',
    'app'
], function (_, Backbone, App) {
    'use strict';

    App.TemplateModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return App.TemplateModel;
});
