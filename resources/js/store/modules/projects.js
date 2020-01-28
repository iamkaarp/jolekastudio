import Mock from '../../mock.js';

export default {
    namespaced: true,
    state: {
        projects: [],
    },
    getters: {
        get: state => state.projects,
    },
    mutations: {
        setup(state, data) {
            state.projects = data;
        },
    },
    actions: {
        setup({ commit }) {
            let data = Mock;
            commit('setup', data);
        },
    },
};
