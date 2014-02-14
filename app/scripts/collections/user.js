/*global define*/

define([
    'underscore',
    'backbone',
    'models/user',
    'vent'
], function (_, Backbone, UserModel, vent) {
    'use strict';

    return Backbone.Collection.extend({
        model: UserModel,
        url: '/api/user'
    });

});
