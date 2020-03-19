require('bulma');

import Vue from 'vue';

import store from './store/index.js';

import App from './App.vue';
import Modal from './components/Modal.vue';


Vue.component('app', App);
Vue.component('modal', Modal);

let app = new Vue({
    el: '#app',
    store
});