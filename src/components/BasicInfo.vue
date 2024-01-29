<script lang="ts" setup>
import MyContainer from './MyContainer.vue'
import IconPopular from './icons/IconPopular.vue'
</script>

<template>
  <div class="word-basic-info">
    <my-container title="build">
      <div class="popularity-icons">
        <span class="icon-wrapper">
          <icon-popular></icon-popular>
        </span>
        <span class="icon-wrapper">
          <icon-popular></icon-popular>
        </span>
        <span class="icon-wrapper">
          <icon-popular></icon-popular>
        </span>
        <span class="icon-wrapper">
          <icon-popular></icon-popular>
        </span>
        <span class="icon-wrapper">
          <icon-popular></icon-popular>
        </span>
      </div>
      <div class="category-tags">
        <span class="category-tag-item">高中</span>
        <span class="category-tag-item">CET4</span>
        <span class="category-tag-item">CET6</span>
        <span class="category-tag-item">考研</span>
      </div>
      <div class="phonetic-symbols">
        <div class="phonetic-symbol-item">
          <span class="phonetic-symbol-type">英</span>
          <span class="phonetic-symbol-text">/ build /</span>
        </div>
        <div class="phonetic-symbol-item">
          <span class="phonetic-symbol-type">英</span>
          <span class="phonetic-symbol-text">/ build /</span>
        </div>
      </div>
    </my-container>
  </div>
</template>

<style scoped>
.category-tags,
.phonetic-symbols,
.popularity-icons {
  display: flex;
  line-height: 1.3rem;
}

.phonetic-symbol-item {
  margin-right: 2rem;
}

.category-tags > .category-tag-item:not(:last-child)::after {
  content: '/';
  margin: 0 0.2rem;
}

.phonetic-symbol-type {
  margin-right: 0.3rem;
}

.popularity-icons {
  height: 1.3rem;
}
</style>
