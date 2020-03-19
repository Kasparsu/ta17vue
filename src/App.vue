<template>
    <div>
        <button class="button is-warning" @click="changeName"></button>
        <h1 class="has-text-primary">{{$store.state.name}}</h1>
    </div>
</template>

<script>
    import axios from 'axios';
    import Tabs from "./components/Tabs.vue";
    export default {
        name: "App",
        components: {Tabs},
        created(){
            this.$store.dispatch('getUser');
        },
        mounted(){

        },
        data(){
            return {
                tabs: [
                    {title: '', content: ''}
                ]
            }
        },
        methods: {
            changeName(){
                this.$store.commit('SET_NAME', 'Martin');
            }
        }
    }
</script>

<style scoped>

</style>