import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';


import projects from './modules/projects.js';

Vue.use(Vuex);

const localStore = new VuexPersistence({
    storage: window.localStorage,
    modules: [
        'projects',
    ],
});

export default new Vuex.Store({
    modules: {
        projects,
    },
    plugins: [
        localStore.plugin,
    ],
});
