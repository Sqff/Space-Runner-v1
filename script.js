var rocket = document.getElementById('rocket');
var planet = document.getElementById('planet');
var counter = 0;

function jump(){
    if(rocket.classList != "animate"){
        rocket.classList.add("animate");
    }
setTimeout(function() {
    rocket.classList.remove("animate");
    counter++;
    
}, 500);
    
}
var lose = SetInterval(function(){
    var rocketTop =
    parseInt(window.getComputedStyle(rocket).getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(planet).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && rocketTop>=130){
        planet.style.animation = "none";
        planet.style.display = "none";
        alert("SCORE:"+ counter)
        counter = 0;
    }
}, 10);