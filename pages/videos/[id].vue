<template>
    <div>
        video de parametro {{ idParams }}
        <VideoDetalhes></VideoDetalhes>
        <VideoControlePlay></VideoControlePlay>
    </div>
</template>

<script setup>

useSeoMeta({
    title:'Nuxt 3 e seo Meta',
    ogDescription:'info dos videos',
    ogUrl:"url do video",
    ogType:"video.other"
})

    definePageMeta({
        layout:"exibicao",
        middleware:"video"
    });

    const route = useRoute();
    const idParams = computed(()=>route.params.id)
</script>

<style lang="scss" scoped>

</style>
