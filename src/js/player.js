const Koma = require('./koma.js');

class Player {
  constructor(name) {
    this.name = name;
    this.own_koma = [];
    this.komadai = [];
    this.setAllKoma();
  }

  setAllKoma() {
    for(let i = 0; i < 21; i++) {
      this.own_koma.push(new Koma());
    }
  }
}

module.exports = Player;
