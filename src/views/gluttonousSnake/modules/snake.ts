class Snake {
  private _length = 1;
  private _X = 0;
  private _Y = 0;
  get length() {
    return this._length;
  }
  get X() {
    return this._X;
  }
  set X(X: number) {
    if (this.X === X) return;
    if (X < 0 || X > 300) {
      throw new Error('蛇撞墙了！');
    }
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
    this._Y = Y;
  }

  eat() {
    this._length++;
  }
}

export default Snake;

// export {
//   Snake
// }
