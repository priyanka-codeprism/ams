var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017";
/* GET home page. */
router.get('/', function(req, res, next) {
	var data = {};
	mongoClient.connect(url, function(err, client){
		var db = client.db("ams");
		var collection = db.collection("paper");
		
		collection.remove(req.query, function(err){
			if (err) {
				data.msg = "error while removing";
			} else {
				data.msg = "Succsfly delete paper";
			}
			data = JSON.stringify(data);
			client.close();
			res.send(data);
		});
	});	
});

module.exports = router;