<script setup lang="ts">
import { ref } from 'vue';

const interests = ref<string[]>(["programming", "robotics"])

function addItem() {
	interests.value.push("")
}

function deleteItem(index: number) {
	interests.value.splice(index, 1)
}
</script>

<template>
	<v-list>
		<h4>Your Interests</h4>
		<v-row v-for="(item, i) in interests" :key="i" class="d-flex align-center">
			<v-col cols="6">
				<v-text-field v-model="interests[i]" hide-details="auto"></v-text-field>
			</v-col>
			<v-col cols="auto" class="d-flex-inline align-center">
				<v-btn icon="mdi-delete" @click="deleteItem(i)"></v-btn>
			</v-col>
		</v-row>
		<v-row class="d-flex justify-center">
			<v-col cols="6">
				<v-btn @click="addItem()">Add</v-btn>
			</v-col>
		</v-row>
	</v-list>
</template>
