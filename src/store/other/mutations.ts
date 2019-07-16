import { MutationTree } from 'vuex';
import { OtherState } from './types';
import { UserTypes } from '@/globaltype/user';

export const mutations: MutationTree<OtherState> = {
    setDrawer(state) {
        state.drawer = !state.drawer;
        // state.user = undefined;
    },
};
