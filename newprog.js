//declaration of global variables
var startStop = 0; //stores the switch ON OFF value
var count = 1; //keeps the count of level
var blinkDur = 350; //time after which the timeout executes
var generatedArray = []; //stores random sequence generated
var userArray = []; //stores user sequence
var startButton = 0; //stores the start ON value
var i = -1; //used to traverse the array
var strictMode = 0; //stores the strict mode ON OFF value
var show; //used to store interval function

//activates the buttons
function actButton(){
    document.getElementById('b1').disabled = false;
    document.getElementById('b2').disabled = false;
    document.getElementById('b3').disabled = false;
    document.getElementById('b4').disabled = false;
    document.getElementById('b6').disabled = false; 
}

//deactivates the buttons
function deactButton(){
    document.getElementById('b1').disabled = true;
    document.getElementById('b2').disabled = true;
    document.getElementById('b3').disabled = true;
    document.getElementById('b4').disabled = true;
    document.getElementById('b6').disabled = true;
}

//checks whether the switch in ON or OFF
function switch1(){
    clearInterval(show);
    startStop = !startStop; //works as a NOT gate
    if(startStop)
        {
            document.getElementById('toggle').style.left = '15px'; //switch shifts to ON 
            document.getElementById('cNumber').innerHTML = '--';           
        }
    else
        {
            document.getElementById("blinkT").style.background="black"; //switch shifts to OFF
            reset();
        }
}

//resets the global variables to its initial value
function reset(){
    startStop = 0;
    count = 1;
    generatedArray = [];
    userArray = [];
    startButton = 0;
    i = -1;
    clearInterval(show);
    document.getElementById('cNumber').innerHTML = '';
    document.getElementById('toggle').style.left = '0px';
}

//starting the game on start button click
function start1(){
    clearInterval(show);
    if(startStop)
        {
            startButton = 1;
            count = 1;
            generatedArray = [];
            userArray = [];
            i = -1;
            document.getElementById('cNumber').innerHTML = '--';
            setTimeout(function(){
                    nextMove();
                    document.getElementById('cNumber').innerHTML = count;
                  },400);
            setTimeout(function(){
                    actButton();
                  },500);
        }
        
}

//generation of new pattern
function nextMove(){
    var val = randomInt(1,4);
    generatedArray.push(val);
    blink(val);
}

//generation of a random integer
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//blinking of the buttons based on the sequence
function blink(number){
    switch(number){
        case 1:document.getElementById('b1').style.opacity = 0.5;
               setTimeout(function(){
                   document.getElementById('b1').style.opacity = 1;
                   document.getElementById("b1sound").play();
                 },blinkDur);
                   break;
        case 2:document.getElementById('b2').style.opacity = 0.5;
               setTimeout(function(){
                   document.getElementById('b2').style.opacity = 1;
                   document.getElementById("b2sound").play();
                 },blinkDur);
                   break;
        case 3:document.getElementById('b3').style.opacity = 0.5;
               setTimeout(function(){
                   document.getElementById('b3').style.opacity = 1;
                   document.getElementById("b3sound").play();
                 },blinkDur);
                   break;
        case 4:document.getElementById('b4').style.opacity = 0.5;
               setTimeout(function(){
                   document.getElementById('b4').style.opacity = 1;
                   document.getElementById("b4sound").play();
                 },blinkDur);
                   break;
    }
}

//checks the user button
function buttonClick(btn){
    if(startButton){
        userArray.push(btn);
        blink(btn);
        checklogic();
    }
}

//checks whether the strict mode in ON
function strict1(){
    strictMode = !strictMode;
    if(startStop)
        {
            strictMode?document.getElementById('blinkT').style.background="red":document.getElementById('blinkT').style.background="black";
        }    
}

//matching of user sequence with the generated sequence
function checklogic(){
    i++;
    if(count==20)
            {
                alert("You Won!");
                setTimeout(function(){
                    start1();
                  },blinkDur+50);
            }
    else if(count<20)
        {
            if(generatedArray[i]!=userArray[i])
                {
                    deactButton(); 
                    if(strictMode)
                        {
                            setTimeout(function(){
                                document.getElementById('cNumber').innerHTML = '!!';
                                document.getElementById('Wrong').play();
                              },500);
                            setTimeout(function(){
                                start1();
                            },800);
                            return;
                        }
                    else
                        {
                            setTimeout(function(){
                                document.getElementById('cNumber').innerHTML = '!!';
                                document.getElementById('Wrong').play();
                              },500);
                            setTimeout(function(){
                                document.getElementById('cNumber').innerHTML = count;
                              },1200);
                            userArray=[];
                            i=-1;
                            setTimeout(function(){
                                traverse();
                              },1500);
                            setTimeout(function(){
                                actButton();
                              },blinkDur+generatedArray.length*1600);         
                        }
                }
            if(i>=generatedArray.length-1)
            {
                count++;
                setTimeout(function(){
                    document.getElementById('cNumber').innerHTML = count;
                  },1000);
                i = -1;
                userArray = [];
                traverse();
                setTimeout(function(){
                    nextMove();
                  },blinkDur+generatedArray.length*1000); 
                setTimeout(function(){
                    actButton();
                  },blinkDur+generatedArray.length*950);         
            } 
        }                    
    
}

//traversing through the generated sequence
function traverse(){
    deactButton();
    var j=0;
    show = setInterval(function(){
        blink(generatedArray[j]);
        j++;
        if(j>=generatedArray.length)
            clearInterval(show);
    },blinkDur+400);
}