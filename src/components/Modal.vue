<template>
    <div class="modal is-active">
        <div class="modal-background" @click="$emit('close')"></div>
        <div class="modal-content">
            <slot></slot>
        </div>
        <button class="modal-close is-large" @click="$emit('close')"></button>
    </div>
</template>

<script>
    export default {
        name: "Modal",
    }
</script>

<style scoped>

</style>