$(document).ready(function(){
    $("#findEmp").click(function(){
    	var data = {
    			employeeID: $("#id").val()
    	}
    	alert(data);
    	$.ajax({
    		url: "/employee/findEmployee", 
    		data: data,
    		success: function(result){
            alert(result);
    		},
    		failure: function(){
    			alert("failed"); 			
    		}
    	});
    });
});