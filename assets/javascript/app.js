
// Gameplay can begin when DOM is loaded
$(document).ready(function () {

  // ---------- Define question objects ---------- //

  questions = [{
    prompt: "What political party did Luanne support in the 2004 election?",
    possibleAnswers: ["The Democratic Party", "The Republican Party", "The Libertarian Party", "The Communist Party"],
    correctAnswer: "The Communist Party",
    gif: "assets/images/luanne-communist.gif"
  }, {
    prompt: "What is Peggy Hill's maiden name?",
    possibleAnswers: ["Platter", "Gribble", "Pewterschmidt", "Bouvier"],
    correctAnswer: "Platter",
    gif: "assets/images/peggy-escuchame.gif"
  }, {
    prompt: "What does Dale Gribble call the van he uses for his extermination business?",
    possibleAnswers: ["The Queen Machine", "The Bugabago", "My Cadillac Car", "Lenore"],
    correctAnswer: "The Bugabago",
    gif: "assets/images/dale-and-mantis.gif"
  }, {
    prompt: "What does Hank Hill sell for a living?",
    possibleAnswers: ["Jeans", "Tractors", "Pickup Trucks", "Propane and propane accessories"],
    correctAnswer: "Propane and propane accessories",
    gif: "assets/images/hank-jay-peg.gif"
  }, {
    prompt: "Who is Joseph Gribble's biological father?",
    possibleAnswers: ["John Redcorn", "Bill Dautrive", "Principal Moss", "Hank Hill"],
    correctAnswer: "John Redcorn",
    gif: "assets/images/john-redcorn-nancy-dance.gif"
  }, {
    prompt: "What is Boomhauer's first name?",
    possibleAnswers: ["Charles", "Jeffery", "Buck", "Octavio"],
    correctAnswer: "Jeffery",
    gif: "assets/images/boomhauer-why.gif"
  }, {
    prompt: 'Who was the voice for Elroy "Lucky" Kleinschmidt?',
    possibleAnswers: ["Mike Judge", "Stephen Root", "Trace Adkins", "Tom Petty"],
    correctAnswer: "Tom Petty",
    gif: "assets/images/lucky-slips.gif"
  }, {
    prompt: "What is Dale Gribble's preferred alias?",
    possibleAnswers: ["Joe Jack", "Dusty Hill", "Rusty Shackelford", "Gilbert Dauterive"],
    correctAnswer: "Rusty Shackelford",
    gif: "assets/images/dale-bathrobe.gif"
  }];
  

  // ---------- Define game object ---------- //

  var game = {
    timeRemainingDiv: $("#time-remaining"),
    questionDiv: $("#question"),
    choicesDiv: $("#choices"),
    correctAnswers: 0,
    incorrectAnswers: 0,
    questionsUnanswered: 0,
    questionNumber: 0,
    questionsRemaining: questions.length,
    isRightAnswer: false,

    startGame: function(){
      // Hide start button when the first question is displayed 
      if (game.questionNumber === 0) {
        $("#start").css("display", "none");
      }

      if (game.questionsRemaining) {
        // start question countdown
        // display question and answers
        var question = $("<h2>");
        question.text(questions[game.questionNumber].prompt);
        question.appendTo(game.questionDiv);
        var possibleAnswersLength = questions[game.questionNumber].possibleAnswers.length;
        for (var i = 0; i < possibleAnswersLength; i++) {
          var choice = $('<p class="choice">');
          choice.text(questions[game.questionNumber].possibleAnswers[i]);
          choice.appendTo(game.choicesDiv);
        }
        // when user selects answer, check it

        if (game.isRightAnswer) {
          console.log("yay");
        }
        else {
          console.log("boo");
        }
        // if no more questions, game over
        // else continue
      }
      // game.questionsRemaining--;
      // game.questionNumber++;

    },

    checkAnswer: function() {
      // if answer is correct, display success message
      // if answer is incorrect, display failure message
      game.isRightAnswer = false;
      var chosenAnswer = $(this).text();
      if (chosenAnswer === questions[game.questionNumber].correctAnswer) {
        game.isRightAnswer = true;
      }
    },
    
    gameOver: function() {
      // show final score
      // show restart button
    },
    
    restartGame: function() {
    game.correctAnswers = 0;
    game.incorrectAnswers = 0;
    game.questionsUnanswered = 0;
    game.questionsRemaining = questions.length;
    game.questionNumber = 0;
    game.startGame();
    }

  };

  
  // var stuff = $("<img>", {
  //   src: questions[7].gif
  // });

  // stuff.appendTo("#start");

  
  // ---------- Event listeners ---------- //

  // Start button begins game
  $('#start-button').click(game.startGame);

  // possible answers: selects answer
  $('#choices').on('click', '.choice', game.checkAnswer);

  // Restart button restarts the game
  $('#reset').on('click', '#reset-button', game.restartGame);

});