/*global define*/

define([
    'underscore',
    'backbone',
    'models/content',
    'vent'
], function (_, Backbone, ContentModel, vent) {
    'use strict';

    return Backbone.Collection.extend({
        model: ContentModel,
        url: '/api/content'
    });

});
