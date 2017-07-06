$(document).ready(function(){

  var game = {
    count: 1,
  possibilities: ["red", "green", "blue", "yellow"],
  currentGame: [],
  player: [],
  power: false,
  start: false,
  strict: 0,
  sounds:{
    one: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    two: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    three: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    four: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
    error: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
  }
};

var arrCount = 0;

function setSeq(){
  game.currentGame = [];
  for(var x=0; x<game.count; x++){
	var randomNum = Math.round(Math.random()*3);
    game.currentGame.push(game.possibilities[randomNum]);
  };
}

function playSeq(){
  var x = setInterval(function(){

    if(game.currentGame[arrCount]=="red"){
      $("#one").addClass("pressed");
      game.sounds.one.play();
      setTimeout(function(){
        $("#one").removeClass("pressed");
      }, 100);
    }

    else if(game.currentGame[arrCount]=="green"){
      $("#two").addClass("pressed");
      game.sounds.two.play();
      setTimeout(function(){
        $("#two").removeClass("pressed");
      }, 100);
    }

    else if(game.currentGame[arrCount]=="blue"){
      $("#three").addClass("pressed");
      game.sounds.three.play();
      setTimeout(function(){
        $("#three").removeClass("pressed");
      }, 100)
    }

    else{
      $("#four").addClass("pressed");
      game.sounds.four.play();
      setTimeout(function(){
        $("#four").removeClass("pressed");
      }, 100);
    }

    arrCount++;

    if(arrCount>=game.currentGame.length){
      clearInterval(x);
    }
  }, 800);
};

function checkInput(){
  if(game.player.length == game.currentGame.length){
    if(game.player.join()== game.currentGame.join()){
      if(game.count == 20){
        setTimeout(function(){
          alert("you win!");
          location.reload();
        }, 500);
      }
      else{
        setTimeout(function(){
          $("#counter").text(game.count+1);
          game.count++;
          setSeq();
          console.log(game.currentGame);
          game.player=[];
          arrCount = 0;
          playSeq();
        }, 1000);
      }
    }
    else{
      if(game.strict == 1){
        location.reload();
      }
      else{
        setTimeout(function(){
          $("#counter").text("!!");
          arrCount= 0;
          game.player=[];
          playSeq();
        },1000);
      }
    }
  }
}

function userInput(){
  //test button clicking
  $("#one").click(function(){
    //$(this).css({"background-color": "#FFF40F"});
    //var that=this;
    $(this).addClass("pressed");
    game.sounds.one.play();
    game.player.push("red");
    setTimeout(function(){
      $("#one").removeClass("pressed");
    }, 400);
    checkInput();
  });

  $("#three").click(function(){
    //$(this).css({"background-color": "#FFF40F"});
    $(this).addClass("pressed");
    game.sounds.three.play();
    game.player.push("blue");
    setTimeout(function(){
      $("#three").removeClass("pressed");
    }, 400);
    checkInput();
  });

  $("#two").click(function(){
    //$(this).css({"background-color": "#FFF40F"});
    $(this).addClass("pressed");
    game.sounds.two.play();
    game.player.push("green");
    setTimeout(function(){
      $("#two").removeClass("pressed");
    }, 400);
    checkInput();
  });

  $("#four").click(function(){
    //$(this).css({"background-color": "#FFF40F"});
    $(this).addClass("pressed");
    game.sounds.four.play();
    game.player.push("yellow");
    setTimeout(function(){
      $("#four").removeClass("pressed");
    }, 400);
    checkInput();
  });
}

//turn on machine
$("#on").click(function(){
  $("#counter").text("--");
  $(".start-stop").addClass("start");

  setSeq();
  //console.log(game.currentGame);
  $(".start-stop").click(function(){
    $("#counter").text(game.count);
    //console.log(game.currentGame);
    playSeq();
    userInput();
  });
});




//turn off machine
$("#off").click(function(){

  $(".start-stop").removeClass("start");
  $("#counter").text("");
  clearInterval();
  game.count = 1;
  game.currentGame = [];
  game.player = [];
  location.reload;
});



//}


//start the game
/*$(".start-stop").click(function(){
  if(game.power === true){
    if(game.start == false){
      game.start = true;
      console.log(game.start);
      newGame();
    }
    else{
      game.start = false;
      resetGame();
    }
  }
  else{
    window.alert("please turn on the machine first");
  }
});*/




});
