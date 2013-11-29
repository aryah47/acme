/*global define*/

define([
    'underscore',
    'backbone',
    'app'
], function (_, Backbone, App) {
    'use strict';

    App.UserModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return App.UserModel;
});
