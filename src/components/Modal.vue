<template>
  <div class="modal" :class='{"is-active": active}'>
    <div class="modal-background" @click="e => $emit('update:active', false)"></div>
    <div class="modal-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    active: Boolean,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
