/*global define*/

define([
    'underscore',
    'backbone',
    'vent'
], function (_, Backbone, vent) {
    'use strict';

    return Backbone.Model.extend({
        //idAttribute: 'path',
        defaults: {
            id : null
            , url: null

            , activeNsId: null
            , activeCatPgId: null
            , activeName: null

            , activeTextId: null
            , activeTmplId: null

            , activeRedirUrl: null
            , activeUrlChange: null
        }
    });

});
