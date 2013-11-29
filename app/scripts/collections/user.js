/*global define*/

define([
    'underscore',
    'backbone',
    'models/user',
    'app'
], function (_, Backbone, UserModel, App) {
    'use strict';

    App.UserCollection = Backbone.Collection.extend({
        model: UserModel
    });

    return App.UserCollection;
});
