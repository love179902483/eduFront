import { MutationTree } from 'vuex';
import { UserState, User } from './types';
import { UserTypes } from '@/globaltype/user';

export const mutations: MutationTree<UserTypes.IUserInfo> = {
    setUserInfo(state, userinfo: UserTypes.IUserInfo): void {
        console.log('profileLoaded');
        console.log(userinfo);
        // 将token放入localstorage 并且起名叫做 'edu_user' ，其中保存的两部分信息
        // 1：用户名
        // 2：用户的权限
        localStorage.setItem('edu_user', userinfo.loginToken.token);
        state.otherInfo = userinfo.otherInfo;
    },

    profileDrawer(state): void {

        // state.drawer = !state.drawer;
    },
};
