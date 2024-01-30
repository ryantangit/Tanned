const sessionButton = document.getElementById("sessionGenerateButton");
sessionButton.addEventListener("click", generate);

function generate(){
	const sessionList = document.getElementById("sessionList");
	const sessions = document.getElementById("numOfSessions");
	const sessionMinutes = document.getElementById("sessionMinutes");
	const sessionSeconds = document.getElementById("sessionSeconds");
	if (sessionSeconds.value == "0" && sessionMinutes.value == "0"){
		alert("At least one second per session, come on now.");
		return;
	}
	for (let i = 0; i < sessions.value; i++){
		const newSession = document.createElement("li");
		newSession.className = "session";
		const newSessionTitle = document.createTextNode("Pomodoro " + i.toString());
		newSession.appendChild(newSessionTitle);
		const newSessionButton = document.createElement("button");
		newSessionButton.className = "sessionClearButton";
		newSessionButton.type = "button";
		newSessionButton.addEventListener("click", Task);
		newSession.appendChild(newSessionButton);
		sessionList.append(newSession);
	}
	//Session details are now immutable.
	sessionButton.style.display = "none";
	sessions.setAttribute("readonly", true);
	sessionMinutes.setAttribute("readonly", true);
	sessionSeconds.setAttribute("readonly", true);
}

function Task(){
	const div = this.parentElement
	startTask(div);
	clearTask(div);
}

function clearTask(thisDiv){
	const sessionsDone = document.getElementById("currentSessionsDone");
	let temp = parseInt(sessionsDone.innerHTML, 10);
	temp += 1;	
	sessionsDone.innerHTML = temp;
	thisDiv.style.display = "none";
}

//Pop the first session from the list and display it.
function startTask(thisDiv){
	const timer = document.getElementById("currentSessionTimer");
	const sessionMinutes = document.getElementById("sessionMinutes");
	const sessionSeconds = document.getElementById("sessionSeconds");
	let timeLeft = 60 * parseInt(sessionMinutes.value, 10) + parseInt(sessionSeconds.value, 10);	
	let secLeft = timeLeft % 60;
	let minLeft = (timeLeft - secLeft) / 60;
	timer.innerHTML = ("00"+minLeft).slice(-2)+":"+("00"+secLeft).slice(-2);
	
	//Loop the countDiown per second;
	const countDown = setInterval(function(){
		timeLeft--;
		let secLeft = timeLeft % 60;
		let minLeft = (timeLeft - secLeft) / 60;
		timer.innerHTML = ("00"+minLeft).slice(-2)+":"+("00"+secLeft).slice(-2);
		if (timeLeft == 0){
			clearInterval(countDown);
			alert("Session Completed");
		}
	}, 1000);

}

