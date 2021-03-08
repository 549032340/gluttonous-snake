<template>
  <section class="w-80 mt-5 font-bold flex justify-between">
    <div>
      SCORE: <span>{{ score }}</span>
    </div>
    <button @click="changeFoodPosition">add</button>
    <div>
      LEVEL: <span>{{ level }}</span>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  name: 'ScorePanel',
  props: {
    changeFoodPosition: {
      type: Function,
      require: true
    }
  }
  // components: {
  //   Stage
  // }
  // setup() {
  // const scorePanel = reactive(new ScoreSpanel());
  // const score = ref(scorePanel.score);
  // const level = ref(scorePanel.level);
  // const add = () => {
  //   scorePanel.addScore();
  //   score.value = scorePanel.score;
  //   level.value = scorePanel.level;
  // };
  // console.log(score, level);
  // return {
  // score,
  // level,
  // add
  // };
  // }
});
</script>
