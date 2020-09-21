var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017";
/* GET home page. */
router.get('/', function(req, res, next) {
	var data = {};
	mongoClient.connect(url, function(err, client){
		var db = client.db("ams");
		var collection = db.collection("admin");
		var newvalues = { $set: {admin_id: req.body.a_id, admin_dept: req.body.a_dept } };
		
		collection.updateOne(req.body.admin_id.,newvalues, function(err, res){
			if (err) {
				data.msg = "error while updatting";
			} else {
				data.msg = "Succsfly update hod";
			}
			data = JSON.stringify(data);
			client.close();
			res.send(data);
		});
	});	
});

module.exports = router;