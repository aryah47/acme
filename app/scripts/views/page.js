/*global define*/

define([
    'jquery',
    'underscore',
    'marionette',
    'templates',
    'vent'
], function ($, _, Marionette, JST, vent) {
    'use strict';

    return Marionette.ItemView.extend({
        el: '#center',
        template: JST['app/scripts/templates/page.hbs']
    });

});
