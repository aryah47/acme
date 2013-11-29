/*global define*/

define([
    'underscore',
    'backbone',
    'app'
], function (_, Backbone, App) {
    'use strict';

    App.PageModel = Backbone.Model.extend({
        idAttribute: 'path',
        defaults: {
            path : '',
            html : ''
        }
    });

    return App.PageModel;
});
