function getstudentname(){
	$.ajax({
		url:'http://localhost:8083/get/students/name',
		method:'GET',
		dataType:'JSON',
		success:function(res){
			console.log(res);
			console.log("success")
			showStudentName(res.studentName);
		},
		error:function(err){
			console.log("error");
		}
	})
}
getstudentname();
function showStudentName(studentName){
	
	for (var i = 0 ; i < studentName.length; i++) {
		$(".nameholder").loadTemplate($("#stdNametemplate"), studentName[i], {append:true});
	}

}