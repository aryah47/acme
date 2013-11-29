/*global define*/

define([
    'underscore',
    'backbone',
    'app',
    'views/root',
    'views/page',
    'collections/page'
], function (_, Backbone, App, RootView, PageView, PageCollection) {
    'use strict';

    _.extend(App.api, {
        onRoot : function () {
            console.log('onRoot');
            console.log('set RootView');

            var rootPageModel = App.pageCollection.get('root');
            var rootView = new RootView({model: rootPageModel});
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

        onForm : function (path) {
            console.log('onForm');
            console.log(path);
        },

        onNamespace : function (path) {
            console.log('onNamespace');
        },

        onUser : function (path) {
            console.log('onUser');
        },

        onGroup : function (path) {
            console.log('onGroup');
        },

        onTemplate : function (path) {
            console.log('onTemplate');
        },

        onRedirect : function (path) {
            console.log('onRedirect');
        }
    });

    App.vent.on('route:root', App.api.onRoot);
    App.vent.on('route:acme', App.api.onAcme);
    App.vent.on('route:pop', App.api.onPop);

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
