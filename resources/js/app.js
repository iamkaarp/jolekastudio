require('./bootstrap');

import Vue from 'vue';

import Root from './pages/root/Index.vue';
import Admin from './pages/admin/Index.vue';

import store from './store';

Vue.component('root', Root);
Vue.component('admin', Admin);

const app = new Vue({
    store,
    el: '#app',
});

app.$store.dispatch('projects/setup');
