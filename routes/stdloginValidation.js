var express = require('express');
var router = express.Router();
var mongodb=require('mongodb');
var mongoClient=mongodb.MongoClient;
var url="mongodb://localhost:27017";


router.post('/', function(req, res) {
  console.log(req.body);
  req.session.isUserValid = false;
  var data={};
  mongoClient.connect(url,function(err,client){
	  	if (err) {
          console.log("error while connecting");
          console.log(err);
      }
      var db=client.db("ams");
      var collection=db.collection("studentDetails");
      collection.find({std_classrollno:req.body.student_id,std_pwd:req.body.student_pwd}).toArray(function(err,items){
      	if(items.length==1){
           data.msg="valid";
           req.session.isUserValid = true;
      	}else{
      		data.msg="invalid";
      		req.session.isUserValid = false;
      	}
        console.log(req.session.isUserValid);
      	data=JSON.stringify(data);
      	client.close();
      	res.send(data);
        //res.render('studentProfilepagenew');
      })
  });
});

module.exports = router;
