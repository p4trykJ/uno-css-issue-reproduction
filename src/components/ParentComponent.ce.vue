<script setup lang="ts">
import ChildrenComponentCe from './ChildrenComponent.ce.vue'
</script>

<template>
  <div>
    <h3 class="text-blue">Parent component (text-blue class added and not working)</h3>
    <ChildrenComponentCe></ChildrenComponentCe>
  </div>
</template>

<style>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
