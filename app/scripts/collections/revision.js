/*global define*/

define([
    'underscore',
    'backbone',
    'models/revision',
    'vent'
], function (_, Backbone, RevisionModel, vent) {
    'use strict';

    return Backbone.Collection.extend({
        model: RevisionModel,
        url: '/api/revision'
    });

});
