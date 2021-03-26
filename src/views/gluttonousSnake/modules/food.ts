interface Body {
  X: number;
  Y: number;
}
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

  change(bodies?: Array<Body>) {
    const { X, Y } = this.createFood(bodies);
    this._X = X;
    this._Y = Y;
  }

  createFood(bodies?: Array<Body>) {
    let X: number, Y: number;
    // 如果已存在身体，校验生成的食物是否存在身体内，如果存在重新生成，直到食物不存在身体中
    const create = () => {
      X = this.randomNumber();
      Y = this.randomNumber();
      if (bodies) {
        const res = bodies.some(body => body.X === X && body.Y === Y);
        if (res) {
          console.log('食物生成在🐍的身体内，重新生成!');
          create();
        }
      }
    };
    create();
    return { X, Y };
  }

  randomNumber(): number {
    return Math.round(Math.random() * 30) * 10;
  }
}
