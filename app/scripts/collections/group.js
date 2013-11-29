/*global define*/

define([
    'underscore',
    'backbone',
    'models/group',
    'app'
], function (_, Backbone, GroupModel, App) {
    'use strict';

    App.GroupCollection = Backbone.Collection.extend({
        model: GroupModel,
        url: '/api/group'
    });

    return App.GroupCollection;
});
