<template>
    <div>
        <button
            :disabled="disabled"
            class="button is-warning"
            @click="$emit('incrCps', cps)"
            :style="buttonStyle"
        >
            Add {{ cps }} cps
        </button>
    </div>
</template>

<script>
    export default {
        name: "Upgrade",
        props: ['cps', 'disabled', 'currentCount'],
        computed: {
            buttonStyle() {
                return `background-image: linear-gradient(90deg, rgba(255,255,255,0) ${this.currentCount / this.cps}%, rgba(255,255,255,0.6) 0%);`
            }
        }
    }
</script>

<style scoped>

</style>