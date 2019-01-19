
// Gameplay can begin when DOM is loaded
$(document).ready(function () {

  // ---------- Define an array of question objects ---------- //

  questions = [{
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
    prompt: "What political party did Luanne support in the 2004 election?",
    possibleAnswers: ["The Democratic Party", "The Republican Party", "The Libertarian Party", "The Communist Party"],
    correctAnswer: "The Communist Party",
    gif: "assets/images/luanne-communist.gif"
  }, {
    prompt: "What is Boomhauer's first name?",
    possibleAnswers: ["Charles", "Jeffrey", "Buck", "Octavio"],
    correctAnswer: "Jeffrey",
    gif: "assets/images/boomhauer-why.gif"
  }, {
    prompt: 'Who is the voice for Elroy "Lucky" Kleinschmidt?',
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

    // ---------- Object properties ---------- //

    timeRemainingDiv: $("#time-remaining"),
    questionDiv: $("#question"),
    choicesDiv: $("#choices"),
    correctAnswers: 0,
    incorrectAnswers: 0,
    questionsUnanswered: 0,
    questionNumber: 0,
    questionsRemaining: questions.length,
    nextRoundDelay: 4500,
    timerStartValue: 10,
    timerValue: 0,
    intervalId: '',    

    // ---------- Event handler methods ---------- //

    nextRound() {
      // Hide start button and show game board when the first question is displayed 
      if (game.questionNumber === 0) {
        $("#start").css("display", "none");
        $("#game-board").css("display", "inline");
      }

      // Reset and display timer
      game.timerValue = game.timerStartValue;
      game.timeRemainingDiv.html("<h2>Time remaining: " + game.timerValue + " seconds</h2>");

      if (game.questionsRemaining) {
        // start question countdown
        game.startTimer()
        // display question and answer choices
        var question = $("<h2>");
        question.text(questions[game.questionNumber].prompt);
        question.appendTo(game.questionDiv);
        var possibleAnswersLength = questions[game.questionNumber].possibleAnswers.length;
        for (var i = 0; i < possibleAnswersLength; i++) {
          var choice = $('<p class="choice">');
          choice.text(questions[game.questionNumber].possibleAnswers[i]);
          choice.appendTo(game.choicesDiv);
        }
      }
    },

    checkAnswer() {
      clearInterval(game.intervalId);
      // if answer is correct, set success message
      // if answer is incorrect, set failure message
      var correctAnswer = questions[game.questionNumber].correctAnswer;
      var chosenAnswer = $(this).text();
      var outcome = $("<h3>");
      if (chosenAnswer === correctAnswer) {
        game.correctAnswers++;
        outcome.text("Correct!");
      }
      else {
        game.incorrectAnswers++;
        outcome.html(`Nope! The correct answer was:<br>${correctAnswer}`);
      }

      // Replace question and choices with outcome message and gif
      game.clearGameBoard();
      var gif = $("<img>").attr("src", questions[game.questionNumber].gif);
      outcome.appendTo(game.questionDiv);
      gif.appendTo(game.choicesDiv);

      // Prepare for next round or end of game
      game.endRound();  
    },

    restartGame() {
      // Hide final score div
      $("#final-score").css("display", "none");
      // Reinitialize key variables
      game.correctAnswers = 0;
      game.incorrectAnswers = 0;
      game.questionsUnanswered = 0;
      game.questionsRemaining = questions.length;
      game.questionNumber = 0;
      // Restart game
      game.nextRound();
    },

    
    // ---------- Helper methods ---------- //

    startTimer() {
      game.timerValue = game.timerStartValue;
      clearInterval(game.intervalId);
      game.intervalId = setInterval(game.decrement, 1000);
    },

    decrement() {
      //  Decrease timer by one and update on page
      game.timerValue--;
      if (game.timerValue === 1) {
        game.timeRemainingDiv.html("<h2>Time remaining: " + game.timerValue + " second &nbsp;</h2>");
      }
      else {
        game.timeRemainingDiv.html("<h2>Time remaining: " + game.timerValue + " seconds</h2>");
      } 

      //  Once timer hits zero...
      if (game.timerValue == 0) {
        clearInterval(game.intervalId);
        // Increment questionsUnanswered
        game.questionsUnanswered++;
        // Set outcome message and gif
        var correctAnswer = questions[game.questionNumber].correctAnswer;
        var outcome = $("<h3>");
        outcome.html(`Time's up! The correct answer was:<br>${correctAnswer}`);
        var gif = $("<img>").attr("src", questions[game.questionNumber].gif);

        // Hide timer, replace question and choices with outcome message and gif
        game.clearGameBoard();
        outcome.appendTo(game.questionDiv);
        gif.appendTo(game.choicesDiv);

        // Prepare for next round or end of game
        game.endRound();
      }
    },

    endRound() {
      // Update key variables
      game.questionsRemaining--;
      game.questionNumber++;

      // Allow outcome and gif to display for several seconds, then continue 
      setTimeout(function () {
        game.questionDiv.empty();
        game.choicesDiv.empty();
        if (game.questionsRemaining) {
          game.nextRound();
        }
        else {
          game.gameOver();
        }
      }, game.nextRoundDelay); 
    }, 
    
    clearGameBoard() {
      game.timeRemainingDiv.empty();
      game.questionDiv.empty();
      game.choicesDiv.empty();
    },
    
    gameOver() {
      // show final score and reset button
      $("#game-board").css("display", "none");
      $("#final-score").css("display", "inline");
      $("#message").text("All done, here's how you did:");
      $("#correct-answers").text(`Correct answers: ${game.correctAnswers}`);
      $("#incorrect-answers").text(`Incorrect answers: ${game.incorrectAnswers}`);
      $("#unanswered").text(`Unanswered questions: ${game.questionsUnanswered}`);
    },

    preloadImages() {
      // pre-load gifs in an invisible div so that they will
      // display without any delay at the end of each round
      var preloadDiv = $('<div id="preload">');
      preloadDiv.css("display", "none");
      for (var i = 0; i < questions.length; i++) {
        var gif = $("<img>").attr("src", questions[i].gif);
        gif.appendTo(preloadDiv);
      }
      preloadDiv.appendTo('main');
      preloadDiv.before("<!-- Preload gif images -->");
    }
  };

  game.preloadImages();
  
  // ---------- Event listeners ---------- //

  // Start button begins game
  $('#start-button').click(game.nextRound);

  // Clicking on an answer chooses and checks that answer
  $('#choices').on('click', '.choice', game.checkAnswer);

  // Restart button restarts the game
  $('#reset').on('click', '#reset-button', game.restartGame);

});