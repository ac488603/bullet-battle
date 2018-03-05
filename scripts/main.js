var background = document.getElementById("layer0"); //canvas for background draws
var canvas = document.getElementById("layer1"); //main canvas
var QS1 = document.getElementById("QS1"); // Version 1 of Quan
var QS2 = document.getElementById("QS2"); // Version 2 of Quan
var LC1 = document.getElementById("LC1"); // Version 1 of Luchador Castillo
var LC2 = document.getElementById("LC2"); // Version 2 of Luchador Castillo

//use these ctx for draw calls
var ctx0 = background.getContext("2d"); //background context
var ctx1 = canvas.getContext("2d"); //main canvas

var fps = 60; //frame rate at which the game updates
var interval = 1/fps; //interval time (see game loop)
var oldTime, newTime, deltaTime = 0; //var for storing frame time difference

//Note: width and height below do not change canvas size
var width = 1024; //width of game level
var height = 704; //height of game level
var tileSize = 32; //size of tiles in level

//Draw tile grid -- TEMPORARY
ctx0.fillStyle = "grey";
ctx0.fillRect(0,0,width,height);
ctx0.fillStyle = "black";
for(var i = 0; i < width/tileSize; i++) {
    for(var j = 0; j < height/tileSize; j++) {
        ctx0.rect(i*tileSize,j*tileSize,tileSize,tileSize);
    }
}
ctx0.stroke();

/*
Main loop for the game
	-runs the update function based on the interval set above (1/fps)
*/
function GameLoop() {
    newTime = performance.now(); //time at start of new frame
    //calculates the time in seconds between last frame and new one (should be small, capped at 1 second)
    deltaTime += Math.min(1, (newTime - oldTime)/1000);
    oldTime = newTime;

    /*
	if more time has passed than interval, run updates until less than interval
    keeps updates consistent across varying framerates
    */
    while(deltaTime >= interval) {
        deltaTime -= interval;
        //scene.Update();
          input.Update();
		startScreen.Update();
    }
    //scene.Draw();
	startScreen.Draw();
  
    requestAnimationFrame(GameLoop); //loops while allowing rest of browser to run
}

input = new InputHandler();
startScreen = new startScreen();

//scene = new Scene();
//scene.Start();

oldTime = performance.now(); //start time of scene (needed for delatime)
requestAnimationFrame(GameLoop); //starts game loop
