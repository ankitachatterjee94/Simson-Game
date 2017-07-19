var startStop = 0;
var count = 1;
var blinkDur = 350;
var generatedArray = [];
var userArray = [];
var startButton = 0;
var i = -1;
var strictMode = 0;
var show;

function scroll(){
    var j=0;
    document.getElementById('b1').disabled=true;
    document.getElementById('b2').disabled=true;
    document.getElementById('b3').disabled=true;
    document.getElementById('b4').disabled=true;
    document.getElementById('b6').disabled=true;
    show = setInterval(function(){
        blink(generatedArray[j]);
        j++;
        if(j>=generatedArray.length)
            clearInterval(show);
    },blinkDur+400);
}

function switch1(){
    clearInterval(show);
    startStop = !startStop;
    if(startStop)
        {
            document.getElementById('toggle').style.left = '30px';
        }
    else
        {
            document.getElementById("blinkT").style.background="black";
            clearInterval(show);
            reset();
        }
}

function reset(){
    startStop = 0;
    count = 1;
    generatedArray = [];
    userArray = [];
    startButton = 0;
    i = -1;
    loopC = 0; 
    clearInterval(show);
    document.getElementById('cNumber').innerHTML = count;
    document.getElementById('toggle').style.left = '0px';
}

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
            setTimeout(function(){nextMove();
            document.getElementById('cNumber').innerHTML = count;},400);
            setTimeout(function(){document.getElementById('b1').disabled=false;
            document.getElementById('b2').disabled=false;
            document.getElementById('b3').disabled=false;
            document.getElementById('b4').disabled=false
            document.getElementById('b6').disabled=false;;},500);
        }
        
}

function nextMove(){
    var val=randomInt(1,4);
    generatedArray.push(val);
    blink(val);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function blink(number){
    switch(number){
        case 1:document.getElementById('b1').style.opacity=0.5;
               setTimeout(function(){document.getElementById('b1').style.opacity=1;
                          document.getElementById("b1sound").play();},blinkDur); break;
        case 2:document.getElementById('b2').style.opacity=0.5;
               setTimeout(function(){document.getElementById('b2').style.opacity=1;
                          document.getElementById("b2sound").play();},blinkDur); break;
        case 3:document.getElementById('b3').style.opacity=0.5;
               setTimeout(function(){document.getElementById('b3').style.opacity=1;
                          document.getElementById("b3sound").play();},blinkDur); break;
        case 4:document.getElementById('b4').style.opacity=0.5;
               setTimeout(function(){document.getElementById('b4').style.opacity=1;
                          document.getElementById("b4sound").play();},blinkDur); break;
    }
}

function f1(){
    if(startButton){
        userArray.push(1);
        blink(1);
        checklogic();
    }
}

function f2(){
    if(startButton){
        userArray.push(2);
        blink(2);
        checklogic();
    }
}

function f3(){
    if(startButton){
        userArray.push(3);
        blink(3);
        checklogic();
    }
}

function f4(){
    if(startButton){
        userArray.push(4);
        blink(4);
        checklogic();
    }
}

function strict1(){
    strictMode = !strictMode;
    strictMode?document.getElementById('blinkT').style.background="red":document.getElementById('blinkT').style.background="black";
}

function checklogic(){
    i++;
    if(count==20)
            {
                alert("You Won!");
                setTimeout(function(){start1();},400);
            }
    else if(count<20){

        if(generatedArray[i]!=userArray[i])
        {
            if(strictMode)
                {
                    setTimeout(function(){document.getElementById('cNumber').innerHTML = '!!';},500);
                    setTimeout(function(){start1();},800);
                    return;
                }
            else
                {
                    setTimeout(function(){document.getElementById('cNumber').innerHTML = '!!';},500);
                    setTimeout(function(){document.getElementById('cNumber').innerHTML = count;},1200);
                    userArray=[];
                    i=-1;
                    setTimeout(function(){scroll();},1500);
                    setTimeout(function(){document.getElementById('b1').disabled=false;
                     document.getElementById('b2').disabled=false;
                     document.getElementById('b3').disabled=false;
                     document.getElementById('b4').disabled=false;
                     document.getElementById('b6').disabled=false;},blinkDur+generatedArray.length*1800);         
                }
        }
        if(i>=generatedArray.length-1)
        {
            count++;
            setTimeout(function(){document.getElementById('cNumber').innerHTML = count;},1000);
            i = -1;
            userArray = [];
            scroll();
            setTimeout(function(){nextMove();},blinkDur+generatedArray.length*900); 
            setTimeout(function(){document.getElementById('b1').disabled=false;
                     document.getElementById('b2').disabled=false;
                     document.getElementById('b3').disabled=false;
                     document.getElementById('b4').disabled=false;
                     document.getElementById('b6').disabled=false;},blinkDur+generatedArray.length*950);         
        } 
    }                    
    
}
