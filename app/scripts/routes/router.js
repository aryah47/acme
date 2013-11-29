/*global define*/

// This should be the only component aware of the actual URL routes. // Other views should use App.vent to trigger api fns

define([
    'jquery',
    'underscore',
    'backbone',
    'api',
    'collections/page',
], function ($, _, Backbone, App, PageCollection) {
    'use strict';

    App.AcmeRouter = Backbone.Router.extend({
        routes: {
            '' : 'root',

            'form:*path/rev' : 'revision',
            'form:*page/edit' : function (page) {
                return App.api.onEdit(page, 'form');
            },

            'form:*path' : 'form',

            'ns:*page/edit' : function (page) {
                return App.api.onEdit(page, 'ns');
            },
            'ns:*path' : 'namespace',

            'usr:*page/edit' : function (page) {
                return App.api.onEdit(page, 'usr');
            },,
            'usr:*path' : 'user',

            'grp:*page/edit' : function (page) {
                return App.api.onEdit(page, 'grp');
            },,
            'grp:*path' : 'group',

            'tmpl:*page/edit' : function (page) {
                return App.api.onEdit(page, 'tmpl');
            },,
            'tmpl:*path' : 'template',

            // hmmm jel ovo stvarno valja? redir kao objekt?
            // distinktan od stranice koja redirecta?
            'redir:*page/edit' : function (page) {
                return App.api.onEdit(page, 'redir');
            },,
            'redir:*path' : 'redirect',

            '*page/edit' : 'edit',
            '*page/rev' : 'revision',
            '*page' : 'page'
        },

        root : App.api.onRoot,
        form : App.api.onForm,
        namespace : App.api.onNamespace,
        user : App.api.onUser,
        group : App.api.onGroup,
        template : App.api.onTemplate,
        redirect : App.api.onRedirect,
        page : App.api.onPage,
        edit : App.api.onEdit,
        revision : App.api.onRevision

    });
    return App.AcmeRouter;
});
