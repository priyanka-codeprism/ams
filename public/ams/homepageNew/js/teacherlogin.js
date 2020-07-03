$(document).ready( function() {
		
		$('#tchrloginbtn').on('click', function(e) {
			e.preventDefault();
			//validateAdmin();
		});
	});//ready functin end*/
function validateTeacher(){
		var tchrLoginData={};
		tchrLoginData.tchr_id=$("#tchrid").val();
		tchrLoginData.tchr_pwd=$("#tchrpwd").val();
		console.log(tchrLoginData);
		/*if ($("#check1").is(":checked")){
			localStorage.setItem("stdLoginData", JSON.stringify(stdLoginData));
			console.log(localStorage.getItem("stdLoginData"))
	    }else {
		    localStorage.removeItem("stdLoginData")
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
			    pageRedirect(); 
			   //alert("done");               
			} else {
				$(".invaliddata").show();
			}
	   })
    }//function end
    function pageRedirect() {
     window.location.href = "tchrDashboardPage.html";
   } 
   /*****************teacher login**********************************/
