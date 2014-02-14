/*global define*/

define([
    'underscore',
    'backbone',
    'vent'
], function (_, Backbone, vent) {
    'use strict';

    return Backbone.Model.extend({
        defaults: {
            id: null
            , revId: null
            , redirUrl: null
            , urlChange: null
        }
    });

});
