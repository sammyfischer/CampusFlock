<template>
  <v-container>
    <h1>Upcoming Events</h1>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="event in sortedEvents" :key="event._id">
        <v-card>
          <v-card-title>{{ event.title }}</v-card-title>
          <v-card-subtitle>
            {{ formatDate(event.startTime, { dateOnly: true }) }} | 
            {{ formatDate(event.startTime) }} - {{ formatDate(event.endTime) }}
            <br>
            Organized by: {{ event.organizerName }}
          </v-card-subtitle>
          <v-card-text>{{ event.description }}</v-card-text>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="openDialog(event)">
              Learn More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
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
import { ref, onMounted } from 'vue';
import events from '@/data/events.json';
import organizers from '@/data/organizers.json';

const sortedEvents = ref([]);
const dialog = ref(false);
const currentEvent = ref({});

function formatDate(isoString, options = {}) {
  const date = new Date(isoString);
  if (options.dateOnly) {
    return date.toLocaleDateString();
  }
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function openDialog(event) {
  currentEvent.value = event; // Also include organizer details when loaded
  dialog.value = true;
}

function closeDialog() {
  dialog.value = false;
}

onMounted(() => {
  sortedEvents.value = events.map(event => ({
    ...event,
    organizerName: organizers[event.userID]?.username || 'Unknown Organizer'
  })).sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
});
</script>

<style scoped>
/* Additional styles if needed */
</style>
