var indexer = require('./indexer.js');

var config = require('config');

var indexname = config.elasticsearch.elasticsearchIndices.CARD.index;
var indextype = config.elasticsearch.elasticsearchIndices.CARD.type;
var tableName = config.elasticsearch.elasticsearchIndices.CARD.collectionName;

indexer.IndexMongodbData(indexname, indextype, tableName);//Inserting data into ElasticSearch, Kibana from MongoDb