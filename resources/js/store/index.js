import Vue from 'vue';
import Vuex from 'vuex';

import Projects from './modules/projects.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Projects,
    },
});
