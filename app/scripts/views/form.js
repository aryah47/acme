/*global define*/

define([
    'bootstrap',
    'underscore',
    'marionette',
    'templates',
    'handlebars',
    'vent'
], function ($, _, Marionette, JST, hdb, vent) {
    'use strict';
    return Marionette.ItemView.extend({
        template: JST['app/scripts/templates/form.hbs'],
        templateHelpers : {
            bah : 'clientside variable substitution',

            splat: function (tmp, args) {
                args = args || {};
                tmp = tmp || "";

                var template = hdb.compile(tmp);
                return new hdb.SafeString(template(tmp, args));
            }
        },
        onDomRefresh : function () {
            // necessary iff modals on the page
            this.$('#myModal').modal();
        }


    });
});
