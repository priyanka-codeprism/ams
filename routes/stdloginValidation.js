var express = require('express');
var router = express.Router();
const session = require('express-session');
var mongodb=require('mongodb');
var mongoClient=mongodb.MongoClient;
var url="mongodb://localhost:27017";


router.post('/', function(req, res) {
  var sess;
sess = req.session;

  console.log(req.body);
  sess.isUserValid = false;
  var data={};
  mongoClient.connect(url,function(err,client){
	  	if (err) {
          console.log("error while connecting");
          console.log(err);
      }
      var db=client.db("ams");
      var collection=db.collection("studentDetails");
      collection.find({std_classrollno:req.body.student_id,std_pwd:req.body.student_pwd}).toArray(function(err,items){
        sess.std_classrollno=req.body.student_id;
        console.log(sess.std_classrollno);
      	if(items.length==1){
           data.msg="valid";
           sess.isUserValid = true;
      	}else{
      		data.msg="invalid";
      		sess.isUserValid = false;
      	}
        console.log(sess.isUserValid);
      	data=JSON.stringify(data);
      	client.close();
      	res.send(data);
      })
  });
});

module.exports = router;
