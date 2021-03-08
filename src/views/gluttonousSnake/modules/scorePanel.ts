export default class ScorePanel {
  private _score = 0;
  private _level = 1;

  // constructor() {}

  get score() {
    return this._score;
  }
  addScore() {
    this._score++;
    if (this._score % 10 === 0) {
      this.addLevel();
    }
  }

  get level() {
    return this._level;
  }
  addLevel() {
    if (this._level < 10) {
      this._level++;
    }
  }
}
