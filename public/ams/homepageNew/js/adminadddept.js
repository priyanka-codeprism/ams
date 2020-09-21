$(document).ready( function() {
		$('#addtchrbtn').on('click', function() {
			e.preventDefault();
			//readStudentData();
		});
	});//ready functin end*/
function readTeacherData() {
	var tData = {};
	tData.name = $("#tname").val();
	tData.course = $("#tcrs").val();
	tData.sem = $("#tsem").val();
	tData.id = $("#tid").val();
	tData.pswd = $("#tpwd").val();
	tData.status = 1;
	
	console.log(tData);

	var addTeacherReq = $.ajax({
		url: 'http://localhost:8083/add/teacher/details',
		data: tData,
		method: 'GET',
		dataType: 'JSON'
	});

	addTeacherReq.done(function(res){
		console.log("res");
		console.log(res);
		alert("successfully added")
	});
}