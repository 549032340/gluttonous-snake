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
    this.isAlive = false;
  }

  init() {
    // document.addEventListener('keydown',this.keydownHandler.bind(this))
    window.document.onkeydown = this.keydownHandler.bind(this);

    this.isAlive = true;
    this.direction = 'ArrowRight';

    /*
     * 在初始化的时候运行run()而不是在keydownHandler()运行run()的原因：
     *     如果在在keydownHandler中执行run，每次点击按钮的时候都会执行一次，会添加多次定时器，🐍的移动速度会越来越快
     */
    this.run();
  }

  keydownHandler(evt: KeyboardEvent) {
    this.direction = evt.code;
  }
  run() {
    if (!this.isAlive) return;
    let X = this.snake.X;
    let Y = this.snake.Y;
    switch (this.direction) {
      case 'KeyD':
      case 'Right':
      case 'ArrowRight':
        X += 10;
        break;
      case 'KeyA':
      case 'Left':
      case 'ArrowLeft':
        X -= 10;
        break;
      case 'KeyW':
      case 'Up':
      case 'ArrowUp':
        Y -= 10;
        break;
      case 'KeyS':
      case 'Down':
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
      alert(err.message + 'GAME OVER！ 得分：' + this.scorePanel.score);
      this.restart();
    }
    this.isAlive &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.scorePanel.addScore();
      this.food.change(this.snake.bodies);
      this.snake.addBody();
    }
  }

  restart() {
    this.food = new Food();
    this.snake = new Snake();
    this.scorePanel = new ScorePanel();
    this.isAlive = false;
    this.direction = '';
  }
}
