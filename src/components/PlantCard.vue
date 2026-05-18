<template>
  <article class="plant-card">
    <div class="image-wrap">
      <PlantImage :image="plant.image" :alt="plant.title" />
    </div>
    <div class="card-body">
      <h3>{{ plant.title }}</h3>
    </div>
  </article>
</template>

<script setup lang="ts">
import PlantImage from "@/components/PlantImage.vue";

interface Plant {
  id: string;
  title: string;
  image: string;
}

const props = defineProps<{ plant: Plant }>();
</script>

<style lang="scss" scoped>
.plant-card {
  display: grid;
  gap: 0.75rem;
  border: 1px solid rgba(6, 95, 70, 0.18);
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.plant-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
}

.image-wrap {
  width: 100%;
  min-height: 10rem;
  overflow: hidden;
}

.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  aspect-ratio: 1 / 1;
}

.card-body {
  padding: 1rem;
}

h3 {
  margin: 0;
  font-size: 1.1rem;
}
</style>
