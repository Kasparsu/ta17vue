<template>
    <div>
        <clicker @incr="handleClickerClick"></clicker>
        <counter :value="count"></counter>
        <upgrade
                :cps="upgrade.cps"
                :disabled="upgrade.cost>count"
                :name="upgrade.name"
                :unlocked="upgrade.unlocked"
                @incrCps="increaseCps(upgrade, key)"
                v-for="(upgrade, key) in upgrades"
        ></upgrade>
        <specials :name="special.name"
                  @handleClick="special.function(special)"
                  :disabled="special.cost>count"
                  v-for="special in specials"
        ></specials>
    </div>
</template>

<script>
    import Clicker from "./components/Clicker.vue";
    import Counter from "./components/Counter.vue";
    import Upgrade from "./components/Upgrade.vue";
    import Specials from "./components/Specials.vue";
    // Need to add tooltips
    export default {
        name: "App",
        components: {Specials, Upgrade, Counter, Clicker},
        created() {
            setInterval(() => {
                this.count += this.cps;
            }, 1000);
        },
        data() {
            return {
                total: 0,
                cps: 0,
                count: 15000,
                upgrades: [
                    {cps: 1, cost: 30, costIncrease: 3, costIncreaseRate: 2, name: 'Cursor', unlocked: true, amount: 0},
                    {cps: 100, cost: 250, costIncrease: 50, costIncreaseRate: 40, name: 'Grandma', unlocked: false, amount: 0},
                    {cps: 200, cost: 500, costIncrease: 80, costIncreaseRate: 70, name: 'Autoclicker', unlocked: false, amount: 0},
                    {cps: 500, cost: 1400, costIncrease: 430, costIncreaseRate: 420, name: 'Super Saiyan', unlocked: false, amount: 0},
                    {cps: 1000, cost: 5800, costIncrease: 530, costIncreaseRate: 530, name: 'Elon Musk', unlocked: false, amount: 0},
                ],
                specials: [
                    {function: this.specialTimeTraveler, name: 'Time Traveler', cost: 1500}
                ],
                interval: 1000,
            }
        },
        methods: {
            increaseCps(upgrade, key) {
                this.count -= upgrade.cost;
                this.cps += upgrade.cps;
                upgrade.amount++;
                upgrade.cost += upgrade.costIncrease;
                upgrade.costIncrease += upgrade.costIncreaseRate;
                key += 1;
                if (this.upgrades[key] && !this.upgrades[key].unlocked) this.upgrades[key].unlocked = true;
            },
            handleClickerClick() {
                this.total++;
                this.count++;
            },
            specialTimeTraveler(event) {
                this.count -= event.cost;
                event.cost *= 10;
                this.count += this.cps*10;
            }
        }
    }
</script>

<style scoped>

</style>