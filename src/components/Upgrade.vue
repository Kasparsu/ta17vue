<template>
    <div>
        <button
                :disabled="disabled"
                class="button is-warning"
                @click="$emit('upgrade')">
            Add {{ upgrade.cps ? upgrade.cps : upgrade.count }} {{upgrade.type}} for {{ upgrade.cost }}
        </button>
    </div>
</template>

<script>
    export default {
        name: "Upgrade",
        props: ['upgrade', 'disabled']
    }
</script>

<style scoped>

</style>