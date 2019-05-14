//make a variable to count the number of times addItem has been called so far
//var alertAddNumber = 0;
//make an array to hold the numDays values of the newTask alerts that have been added so far
//var daysArray = [];

function addItem() {	
	
	//make variables out of the user's inputs
	var task = document.getElementById("task").value;
	var daysToComplete = document.getElementById("daysToComplete").value;
	
	//get today's date
	var today = Date.now();
	
	//subtract daysToComplete from today to make a numDays value
	var numDays = Math.round((Date.parse(daysToComplete) - today) / 86400000);
	
	//make a new div element and call it newTask
	var newTask = document.createElement("div");
	newTask.id = "newTask";
	
	//make newTask an alert element and assign a color based on its daysToComplete value:
	
	//make a newTaskText variable to hold the variable day or day(s) string
	var newTaskText = new String();
	newTaskText.type = "string";
	
	//make sure the numDays element isn't negative
	if(numDays < 0) {
		alert("Please enter a date greater than 5/15/2019!");
		return false;
	}
	
	//0-2 daysToComplete -> red
	else if (numDays == 0 || numDays <= 2){
		newTask.className = "alert alert-danger alert-dismissable fade show";
	}
	
	//3-6 daysToComplete -> yellow
	else if (numDays >= 3 && numDays <= 6){
		newTask.className= "alert alert-warning alert-dismissable fade show";
	}	
	
	//none or >7 daysToComplete -> grey
	else if(numDays > 6){
		newTask.className = "alert alert-secondary alert-dismissable fade show";
	}
	
	//make an <a> element for the close button and insert it in newTask
	var closeButton = document.createElement("a");
	closeButton.type = "a";
	closeButton.className = "close"
	closeButton.setAttribute("data-dismiss", "alert");
	closeButton.setAttribute("aria-label", "close");
	closeButton.innerHTML = "&times;";
	newTask.appendChild(closeButton);
	
	//make the inside text of newTask and insert it after the <a> element
	if(numDays == 1){
		newTaskText = task + " <br> " + numDays + " day";
	}
	
	else {
		newTaskText = task + " <br> " + numDays + " days";
	}
	newTask.insertAdjacentHTML('beforeend', newTaskText);
	
	
	//add the alert to the page
	document.getElementById("alertContainer").appendChild(newTask);
	
	
	
	//DEPRECATED: on hold until I figute out how to do this!
	
	//alertAddNumber += 1;
	//daysArray[alertAddNumber - 1] = numDays; //array index values start at 0
	
	//is the numDays value of this newTask less than the numDays value of the alert previously added?
	//for(i = 0; i < daysArray.length; i++) {
		//if(numDays > daysArray[i]) {
			//document.getElementById("alertContainer").appendChild(newTask); //add the current newTask AFTER the previous newTask
			//daysArray.pop();
			//daysArray.splice(i-1, 0, numDays);
			//return false;
		//}
	
		//else if(numDays < daysArray[i]) {
			//document.getElementById("alertContainer").insertBefore(newTask, firstChild); //add the current newTask BEFORE the previous newTask
			//daysArray.pop();
			//daysArray.splice(i-1, 0, numDays);
			//return false;
		//}
		
		//else {
			//document.getElementById("alertContainer").appendChild(newTask); //add the current newTask to the document
			//return false;			
		//}
	//}
	
	return false;
}