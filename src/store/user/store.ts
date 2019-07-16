import { Module } from 'vuex';

import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

import { RootState } from '../types';
import { UserState } from './types';
import { UserTypes } from '@/globaltype/user';

export const userState: UserTypes.IUserInfo = {
    loginToken: {
        username: '',
        token: '',
    },
    otherInfo: {
        username: '',
        people_class: '',
        phone: '',
        people_grade: new Date().getFullYear(),
        people_firstname: '',
        people_lastname: '',
        people_sex: '',
        school_id: '',
        student_id: '',
    },
};

const namespaced: boolean = true;
export const UserStore: Module<UserTypes.IUserInfo, RootState> = {
    namespaced,
    state: userState,
    getters,
    actions,
    mutations,
};
