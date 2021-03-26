interface Body {
  X: number;
  Y: number;
}
class Snake {
  private _X: number;
  private _Y: number;
  private _bodies: Array<Body>;
  constructor() {
    this._X = 0;
    this._Y = 0;
    this._bodies = [];
  }
  get bodies() {
    return this._bodies;
  }
  get X() {
    return this._X;
  }
  set X(X: number) {
    if (this.X === X) return;
    if (X < 0 || X > 300) {
      console.log(X,'撞墙了');
      throw new Error('蛇撞墙了！');
    }
    // 🐍有身体之后，禁止🐍掉头
    if (this.bodies[0] && this.bodies[0].X === X) {
      // 水平方向发生掉头
      if (X > this.X) {
        X = this.X - 10;
      } else {
        X = this.X + 10;
      }
    }
    // 是否碰撞身体检测
    this.checkHeadBody(X, null);
    this.moveBody();
    this._X = X;
  }

  get Y() {
    return this._Y;
  }
  set Y(Y: number) {
    if (this.Y === Y) return;
    if (Y < 0 || Y > 300) {
      console.log(Y,'撞墙了');
      throw new Error('蛇撞墙了！');
    }

    // 🐍有身体之后，禁止🐍掉头
    if (this.bodies[0] && this.bodies[0].Y === Y) {
      // 垂直方向发生掉头
      if (Y > this.Y) {
        Y = this.Y - 10;
      } else {
        Y = this.Y + 10;
      }
    }

    // 是否碰撞身体检测
    this.checkHeadBody(null, Y);
    this.moveBody();
    this._Y = Y;
  }

  addBody() {
    this._bodies.push({
      X: this.X,
      Y: this.Y
    });
  }

  moveBody() {
    for (let i = this._bodies.length; i > 0; i--) {
      if (i === 1) {
        this._bodies[i - 1].X = this.X;
        this._bodies[i - 1].Y = this.Y;
      } else {
        this._bodies[i - 1].X = this._bodies[i - 2].X;
        this._bodies[i - 1].Y = this._bodies[i - 2].Y;
      }
    }
  }

  checkHeadBody(X, Y) {
    this._bodies.forEach(body => {
      if (body.X === (X ? X : this.X) && body.Y === (Y ? Y : this.Y)) {
        throw new Error('撞到自己了！');
      }
    });
  }
}

export default Snake;
