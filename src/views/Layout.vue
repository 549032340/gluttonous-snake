<template>
  <div class="home">
    <GluttonousSnake />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GluttonousSnake from './gluttonousSnake/index.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    GluttonousSnake
  }
});
</script>
