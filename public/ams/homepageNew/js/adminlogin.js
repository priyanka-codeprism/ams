$(document).ready( function() {
		$('#adminloginbtn').on('click', function(e) {
			e.preventDefault();
			//validateAdmin();
		});

	    $('#stdlogibtn').on('click', function(e) {
			e.preventDefault();
		});

		$('#tchrloginbtn').on('click', function(e) {
			e.preventDefault();
		});

		/*if (localStorage.getItem("adminLoginData")) { // fill the boxes with data
		
			var data = JSON.parse(localStorage.getItem("adminLoginData"));
			$("#adminid").val(data.admin_id);
			$("#adminpswd").val(data.admin_pwd);
	    }
	    if (localStorage.getItem("tchrLoginData")) { // fill the boxes with data
		
			var data = JSON.parse(localStorage.getItem("tchrLoginData"));
			$("#adminid").val(data.admin_id);
			$("#adminpswd").val(data.admin_pwd);
	    }*/
	    if (localStorage.getItem("stdLoginData")) { // fill the boxes with data
		
			var data = JSON.parse(localStorage.getItem("stdLoginData"));
			$("#stdid").val(data.student_id);
			$("#stdpwd").val(data.student_pwd);
	    }
	    
	});//ready functin end*/
function validateAdmin(){
		var adminLoginData={};
		adminLoginData.admin_id=$("#adminid").val();
		adminLoginData.admin_pwd=$("#adminpswd").val();
		console.log(adminLoginData);
		if ($("#check1").is(":checked")){
			localStorage.setItem("adminLoginData", JSON.stringify(adminLoginData));
			console.log(localStorage.getItem("adminLoginData"))
	    }else {
		    localStorage.removeItem("adminLoginData")
	     }

		var loginReq = $.ajax({
				url: 'http://localhost:8083/admin/data/validation',
				dataType: 'JSON',
				method: 'POST',
				data: adminLoginData
	     });
       loginReq.done(function(res){
			console.log("Sucess");
			console.log(res);
			if (res.msg == 'valid') {
			    pageRedirect(); 
			   //alert("done");               
			} else {
				$(".invaliddata").show();
			}
	   })
    }//function end
    function pageRedirect() {
     window.location.href = "adminpagenew.html";
   } 

   /*****************Teacher login**********************************/
  function validateTeacher(){
		var tchrLoginData={};
		tchrLoginData.tchr_id=$("#tchrid").val();
		tchrLoginData.tchr_pwd=$("#tchrpwd").val();
		console.log(tchrLoginData);
		/*if ($("#Check2").is(":checked")){
			localStorage.setItem("tchrLoginData", JSON.stringify(tchrLoginData));
			console.log(localStorage.getItem("tchrLoginData"))
	    }else {
		    localStorage.removeItem("tchrLoginData")
	     }*/

		var loginReq = $.ajax({
				url: 'http://localhost:8083/teacher/data/validation',
				dataType: 'JSON',
				method: 'POST',
				data: tchrLoginData
	     });
       loginReq.done(function(res){
			console.log("Sucess");
			console.log(res);
			if (res.msg == 'valid') {
			    //pageRedirectt(); 
			   //alert("done"); 
			   console("done");              
			} else {
				$(".invaliddata").show();
			}
	   })
    }//function end
    function pageRedirectt() {
     window.location.href = "tchrDashboardPage.html";
   } 


   /*****************student login**********************************/
 function validateStudent(){
		var stdLoginData={};
		stdLoginData.student_id=$("#stdid").val();
		stdLoginData.student_pwd=$("#stdpwd").val();
		console.log(stdLoginData);
		/*if ($("#check3").is(":checked")){
			localStorage.setItem("stdLoginData", JSON.stringify(stdLoginData));
			console.log(localStorage.getItem("stdLoginData"))
	    }else {
		    localStorage.removeItem("stdLoginData")
	     }*/

		var loginReq = $.ajax({
				url: 'http://localhost:8083/student/data/validation',
				dataType: 'JSON',
				method: 'POST',
				data: stdLoginData
	     });
       loginReq.done(function(res){
			console.log("Sucess");
			console.log(res);
			if (res.msg == 'valid') {
			    pageRedirects(); 
			   //alert("done");               
			} else {
				$(".invaliddata").show();
			}
	   })
    }//function end
    function pageRedirects() {
     window.location.href = "studentProfilepagenew.html";
     localStorage.setItem("stdLoginData", JSON.stringify(stdLoginData));
   } 
   