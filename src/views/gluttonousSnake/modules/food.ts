export default class Food {
  _X: number;
  _Y: number;

  constructor() {
    this._X = this.randomNumber();
    this._Y = this.randomNumber();
  }
  get X() {
    return this._X;
  }

  get Y() {
    return this._Y;
  }

  change() {
    const X = this.randomNumber();
    const Y = this.randomNumber();
    this._X = X;
    this._Y = Y;
    console.log(X, Y);
  }

  randomNumber(): number {
    return Math.round(Math.random() * 30) * 10;
  }
}
