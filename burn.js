let minutes ;
let candle = document.getElementById("candle");
let flame = document.getElementById("flame");
let size = document.getElementById("candle-size");
let stage = document.getElementById("stage");
let intervalId = null;


function Start(){
	
let val = size.value;
stage.style.visibility = "visible";

let initialheight;
switch(val)
{
	case "small":
		initialheight = 70;
		minutes = 0.1;
		break;
	case "medium":
		initialheight  = 100;
		minutes = 1;
		break;
	case "large":
		initialheight  = 140;
		minutes = 2;
		break;
	default:
        initialheight = 70;
        minutes = 0.1;
}
candle.style.height = initialheight + "px";

let timeleft = minutes*60;

if (intervalId) clearInterval(intervalId);

function tick()
{
	if (timeleft>0){
		timeleft--;
		
		let newHeight = (timeleft / (minutes*60)) * initialheight;
		candle.style.height = newHeight + "px" ;
	}
	else{
		candle.style.visibility = "hidden";
		clearInterval(intervalId);
	}
	
	
}

 intervalId = setInterval(tick, 1000);
}
