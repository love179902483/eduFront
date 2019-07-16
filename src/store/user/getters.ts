import { GetterTree } from 'vuex';
import { UserState } from './types';
import { RootState } from '../types';
import { UserTypes } from '@/globaltype/user';

export const getters: GetterTree<UserTypes.IUserInfo, RootState> = {
    getUserName(state): string {
        console.log('这个是 UserStore getter测试');
        return `${state.otherInfo.people_firstname} ${state.otherInfo.people_lastname}`;
    },
};
