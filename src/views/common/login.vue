<template>
    <v-container fluid fill-height>

        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            {{loginInfo}}
                            <v-text-field prepend-icon="person" v-model="loginInfo.username" name="login" label="Login" type="text"></v-text-field>
                            <v-text-field prepend-icon="lock" v-model="loginInfo.password" name="password" label="Password" id="password" type="password"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="login()">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { RouterMode } from 'vue-router';
import { State, Getter, Mutation, Action } from 'vuex-class';
import { test } from 'mocha';
import { UserTypes } from '@/globaltype/user';

@Component
export default class Login extends Vue {
    @Action('ActionLogin', { namespace: 'UserStore' })
    public ActionLogin!: any;

    @Getter('getUserName', { namespace: 'UserStore' })
    public getUserName: string;

    private dialog: boolean = true;
    private loginInfo: UserTypes.ILoginInfo = {
        username: 'hehe',
        password: '123456',
    };

    public beforeRouteEnter(
        to: RouterMode,
        from: RouterMode,
        next: () => void,
    ) {
        console.log('this is vue-property-docorator  beforeRouteEnter!');
    }

    private async login() {
        if (this.loginInfo.username && this.loginInfo.password) {
            const ifLogin: UserTypes.ILoginReturn = await this.ActionLogin(
                this.loginInfo,
            );
            console.log(ifLogin);
            if (ifLogin.flag === true) {
                this.$router.push('/mysquire');
                this.$notify({
                    group: 'auth',
                    type: 'error',
                    text: `登录成功，欢迎 ${this.getUserName}`,
                });
            } else {
                this.$notify({
                    group: 'auth',
                    type: 'error',
                    text: ifLogin.message,
                });
            }
        } else {
            this.$notify({
                group: 'auth',
                type: 'error',
                text: '登录失败，用户名或者密码为空！！！！',
            });
        }
        // this.$router.push('/chart');
    }
}
</script>
<style scoped>
.test {
}
</style>

