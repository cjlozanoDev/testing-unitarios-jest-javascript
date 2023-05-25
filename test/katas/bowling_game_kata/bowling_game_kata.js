export class GamePlayer {

  constructor(score) {
    this._score = score;
  }

  get scorePlayer() {
    return this._score;
  }

  roll(score = 0) {
    this._score += score;
  }
}