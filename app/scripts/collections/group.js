/*global define*/

define([
    'underscore',
    'backbone',
    'models/group',
    'vent'
], function (_, Backbone, GroupModel, vent) {
    'use strict';

    return Backbone.Collection.extend({
        model: GroupModel,
        url: '/api/group'
    });

});
