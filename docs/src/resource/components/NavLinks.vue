<template>
  <!-- 给h标题添加id，vitepress即可自动生成目录 -->
  <h2 v-if="title" :id="formatTitle">
    {{ title }}
  </h2>
  <div class="mj-links">
    <NavLink
      v-for="{ icon, title, desc, link } in items"
      :key="link"
      :icon="icon"
      :title="title"
      :desc="desc"
      :link="link"
    />
  </div>
</template>

<script setup lang="ts">
import NavLink from './NavLink.vue'
import { slugify } from '@mdit-vue/shared'
import { computed } from 'vue'

const props = defineProps<{
  title: string
  items: []
}>()

const formatTitle = computed(() => slugify(props.title))
</script>

<style lang="scss" scoped>
.mj-links {
  --gap: 10px;
  display: grid;
  // 至少120px，还有空余则一起等分
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-auto-rows: 115px;
  // grid-auto-flow: row dense;
  justify-content: center;
  column-gap: var(--gap);
  row-gap: var(--gap);
  margin-top: var(--gap);
}

@each $media,
  $size
    in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px)
{
  @media (min-width: $media) {
    .mj-links {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}

@media (min-width: 960px) {
  .mj-links {
    --gap: 20px;
  }
}

@media (max-width: 960px) {
  .mj-links {
    grid-auto-rows: 100px;
  }
}
</style>
