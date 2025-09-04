let minutes = 0.1;
let timeleft = minutes*60;
let candle = document.getElementById("candle");
let flame = document.getElementById("flame");

function tick()
{
	if (timeleft>0){
		timeleft--;
		
		let newHeight = (timeleft / (minutes*60)) * 150;
		candle.style.height = newHeight + "px" ;
	}
	
	
}

setInterval(tick, 1000);
