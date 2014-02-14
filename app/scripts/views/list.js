/*global define*/

define([
    'jquery',
    'underscore',
    'marionette',
    'templates',
    'vent'
], function ($, _, Marionette, JST, vent) {
    'use strict';

    return Marionette.CollectionView.extend({
        template: JST['app/scripts/templates/list.hbs']
    });

});
