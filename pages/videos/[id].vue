<template>
    <div>
        video de parametro {{ idParams }}
        <VideoDetalhes></VideoDetalhes>
        <VideoControlePlay></VideoControlePlay>
    </div>
</template>

<script setup>
    const route = useRoute();
    const idParams = computed(()=>route.params.id)
</script>

<style lang="scss" scoped>

</style>
