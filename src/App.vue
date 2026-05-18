<template>
  <main class="app-shell">
    <section>
      <h1>GreenNotes</h1>
      <p>
        Welcome to your new Vue + Vite starter app. Push to
        <code>main</code> and GitHub Actions will build and publish it to
        <code>gh-pages</code>.
      </p>
    </section>
  </main>
</template>

<style>
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
  background: #ecfdf5;
  color: #065f46;
}

.app-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
}

section {
  max-width: 44rem;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 24px 64px rgba(15, 23, 42, 0.12);
}

h1 {
  margin: 0 0 1rem;
  font-size: clamp(2.25rem, 5vw, 3rem);
}

p {
  margin: 0;
  line-height: 1.75;
  color: #134e4a;
}

code {
  background: #d1fae5;
  padding: 0.15em 0.35em;
  border-radius: 0.35em;
  font-size: 0.95em;
}
</style>
