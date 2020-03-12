<template>
    <div id="boss-wrapper">
        <button v-show="!inFight && !allDefeated" class="button" @click="startBattle()">Fight boss!</button>
        <div v-show="inFight && !allDefeated" id="boss-combat-wrapper">
            <div id="boss-stats">
                <button class="button" @click="attackBoss()">Hit boss!</button>
                <p>{{ curBoss.name }}</p>
                <p>Health: {{ curHealth }}/{{ curBoss.health }}</p>
                <p>Time: {{ curTime }} sec</p>
            </div>
            <img id="boss-img" :src="curBoss.img">
        </div>
        <h1 v-show="allDefeated">You have defeat all bosses! gratz</h1>
    </div>

</template>

<script>
    import catImg from '../assets/cat.jpg'
    import wellImg from '../assets/well.png'
    import jaanImg from '../assets/jaan.jpg'

    export default {
        name: "Boss.vue",
        props: ["cps"],
        data() {
            this.bosses = [
                {img: catImg, name: "Kitten", health: 20},
                {img: wellImg, name: "Well", health: 50},
                {img: jaanImg, name: "Jaan", health: 100}
            ]

            return {
                curHealth: 0,
                curTime: 0,
                curBossNum: 0,
                allDefeated: false,
                curBoss: this.bosses[0],
                inFight: false
            }
        },
        methods: {
            startBattle() {
                this.curHealth = this.curBoss.health
                this.curTime = 30
                this.inFight = true

                var self = this

                this.combatInterval = setInterval(function () {
                    self.curTime -= 1
                    self.curHealth = Math.floor(self.curHealth -self.$props.cps)

                    self.checkEndBattle()
                }, 1000)
            },
            attackBoss() {
                this.curHealth -= 1
                this.checkEndBattle()
            },

            checkEndBattle() {
                if (this.curTime < 0) {
                    this.inFight = false
                    clearInterval(this.combatInterval)
                }

                if (this.curHealth <= 0) {
                    this.inFight = false
                    clearInterval(this.combatInterval)

                    this.curBossNum += 1

                    if (this.bosses.length <= this.curBossNum) {
                        this.allDefeated = true
                        return
                    }

                    this.curBoss = this.bosses[this.curBossNum]
                }
            }


        }
    }
</script>

<style scoped>
    #boss-wrapper {
        position: absolute;
        top: 0;
        right: 0;
    }
    #boss-combat-wrapper {
        display: flex;
    }
    #boss-img {
        max-width: 500px;
        max-height: 500px;
    }
</style>