<template>
    <div class='home'>
        <AppHeader />
        <HelloWorld msg='Welcome to Your Vue.js + TypeScript App' /> -->
    </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import AppHeader from '@/views/common/header.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
        AppHeader,
        HelloWorld,
    },
})
export default class Home extends Vue {}
</script>
