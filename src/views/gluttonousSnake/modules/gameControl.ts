import Food from './food';
import Snake from './snake';
import ScorePanel from './scorePanel';

export default class GameControl {
  food: Food;
  snake: Snake;
  scorePanel: ScorePanel;
  isAlive: boolean;
  direction: string;
  constructor() {
    this.food = new Food();
    this.snake = new Snake();
    this.scorePanel = new ScorePanel();
    this.direction = '';
    this.isAlive = true;
  }

  init() {
    // document.addEventListener('keydown',this.keydownHandler.bind(this))
    window.document.onkeydown = this.keydownHandler.bind(this);
  }

  keydownHandler(evt: KeyboardEvent) {
    // 如果点击的按键和上一次一致，那么忽略
    if (evt.code === this.direction) return;
    this.direction = evt.code;
    this.run();
  }

  /*
   * 问题1：再次点击按钮会造成蛇的加速，因为在不断添加定时器;
   * 预期解决方案：通过闭包，给定时器设置一个值，每次执行方法就覆盖这个值，保证只有一个定时器在运行
   * 出现的问题：闭包return的function未执行
   */
  run() {
    if (!this.isAlive) return;
    let X = this.snake.X;
    let Y = this.snake.Y;
    switch (this.direction) {
      case 'ArrowRight':
        X += 10;
        break;
      case 'ArrowLeft':
        X -= 10;
        break;
      case 'ArrowUp':
        Y -= 10;
        break;
      case 'ArrowDown':
        Y += 10;
        break;
      default:
        break;
    }

    try {
      this.snake.X = X;
      this.snake.Y = Y;
      this.checkEat(X, Y);
    } catch (err) {
      alert(err.message);
      this.isAlive = false;
    }

    let timer = null;
    // 问题1：未执行
    return function() {
      console.log(123);

      timer = this.isAlive ? setTimeout(this.run.bind(this), 300) : null;
    };
  }
  // this.isAlive && setTimeout(this.run.bind(this, end), 300); // 300 - (this.scorePanel.level - 1) * 30

  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      console.log('吃到食物了！');
    }
  }
}
