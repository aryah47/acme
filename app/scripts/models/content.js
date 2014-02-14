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
            , html: null
            , markup: null
            , markupType: null
            , data: null
            , filePath: null
            , fileUrl: null
            , fileService: null
            , mimeType: null
        }
    });

});
