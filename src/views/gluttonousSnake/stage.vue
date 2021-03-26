<template>
  <!-- 1rem === 16px; 2.5rem === 10px   20rem === 320px-->
  <section class="w-80 h-80 border-5 border-black relative">
    <div id="snake">
      <div
        ref="head"
        class="chunk head"
        :style="{ left: snakeInfo.X + 'px', top: snakeInfo.Y + 'px' }"
      ></div>
      <div v-if="snakeInfo.bodies">
        <div
          v-for="(body, index) in snakeInfo.bodies"
          :key="index"
          class="chunk"
          :style="{
            left: body.X + 'px',
            top: body.Y + 'px'
          }"
        ></div>
      </div>
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
  }
});
</script>
<style>
.chunk {
  @apply w-2.5 h-2.5 bg-black absolute border-2 border-green-200;
}
.head {
  @apply rounded-xl z-10;
}
</style>
