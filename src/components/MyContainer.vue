<script lang="ts" setup>
const props = defineProps<{ title: string }>()
</script>

<template>
  <div class="container">
    <div class="container-title">
      <h2>{{ props.title }}</h2>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  width: 40rem;
  border: 1px solid #fff;
  background-color: rgba(222, 222, 222, 0.75);
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 1rem 2.1rem;
}

.container-title {
  font-size: 1.4rem;
  line-height: 1;
  margin-bottom: 1.2rem;
}
</style>
