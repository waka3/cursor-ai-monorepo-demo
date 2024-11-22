<template>
  <button 
    class="ui-button"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VueButton',
  emits: ['click']
});
</script>

<style scoped>
.ui-button {
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
}

.ui-button:hover {
  background: #f5f5f5;
}
</style> 