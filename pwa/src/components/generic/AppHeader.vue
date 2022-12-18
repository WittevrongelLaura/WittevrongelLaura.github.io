<template>
  <header class="hidden px-6 py-6 sm:flex">
    <nav
      class="mx-auto flex h-9 flex-1 items-center justify-between sm:max-w-6xl"
    >
      <AppNavigation />
    </nav>
  </header>
</template>

<script lang="ts">
import AppNavigation from './AppNavigation.vue'

export default {
  components: {
    AppNavigation,
  },

  setup() {},
}
</script>
