import { ActionTree } from 'vuex';
import axios from 'axios';
import { StudentmanageStateType } from './types';
import { RootState } from '../types';
import { Mutation } from 'vuex-class';
import { mutations } from './mutations';
import { UserTypes } from '@/globaltype/user';


export const actions: ActionTree<StudentmanageStateType, RootState> = {
    TestStore({ commit }): void {
        console.log('this is teststore Actions!!! success!!!!');
    },
};
