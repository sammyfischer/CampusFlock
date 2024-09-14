<template>
  <v-app>
    <!-- Desktop Sidebar / Navigation Drawer -->
    <v-navigation-drawer
      v-if="!display.mobile"
      v-model="drawer"
      permanent
      app
    >
      <v-list>
        <v-list-item @click="navigateTo('/home')" link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Home</v-list-item-content>
        </v-list-item>

        <v-list-item @click="navigateTo('/profile')" link>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Profile</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Mobile Bottom Navigation Bar -->
    <v-bottom-navigation
      v-else
      app
      grow
      :value="false"
    >
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
    </v-app-bar>

    <!-- Main content area where routed components are displayed -->
    <v-main>
      <v-container>
        <router-view></router-view> <!-- This renders the active route's component -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useDisplay } from 'vuetify';

const router = useRouter();
const display = useDisplay();
const drawer = ref(false); // Define a reactive variable for drawer state

function navigateTo(route) {
  router.push(route);
  if (display.mobile) {
    drawer.value = false; // Close the drawer on mobile after navigation
  }
}

var theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
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
</style>
