/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var RedirectModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return RedirectModel;
});