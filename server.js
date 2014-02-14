"use strict";

//NOTE: I don't like the multidecl syntax...
var inspect = require('util').inspect;
var express = require('express');
var _ = require('underscore');
var consolidate = require("consolidate");

var db = require('server/dbapi');
var dbapi = require('server/dbapi');

var app = express();

app.use(express.json());
//app.use(express.urlencoded());
app.use(express.compress());
app.use(express.logger('dev'));

app.engine("html", consolidate.handlebars);
app.set("view engine", "html");
app.set("views", __dirname + "/base"); // index.html is there


app.post('/api/init', function (req, res) {
    dbapi.init().done(function () {
        return res.send('Done!');
    });
});

app = require('server/namespace_rest').main(app);
app = require('server/redirect_rest').main(app);
app = require('server/revision_rest').main(app);
app = require('server/content_rest').main(app);
app = require('server/page_rest').main(app);
app = require('server/user_rest').main(app);
app = require('server/group_rest').main(app);

app.get("/", function(req, res) {

    var inspect = require('util').inspect;
    var staticOrNone = req.params[0];

    var rows = dbapi.listDB().done(function () {
        console.log('Result: ' + inspect(rows));
    });

    console.log('Started Expressjs server');

    res.render('index', {
        title : 'serverside variable substitution'
    });
});

console.log('Started Expressjs server');


module.exports = app;
