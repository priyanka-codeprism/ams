var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";


router.get('/', function(req, res, next) {
  
  var data={};
  mongoClient.connect(url, function(err, client){
      var db = client.db("ams");
      var collection = db.collection("student");
      collection.find({s_sem:s_sem}).toArray(function(err, result){
        console.log(result);
        data.studentName = result;
        data = JSON.stringify(data);

        res.send(data);
        client.close();
      })    
    });
});

module.exports = router;
