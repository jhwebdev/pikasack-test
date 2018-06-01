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
	
	var topText = ["FINALLY","You want","Have","Why did","Unirift","iAsianRice","Minecraft","Fortnite","Pikasack","Refresh","CHOOOO","Follow","For battles:","Fortnite Mobile","🤔"];
	var midText = ["IM","some","a","you","was","ate all of the","isn't a bad game,","Double Pumping","wants","to change the title","CHIIIII","@op.plays","Follow @messenger__champion","should come to","🤔"];
	var bottomText = ["FREEEEEEE","chocolate?","cookie.","click here?","here","Rice!","it's the players!","is a valid tactic!","PMD for Switch!","back.","CHAAAA","on Instagram!","on Instagram!","Android already!","🤔"];
	
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