<template>
    <div>
        <clicker @incr="count+=click"></clicker>
        <div style="float: left">CPS: {{ Number((cps).toFixed(1))  }}</div>
        <counter :value="count" style="clear: left"></counter>
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
                click: 1,
                count: 0,
                upgrades: [
                    { type: 'cps', count: 0.1, cost: 10 },
                    { type: 'cps', count: 0.5, cost: 50 },
                    { type: 'cps', count: 1, cost: 100 },
                    { type: 'cps', count: 10, cost: 1000 },
                    { type: 'cps', count: 1000, cost: 10000 },
                    { type: 'dmg', count: 2, cost: 10 },
                    { type: 'dmg', count: 10, cost: 50 },
                    { type: 'dmg', count: 50, cost: 100 },
                    { type: 'dmg', count: 100, cost: 1000 },
                    { type: 'dmg', count: 500, cost: 10000 },
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