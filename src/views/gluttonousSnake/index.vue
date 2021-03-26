<template>
  <section class="main">
    <div class="content">
      <Stage :foodInfo="foodInfo" :snakeInfo="snakeInfo" />
      <ScorePanel
        :scorePanelInfo="scorePanelInfo"
        :changeFoodPosition="changeFoodPosition"
      />
      <Operation class="popover" :start="startGame" v-show="!isAlive" />
    </div>
  </section>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import Stage from './stage.vue';
import ScorePanel from './scorePanel.vue';
import Operation from './operation.vue';
import GameControl from './modules/gameControl';
export default defineComponent({
  name: 'GluttonousSnake',
  components: {
    Stage,
    ScorePanel,
    Operation
  },
  setup() {
    const gamecontrol = reactive(new GameControl());
    const isAlive = computed(() => {
      return gamecontrol.isAlive;
    });
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
    // 开始游戏
    function startGame() {
      gamecontrol.init();
    }
    // 修改食物位置
    function changeFoodPosition() {
      gamecontrol.food.change();
    }
    return {
      foodInfo,
      snakeInfo,
      scorePanelInfo,
      changeFoodPosition,
      startGame,
      isAlive
    };
  }
});
</script>
<style>
.main {
  @apply h-screen flex justify-center items-center select-none;
}
.content {
  @apply w-96 h-112 bg-green-200 border-10 border-black rounded-5xl flex flex-col justify-center items-center relative;
}
.popover {
  @apply absolute z-10;
}
</style>
