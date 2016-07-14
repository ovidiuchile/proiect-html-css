function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == null || x == "") {
        alert("Name cannot be empty!");
        return false;
    }
    else{
    	x=document.forms["myForm"]["email"].value;
    	if(x==null || x==""){
    		alert("E-mail cannot be empty!");
    		return false;
    	}
    	else{
    		x=document.forms["myForm"]["phone"];
    		var numbers = /^[0-9]+$/;
    		if(!x.value.match(numbers)){
    			alert("Phone number can only be made of digits!")
    			return false;
    		}
    	}
	}
}