var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017";
/* GET home page. */
router.get('/', function(req, res, next) {
	var data = {};
	mongoClient.connect(url, function(err, client){
		var db = client.db("ams");
		var collection = db.collection("student");
		var newval = { $set: {s_id: req.body.s_id, s_name: req.body.s_name } };
		collection.updateOne(req.query.s_id,newval, function(err, res){
			if (err) {
				data.msg = "error while updating";
			} else {
				data.msg = "Succsfly update student";
			}
			data = JSON.stringify(data);
			client.close();
			res.send(data);
		});
	});	
});

module.exports = router;