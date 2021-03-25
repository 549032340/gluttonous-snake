<template>
  <section class="w-80 mt-5 font-bold flex justify-between">
    <div>
      SCORE: <span>{{ scorePanelInfo.score }}</span>
    </div>
    <!-- <button @click="changeFoodPosition">add</button> -->
    <div>
      LEVEL: <span>{{ scorePanelInfo.level }}</span>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ScorePanel',
  props: {
    changeFoodPosition: {
      type: Function,
      require: true
    },
    scorePanelInfo: {
      type: Object,
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
