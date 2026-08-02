<template>
  <section class="page-page">
    <h2><span class="icon" aria-hidden="true"></span>Plant Cards</h2>
    <p>
      This page renders plant cards from JSON data. Click a card to view full
      details for that plant.
    </p>

    <div class="cards-grid">
      <router-link
        v-for="plant in plants"
        :key="plant.id"
        :to="{ name: 'PlantDetail', params: { id: plant.id } }"
        class="card-link"
      >
        <PlantCard :plant="plant" />
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import PlantCard from "../components/PlantCard.vue";
import plantData from "../data/plants.json";

interface Plant {
  id: string;
  title: string;
  image: string;
  fertilizersIcon: Array<
    "mineral" | "organic" | "flower" | "leaf" | "cactus" | "citrus"
  >;
  description: string;
  light: string;
  water: string;
}

const plants: Plant[] = plantData as Plant[];
</script>

<style lang="scss" scoped>
.page-page {
  padding: 1.5rem;
}

h2 {
  margin-top: 0;
}

.cards-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-top: 1.5rem;
}

.card-link {
  display: block;
  color: inherit;
  text-decoration: none;
}
</style>

<style lang="scss" scoped>
.page-page {
  padding: 1.5rem;
}

h2 {
  margin-top: 0;
}

.cards-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-top: 1.5rem;
}
</style>
