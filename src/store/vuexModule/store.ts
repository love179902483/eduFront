import { Module } from 'vuex';

import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

import { RootState } from '../types';
import { VuexModule } from './types';
import { UserTypes } from '@/globaltype/user';

export const vuexmoduleState: VuexModule = {
    text: '',
};

const namespaced: boolean = true;
export const VuexModuleStore: Module<VuexModule, RootState> = {
    namespaced,
    state: vuexmoduleState,
    getters,
    actions,
    mutations,
};
