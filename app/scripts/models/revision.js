/*global define*/

define([
    'underscore',
    'backbone',
    'vent'
], function (_, Backbone, vent) {
    'use strict';

    return Backbone.Model.extend({
        defaults: {
            id: null
            , nsId: null
            , pgId: null
            , catPgId: null

            , usrId: null
            , groupId: null
            , crud: null

            , changeTimestamp: null
            , name: null
            , revComment: null

            , textId: null
            , tmplId: null
        }
    });

});
