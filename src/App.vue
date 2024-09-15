<template>
  <v-app>
    <v-navigation-drawer
      v-if="!display.mobile"
      v-model="drawer"
      permanent
      app
    >
      <v-list>
        <v-list-item @click="navigateTo('/home')" link>
          <v-icon>mdi-home</v-icon>
          Home
        </v-list-item>

        <v-list-item @click="navigateTo('/profile')" link>
          <v-icon>mdi-account</v-icon>
          Profile
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-bottom-navigation
      v-else
      app
      grow
      v-model="activeTab"
    >
      <v-btn @click="navigateTo('/home')" value="/home">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn @click="navigateTo('/profile')" value="/profile">
        <span>Profile</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-app-bar app color="primary" dark>
      <v-toolbar-title>CampusFlock</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        dense
        flat
        hide-details
        solo-inverted
        placeholder="Search..."
        append-icon="mdi-magnify"
        v-model="searchQuery"
        @keyup.enter="handleSearch"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-btn fab color="primary" class="floating-button" @click="onCreateEventClick()" icon="mdi-plus" />

    <CreateEvent v-model="createEventDialog" />
  </v-app>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useDisplay, useTheme } from 'vuetify';
import CreateEvent from './components/CreateEvent.vue';

const router = useRouter();
const route = useRoute();
const display = useDisplay();
const theme = useTheme();

const drawer = ref(false);
const activeTab = ref(route.path);
const searchQuery = ref('');  // Store the search query input

watch(() => route.path, (newPath) => {
  activeTab.value = newPath;
});
const createEventDialog = ref(false)

switch (localStorage['theme']) {
  case 'light':
  case 'dark':
    theme.global.name.value = localStorage['theme'];
    break;
}

function navigateTo(route) {
  // Check if the new route is different from the current one
  if (route !== router.currentRoute.value.path) {
    router.push(route);
    activeTab.value = route; // Only update if the route changes
    if (display.mobile) {
      drawer.value = false; // Close the drawer on mobile after navigation
    }
  }
}

function handleSearch() {
  router.push({ name: 'SearchPage', query: { query: searchQuery.value } });
  // searchQuery.value = ''; // Optionally clear the search field after search;
  localStorage['theme'] = theme.global.name.value;
}

function onCreateEventClick() {
  createEventDialog.value = true;
}

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
  localStorage['theme'] = theme.global.name.value;
}
</script>

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

.floating-button {
  position: fixed;
  right: 20px;
  bottom: 80px;
  z-index: 100;
}
</style>
