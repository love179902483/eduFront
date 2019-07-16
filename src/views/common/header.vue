<template>
    <div>
        <v-toolbar color="rgba(0,0,0,0)" class='my-toolbar' flat dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <v-toolbar-side-icon @click.stop="setDrawer">
                    <v-icon>line_weight</v-icon>
                </v-toolbar-side-icon>
                <span class="hidden-sm-and-down">晴雨 &nbsp;&nbsp;<span class='body-2'>校园数据中心</span> </span>
            </v-toolbar-title>
            <!-- <v-text-field flat solo-inverted prepend-icon="search" label="Search" class="hidden-sm-and-down"></v-text-field> -->
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat @click.stop="myLogin()">登录</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { UserState } from '@/store/user/types';
import { State, Mutation, Action, Getter } from 'vuex-class';
const namespace: string = 'profile';
@Component({
    components: {},
})
export default class Header extends Vue {
    @State('UserStore') public userData: UserState;
    @Getter('getUserName', { namespace: 'UserStore' }) public getUserName: string;
    @Mutation('setDrawer', { namespace: 'CommonStore' })
    public setDrawer: any;
    // data
    private myLogin(): void {
        // alert('登录');
        // this.setDrawer();
        this.$notify({
            group: 'auth',
            type: 'warn',
            text: `还没有做这个弹出框 ${this.getUserName}`,
        });
    }
}
</script>