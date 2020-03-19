<template>
    <div>
        {{ value.toFixed(1) }}
    </div>
</template>

<script>
    export default {
        name: "Counter",
        props:['value']
    }
</script>

<style scoped>

</style>