<script setup lang="ts">
import { ref } from 'vue'
import MyContainer from '@/components/MyContainer.vue'
import BasicInfo from '@/components/BasicInfo.vue'

const width = ref(document.documentElement.clientWidth)

window.addEventListener('resize', () => {
  width.value = document.documentElement.clientWidth
})
</script>

<template>
  <my-container title="此处为标题" style="margin-bottom: 200px">
    <p>{{ width }}</p>
  </my-container>
  <basic-info></basic-info>
</template>

<style scoped></style>
