import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { UserStore } from './user/store';
import { CommonStore } from './other/store';
import { StudentmanageStore } from './studentmanage/store';
import { VuexModuleStore } from './vuexModule/store';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0', // a simple property
    },
    modules: {
        UserStore,
        CommonStore,
        StudentmanageStore,
        VuexModuleStore,
    },
};

export default new Vuex.Store<RootState>(store);
