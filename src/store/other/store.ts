import { Module } from 'vuex';

import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

import { RootState } from '../types';
import { OtherState } from './types';

export const commonsate: OtherState = {
    drawer: true,
};

const namespaced: boolean = true;
export const CommonStore: Module<OtherState, RootState> = {
    namespaced,
    state: commonsate,
    getters,
    actions,
    mutations,
};
