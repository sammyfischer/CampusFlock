<script setup lang="ts">
import { useTheme } from 'vuetify';
import ProfilePage from './views/ProfilePage.vue';

var theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-btn icon="mdi-theme-light-dark" @click="toggleTheme()"></v-btn>
  <ProfilePage />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
