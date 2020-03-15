<template>
    <div>
        <p>Clicks: {{ Number((value).toFixed(1))}}</p>
        <p>Cps: {{Number((cps).toFixed(1))}}</p>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        props:['value', 'cps']
    }
</script>

<style scoped>

</style>