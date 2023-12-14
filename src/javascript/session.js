const sessionList = document.getElementById("sessionList");
const sessionButton = document.getElementById("sessionGenerateButton");
sessionButton.addEventListener("click", generate);

function generate(){
	const sessions = document.getElementById("numOfSessions");
	const sessionMinutes = document.getElementById("sessionMinutes");
	const sessionSeconds = document.getElementById("sessionSeconds");
		
	for (let i = 0; i < sessions.value; i++){
		const newSession = document.createElement("li");
		newSession.className = "session";
		const newSessionTitle = document.createTextNode("Pomodoro " + i.toString());
		newSession.appendChild(newSessionTitle);
		const newSessionButton = document.createElement("button");
		newSessionButton.className = "sessionClearButton";
		newSessionButton.type = "button";
		newSessionButton.addEventListener("click", clearTask);
		newSession.appendChild(newSessionButton);
		sessionList.append(newSession);
	}

	//Clear fields
	sessions.value = 0;
	sessionMinutes.value = 0;
	sessionSeconds.value = 0;
}





function clearTask(){
	const sessionsDone = document.getElementById("currentSessionsDone");
	let temp = parseInt(sessionsDone.innerHTML, 10);
	temp += 1;	
	sessionsDone.innerHTML = temp;
	const div = this.parentElement;
	div.style.display = "none";
}

