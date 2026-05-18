<template>
  <aside class="app-aside">
    <router-link to="/">
      <h3 class="aside-title">All plants</h3>
    </router-link>

    <nav class="aside-list" role="navigation" aria-label="Plants">
      <router-link
        v-for="p in plantsList"
        :key="p.id"
        class="aside-item"
        :to="{ name: 'PlantDetail', params: { id: p.id } }"
      >
        {{ p.title }}
      </router-link>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import plants from "../data/plants.json";

interface Plant {
  id: number;
  title: string;
  image: string;
}

const plantsList: Plant[] = plants as Plant[];
</script>

<style lang="scss" scoped>
.app-aside {
  padding: 1rem 0.5rem;
  width: 220px;
}

.aside-title {
  margin: 0 0 0.75rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: inherit;
}

.aside-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.aside-item {
  display: block;
  padding: 0.45rem 0.6rem;
  border-radius: 0.5rem;
  color: inherit;
  background: transparent;
}

.aside-item.router-link-active {
  background: currentColor;
  color: #fff;
}
</style>
