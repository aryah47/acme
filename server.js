"use strict";

//NOTE: I don't like the multidecl syntax...
var inspect = require('util').inspect;
var express = require("express");
var consolidate = require("consolidate");
var Client = require('mariasql');
var MAX_COUNT = 100;

var empty = new Client();
var c = new Client();

empty.connect({
  host: '127.0.0.1',
  user: 'root',
  password: '888'
});

empty.query('CREATE DATABASE IF NOT EXISTS preliminary');

empty.on('connect', function () {
    c.connect({
        host: '127.0.0.1',
        user: 'root',
        password: '888',
        db: 'preliminary'
    });
    c.query('CREATE TABLE IF NOT EXISTS Groups ('
            + 'id INT PRIMARY KEY AUTO_INCREMENT,'
            + 'name VARCHAR(30)'
            + ')');
    // c.query('CREATE TABLE IF NOT EXISTS Users ('
    //         + 'id INT PRIMARY KEY AUTO_INCREMENT,'
    //         + 'name VARCHAR(30)'
    //         + ')');
    // c.query('CREATE TABLE IF NOT EXISTS UserGroups ('
    //         + 'id INT PRIMARY KEY AUTO_INCREMENT,'
    //         + 'uid INT FOREIGN KEY,'
    //         + 'gid INT FOREIGN KEY,'
    //         + ')');

    // c.query('CREATE TABLE IF NOT EXISTS Pages ('
    //         + 'id INT PRIMARY KEY AUTO_INCREMENT,'
    //         + 'name VARCHAR(30)'
    //         + ')');
    // c.query('CREATE TABLE IF NOT EXISTS Redirects ('
    //         + 'id INT PRIMARY KEY AUTO_INCREMENT,'
    //         + 'pid INT FOREIGN KEY,'
    //         + 'name VARCHAR(30)'
    //         + ')');
    // c.query('CREATE TABLE IF NOT EXISTS Revisions ('
    //         + 'id INT PRIMARY KEY AUTO_INCREMENT,'
    //         + 'pid INT FOREIGN KEY,'
    //         + 'name VARCHAR(30)'
    //         + ')');
    // c.query('CREATE TABLE IF NOT EXISTS CatRevisions ('
    //         + 'id INT PRIMARY KEY AUTO_INCREMENT,'
    //         + 'rid INT FOREIGN KEY,'
    //         + 'name VARCHAR(30)'
    //         + ')');

    // c.query('CREATE TABLE IF NOT EXISTS Template ('
    //         + 'id INT PRIMARY KEY AUTO_INCREMENT,'
    //         + 'rid INT FOREIGN KEY,'
    //         + 'name VARCHAR(30)'
    //         + ')');
    // c.query('CREATE TABLE IF NOT EXISTS Text ('
    //         + 'id INT PRIMARY KEY AUTO_INCREMENT,'
    //         + 'rid INT FOREIGN KEY,'
    //         + 'name VARCHAR(30)'
    //         + ')');
});

empty.end();

// first hit needs to be sufficiently after the creation, but a one-off condition
// easily satisfied, not worth a check


var app = express();

app.use(express.json());
//app.use(express.urlencoded());
app.use(express.compress());
app.use(express.logger('dev'));

app.engine("html", consolidate.handlebars);
app.set("view engine", "html");
app.set("views", __dirname + "/app"); // index.html is there

var groupGetAll = c.prepare("SELECT * FROM Groups LIMIT " + MAX_COUNT);
app.get('/api/group', function (req, res) {
    var acc = [];

    c.query(groupGetAll())
    .on('result', function (dbres) {
       dbres .on('row', function (row) {
           acc.push(row);
        })
        .on('end', function () {
            res.send(acc);
        });
    });
});

var groupPost = c.prepare("INSERT INTO Groups (name) VALUES (:name)");
app.post('/api/group', function (req, res) {
    c.query(groupPost({name: req.body.name}))
        .on('result', function (dbres) {
            dbres.on('end', function (info) {
                res.send(info);
            });
        });

});

var groupGet = c.prepare("SELECT * FROM Groups WHERE id = :id");
app.get('/api/group/:id', function (req, res) {
    var id = req.params.id;
    c.query(groupGet({id: id}))
        .on('result', function (dbres) {
            dbres.on('row', function(row) {
                res.send(row);
            });
        });
});

var groupUpd = c.prepare("UPDATE Groups SET name = :name WHERE id = :id");
var fnUpdate = function (req, res) {
    var id = req.params.id;
    var name = req.body.name;
    c.query(groupUpd({id: id, name: name}))
      .on('result', function (dbres) {
          dbres.on('end', function (info) {
              res.send(info);
          });
      });
};
app.put('/api/group/:id', fnUpdate);
app.patch('/api/group/:id', fnUpdate);

var groupDelete = c.prepare("DELETE FROM Groups WHERE id = :id");
app.delete('/api/group/:id',function (req, res) {
    var id = req.params.id;
    c.query(groupDelete({id: id}))
        .on('result', function (dbres) {
            dbres.on('end', function (info) {
                res.send(info);
            });
        });
});



app.get('/api/namespace', function (req, res) {
    res.send(JSON.stringify(
        [
            {path: 'ef'},
            {path: 'uf'}
        ]
    ));
});

app.get('/api/page', function (req, res) {
    res.send(JSON.stringify(
        [
            {path: 'acme', html: 'ef'},
            {path: 'pop', html: 'uh'}
        ]
    ));
});

app.get('/api/redirect', function (req, res) {
    res.send('redirect');
});

app.get('/api/revision', function (req, res) {
    res.send('revision');
});

app.get('/api/template', function (req, res) {
    res.send('template');
});

app.get('/api/text', function (req, res) {
    res.send('text');
});

app.get('/api/user', function (req, res) {
    res.send('user');
});

app.get("/", function(req, res) {

    var inspect = require('util').inspect;

    var staticOrNone = req.params[0];
    c.query('SHOW DATABASES')
        .on('result', function(res) {
            res.on('row', function(row) {
                console.log('Result row: ' + inspect(row));
            });
        });

    res.render('index', {
        title : 'nestanegdi'
    });
});

console.log('Started Expressjs server');


module.exports = app;
