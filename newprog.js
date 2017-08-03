//declaration of global variables

var ob={};
ob.startStop = 0; //stores the switch ON OFF value
ob.count = 1; //keeps the count of level
ob.blinkDur = 350; //time after which the timeout executes
ob.generatedArray = []; //stores random sequence generated
ob.userArray = []; //stores user sequence
ob.startButton = 0; //stores the start ON value
ob.i = -1; //used to traverse the array
ob.strictMode = 0; //stores the strict mode ON OFF value
 
var game={};

//activates the button
game.actButton=function() {
	document.getElementById("b1").disabled = false;
	document.getElementById("b2").disabled = false;
	document.getElementById("b3").disabled = false;
	document.getElementById("b4").disabled = false;
	document.getElementById("b6").disabled = false;
};

//deactivates the buttons
game.deactButton=function() {
	document.getElementById("b1").disabled = true;
	document.getElementById("b2").disabled = true;
	document.getElementById("b3").disabled = true;
	document.getElementById("b4").disabled = true;
	document.getElementById("b6").disabled = true;
};

//checks whether the switch is ON or OFF
game.switch1=function() {
	
	ob.startStop = !ob.startStop; //works as a NOT gate
	if (ob.startStop) {
		document.getElementById("toggle").style.left = "50%"; //switch shifts to ON 
		document.getElementById("cNumber").innerHTML = "--";
		
	} 
	else {
		document.getElementById("blinkT").style.background = "black"; //switch shifts to OFF
		game.reset();
		
	}
};

//resets the global variables to its initial value
game.reset=function() {
	ob.startStop = 0;
	ob.count = 1;
	ob.generatedArray = [];
	ob.userArray = [];
	ob.startButton = 0;
	ob.i = -1;
	document.getElementById("cNumber").innerHTML = "";
	document.getElementById("toggle").style.left = "0px";
};

//starting the game on start button click
game.start1=function() {
		
	if (ob.startStop) {
		ob.startButton = 1;
		ob.count = 1;
		ob.generatedArray = [];
		ob.userArray = [];
		ob.i = -1;
		document.getElementById("cNumber").innerHTML = "--";
		setTimeout(function() {
			game.nextMove();
			document.getElementById("cNumber").innerHTML = "0" + ob.count;
		}, 400);
		setTimeout(function() {
			game.actButton();
		}, 500);
		
	}
	else
		ob.i = -1;

};

//generation of new pattern
game.nextMove=function() {
	var val = game.randomInt(1, 4);
	ob.generatedArray.push(val);
	game.blink(val);
};

//generation of a random integer
game.randomInt=function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

//blinking of the buttons based on the sequence
game.blink=function(number) {
	switch (number) {
	case 1:
		document.getElementById("b1").style.opacity = 0.5;
		setTimeout(function() {
			document.getElementById("b1").style.opacity = 1;
			document.getElementById("b1sound").play();
		}, ob.blinkDur);
		break;
	case 2:
		document.getElementById("b2").style.opacity = 0.5;
		setTimeout(function() {
			document.getElementById("b2").style.opacity = 1;
			document.getElementById("b2sound").play();
		}, ob.blinkDur);
		break;
	case 3:
		document.getElementById("b3").style.opacity = 0.5;
		setTimeout(function() {
			document.getElementById("b3").style.opacity = 1;
			document.getElementById("b3sound").play();
		}, ob.blinkDur);
		break;
	case 4:
		document.getElementById("b4").style.opacity = 0.5;
		setTimeout(function() {
			document.getElementById("b4").style.opacity = 1;
			document.getElementById("b4sound").play();
		}, ob.blinkDur);
		break;
	}
};

//checks the user button
game.buttonClick=function(btn) {
	
	if (ob.startButton) {
		ob.userArray.push(btn);
		game.blink(btn);
		game.checklogic();
	}
	else
		ob.i=-1;
	
};

//checks whether the strict mode in ON
game.strict1=function() {
	ob.strictMode = !ob.strictMode;
	
	if (ob.startStop) {
		if(ob.strictMode) {
			document.getElementById("blinkT").style.background = "red";
			
		}
		else {
			document.getElementById("blinkT").style.background = "black";
			
		}
	}
	else
		ob.i=-1;
	
};

//matching of user sequence with the generated sequence
game.checklogic=function() {
	
	ob.i++;
	if (ob.count < 20) {
		if (ob.generatedArray[ob.i] != ob.userArray[ob.i]) {
			game.deactButton();
			
			if (ob.strictMode) {
				document.getElementById("cNumber").innerHTML = "";
				setTimeout(function() {
					document.getElementById("cNumber").innerHTML = "!!";
					document.getElementById("Wrong").play();
				}, 500);
				setTimeout(function() {
					game.start1();
				}, 800);
				return;
			} else {
				
				document.getElementById("cNumber").innerHTML = "";
				setTimeout(function() {
					document.getElementById("cNumber").innerHTML = "!!";
					document.getElementById("Wrong").play();
				}, 700);
				setTimeout(function() {
					document.getElementById("cNumber").innerHTML = "0" + ob.count;
				}, 1200);
				ob.userArray = [];
				ob.i = -1;
				setTimeout(function() {
					game.traverse();
				}, 1500);
				setTimeout(function() {
					
					game.actButton();
				}, 5000);
			}
		}
		if (ob.i >= ob.generatedArray.length - 1) {
			ob.count++;
			setTimeout(function() {
				document.getElementById("cNumber").innerHTML = "0" + ob.count;
			}, 1000);
			ob.i = -1;
			ob.userArray = [];
			game.traverse();
			setTimeout(function() {
				game.nextMove();
			}, ob.blinkDur + ob.generatedArray.length * 1000);
			setTimeout(function() {
				game.actButton();
			}, ob.blinkDur + ob.generatedArray.length * 950);
		}
	}
	else if (ob.count == 20) {
		document.getElementById("cNumber").innerHTML = "WON";
		setTimeout(function() {
			game.start1();
		}, ob.blinkDur + 50);
	}
	
	else
		return false;
	
};

//traversing through the generated sequence
game.traverse=function() {
	game.deactButton();
	var j = 0;
	var show = setInterval(function() {
		game.blink(ob.generatedArray[j]);
		j++;
		if (j >= ob.generatedArray.length)
			clearInterval(show);
	}, ob.blinkDur + 400);
};