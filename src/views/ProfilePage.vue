<script setup lang="ts">
import InterestsEditor from '../components/settings/InterestsEditor.vue'
import ProfileEditor from '../components/settings/ProfileEditor.vue';
</script>

<template>
    <v-container>
        <v-card>
            <v-card-title>My Profile</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col class="pa-4" cols="auto">
                        <v-row>
                            <v-col cols="auto" class="d-flex align-center">
                                <v-avatar color="purple">FL</v-avatar>
                            </v-col>
                            <v-col cols="auto" class="d-flex align-center">
                                <h3>Firstname Lastname</h3>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-divider class="ma-5" vertical />
                    <v-col>
                        <h1>Settings</h1>
                        <ProfileEditor />
                        <InterestsEditor />
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>
