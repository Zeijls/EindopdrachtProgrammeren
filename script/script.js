/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/* Nodig criteria: event, DOM, loops, array, object, function */

var fietser = document.querySelector("#fietser");
var positie = 0;

var achtergrond = document.querySelector(".achtergrond");
var positieAchtergrond = 0;

var aantalLampen = 4;

var lichtknop = document.querySelector(".lichtknop");

function bikeLeft() {
	fietser.src = "../img/fietserlinks.png";
	positie -= 8;
	fietser.style.left = positie + "px";
	positieAchtergrond += 4;
	achtergrond.style.left = positieAchtergrond + "px";
}

function bikeRight() {
	fietser.src = "../img/fietserrechts.png";
	positie += 8;
	fietser.style.left = positie + "px";
	positieAchtergrond -= 4;
	achtergrond.style.left = positieAchtergrond + "px";	
}


window.onkeydown = function(event) {
     if (event.keyCode == 37) {
        bikeLeft();
     }

     else if (event.keyCode == 39) {
         bikeRight();
     }
};

for(var i = 0; i < aantalLampen; i++){
// regel 50 defineert waar de gemaakte div zich moet plaatsen
    var lampEl = document.createElement('div');
    lampEl.classList.add('lamp');
    document.querySelector('.lampen').appendChild(lampEl);
}

lichtknop.addEventListener("click", lampAan);

// Hier maak in een array aan door alle elementen die de class lamp hebben in de variable lamp te plakken.
var lamp = document.getElementsByClassName("lamp");
// classList selector voor classes, hij weet dat die naar je css moet kijken (checken)
function lampAan() {
	for(var i = 0; i < aantalLampen; i++){
		if (lamp[i].classList.contains("aan")){
				lamp[i].style.backgroundImage = "url('../img/straatlampuit.png')";
				lamp[i].classList.remove("aan");
		} else { 
				lamp[i].style.backgroundImage = "url('../img/straatlampaan.png')";
				lamp[i].classList.add("aan");
		}
	}
}


