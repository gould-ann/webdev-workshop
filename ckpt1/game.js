var canvas = document.getElementById("board"); //references id we'll be adjusting in the html
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)"; //uses transparencies (thats what the extra parameter is for)
ctx.stroke();
ctx.closePath();;

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();