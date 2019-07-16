import { GetterTree } from 'vuex';
import { OtherState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<OtherState, RootState> = {
    getDrawer(state): boolean {
        return state.drawer;
    },
};
