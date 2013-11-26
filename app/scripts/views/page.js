/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var PageView = Backbone.View.extend({
        template: JST['app/scripts/templates/page.hbs']
    });

    return PageView;
});