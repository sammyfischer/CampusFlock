<template>
  <v-app>
    <!-- Desktop Sidebar / Navigation Drawer -->
    <v-navigation-drawer v-if="!display.mobile" v-model="drawer" permanent app>
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

    <!-- Mobile Bottom Navigation Bar -->
    <v-bottom-navigation v-else app grow :value="false">
      <v-btn @click="navigateTo('/home')">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn @click="navigateTo('/profile')">
        <span>Profile</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <!-- App Bar -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>CampusFlock</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>
    </v-app-bar>

    <!-- Main content area where routed components are displayed -->
    <v-main>
      <v-container>
        <router-view></router-view> <!-- This renders the active route's component -->
      </v-container>
    </v-main>

    <v-btn fab color="primary" class="floating-button" @click="onCreateEventClick()" icon="mdi-plus" />

    <CreateEvent v-model="createEventDialog" />
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouteLocation, useRouter } from 'vue-router';
import { useDisplay, useTheme } from 'vuetify';
import CreateEvent from './components/CreateEvent.vue';

const router = useRouter();
const display = useDisplay();
const theme = useTheme();

const drawer = ref(false); // Define a reactive variable for drawer state
const createEventDialog = ref(false)

switch (localStorage['theme']) {
  case 'light':
  case 'dark':
    theme.global.name.value = localStorage['theme'];
    break;
}

function navigateTo(route: RouteLocation) {
  router.push(route);
  if (display.mobile) {
    drawer.value = false; // Close the drawer on mobile after navigation
  }
}

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
  localStorage['theme'] = theme.global.name.value;
}

function onCreateEventClick() {
  createEventDialog.value = true;
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
