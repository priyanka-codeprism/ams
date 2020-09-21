var express = require('express');
const session = require('express-session');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

/* GET home page. */
router.get('/', function(req, res, next) {
  var sess;
  sess = req.session;
console.log("Hello profilepg",sess.t_id)
  
  var data={};
  mongoClient.connect(url, function(err, client){
      var db = client.db("ams");
      var collection = db.collection("teacher");
      collection.find({t_id:sess.t_id}).toArray(function(err, result){
        console.log(result);
        data.studentNames = result;
        data = JSON.stringify(data);
        //{std_pwd:"req.query.student_pwd"
        res.send(data);
        client.close();
      })    
    });
});

module.exports = router;
