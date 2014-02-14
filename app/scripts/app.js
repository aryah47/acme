// app.js

/*global define*/

define([
    'jquery',
    'underscore',
    'marionette',
    'vent',

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
    'collections/content',
    'collections/user'
], function ($, _, Marionette, vent,

             RootView, PageView, FormView, GroupView, NamespaceView,
             RedirectView, TemplateView, UserView, RevisionView,

             GroupCollection, NamespaceCollection, PageCollection,
             RedirectCollection, RevisionCollection, ContentCollection, UserCollection) {

    'use strict';

    var app = new Marionette.Application();
    var pageCollection = new PageCollection();

    //app regions
    app.addRegions({
        main: '#main'
    })

    //initializers
    app.addInitializer(function () {
    });


    // vent reactions, if any
    var viewOptions = {}

    vent.on('route:root', function () {
        //viewOptions.collection = new PageCollection();
        app.main.show(new RootView(viewOptions));
    });
    vent.on('route:page', function (page) {
        viewOptions.collection = new PageCollection();
        app.main.show(new PageView(viewOptions));
    });
    vent.on('route:rev', function (page) {
        viewOptions.collection = new PageCollection();
        app.main.show(new RevisionView(viewOptions));
    });
    vent.on('route:form', function (page) {
        viewOptions.collection = new PageCollection();
        viewOptions.model = new Backbone.Model({form: '\
<form role="form">\
<div class="form-group">\
<label for="exampleInputEmail1">Email address</label>\
<input type="email" class="form-control" id="exampleInputEmail1" placeholder="">\
</div>\
<div class="form-group">\
<label for="exampleInputPassword1">Password</label>\
<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">\
</div>\
<div class="form-group">\
<label for="exampleInputFile">File input</label>\
<input type="file" id="exampleInputFile">\
<p class="help-block">Example block-level help text here.</p>\
</div>\
<div class="checkbox">\
<label>\
<input type="checkbox"> Check me out\
</label>\
</div>\
<button type="submit" class="btn btn-default">Submit</button>\
</form>'});
        app.main.show(new FormView(viewOptions));
    });
    vent.on('route:ns', function (page) {
        viewOptions.collection = new NamespaceCollection();
        app.main.show(new NamespaceView(viewOptions));
    });
    vent.on('route:usr', function (page) {
        viewOptions.collection = new UserCollection();
        app.main.show(new UserView(viewOptions));
    });
    vent.on('route:grp', function (page) {
        viewOptions.collection = new GroupCollection();
        app.main.show(new GroupView(viewOptions));
    });
    vent.on('route:tmpl', function (page) {
        viewOptions.collection = new ContentCollection();
        app.main.show(new TemplateView(viewOptions));
    });
    vent.on('route:redir', function (page) {
        viewOptions.collection = new RedirectCollection();
        app.main.show(new RedirectView(viewOptions));
    });

    return app;
});
