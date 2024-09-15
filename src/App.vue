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
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';

const router = useRouter();
const route = useRoute();
const display = useDisplay();
const drawer = ref(false);
const activeTab = ref(route.path);
const searchQuery = ref('');  // Store the search query input

watch(() => route.path, (newPath) => {
  activeTab.value = newPath;
});

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
  // searchQuery.value = ''; // Optionally clear the search field after search
}

</script>

<style>
/* Additional global styles if needed */
</style>
