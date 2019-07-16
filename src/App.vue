<template>
    <v-app class='app-bg' id='inspire'>
        <notifications group="foo" />
        <notifications group="app" />
        <notifications :max="test" closeOnClick group="auth" width='100%' position="bottom left" />

        <AppHeader></AppHeader>
        <v-content>
            <!-- <v-breadcrumbs class='breadcrumb-class' dark :items="items">
                <template v-slot:divider>
                    <v-icon>forward</v-icon>
                </template>
            </v-breadcrumbs> -->
            <router-view></router-view>
            <router-view name='leftMenu'></router-view>

            <router-view name='mainlogin'></router-view>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import AppBody from '@/views/common/body.vue';
import AppHeader from '@/views/common/header.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
        AppHeader,
        AppBody,
    },
})
export default class App extends Vue {
    // data
    public test: number = 3;
    public items = [
        {
            text: '个人信息',
            disabled: false,
            href: 'breadcrumbs_dashboard',
        },
        {
            text: '个人信息',
            disabled: true,
            href: 'breadcrumbs_dashboard',
        },
    ];
}
</script>


<style scoped sass>
#inspire {
    background-image: url('./inventory/bg.jpg');
    background-size: 100% 150px;
    background-repeat: repeat-y;
}
.my-notification {
    padding: 10px;
    background-color: blue;
}
.my-notification .notification-title {
    font-size: 20px;
}
.my-notification .notification-content {
    font-size: 20px;
}
.breadcrumb-class > .v-breadcrumbs__item {
    color : black !important;
}
</style>
