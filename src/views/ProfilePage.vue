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
    <v-card>
        <v-card-title>My Profile</v-card-title>
        <v-card-text>
            <v-row>
                <v-col class="pa-4" cols="auto">
                    <v-row>
                        <v-col cols="auto">
                            <v-avatar color="purple">FL</v-avatar>
                        </v-col>
                        <v-col cols="auto">
                            <h3>Firstname Lastname</h3>
                        </v-col>
                    </v-row>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col>
                    <h1>Settings</h1>
                    <v-list>
                        <v-row v-for="(item, i) in interests" :key="i">
                            <v-col>
                                <v-text-field v-model="interests[i]"></v-text-field>
                            </v-col>
                            <v-col cols="auto">
                                <v-btn icon="mdi-delete" @click="deleteItem(i)"></v-btn>
                            </v-col>
                        </v-row>
                        <v-btn @click="addItem()">Add</v-btn>
                    </v-list>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<style scoped>
.v-text-field {
    max-width: 20%;
}
</style>