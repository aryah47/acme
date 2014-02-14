/*global define*/

define([
    'jquery',
    'underscore',
    'marionette',
], function ($, _, Marionette) {
    'use strict';

    return Marionette.AppRouter.extend({
        appRoutes: {
            '' : 'onRoot',

            'form:*path/rev' : 'onRevision',
            'form:*page/edit' : 'onPageEdit',

            'form:*path' : 'onForm',

            'ns:*page/edit' : 'onNsEdit',
            'ns:*path' : 'onNamespace',

            'usr:*page/edit' : 'onUsrEdit',
            'usr:*path' : 'onUser',

            'grp:*page/edit' : 'onGrpEdit',
            'grp:*path' : 'onGroup',

            'tmpl:*page/edit' : 'onTmplEdit',
            'tmpl:*path' : 'onTemplate',

            'redir:*page/edit' : 'onRedirEdit',
            'redir:*path' : 'onRedirect',

            '*page/edit' : 'onEdit',
            '*page/rev' : 'onRevision',
            '*page' : 'reroute'
        }

    });

});
