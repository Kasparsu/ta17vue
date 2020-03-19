<template>
    <div>
        <clicker @incr="count+=click"></clicker>
        <counter :value="count"></counter>
        <upgrade
                v-for="upgradeItem in upgrades"
                :upgrade="upgradeItem"
                @upgrade="upgrade(upgradeItem)"
                :disabled="upgradeItem.cost>count"
        ></upgrade>
    </div>
</template>

<script>
    import Clicker from "./components/Clicker.vue";
    import Counter from "./components/Counter.vue";
    import Upgrade from "./components/Upgrade.vue";
    export default {
        name: "App",
        components: {Upgrade, Counter, Clicker},
        created(){
            setInterval(()=> {
                this.count += this.cps;
            }, 1000);
        },
        mounted(){

        },
        data(){
            return {
                cps: 0,
                count: 0,
                click: 1,
                upgrades: [
                    {type: 'cps', cps: 0.1, cost: 10},
                    {type: 'cps', cps: 0.5, cost: 50},
                    {type: 'cps', cps: 1, cost: 100},
                    {type: 'cps', cps: 10, cost: 1000},
                    {type: 'cps', cps: 1000, cost: 10000},
                    {type: 'click', count: 1, cost: 1},
                    {type: 'click', count: 5, cost: 5000000},
                    {type: 'click', count: 10, cost: 10000000},
                    {type: 'click', count: 100, cost: 100000000},
                ]
            }
        },
        methods: {
            upgrade(upgradeItem){
                if(upgradeItem.type==='cps') {
                    this.cps += upgradeItem.count;
                } else {
                    this.click += upgradeItem.count;
                }
                this.count -= upgradeItem.cost
            }
        }
    }
</script>

<style scoped>

</style>