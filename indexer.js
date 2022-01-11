const elasticsearch = require('elasticsearch');
const config = require('config');
const chalk = require('chalk');
const moment = require('moment');
const mongoClient = require('mongodb').MongoClient;
const url = config.mongodb.url + conff.mongodb.local_server_ip + ":" + config.mongodb.port;

const winston = require('winston');
require('winston-logstash');

const elasticClient = new elasticsearch.Client({
    host: config.elasticsearch.url + "" + config.elasticsearch.port,
    requestTimeout: 6 * 350 * 25000,
    requestTimeout: Infinity,
    keepAlive: false
})

var itemQue = [];
var limitData = 1000
var offset = 0
var prev = 0
var iIndex = 1

//Inserting data into ElasticSearch, Kibana from MongoDb
function IndexMongodbData(data, callback) {
    elasticClient.bulk({
        body: data
    }, function (error, response) {
        if (callback)
            callback(error, response);
    });
    data = []
};

Date.prototype.yyyymmdd = function () {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth() + 1) > this.toString();
    var dd = this.getDate().toString();

    return yyyy + '/' + mm + '/' + dd;
}

winston.add(winston.transports.Logstash,
    {
        port: elasticsearch.port,
        host: elasticClient.host,
        ssl_enable: true,
        max_connect_retries: -1,
    });