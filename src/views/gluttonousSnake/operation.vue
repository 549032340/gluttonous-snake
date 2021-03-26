<template>
  <section class="main">
    <button class="start" @click="start">开始游戏</button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Operation',
  props: {
    start: {
      type: Function,
      require: true
    }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped>
.main {
  @apply font-bold;
}
.start {
  @apply text-5xl bg-green-400 p-4 rounded-lg border-0 outline-none hover:bg-green-500 active:bg-green-300;
}
</style>
