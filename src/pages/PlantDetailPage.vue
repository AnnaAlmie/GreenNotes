<template>
  <section class="detail-page" v-if="plant">
    <router-link to="/" class="back-link">← Back to all plants</router-link>

    <div class="detail-card">
      <div class="detail-image">
        <PlantImage :image="plant.image" :alt="plant.title" />
      </div>
      <div class="detail-body">
        <h2>{{ plant.title }}</h2>
        <p v-if="plant.description" class="description">
          {{ plant.description }}
        </p>
        <dl>
          <div v-if="plant.light">
            <dt>Light</dt>
            <dd>{{ plant.light }}</dd>
          </div>
          <div v-if="plant.water">
            <dt>Water</dt>
            <dd>{{ plant.water }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import plants from "@/data/plants.json";
import PlantImage from "@/components/PlantImage.vue";

interface Plant {
  id: string;
  title: string;
  image: string;
  description: string;
  light: string;
  water: string;
}

const route = useRoute();
const router = useRouter();

const plant = computed(() => {
  const id = route.params.id as string;
  return (plants as Plant[]).find((item) => item.id === id);
});

watch(
  plant,
  (currentPlant) => {
    if (!currentPlant) {
      router.replace("/");
    }
  },
  { immediate: true },
);
</script>

<style lang="scss" scoped>
.detail-page {
  padding: 1.5rem;
}

.detail-card {
  display: grid;
  gap: 1.5rem;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(15, 23, 42, 0.12);
}

.detail-image img {
  width: 100%;
  height: 24rem;
  object-fit: cover;
  display: block;
}

.detail-body {
  padding: 1.75rem;
}

h2 {
  margin: 0 0 1rem;
}

.description {
  margin: 0 0 1.5rem;
  line-height: 1.75;
}

dl {
  display: grid;
  gap: 0.75rem;
  margin: 0 0 1.5rem;
}

dt {
  font-weight: 700;
}

dd {
  margin: 0 0 0.5rem 0;
  color: #374151;
}

.back-link {
  display: inline-block;
  color: #065f46;
  text-decoration: none;
  font-weight: 700;
  margin-bottom: 1.5rem;
}
</style>
