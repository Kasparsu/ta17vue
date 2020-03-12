<template>
    <div>
        <button class="button is-primary" @click="$emit('incr')">1 Click = 1 person saved from Corona</button>
    </div>
</template>

<script>
    export default {
        name: "Clicker"
    }
</script>

<style scoped>

</style>