function validateForm() {
	var numbers = /^[0-9]+$/;
    var x = document.forms["myForm"]["name"].value;
    if (x == null || x == "") {
        alert("Name cannot be empty!");
        return false;
    }
    else{
    	var ok=true;
    	for(i=0;i<x.length;i++)
    		if(x[i]>='0' && x[i]<='9')
    			ok=false;
    	if(ok==false){
    		alert("Name cannot have digits!");
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
    			if(!x.value.match(numbers)){
    				alert("Phone number can only be made of digits!")
    				return false;
    			}
    		}
		}
	}
	return true;
}