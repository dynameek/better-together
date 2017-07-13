/*
 *
*/
var formHandler = {
	/*
	 *	Properties
	*/
	firstname: null,
	lastname: null,
	level: null,
	course: null,
	phoneNumber: null,
	registerUri: "./register_user.php",
	messageBoardId: "message_board",
	
	/*
	 *	METHODS
	 */
	checkText: function(value){
		var valueLength = value.length;
		var pattern = /[^a-zA-Z]/;
		var returnValue;
		if((valueLength < 1)||(pattern.test(value))){
			returnValue = false;
		}else{
			returnValue = true;
		}
		return returnValue;
	},
	checkNumber: function(value, len){
		var valueLength = value.length;
		var pattern = /[^0-9]+/;
		var returnValue;
		if((valueLength < len) || (pattern.test(value))){
			returnValue = false;
		}else{
			returnValue = true;
		}
		return returnValue;
	},
	/*SETTERS*/
	setFirstname: function(element){
		var value = element.value;
		if(!this.checkText(value)){
			//if value is not clean
			formHandler.firstname = false;
			element.style.borderColor = "#F99898";
		}else{
			formHandler.firstname = value;
			formHandler.level = value;
			element.style.borderColor = "#8DEFBE";
		}
	},
	setLastname: function(element){
		var value = element.value;
		if(!this.checkText(value)){
			formHandler.lastname = false;
			element.style.borderColor = "#F99898";
		}else{
			formHandler.lastname = value;
			formHandler.level = value;
			element.style.borderColor = "#8DEFBE";
		}
	},
	setLevel: function(element){
		var value = element.value;
		if(!this.checkNumber(value, 1)){
			formHandler.level = false;
			element.style.borderColor = "#F99898";
		}else{
			formHandler.level = value;
			element.style.borderColor = "#8DEFBE";
		}
	},
	setCourse: function(element){
		var value = element.value;
		if(!this.checkText(value)){
			formHandler.course = false;
			element.style.borderColor = "#F99898";
		}else{
			formHandler.course = value;
			element.style.borderColor = "#8DEFBE";
		}
	},
	setPhoneNumber: function(element){
		var value = element.value;
		if(!this.checkNumber(value, 11)){
			formHandler.phoneNumber = false;
			element.style.borderColor = "#F99898";
		}else{
			formHandler.phoneNumber = value;
			element.style.borderColor = "#8DEFBE";
		}
	},
	/**/
	createAjaxObject: function(){
		var Ajax;
		try{
			Ajax = new XMLHttpRequest();
		}catch(e){
			try{
				Ajax = new ActiveXObject("Msxml2.XMLHTTP");
			}catch(e0){
				try{
					Ajax = new ActiveXObject("Microsoft.XMLHTTP");
				}catch(e1){
					Ajax = false;
				}
			}
		}
		return Ajax;
	},
	displayMessage: function(message, type){
		var board = document.getElementById(formHandler.messageBoardId);
		board.innerHTML = message;
		if(type != 1){
			board.style.backgroundColor = "#F7B9B9";
		}else{
			board.style.backgroundColor = "#B7F7DD";
		}
	},
	register: function(){
		if(formHandler.firstname && formHandler.lastname && formHandler.level && formHandler.course && formHandler.phoneNumber){
			/*	if all data is clean
			 *	create an ajax object
			 */
			var AjaxObject = formHandler.createAjaxObject();
			if(!AjaxObject){
				//	if Ajax object could not be created, return error
				formHandler.displayMessage("Internal Error", 0);
			}else{
				/*	if Ajax object was created successfully
				 *	configure it
				 */
				AjaxObject.open("post", formHandler.registerUri);
				AjaxObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				AjaxObject.send("fname="+formHandler.firstname+"&lname="+formHandler.lastname+"&level="+formHandler.level+"&course="+formHandler.course+"&phone="+formHandler.phoneNumber);
				AjaxObject.onerror = function(){
					//	If Ajax object encounters an error
					formHandler.displayMessage("Internal Error", 0);
				};
				AjaxObject.onreadystatechange = function(){
					if(AjaxObject.readyState == 4){
						//	on success, process returned result
						if(AjaxObject.responseText){
							//	 if returned result us desired
							formHandler.displayMessage("You have been registered.", 1);
						}else{
							formHandler.displayMessage("Unable to register user.", 0);
						}
					}
				};
			}
			
		}else{
			//	if data is erroneous
			formHandler.displayMessage("Please, check your data.",0);
			console.log("Firstname = "+formHandler.firstname+"\n");
			console.log("Lasstname = "+formHandler.lastname+"\n");
			console.log("Level = "+formHandler.level+"\n");
			console.log("Course = "+formHandler.course+"\n");
			console.log("Phone = "+formHandler.phoneNumber+"\n");
		}
	}
};