/*global define*/

define([
    'underscore',
    'backbone',
    'app'
], function (_, Backbone, App) {
    'use strict';

    App.RedirectModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return App.RedirectModel;
});
