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
	<v-container>
		<v-list>
			<v-list-item>
				<v-row>
					<v-col>
						<h3>Your Interests</h3>
					</v-col>
				</v-row>

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
						<v-btn @click="addItem()" class="mb-2">Add</v-btn>
					</v-col>
				</v-row>

			</v-list-item>
		</v-list>
	</v-container>
</template>
