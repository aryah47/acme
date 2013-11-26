/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ListView = Backbone.View.extend({
        template: JST['app/scripts/templates/list.hbs']
    });

    return ListView;
});