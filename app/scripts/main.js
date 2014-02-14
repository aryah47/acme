/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    },
    paths: {
        bootstrap: 'vendor/bootstrap',
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        marionette: '../bower_components/marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr' : '../bower_components/marionette/lib/core/amd/backbone.wreqr',
        'backbone.eventbinder' : '../bower_components/marionette/lib/core/amd/backbone.eventbinder',
        'backbone.babysitter' : '../bower_components/marionette/lib/core/amd/backbone.babysitter',
        handlebars: '../bower_components/handlebars/handlebars'
    }
});

require([
    'backbone',
    'app',
    'controllers/controller',
    'routes/router'
], function (Backbone, app, AcmeController, AcmeRouter) {
    window.app = app;
    app.start();
    new AcmeRouter({'controller' : new AcmeController()});
    Backbone.history.start();
});
