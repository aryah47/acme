/*global define*/
define(['vent',
        'marionette',
        'collections/namespace',
        'collections/page',
       ], function (vent, Marionette, NamespaceCollection, PageCollection) {

    'use strict';

    return Marionette.Controller.extend({

        onRoot : function () {
            vent.trigger('route:root');
        }
        , onPage : function (page) {
            vent.trigger('route:page');
        }
        , onRevision : function (page){
            vent.trigger('route:rev', page);
        }
        , onForm : function (page){
            vent.trigger('route:form', page);
        }
        , onNamespace : function (page) {
            vent.trigger('route:ns', page);
        }
        , onUser : function (page) {
            vent.trigger('route:usr', page);
        }
        , onGroup : function (page) {
            vent.trigger('route:grp', page);
        }
        , onTemplate : function (page) {
            vent.trigger('route:tmpl', page);
        }
        , onRedirect : function (page) {
            vent.trigger('route:redir', page);
        }

        , onPageEdit : function (page) {
            return this.onEdit(page, 'form');
        }
        , onNsEdit : function (page) {
            return this.onEdit(page, 'ns');
        }

        , onUsrEdit : function (page) {
            return this.onEdit(page, 'usr');
        }
        , onGrpEdit : function (page) {
            return this.onEdit(page, 'grp');
        }
        , onTmplEdit : function (page) {
            return this.onEdit(page, 'tmpl');
        }

        // hmmm jel ovo stvarno valja? redir kao objekt?
        // distinktan od stranice koja redirecta?
        , onRedirEdit : function (page) {
            return this.onEdit(page, 'redir');
        }

        , onEdit: function (page, ns) {
            /*jshint -W004*/
            var ns = ns || 'page';
            /*jshint +W004*/

            //TODO query namespace for page
            return this.onForm('/form:' + ns + '?pg=' + page);
        }
        , reroute: function(page) {

            var pages = new PageCollection();
            pages.fetch({'url' : page});
            var pageModel = pages.get(page);
            console.log(pageModel);
            //TODO query namespace for page
            //TODO vent the appropriate trigger
        }
    });
});
