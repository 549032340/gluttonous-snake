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
  }

  disableRefresh(evt) {
    evt = evt ? evt : window.event;
    if (evt.code) {
      this.direction = evt.code;
      console.log(evt.code);
    }
  }
}
