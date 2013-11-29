/*global define*/

// loads all root views -- does it need to load

define([

    'underscore',
    'backbone',
    'app',

    'views/root', //show root page
    'views/page', //show any other page
    'views/form', //show, edit forms used for editing all page types
    'views/group', // show group - info, administration
    'views/namespace', // show, create namespaces
    'views/redirect', // show redirects - internally??
    'views/template', // show, create templates - internally??
    'views/user', // show users - info, administration - internally??
    'views/revision',

    'collections/group',
    'collections/namespace',
    'collections/page',
    'collections/redirect',
    'collections/revision',
    'collections/template',
    'collections/text',
    'collections/user'

], function (_, Backbone, App,

             RootView, PageView, FormView, GroupView, NamespaceView,
             RedirectView, TemplateView, UserView, RevisionView,

             GroupCollection, NamespaceCollection, PageCollection,
             RedirectCollection, RevisionCollection, TemplateCollection,
             TextCollection, UserCollection) {
    'use strict';

    _.extend(App.api, {
        onRoot : function () {
            console.log('onRoot');
            console.log('set RootView');

            var rootModel = App.pageCollection.get('root');
            var rootView = new RootView({model: rootModel});
            rootView.render();
        },

        onPage : function (page) {
            console.log('onPage');
            console.log(page);

            var pageModel = App.pageCollection.get(page);
            console.log(pageModel);

            var pageView = new PageView({model: pageModel});
            pageView.render();

        },

        onEdit : function (page) {
            console.log('onEdit');
            console.log(page);
        },

        onRevision : function (page) {
            console.log('onRevision');
            console.log(page);

            var pageModel = App.pageCollection.get(page);
            var revisionView = new RevisionView({model: pageModel});
            revisionView.render();
        },

        onForm : function (path) {
            console.log('onForm');
            console.log(path);

            var formModel = App.pageCollection.get('form');
            var formView = new FormView({model: formModel});
            formView.render();
        },

        onNamespace : function (path) {
            console.log('onNamespace');
            var namespaceView = new NamespaceView({model: namespaceModel});
            namespaceView.render();
        },

        onUser : function (path) {
            console.log('onUser');
            var userView = new UserView({model: userModel});
            userView.render();
        },

        onGroup : function (path) {
            console.log('onGroup');
            var groupView = new GroupView({model: groupModel});
            groupView.render();
        },

        onTemplate : function (path) {
            console.log('onTemplate');

            var templateView = new TemplateView({model: templateModel});
            templateView.render();
        },

        onRedirect : function (path) {
            console.log('onRedirect');

            var redirectView = new RedirectView({model: redirectModel});
            redirectView.render();
        }
    });

    App.vent.on('route:root', App.api.onRoot);
    App.vent.on('route:page', App.api.onPage);
    App.vent.on('route:form', App.api.onForm);
    App.vent.on('route:namespace', App.api.onNamespace);
    App.vent.on('route:user', App.api.onUser);
    App.vent.on('route:group', App.api.onGroup);
    App.vent.on('route:template', App.api.onTemplate);
    App.vent.on('route:redirect', App.api.onRedirect);

    // main def
    App.init = function () {
        Backbone.history.start();
        this.pageCollection = new PageCollection([
            {path: 'acme', html: 'ef'},
            {path: 'pop', html: 'uh'}
        ]);

        // any further initialization

        return this;
    };

    return App;
});
