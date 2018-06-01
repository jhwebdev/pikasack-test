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
	var next = document.querySelector(".next");
	var prev = document.querySelector(".prev");
	if(slideIndex == 1 || slideIndex == 4) {
		holder.style.backgroundColor = "#4AC517";
		next.style.backgroundColor = "rgba(74,197,23,0.75)";
		prev.style.backgroundColor = "rgba(74,197,23,0.75)";
		if(slideIndex == 1) {
			vidTitle.textContent = "Pikasack + iAsianRice High Explosives Win";
			vidInfo.textContent = "Pikasack and iAsianRice rock everyone else in High Explosives with all Golden Rocket Launchers.";
		}
	}
		if(slideIndex == 4) {
			vidTitle.textContent = "Pikasack Gaming Squad Win";
			vidInfo.textContent = "All 3 members of Pikasack Gaming come together and pull out a squad win."
		}
	if(slideIndex == 2 || slideIndex == 5) {
		holder.style.backgroundColor = "#39AFDF";
		next.style.backgroundColor = "rgba(57,175,223,0.75)";
		prev.style.backgroundColor = "rgba(57,175,223,0.75)";
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
		next.style.backgroundColor = "rgba(244,182,16,0.75)";
		prev.style.backgroundColor = "rgba(244,182,16,0.75)";
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