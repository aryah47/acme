/*global define*/

// This should be the only component aware of the actual URL routes. // Other views should use App.vent to trigger api fns

define([
    'jquery',
    'underscore',
    'backbone',
    'api'
], function ($, _, Backbone, App) {
    'use strict';

    App.AcmeRouter = Backbone.Router.extend({
        routes: {
            '' : 'root',
            'form:*path' : 'form',
            'ns:*path' : 'namespace',
            'usr:*path' : 'user',
            'grp:*path' : 'group',
            'tmpl:*path' : 'template',
            'redir:*path' : 'redirect',
            '*page' : 'page'

        },

        root : App.api.onRoot,
        page : App.api.onPage,
        form : App.api.onForm,
        namespace : App.api.onNamespace,
        user : App.api.onUser,
        group : App.api.onGroup,
        template : App.api.onTemplate,
        redirect : App.api.onRedirect

    });
    return App.AcmeRouter;
});
