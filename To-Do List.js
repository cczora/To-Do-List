function addItem() {	
	
	//make variables out of the user's inputs
	var task = document.getElementById("task").value;
	var numDays = document.getElementById("daysToComplete").value;
	
	//alert the user if the input for numDays isn't right
	if (numDays < 0) {
		alert("Sorry, this list is for tasks in the future, not the past. Try again with a positive number of days!");
		document.forms["attributes"]["numDays"].value = "";
		document.forms["attributes"]["numDays"].focus();
		return false;
	}
	
	//make a new div element and call it newTask
	var newTask = document.createElement("div");
	newTask.id = "newTask";
	
	//make newTask an alert element and assign a color based on its daysToComplete value:
	
	//0-2 daysToComplete -> red
	if (numDays == 0 || numDays <= 2){
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
	var newTaskText = task + " <br> " + numDays + " day(s)";
	newTask.insertAdjacentHTML('beforeend', newTaskText);
	
	//add the alert to the page!
	document.getElementById("alertRow").appendChild(newTask);
	
	return false;
}