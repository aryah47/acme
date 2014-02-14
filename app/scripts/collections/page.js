/*global define*/

define([
    'underscore',
    'backbone',
    'models/page',
    'vent'
], function (_, Backbone, PageModel, vent) {
    'use strict';

    return Backbone.Collection.extend({
        model: PageModel,
        url : '/api/page'

    });

});
