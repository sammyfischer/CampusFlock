<template>
  <v-container>
    <h1>Search Results for "{{ $route.query.query }}"</h1>
    <v-list>
      <v-list-item v-for="event in filteredEvents" :key="event._id">
        <v-list-item-content>
          <v-list-item-title>{{ event.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ event.userID }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ event.description }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import events from '@/data/events.json';  // Ensure this path is correct

const route = useRoute();

const filteredEvents = computed(() => {
  const searchQuery = route.query.query?.toLowerCase();
  return events.filter(event =>
    event.title.toLowerCase().includes(searchQuery) ||
    event.userID.toLowerCase().includes(searchQuery) ||
    event.description.toLowerCase().includes(searchQuery)
  );
});

</script>

<style scoped>
/* Add styles specific to the search page here */
</style>
