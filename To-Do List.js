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
	
	//make a <p> element for the text of newTask and stick it in the alert <div>
	var newTaskText = document.createElement("p");
	newTaskText.id = "newTaskText";
	newTaskText.innerHTML = task + numDays + " " + "<p>day(s)</p>";
	newTask.appendChild(newTaskText);
	
	//make a button element and insert it after the text in the alert <div>
	var closeButton = document.createElement("button");
	closeButton.type = "button";
	closeButton.className = "close"
	closeButton.setAttribute("data-dismiss", "alert");
	closeButton.setAttribute("aria-label", "Close");
	newTask.appendChild(closeButton);
	
	//make a <span> element and insert it in the <button> tag
	var spanElement = document.createElement("span");
	spanElement.type = "span";
	spanElement.setAttribute("aria-hidden", "true");
	spanElement.innerHTML = "&times;";
	closeButton.appendChild(spanElement);

	//add the alert to the page!
	document.getElementById("alertContainer").appendChild(newTask);
	
	return false;
}



	//NOTES HERE


	//deprecated (for now):
	
	//I DON'T NEED TO MAKE newTask A CARD WOOHOO! Switching to the alert class in Bootstrap
	
	// make the todo list items as class="d-flex" to get them to float nicely, and .flex-wrap to get them to wrap nicely
	//use .justify-content-around to fix spacing between
	//so class="d-flex flex-wrap justify-content-around"
	//document.getElementById("newTask").className = "d-flex flex-wrap justify-content-around";
	
	//also deprecated; couldn't figure out how to put a <div> inside of a <div>:
	//newTask.appendChild("newTaskInside");
