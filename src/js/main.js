// require
const Game = require('./game.js');

game = new Game('たくま', 'けいと');
game.startGame();
game.stopGame();
game.finishGame();

// こんな感じで操作したい
game.black.moveKoma('object_id', 3, 5);
