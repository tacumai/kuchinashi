const Player = require('./player.js');

class Game {
  constructor(player1, player2) {
    this.black = new Player(player1);
    this.white = new Player(player2);
  }

  startGame() {
    console.log('ゲームを開始します.');
    console.log(this.black.name);
    console.log(this.white.name);
    console.log(this.black.own_koma);
  }

  stopGame() {
    console.log('ゲームを中止します.');
  }

  finishGame() {
    console.log('ゲームを終了します.');
  }
}

module.exports = Game;
