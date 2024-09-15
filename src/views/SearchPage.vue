<template>
  <v-container>
    <h1 class="mb-2">Search Results for "{{ $route.query.query }}"</h1>
    <v-row>
      <EventCard
        v-for="event in filteredEvents"
        :key="event._id"
        :event="event"
        @open="openDialog"
      />
    </v-row>

    <!-- Dialog for Event Details -->
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title class="text-h5">{{ currentEvent.title }}</v-card-title>
        <v-card-subtitle>
          Date: {{ formatDate(currentEvent.startTime, { dateOnly: true }) }}
          <br>
          Start: {{ formatDate(currentEvent.startTime) }} - End: {{ formatDate(currentEvent.endTime) }}
          <br>
          Organized by: {{ currentEvent.organizerName }}
        </v-card-subtitle>
        <v-card-text>{{ currentEvent.extendedDescription }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="closeDialog">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import EventCard from '@/components/EventCard.vue'; // Adjust path if necessary
import events from '@/data/events.json'; // Ensure path is correct
import organizers from '@/data/organizers.json'; // Ensure path is correct

const route = useRoute();
const dialog = ref(false);
const currentEvent = ref({});

const filteredEvents = computed(() => {
  const searchQuery = route.query.query?.toLowerCase();
  return events.filter(event =>
    event.title.toLowerCase().includes(searchQuery) ||
    event.userID.toLowerCase().includes(searchQuery) ||
    event.description.toLowerCase().includes(searchQuery)
  ).map(event => ({
    ...event,
    organizerName: organizers[event.userID]?.username || 'Unknown Organizer'
  }));
});

function formatDate(isoString, options = {}) {
  const date = new Date(isoString);
  if (options.dateOnly) {
    return date.toLocaleDateString();
  }
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function openDialog(event) {
  currentEvent.value = {...event, organizerName: organizers[event.userID]?.username || 'Unknown Organizer', extendedDescription: event.extendedDescription || "No extended description available."};
  dialog.value = true;
}

function closeDialog() {
  dialog.value = false;
}
</script>

<style scoped>
/* Styles specific to this search page */
</style>
