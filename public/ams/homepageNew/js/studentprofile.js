function getstdDtetails(){
	$.ajax({
		url:'http://localhost:8083/student/profile',
		method:'GET',
		dataType:'JSON',
		success:function(res){
			console.log(res);
			console.log("success")
			displayDetails(res.stdDetails);
		},
		error:function(err){
			console.log("error");
		}
	})
}
getstdDtetails();

	function displayDetails(stdDetails){
        for (var i = 0 ; i < stdDetails.length; i++) {
		  $(".stdDetailsholder").loadTemplate($("#stdDetailstemplate"), stdDetails[i], {append:true});
	    }
	}
	
