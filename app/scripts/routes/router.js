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
            'form:*page/edit' : 'editForm',
            'form:*path' : 'form',

            // careful - this needs thinking through!
            // editform somehow calls to form page
            // blah/edit is actually form:otherblah/?pg=blah

            'ns:*page/edit' : 'editForm',
            'ns:*path' : 'namespace',

            'usr:*page/edit' : 'editForm',
            'usr:*path' : 'user',

            'grp:*page/edit' : 'editForm',
            'grp:*path' : 'group',

            'tmpl:*page/edit' : 'editForm',
            'tmpl:*path' : 'template',

            'redir:*page/edit' : 'editForm',
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
