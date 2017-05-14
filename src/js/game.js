class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  startGame() {
    console.log('ゲームを開始します.');
    console.log(`先手は${this.player1}です。`);
    console.log(`後手は${this.player2}です。`);
  }

  stopGame() {
    console.log('ゲームを中止します.');
  }

  finishGame() {
    console.log('ゲームを終了します.');
  }
}

module.exports = Game;
