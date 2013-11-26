/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var TextModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return TextModel;
});