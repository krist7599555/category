<template>
  <CategoryVue />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CategoryVue from './views/Category/Category.vue';

export default defineComponent({
  name: 'App',
  components: {
    CategoryVue
  }
});
</script>
