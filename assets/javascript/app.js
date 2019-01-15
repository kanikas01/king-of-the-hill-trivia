
// Gameplay can begin when DOM is loaded
$(document).ready(function () {
  
  // Define game object
  var game = {

    questions = [{
      prompt: "What political party did Luanne support in the 2004 election?",
      possibleAnswers: ["The Democratic Party", "The Republican Party", "The Libertarian Party", "The Communist Party"],
      correctAnswer: this.possibleAnswers[3],
      gif: "../images/luanne-communist.gif"
    }, {
      prompt: "What is Peggy Hill's maiden name?",
      possibleAnswers: ["Platter", "Gribble", "Pewterschmidt", "Bouvier"],
      correctAnswer: this.possibleAnswers[0]
    }, {
      prompt: "What alias does Dale Gribble use most frequently?",
      possibleAnswers: ["Joe Jack", "Dusty Hill", "Rusty Shackelford", "Gilbert Dauterive"],
      correctAnswer: this.possibleAnswers[2]
    }, {
      prompt: "What does Dale Gribble call the van he uses for his extermination business?",
      possibleAnswers: ["The Queen Machine", "The Bugabago", "My Cadillac Car", "Lenore"],
      correctAnswer: this.possibleAnswers[1]
    }, {
      prompt: "What does Hank Hill sell for a living?",
      possibleAnswers: ["Jeans", "Tractors", "Pickup Trucks", "Propane and propane accessories"],
      correctAnswer: this.possibleAnswers[3]
    }, {
      prompt: "Who is Joseph Gribble's biological father?",
      possibleAnswers: ["John Redcorn", "Bill Dautrive", "Principal Moss", "Hank Hill"],
      correctAnswer: this.possibleAnswers[0],
        gif: "../images/john-redcorn-nancy-dance.gif"
    }, {
      prompt: "What is Boomhauer's first name?",
      possibleAnswers: ["Charles", "Jeffery", "Buck", "Octavio"],
      correctAnswer: this.possibleAnswers[1]
    }, {
      prompt: 'Who was the voice for Elroy "Lucky" Kleinschmidt?',
      possibleAnswers: ["Mike Judge", "Stephen Root", "Trace Adkins", "Tom Petty"],
      correctAnswer: this.possibleAnswers[3],
      gif: "../images/lucky-slips.gif"
    }]
  };

  // Define question objects
  var question_1 = {
    prompt: "What political party did Luanne support in the 2004 election?",
    possibleAnswers: ["Democratic", "Republican", "Libertarian", "Communist"],
    correctAnswer: this.possibleAnswers[3]
  }

  var question_2 = {
    prompt: "What is Peggy Hill's maiden name?",
    possibleAnswers: ["Platter", "Gribble", "Pewterschmidt", "Bouvier"],
    correctAnswer: this.possibleAnswers[0]
  }

  var question_3 = {
    prompt: "What alias does Dale Gribble use most frequently?",
    possibleAnswers: ["Joe Jack", "Dusty Hill", "Rusty Shackelford", "Gilbert Dauterive"],
    correctAnswer: this.possibleAnswers[2]
  }

  var question_4 = {
    prompt: "What does Dale Gribble call the van he uses for his extermination business?",
    possibleAnswers: ["The Queen Machine", "The Bugabago", "My Cadillac Car", "Lenore"],
    correctAnswer: this.possibleAnswers[1]
  }

  var question_5 = {
    prompt: "What does Hank Hill sell for a living?",
    possibleAnswers: ["Jeans", "Tractors", "Pickup Trucks", "Propane and propane accessories"],
    correctAnswer: this.possibleAnswers[3]
  }

  var question_6 = {
    prompt: "Who is Joseph Gribble's biological father?",
    possibleAnswers: ["John Redcorn", "Bill Dautrive", "Principal Moss", "Hank Hill"],
    correctAnswer: this.possibleAnswers[0]
  }

  var question_7 = {
    prompt: "What is Boomhauer's first name?",
    possibleAnswers: ["Charles", "Jeffery", "Buck", "Octavio"],
    correctAnswer: this.possibleAnswers[1]
  }

  var question_8 = {
    prompt: 'Who was the voice for Elroy "Lucky" Kleinschmidt?',
    possibleAnswers: ["Mike Judge", "Stephen Root", "Trace Adkins", "Tom Petty"],
    correctAnswer: this.possibleAnswers[3]
  }

  // Add questions to array
  // TODO
  
  // ---------- Event listeners ---------- //

  // start button: begins game
  // possible answers: selects answer
  // restart button: restarts game

});