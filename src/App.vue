<template>
  <main class="app-shell">
    <nav class="app-nav">
      <router-link to="/">Notes</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <section class="app-content">
      <router-view />
    </section>
  </main>
</template>

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

.app-nav {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.app-nav a {
  color: $text;
  text-decoration: none;
  font-weight: 700;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(6, 95, 70, 0.12);
}

.app-nav a.router-link-active {
  background: #065f46;
  color: white;
}

.app-content {
  width: 100%;
  max-width: 44rem;
  background: $panel;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 24px 64px $shadow;
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
