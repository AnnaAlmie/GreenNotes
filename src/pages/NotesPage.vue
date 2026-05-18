<template>
  <section class="page-page">
    <h2>Notes Page</h2>
    <p>
      This is a test page for GreenNotes. Use the navigation above to switch
      pages.
    </p>
    <ul>
      <li>Vue Router is configured in `src/router.ts`.</li>
      <li>Routes are defined for `/` and `/about`.</li>
    </ul>
    <TestComponent />
  </section>
</template>

<script setup lang="ts">
import TestComponent from "../components/test/TestComponent.vue";
</script>

<style lang="scss" scoped>
.page-page {
  padding: 1.5rem;
}

h2 {
  margin-top: 0;
}
</style>
