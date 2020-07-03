$(document).ready( function() {
		$('#adminloginbtn').on('click', function(e) {
			e.preventDefault();
			//validateAdmin();
		});
	});//ready functin end*/
function validateAdmin(){
		var adminLoginData={};
		adminLoginData.adminid=$("#adminid").val();
		adminLoginData.adminpwd=$("#adminpswd").val();
		console.log(adminLoginData);
		var loginReq = $.ajax({
				url: 'http://localhost:8083/admin/data/validation',
				dataType: 'JSON',
				method: 'POST',
				data: adminLoginData
	     });
       loginReq.done(function(res){
			console.log("Sucess");
			console.log(res);
			if (res.msg == 'Valid') {
			    pageRedirect();                
			} else {
				$(".invaliddata").show();
			}
	   })
    }//function end
    function pageRedirect() {
      window.location.href = "adminpagenew.html";
    } 