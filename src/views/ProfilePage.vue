<script setup lang="ts">
import { ref } from 'vue';
import InterestsEditor from '../components/settings/InterestsEditor.vue'
import ProfilePicEditor from '../components/settings/ProfilePicEditor.vue';

const profilePicDialog = ref(false)

function onClickProfilePic() {
    profilePicDialog.value = true
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
                            <v-avatar color="purple" @click="onClickProfilePic()" style="cursor: pointer">FL</v-avatar>
                        </v-col>
                        <v-col cols="auto">
                            <h3>Firstname Lastname</h3>
                        </v-col>
                    </v-row>
                </v-col>
                <v-divider class="ma-5" vertical />
                <v-col>
                    <h1>Settings</h1>
                    <InterestsEditor />
                </v-col>
            </v-row>
        </v-card-text>
        <ProfilePicEditor v-model="profilePicDialog" />
    </v-card>
</template>
