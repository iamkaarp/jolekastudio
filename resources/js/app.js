require('./bootstrap');

import Vue from 'vue';

import Root from './components/Root.vue';

import store from './store';

Vue.component('root', Root);

const app = new Vue({
    store,
    el: '#app',
});

app.$store.dispatch('projects/setUp');
