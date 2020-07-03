var express = require('express');
var router = express.Router();
var mongodb=require('mongodb');
var mongoClient=mongodb.MongoClient;
var url="mongodb://localhost:27017";


router.post('/', function(req, res) {
  console.log(req.body);
  var data={};
  mongoClient.connect(url,function(err,client){
	  	
      var db=client.db("ams");
      var collection=db.collection("adminDetails");
      collection.find({adminid:"admin_ICT",adminpwd:"ICT@2004"}).toArray(function(err,items){
      	if(items.length==1){
           data.msg="valid";
      	}else{
      		data.msg="invalid";
      	}
      	data=JSON.stringify(data);
      	client.close();
      	res.send(data);
      })
  });
});

module.exports = router;
