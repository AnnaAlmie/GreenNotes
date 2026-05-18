<template>
  <main class="app-shell">
    <AsideMenu />

    <div class="content-wrap">
      <section class="app-content">
        <router-view />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import AsideMenu from "./components/AsideMenu.vue";
</script>

<style lang="scss">
@use "sass:color";

$bg: #ecfdf5;
$text: #065f46;
$panel: #ffffff;
$shadow: rgba(15, 23, 42, 0.12);

:root {
  color-scheme: light;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

body {
  margin: 0;
  background: $bg;
  color: $text;
}

.app-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
}

.app-content {
  width: 100%;
  background: $panel;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 24px 64px $shadow;
}

.content-wrap {
  width: 100%;
}

@media (min-width: 880px) {
  .app-shell {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 1.5rem;
    align-items: start;
  }
}

@media (max-width: 879px) {
  .app-shell {
    display: block;
  }
}

h1 {
  margin: 0 0 1rem;
  font-size: clamp(2.25rem, 5vw, 3rem);
}

p {
  margin: 0;
  line-height: 1.75;
  color: color.adjust($text, $lightness: -10%);
}

code {
  background: #d1fae5;
  padding: 0.15em 0.35em;
  border-radius: 0.35em;
  font-size: 0.95em;
}
</style>
