<template>
  <section class="h-screen flex justify-center items-center select-none">
    <div
      class="w-96 h-112 bg-green-200 border-10 border-black rounded-5xl flex flex-col justify-center items-center"
    >
      <Stage :foodInfo="foodInfo" :snakeInfo="snakeInfo" />
      <ScorePanel
        :scorePanelInfo="scorePanelInfo"
        :changeFoodPosition="changeFoodPosition"
      />
    </div>
  </section>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import Stage from './stage.vue';
import ScorePanel from './scorePanel.vue';
import GameControl from './modules/gameControl';
export default defineComponent({
  name: 'GluttonousSnake',
  components: {
    Stage,
    ScorePanel
  },
  setup() {
    const gamecontrol = reactive(new GameControl());
    const foodInfo = computed(() => {
      return {
        X: gamecontrol.food.X,
        Y: gamecontrol.food.Y
      };
    });
    const snakeInfo = computed(() => {
      return {
        X: gamecontrol.snake.X,
        Y: gamecontrol.snake.Y,
        bodies: gamecontrol.snake.bodies
      };
    });
    const scorePanelInfo = computed(() => {
      return {
        score: gamecontrol.scorePanel.score,
        level: gamecontrol.scorePanel.level
      };
    });
    // 初始化游戏
    gamecontrol.init();
    // 修改食物位置
    function changeFoodPosition() {
      gamecontrol.food.change();
    }
    return {
      foodInfo,
      snakeInfo,
      scorePanelInfo,
      changeFoodPosition
    };
  }
});
</script>
