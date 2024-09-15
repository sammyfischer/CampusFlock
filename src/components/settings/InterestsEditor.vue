<script setup lang="ts">
import { ref } from 'vue';

const interests = ref<string>("")
</script>

<template>
	<v-container>

		<v-row>
			<v-col>
				<h3>Interests</h3>
			</v-col>
		</v-row>

		<v-row>
			<v-col>
				<v-textarea v-model="interests" label="List your interests" counter="200" hide-details="auto"></v-textarea>
			</v-col>
		</v-row>

	</v-container>
</template>
