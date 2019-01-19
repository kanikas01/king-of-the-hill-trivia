# TriviaGame
Trivia game utilizing JavaScript and jQuery

This is a short trivia game based on the TV show "King of the Hill". Each question is timed, and at the end of the game the user is shown a summary screen with the number of correct, incorrect and unanswered questions.

The game code utilizes an object-oriented approach, with game functionality being controlled by a game object, and all questions represented as question objects which are organized into an array.

While testing the game on github pages, I noticed that the appearance of the gif images at the end of each round was often delayed by a second or so.  I was able to correct this by preloading all gifs into a hidden div when the page loads.