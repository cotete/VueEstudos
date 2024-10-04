<template>
    <div>
        <NuxtLink to="/videos/favoritos">Favoritos</NuxtLink>
        <div class="grid gdrid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
            <UCard v-for="video in videos" :key="video.id">
            <template #header>
                {{ video.descrição }}
            </template>

            <iframe
                class="h-48 w-full"
                :src="video.url"
                title="YouTube video player"
                frameborder="0"
            ></iframe>

            <template #footer>
                    <div class="flex justify-between">
                        <UButton @click="favoritar(video)">Adicionar Favorito</UButton>
                        <NuxtLink
                        :to="{
                        name: 'videos-id',
                        params: { id: video.id.toString() },
                        }"
                        >
                        <UButton label="Ver vídeo" color="gray">
                        <template #trailing>
                            <UIcon name="i-heroicons-arrow-right-20-solid" />
                        </template>
                        </UButton>
                    </NuxtLink>
                    </div>
            </template>
        </UCard>
        </div>
    
    </div>
</template>

<script setup lang="ts">
import type { video } from '~/interfaces/video';

    const {$toast} = useNuxtApp();


    const {adicionarFavorito} = useVideoStore();

    const favoritar = (video:video)=>{
        adicionarFavorito(video);
        $toast.success('Adicionado aos favoritos')
    }
    
    const videos = ref<video[]>([]);

    onMounted(async()=>{
        videos.value = await $fetch("/videos-controller")
    })

    
</script>

