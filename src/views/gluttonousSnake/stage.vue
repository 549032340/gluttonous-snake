<template>
  <!-- 1rem === 16px; 2.5rem === 10px   20rem === 320px-->
  <section class="w-80 h-80 border-5 border-black relative">
    <div>
      <div
        ref="head"
        class="chunk"
        :style="{ left: snakeInfo.X + 'px', top: snakeInfo.Y + 'px' }"
      ></div>
      <div ref="body" class="chunk"></div>
    </div>
    <div
      ref="food"
      class="chunk"
      :style="{
        left: foodInfo.X + 'px',
        top: foodInfo.Y + 'px'
      }"
    ></div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Stage',
  props: {
    foodInfo: {
      type: Object,
      require: true
    },
    snakeInfo: {
      type: Object,
      require: true
    }
  },
  setup() {
    // 食物
    // const food = reactive(new Food());
    // const foodX = computed(() => {
    //   return food.X;
    // });
    // const foodY = computed(() => {
    //   return food.Y;
    // });
    // const change = () => {
    //   food.change();
    // };
    // change();
    // 蛇
    // const snake = reactive(new Snake());
    // const snakeX = computed(() => {
    //   return snake.X;
    // });
    // const snakeY = computed(() => {
    //   return snake.Y;
    // });
    // function moveUpX(): void {
    //   const move = () => {
    //     setTimeout(() => {
    //       snake.moveX('right');
    //       moveUpX();
    //     }, 500);
    //   };
    //   if (snakeX.value < 300) {
    //     move();
    //   } else {
    //     console.log('game over');
    //   }
    // }
    // function moveUpY(): void {
    //   const move = () => {
    //     setTimeout(() => {
    //       snake.moveY('up');
    //       moveUpY();
    //     }, 500);
    //   };
    //   if (snakeX.value < 300) {
    //     move();
    //   } else {
    //     console.log('game over');
    //   }
    // }

    // moveUpX();
    return {
      // foodX,
      // foodY,
      // snakeX,
      // snakeY
    };
  }
});
</script>
<style>
.chunk {
  @apply w-2.5 h-2.5 bg-black absolute border-2 border-green-200;
}
</style>
