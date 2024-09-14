<script setup lang="ts">
import { ref } from 'vue';
import ProfilePicEditor from './ProfilePicEditor.vue';

const name = ref<string>("")
const description = ref<string>("")
const profilePicDialog = ref(false)

function onClickProfilePic() {
    profilePicDialog.value = true
}
</script>

<template>
    <v-container>
        <v-row>
            <v-col class="d-flex align-center">
                <h3>Your Profile</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="auto" class="d-flex align-center">
                <v-avatar color="purple" size="64" @click="onClickProfilePic()" style="cursor: pointer">
                    <h2 id="avatar-text">FL</h2>
                </v-avatar>
            </v-col>
            <v-col>
                <v-text-field v-model="name" label="Name" hide-details="auto"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-textarea v-model="description" label="Describe yourself" hide-details="auto"></v-textarea>
            </v-col>
        </v-row>
        <ProfilePicEditor v-model="profilePicDialog" />
    </v-container>
</template>

<style scoped>
#avatar-text {
    font-size: 2em;
    font-weight: 300;
}
</style>
