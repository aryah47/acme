/*global define*/

define([
    'underscore',
    'backbone',
    'models/page',
    'app'
], function (_, Backbone, PageModel, App) {
    'use strict';

    App.PageCollection = Backbone.Collection.extend({
        model: PageModel,
        url : '/api/page'

    });

    return App.PageCollection;
});