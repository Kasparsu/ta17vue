<template>
    <div>
        <button :disabled="disabled" class="button is-danger" @click="$emit('handleClick')">{{name}}</button>
    </div>
</template>

<script>
    export default {
        name: "Specials",
        props: ['name', 'disabled']
    }
</script>

<style scoped>

</style>