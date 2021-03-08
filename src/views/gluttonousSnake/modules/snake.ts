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
  get Y() {
    return this._Y;
  }

  eat() {
    this._length++;
  }

  moveX(direction) {
    this._X += direction === 'right' ? 10 : -10;
    // console.log(this._X);
  }
  moveY(direction) {
    this._Y += direction === 'up' ? 10 : -10;
    // console.log(this._Y);
  }
}

export default Snake;

// export {
//   Snake
// }
