function getstdDtetails(sData){
	var std_data={};
	var data = {};
	if (sData) {
		data = sData;
	}
	var url = "http://localhost:8083/get/studentprofiles";
	var dataReq = $.ajax({
		url: url,
		dataType: 'JSON',
		method: 'GET',
		data: data
	});

	dataReq.done(function(res){
		console.log("Success");
		console.log(res);
		if(res.msg) {
			// notlogged in,,so show him the login page..
			showPage('login');
		} else {			
				displayDetails(res.studentNames);
			}
		

	});

	std_data.displayDetails=function(){
        var name_data='<p><strong>' + label_name + '</strong> : ' + this.std_name + '</p>';
        var fname_data='<p><strong>' + label_fname + '</strong> : ' + this.std_fname + '</p>';
        var mname_data='<p><strong>' + label_mname + '</strong> : ' + this.std_mname + '</p>';
        var addr_data='<p><strong>' + label_addr + '</strong> : ' + this.std_addr + '</p>';
        var no_data='<p><strong>' + label_no + '</strong> : ' + this.std_no + '</p>';
        var gender_data='<p><strong>' + label_gender + '</strong> : ' + this.std_gender + '</p>';
        //2nd fieldset
        var sem_data='<p><strong>' + label_sem + '</strong> : ' + this.std_sem + '</p>';
        var course_data='<p><strong>' + label_course + '</strong> : ' + this.std_course + '</p>';
        var examrollno_data='<p><strong>' + label_examrollno + '</strong> : ' + this.std_examrollno + '</p>';
        var classrollno_data='<p><strong>' + label_classrollno + '</strong> : ' + this.std_classrollno + '</p>';
        var regdno_data='<p><strong>' + label_regdno + '</strong> : ' + this.std_regdno + '</p>';
        var email_data='<p><strong>' + label_email + '</strong> : ' + this.std_email + '</p>';
        var pic_data='<p><strong>Your photo</strong>' + this.std_photo+'</p>' ;

        var data=name_data+fname_data+mname_data+addr_data+no_data+gender_data+sem_data
        +course_data+examrollno_data+classrollno_data+regdno_data+email_data+pic_data;
        $('#previewbox').append(data);
        console.log(data);
	}
	std_data.displayDetails();
}