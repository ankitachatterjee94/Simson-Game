
beforeAll(function(){
    var dummy='<body background="Background.png">'+
        '<div class="outer-circle">'+
            '<button type="button" id="b1" onclick="game.buttonClick(1)"></button>'+
            '<button type="button" id="b2" onclick="game.buttonClick(2)"></button>'+
            '<button type="button" id="b3" onclick="game.buttonClick(3)"></button>'+
            '<button type="button" id="b4" onclick="game.buttonClick(4)"></button>'+
            '<div class="inner-circle"><p id="simon-text"><b>Simon<sup>&#174</sup></b></p>'+
                '<div class="strict"><p id="strict-text">STRICT</p>'+
                    '<button type="button" id="b5" onclick="game.strict1()"></button>'+
                '</div>'+
                '<div class="blink" id="blinkT">'+
                '</div>'+
                '<div class="start">'+
                    '<button type="button" id="b6" onclick="game.start1()"><p id="start-text">START</p>'+
                '</div>'+
                '<div id="cNumber" class="count"></div>'+
                '<div id="count-text">COUNT'+
                '</div>'+
                '<div class="switch">'+
                    '<span id="on-text">ON</span>'+
                    '<span id="off-text">OFF</span>'+
                    '<button type="button" id="toggle" onclick="game.switch1()">'+
                    '<button type="button" id="toggle2" onclick="game.switch1()">'+
                '</div>'+
            '</div>'+
        '</div>'+
    '<audio id="b1sound">'+
        '<source src="Music/simonSound0.ogg" type:"audio/ogg">'+
        '<source src="Music/mp3file/simonSound0.mp3" type:"audio/mp3">'+
    '</audio>'+
    '<audio id="b2sound">'+
        '<source src="Music/simonSound1.ogg" type:"audio/ogg">'+
        '<source src="Music/mp3file/simonSound1.mp3" type:"audio/mp3">'+
    '</audio>'+
    '<audio id="b3sound">'+
        '<source src="Music/simonSound2.ogg" type:"audio/ogg">'+
        '<source src="Music/mp3file/simonSound2.mp3" type:"audio/mp3">'+
    '</audio>'+
    '<audio id="b4sound">'+
        '<source src="Music/simonSound3.ogg" type:"audio/ogg">'+
        '<source src="Music/mp3file/simonSound3.mp3" type:"audio/mp3">'+
    '</audio>'+
    '<audio id="Wrong">'+
        '<source src="Music/buzz_sound.ogg" type:"audio/ogg">'+
        '<source src="Music/mp4file/buzz_sound.mp3" type:"audio/mp3">'+
    '</audio>'+
    '</body>';
    document.body.insertAdjacentHTML('afterbegin',dummy);
  });

describe("A spy on button activation", function() {
  beforeEach(function(){
    document.getElementById("b1").disabled = true;
	  document.getElementById("b2").disabled = true;
	  document.getElementById("b3").disabled = true;
	  document.getElementById("b4").disabled = true;
	  document.getElementById("b6").disabled = true;
  })  
  it("testing activation", function() {
    game.actButton();      
    expect(document.getElementById("b1").disabled).toBe(false);
  });

  it("testing activation", function() {
    game.actButton();
    expect(document.getElementById("b2").disabled).toBe(false);
  });

  it("testing activation", function() {
    game.actButton();
    expect(document.getElementById("b3").disabled).toBe(false);
  });

  it("testing activation", function() {
    game.actButton();
    expect(document.getElementById("b4").disabled).toBe(false);
  });

  it("testing activation", function() {
    game.actButton();
    expect(document.getElementById("b6").disabled).toBe(false);
  });
});

describe("A spy on button deactivation", function() {
  beforeEach(function(){
    document.getElementById("b1").disabled = false;
	  document.getElementById("b2").disabled = false;
	  document.getElementById("b3").disabled = false;
	  document.getElementById("b4").disabled = false;
	  document.getElementById("b6").disabled = false;
  })   
  it("testing deactivation", function() {
    game.deactButton();      
    expect(document.getElementById("b1").disabled).toBe(true);
  });

  it("testing deactivation", function() {
    game.deactButton();
    expect(document.getElementById("b2").disabled).toBe(true);
  });

  it("testing deactivation", function() {
    game.deactButton();
    expect(document.getElementById("b3").disabled).toBe(true);
  });

  it("testing deactivation", function() {
    game.deactButton();
    expect(document.getElementById("b4").disabled).toBe(true);
  });

  it("testing deactivation", function() {
    game.deactButton();
    expect(document.getElementById("b6").disabled).toBe(true);
  });
});

describe("A spy on switch", function() {
  beforeEach(function(){
    ob.startStop=0;
    document.getElementById("toggle").style.left = "0px";
    document.getElementById("cNumber").innerHTML = "";
    document.getElementById("blinkT").style.background = "red";
  })
  it("testing if block of switch", function() {
    game.switch1();
    expect(document.getElementById("toggle").style.left).toBe("50%");
  });

  it("testing if block of switch", function() {
    game.switch1();
    expect(document.getElementById("cNumber").innerHTML).toBe("--");
  });
});

describe("A spy on switch", function() {
  beforeEach(function(){
    ob.startStop=1;
    document.getElementById("toggle").style.left = "0px";
    document.getElementById("cNumber").innerHTML = "";
    document.getElementById("blinkT").style.background = "red";
  })

  it("testing else block of switch", function() {
    
    game.switch1();
    expect(document.getElementById("blinkT").style.background).toBe("black");
  });

  it("testing call of reset from switch", function() {
    var spy=game;
    spyOn(spy,'reset')
    spy.switch1();
    expect(spy.reset).toHaveBeenCalled();
  });

});

describe("testing reset", function(){
  beforeEach(function(){
    ob.startStop = 1;
	  ob.count = 0;
	  ob.generatedArray = [];
	  ob.userArray = [];
	  ob.startButton = 1;
    ob.i = 0;
    document.getElementById("cNumber").innerHTML = "--";
    document.getElementById("toggle").style.left = "50%";
  })

  it("testing reset of values", function(){
    game.reset();
    expect(ob.startStop).toBe(0);
  });

  it("testing reset of values", function(){
    game.reset();
    expect(ob.count).toBe(1);
  });

  it("testing reset of values", function(){
    game.reset();
    expect(ob.generatedArray).toEqual([]);
  });

  it("testing reset of values", function(){
    game.reset();
    expect(ob.userArray).toEqual([]);
  });

  it("testing reset of values", function(){
    game.reset();
    expect(ob.startButton).toBe(0);
  });

  it("testing reset of values", function(){
    game.reset();
    expect(ob.i).toBe(-1);
  });

  it("testing reset of values", function(){
    game.reset();
    expect(document.getElementById("cNumber").innerHTML).toBe("");
  });

  it("testing reset of values", function(){
    game.reset();
    expect(document.getElementById("toggle").style.left).toBe("0px");
  });
});

describe("A spy on start", function() {
  beforeEach(function(){
    ob.startStop=1;
    ob.startButton = 0;
		ob.count = 0;
		ob.generatedArray = [];
		ob.userArray = [];
		ob.i = 0;
		document.getElementById("cNumber").innerHTML = "";
  })
  it("testing if block of start", function() {
    game.start1();
    expect(ob.startStop).toBe(1);
  });

  it("testing if block of start", function() {
    game.start1();
    expect(ob.startButton).toBe(1);
  });

  it("testing if block of start", function() {
    game.start1();
    expect(ob.count).toBe(1);
  });

  it("testing if block of start", function() {
    game.start1();
    expect(ob.generatedArray).toEqual([]);
  });

  it("testing if block of start", function() {
    game.start1();
    expect(ob.userArray).toEqual([]);
  });

  it("testing if block of start", function() {
    game.start1();
    expect(ob.i).toBe(-1);
  });

  it("testing if block of start", function() {
    game.start1();
    expect(document.getElementById("cNumber").innerHTML).toBe("--");
  });
});

describe("a spy on start", function() {

  it("testing else block of start", function() {
    ob.startStop=0;
    game.start1();
    expect(ob.i).toBe(-1);

  });
});

describe("asynchronous specs for start",function(){
  
  it("test for calling nextMove", function(done) {
    var spy=game;
    spyOn(spy,'nextMove');
    spy.start1();
    setTimeout(function() {
      expect(spy.nextMove).toHaveBeenCalled();
      expect(document.getElementById("cNumber").innerHTML).toBe("01");
      done();
    },1200);
  }); 
});

describe("a spy on nextmove", function() {

  it("testing calling of randomInt", function() {
    var spy=game;
    spyOn(spy,'randomInt');
    spy.nextMove();
    expect(spy.randomInt).toHaveBeenCalled();

  });
});

describe("a spy on nextmove", function() {

  it("testing calling of blink", function() {
    var spy=game;
    spyOn(spy,'blink');
    spy.nextMove();
    expect(spy.blink).toHaveBeenCalled();

  });
});

describe("a spy on randomInt", function() {

  it("testing the return value", function() {
    expect(typeof game.randomInt).toBe(typeof Number);

  });
});

describe("a spy on blink", function() {
  
  it("testing switch cases", function() {
    game.blink(1);
    expect(document.getElementById("b1").style.opacity).toBe('0.5');

  });

  it("testing switch cases", function() {
    game.blink(2);
    expect(document.getElementById("b2").style.opacity).toBe('0.5');

  });

  it("testing switch cases", function() {
    game.blink(3);
    expect(document.getElementById("b3").style.opacity).toBe('0.5');

  });

  it("testing switch cases", function() {
    game.blink(4);
    expect(document.getElementById("b4").style.opacity).toBe('0.5');

  });
});

describe("asynchronous specs for blink",function(){
  
  it("test for changing property", function(done) {
    setTimeout(function() {
      expect(document.getElementById("b1").style.opacity).toBe("1");
      document.getElementById("b1sound").play();
      done();
    },1700);
  });
  it("test for changing property", function(done) {
    setTimeout(function() {
      expect(document.getElementById("b2").style.opacity).toBe("1");
      document.getElementById("b2sound").play();
      done();
    },1700);
  });
  it("test for changing property", function(done) {
    setTimeout(function() {
      expect(document.getElementById("b3").style.opacity).toBe("1");
      document.getElementById("b3sound").play();
      done();
    },1700);
  });
  it("test for changing property", function(done) {
    setTimeout(function() {
      expect(document.getElementById("b4").style.opacity).toBe("1");
      document.getElementById("b4sound").play();
      done();
    },1700);
  });
  
});

describe("a spy on buttonClick", function() {
  
  it("testing if block", function() {
    ob.startButton=1;
    var spy=game;
    spyOn(spy,'blink');
    spy.buttonClick(1);
    expect(spy.blink).toHaveBeenCalled();

  });

  it("testing if block", function() {
    ob.startButton=1;
    var spy=game;
    spyOn(spy,'blink');
    spy.buttonClick(2);
    expect(spy.blink).toHaveBeenCalled();

  });

  it("testing if block", function() {
    ob.startButton=1;
    var spy=game;
    spyOn(spy,'blink');
    spy.buttonClick(3);
    expect(spy.blink).toHaveBeenCalled();

  });

  it("testing if block", function() {
    ob.startButton=1;
    var spy=game;
    spyOn(spy,'blink');
    spy.buttonClick(4);
    expect(spy.blink).toHaveBeenCalled();

  });

  it("testing if block", function() {
    ob.startButton=1;
    var spy=game;
    spyOn(spy,'checklogic');
    spy.buttonClick(4);
    expect(spy.checklogic).toHaveBeenCalled();

  });

  it("testing else block", function() {
    ob.startButton=0;
    game.buttonClick();
    expect(ob.i).toBe(-1);

  });
});

describe("A spy on strict", function() {
  
  it("testing if block of strict", function() {
    ob.startStop=1;
    ob.strictMode=0;
    game.strict1();
    expect(document.getElementById("blinkT").style.background).toBe("red");
  });
});

describe("A spy on strict", function() {
  
  it("testing else block of strict", function() {
    ob.startStop=1;
    ob.strictMode=1;
    game.strict1();
    expect(document.getElementById("blinkT").style.background).toBe("black");
  });
});

describe("A spy on strict", function() {
  
  it("testing else block of strict", function() {
    ob.startStop=0;
    game.strict1();
    expect(ob.i).toBe(-1);
  });
});

describe("A spy on traverse", function() {
  
  it("testing calling of deactButton", function() {
    var spy=game;
    spyOn(game,'deactButton');
    spy.traverse();
    expect(spy.deactButton).toHaveBeenCalled();
  });
});


describe("asynchronous specs for traverse",function(){
  
  it("test for calling blink", function(done) {
    var spy=game;
    spyOn(spy,'blink');
    spy.traverse();
    setTimeout(function() {
      expect(spy.blink).toHaveBeenCalled();
      done();
    },2200);
  }); 
});

describe("A spy on checklogic", function() {
  
  it("testing outer if and inner if block", function() {
    ob.count=2;
    ob.generatedArray[1]=1;
    ob.userArray[1]=2;
    var spy=game;
    spyOn(game,'deactButton');
    spy.checklogic();
    expect(spy.deactButton).toHaveBeenCalled();
  });

  it("testing outer if and inner two if blocks", function() {
    ob.count=2;
    ob.generatedArray[1]=1;
    ob.userArray[1]=2;
    ob.strictMode=1;
    game.checklogic();
    expect(document.getElementById("cNumber").innerHTML).toBe("");
  });

  it("testing outer if and first inner two if blocks", function() {
    ob.count=2;
    ob.generatedArray[1]=1;
    ob.userArray[1]=2;
    ob.strictMode=0;
    game.checklogic();
    expect(document.getElementById("cNumber").innerHTML).toBe("");
  });

});


  describe("asynchronous specs for checklogic",function(){
  
  it("test for calling start and property change", function(done) {
    ob.count=2;
    ob.generatedArray[1]=1;
    ob.userArray[1]=2;
    ob.strictMode=1;
    var spy=game;
    spyOn(spy,'start1');
    spy.checklogic();
    setTimeout(function() {
      expect(spy.start1).toHaveBeenCalled();
      expect(document.getElementById("cNumber").innerHTML).toBe("02");
      document.getElementById("Wrong").play();
      done();
    },3200);
  }); 

});


describe("A spy on checklogic", function() {

  it("testing outer if and else of inner if blocks", function() {
    ob.count=2;
    ob.generatedArray[1]=2;
    ob.userArray[1]=2;
    ob.i=3;
    ob.generatedArray.length=2;
    game.checklogic();
    expect(ob.i).toEqual(-1);
  });
  it("testing outer if and else of inner if blocks", function() {
    ob.count=2;
    ob.generatedArray[1]=2;
    ob.userArray[1]=2;
    ob.i=3;
    ob.generatedArray.length=2;
    game.checklogic();
    expect(ob.userArray).toEqual([]);
  });

  it("testing outer if and else of inner if blocks", function() {
    ob.count=2;
    ob.generatedArray[1]=2;
    ob.userArray[1]=2;
    ob.i=3;
    ob.generatedArray.length=2;
    var spy=game;
    spyOn(game,'traverse');
    spy.checklogic();
    expect(spy.traverse).toHaveBeenCalled();
  });

  it("testing else if block", function() {
    ob.count=20;
    game.checklogic();
    expect(document.getElementById("cNumber").innerHTML).toBe("WON");
  });

  it("testing else block", function() {
    ob.count=21;
    
    expect(game.checklogic()).toBe(false);
  });
    
});

describe("long asynchronous specs", function() {
  var originalTimeout;
   beforeEach(function() {
     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
     jasmine.DEFAULT_TIMEOUT_INTERVAL = 6000;
   });
   it("test for calling traverse and change properties", function(done) {
    ob.count=2;
    ob.generatedArray[1]=1;
    ob.userArray[1]=2;
    ob.strictMode=0;
    var spy=game;
    spyOn(spy,'traverse');
    spy.checklogic();
    setTimeout(function() {
      expect(spy.traverse).toHaveBeenCalled();
      expect(document.getElementById("cNumber").innerHTML).toBe("03");
      document.getElementById("Wrong").play();
      done();
    },5200);
  }); 
   it("takes a long time", function(done) {
      ob.count=2;
      ob.generatedArray[1]=2;
      ob.userArray[1]=2;
      ob.i=3;
      ob.generatedArray.length=2;
      var spy=game;
      spyOn(spy,'nextMove');
      spy.checklogic();
      setTimeout(function() {
        expect(spy.nextMove).toHaveBeenCalled();
        expect(document.getElementById("cNumber").innerHTML).toBe("03");      
        done();
      }, 5200);
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
  });
