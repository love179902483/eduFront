<template>
    <v-container class='my-app-body' fill-height fluid>
        <router-view />
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Body extends Vue {}
</script>

<style >
.my-app-body {
    background-color: #e4e4e4;
}
</style>