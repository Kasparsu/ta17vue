<template>
    <div>
        <clicker @incr="count++"></clicker>
        <counter :value="count" :cps="cps"></counter>
        <upgrade
                v-for="(upgrade, index) in upgrades"
                :cps="upgrade.cps"
				:key="index"
                @incrCps="increaseCps(upgrade.cps, upgrade.cost)"
                :disabled="upgrade.cost>count"
        ></upgrade>
		<button class="button is-danger" @click="reset">Reset</button>
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
			var data = JSON.parse(localStorage.getItem("data"));
			if (data) {
				this.cps = data.cps;
				this.count = data.count;
			}
            setInterval(()=> {
                this.count += this.cps;
			}, 1000);
			setInterval(() => {      
			this.saveData();
			}, 15000);
        },        
        data(){
            return {
                cps: 0,
                count: 0,
                upgrades: [
                    {cps: 0.1, cost: 10},
                    {cps: 0.5, cost: 50},
                    {cps: 1, cost: 100},
                    {cps: 10, cost: 1000},
                    {cps: 1000, cost: 10000},
                ]
            }
        },
        methods: {
            increaseCps(cps, cost){
                this.cps+=cps;
                this.count-=cost;
			},
			saveData() {      
				localStorage.setItem("data", JSON.stringify({
					count: this.count,
					cps: this.cps
					})
				);               
			},
			reset() {
				localStorage.clear();
				this.count = 0;
				this.cps = 0;
			}
        }
    }
</script>

<style scoped>
</style>