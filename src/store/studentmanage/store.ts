import { Module } from 'vuex';

import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

import { RootState } from '../types';
import { StudentmanageStateType } from './types';
import { UserTypes } from '@/globaltype/user';

export const StudentmanageState: StudentmanageStateType = {
    test: '',
    info: {
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
export const StudentmanageStore: Module<StudentmanageStateType, RootState> = {
    namespaced,
    state: StudentmanageState,
    getters,
    actions,
    mutations,
};
