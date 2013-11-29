/*global define*/

define([
    'underscore',
    'backbone',
    'app'
], function (_, Backbone, App) {
    'use strict';

    App.GroupModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return App.GroupModel;
});
