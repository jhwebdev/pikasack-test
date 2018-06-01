var clicks = 0;
var clickimg = document.querySelector("#click");
var currentClicks = document.querySelector("#currentClicks");
var clickTime = document.querySelector("#clickTimer");
var timeToReset = false;

if(clickimg != null) {
	clickimg.onclick = function() {
		if(!timeToReset) {
			clicks++;
			currentClicks.textContent = "Clicks: " + clicks;
			if(clicks == 1) {
				setTimeout(timesUp,10000);
				setTimeout(updateTime,1000);
			}
		}
	}
}

var canClose = false;

function timesUp() {
	clickTime.textContent = "Time: " + "0" + " seconds";
	var modalResults = document.querySelector("#modalResults");
	modalResults.innerHTML = "Times up! You got " + clicks + " clicks in 10 seconds!" + "<br />" + "Click Reset to go again!" + "<br />" + "You average CPS (Clicks per second) was: " + (clicks/10);
	modal.style.display = "block";
	/* alert("Times up! You got " + clicks + " clicks in 10 seconds!" + "\n" + "Click Reset to go again!" + "\n" + "You average CPS (Clicks per second) was: " + (clicks/10)); */
	timeToReset = true;
	setTimeout(changeClose,3000);
}

function changeClose() {
	canClose = true;
}

var guessTime = 10;

function updateTime() {
	if(guessTime > 0 && !timeToReset)
	{
		guessTime--;
		clickTime.textContent = "Time: " + guessTime + " seconds";
		setTimeout(updateTime,1000);
	}
}

function resetClicks() {
	if(timeToReset) {
		clicks = 0;
		currentClicks.textContent = "Clicks: " + clicks;
		clickTime.textContent = "Time: 10 seconds";
		guessTime = 10;
		timeToReset = false;
	}
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
	canClose = false;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal && canClose) {
        modal.style.display = "none";
		canClose = false;
    }
}
