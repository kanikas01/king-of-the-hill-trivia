
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
    nextRoundDelay: 4500,
    timerStartValue: 5,
    timerValue: 5,
    intervalId: '',
    
    nextRound: function(){
      // Hide start button and show game board when the first question is displayed 
      if (game.questionNumber === 0) {
        $("#start").css("display", "none");
        $("#game-board").css("display", "inline");
      }

      game.timerValue = game.timerStartValue;
      game.timeRemainingDiv.html("<h2>" + game.timerValue + "</h2>");

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

    checkAnswer: function() {
      clearInterval(game.intervalId);
      // if answer is correct, display success message
      // if answer is incorrect, display failure message
      var correctAnswer = questions[game.questionNumber].correctAnswer;
      var chosenAnswer = $(this).text();
      var outcome = $("<h3>");
      if (chosenAnswer === correctAnswer) {
        game.correctAnswers++;
        outcome.text("Correct!");
      }
      else {
        game.incorrectAnswers++;
        outcome.text(`Nope! The correct answer was: ${correctAnswer}`);
      }

      // Replace question and choices with outcome text and gif
      game.questionDiv.empty();
      game.choicesDiv.empty();
      var gif = $("<img>").attr("src", questions[game.questionNumber].gif);
      outcome.appendTo(game.questionDiv);
      gif.appendTo(game.choicesDiv);

      // Update key variables
      game.questionsRemaining--;
      game.questionNumber++;
      

      // Display outcome and gif for several seconds, then continue 
      setTimeout(function() {
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

    startTimer: function() {
      game.timerValue = game.timerStartValue;
      clearInterval(game.intervalId);
      game.intervalId = setInterval(game.decrement, 1000);
    },

    decrement: function() {

      //  Decrease number by one.
      game.timerValue--;

      //  Show the number on page
      game.timeRemainingDiv.html("<h2>" + game.timerValue + "</h2>");


      //  Once number hits zero...
      if (game.timerValue == 0) {
        clearInterval(game.intervalId);
        game.questionsUnanswered++;
        var correctAnswer = questions[game.questionNumber].correctAnswer;
        var outcome = $("<h3>");
        outcome.text(`Time's up! The correct answer was: ${correctAnswer}`);
        game.questionDiv.empty();
        game.choicesDiv.empty();
        var gif = $("<img>").attr("src", questions[game.questionNumber].gif);
        outcome.appendTo(game.questionDiv);
        gif.appendTo(game.choicesDiv);

        // Update key variables
        game.questionsRemaining--;
        game.questionNumber++;

        // Display outcome and gif for several seconds, then continue 
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
      }
    },
    
    gameOver: function() {
      // show final score and reset button
      $("#game-board").css("display", "none");
      $("#final-score").css("display", "inline");
      $("#correct-answers").text(`Correct answers: ${game.correctAnswers}`);
      $("#incorrect-answers").text(`Incorrect answers: ${game.incorrectAnswers}`);
      $("#unanswered").text(`Unanswered questions: ${game.questionsUnanswered}`);
    },
    
    restartGame: function() {
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
    }

  };

  
  // ---------- Event listeners ---------- //

  // Start button begins game
  $('#start-button').click(game.nextRound);

  // possible answers: selects answer
  $('#choices').on('click', '.choice', game.checkAnswer);

  // Restart button restarts the game
  $('#reset').on('click', '#reset-button', game.restartGame);

});