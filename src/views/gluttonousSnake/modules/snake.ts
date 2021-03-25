class Snake {
  private _X = 0;
  private _Y = 0;
  _bodies = [];
  get bodies() {
    return this._bodies;
  }
  get X() {
    return this._X;
  }
  set X(X: number) {
    if (this.X === X) return;
    if (X < 0 || X > 300) {
      throw new Error('蛇撞墙了！');
    }
    // // 禁止蛇掉头
    // if (this.bodies[1] && this.bodies[1].X === X) {
    //   if (X > this.X) {
    //     X = this.X - 10;
    //   } else {
    //     X = this.X + 10;
    //   }
    // }

    this.moveBody();

    this._X = X;
  }

  get Y() {
    return this._Y;
  }
  set Y(Y: number) {
    if (this.Y === Y) return;
    if (Y < 0 || Y > 300) {
      throw new Error('蛇撞墙了！');
    }
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
}

export default Snake;
