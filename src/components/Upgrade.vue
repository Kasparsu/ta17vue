<template>
    <div>
        <button :disabled="isDisabled" class="button is-warning" @click="$emit('incrCps', cps)">{{unlocked ? name : '???'}}</button>
    </div>
</template>

<script>
    export default {
        name: "Upgrade",
        props: ['cps', 'disabled', 'name', 'unlocked'],
        computed: {
            isDisabled() {
                return this.disabled || !this.unlocked;
            }
        }
    }
</script>

<style scoped>

</style>