import Vue from 'vue';
import Vuex from 'vuex';

import mutations from "@/storage/useStore/mutations";
import getters from "@/storage/useStore/getters";
import apiRequest from "@/storage/useStore/api-request";
import commonActions from '@/storage/useStore/actions'

const actions = {...commonActions, ...apiRequest}

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        category: [],
        items: [],
        currentItems: [],
        currentCategory: '',
        stateModal: false,
        currentEdit: {},
    },
    getters,
    mutations,
    actions,
});