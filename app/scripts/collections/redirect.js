/*global define*/

define([
    'underscore',
    'backbone',
    'models/redirect',
    'vent'
], function (_, Backbone, RedirectModel, vent) {
    'use strict';

    return Backbone.Collection.extend({
        model: RedirectModel,
        url: '/api/redirect'
    });

});
