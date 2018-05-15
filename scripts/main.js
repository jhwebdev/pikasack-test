function myFunction(y) {
	y.classList.toggle("change");
	var x = document.getElementById("myLinks");
	if (x.className === "links") {
		x.className += " responsive";
	} else {
		x.className = "links";
	}
}
	
function playSurvivio() {
	var survivio = document.querySelector(".survivLink");
	var currentDisplay = survivio.style.display;
		
	if (currentDisplay == "none") {
	survivio.style.display = "block"; 
	}
		
	else {
	survivio.style.display = "none"; 
	}
}

var title = document.querySelector(".title");

title.onclick = function() {
	var titlepika = document.querySelector("#title-pikasack");
	var titlegaming = document.querySelector("#title-gaming");
	var titlecenter = document.querySelector("#title-with");
	var titlepage1 = document.querySelector("#title-page1");
	var titlepage2 = document.querySelector("#title-page2");
	
	titlegaming.textContent = "";
	if(titlepage2 > "") {
	titlepage2.textContent = ""; }
	titlecenter.style.color = "#39AFDF";
	
	var topText = ["FINALLY","You want","Have","Why did","Unirift","iAsianRice","Minecraft","Fortnite","Pikasack","Refresh","CHOOOO","Follow","For battles:","Fortnite Mobile"];
	var midText = ["IM","some","a","you","was","ate all of the","isn't a bad game,","Double Pumping","wants","to change the title","CHIIIII","@op.plays","Follow @messenger__champion","should come to"];
	var bottomText = ["FREEEEEEE","chocolate?","cookie.","click here?","here","Rice!","it's the players!","is a valid tactic!","PMD for Switch!","back.","CHAAAA","on Instagram!","on Instagram!","Android already!"];
	
	var randText = Math.floor(Math.random()*topText.length);
	
	titlepika.textContent = topText[randText];
	titlecenter.textContent = midText[randText];
	
	if(titlepage1 == null) {
		titlepage2.style.color = "#4AC517";
		titlepage2.textContent = bottomText[randText]; 
	}
		
	else {
		titlepage1.textContent = bottomText[randText];
	}
	
}

var pikasackavatar = document.querySelector(".pikasack-avatar");

if(pikasackavatar != null) {
	pikasackavatar.onclick = function() {
		alert("Oshawott is the best! ~Pikasack");
	}
}

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

function timesUp() {
	clickTime.textContent = "Time: " + "0" + " seconds";
	alert("Times up! You got " + clicks + " clicks in 10 seconds!" + "\n" + "Click Reset to go again!" + "\n" + "You average CPS (Clicks per second) was: " + (clicks/10));
	timeToReset = true;
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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
	changeContent()
}

function currentSlide(n) {
	showSlides(slideIndex = n);
	changeContent()
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" currentVid", "")
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " currentVid";
}

function changeContent() {
	var holder = document.querySelector(".videos-grid");
	var vidTitle = document.querySelector("#video-title");
	var vidInfo = document.querySelector("#video-info");
	if(slideIndex == 1 || slideIndex == 4) {
		holder.style.backgroundColor = "#4AC517";
		if(slideIndex == 1) {
			vidTitle.textContent = "Pikasack + iAsianRice High Explosives Win";
			vidInfo.textContent = "Pikasack and iAsianRice rock everyone else in Hgih Explosives with all Golden Rocket Launchers.";
		}
	}
		if(slideIndex == 4) {
			vidTitle.textContent = "Pikasack Gaming Squad Win";
			vidInfo.textContent = "All 3 members of Pikasack Gaming come together and pull out a squad win."
		}
	if(slideIndex == 2 || slideIndex == 5) {
		holder.style.backgroundColor = "#39AFDF";
		if(slideIndex == 2) {
			vidTitle.textContent = "Shotgun Kills";
			vidInfo.textContent = "Pikasack kills a person with a pump, quickly switches to a Heavy Shotgun, and shoots another person, both for the kill.";
		}
		if(slideIndex == 5) {
			vidTitle.textContent = "Got killed, but got instant revenge";
			vidInfo.textContent = "Pikasack dies to someone else, only for his killer to run right into his trap he had just put outside. Talk about instant karma.";
		}
	}
	if(slideIndex == 3 || slideIndex == 6) {
		holder.style.backgroundColor = "#F4B610";
		if(slideIndex == 3) {
			vidTitle.textContent = "Pikasack Solo Grenade Launcher Win";
			vidInfo.textContent = "Pikasack whips out a Grenade Launcher, and starts firing it at the only other person standing, to end up winning the game.";
		}
		if(slideIndex == 6) {
			vidTitle.textContent = "Pikasack Solo Squad High Explosives Win";
			vidInfo.textContent = "Pikasack is all by himself with two other people alive, and  both of his squad mates are dead. Luckily, one of the enemies dies in the storm, leaving it as a 1v1, and Pikasack gets the final Rocket Launcher kill, winning the game for his squad!";
		}
	}
}


