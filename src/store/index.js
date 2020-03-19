import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);
import axios from 'axios';
export default new Vuex.Store({
    state: {
        user: {},
        name: ''
    },
    mutations: {
        SET_NAME(state, value){
            state.name = value;
        }
    },
    actions: {
        getUser(context){
            axios.get('http://localhost:8000/api/users/1').then(resp => {
                context.commit('SET_NAME', resp.data.name);
            });
        }
    },
    getters: {

    }
});