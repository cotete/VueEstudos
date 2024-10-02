<template>
    <div class="videos">
            <div v-for="video in favoritos" :key="video.id">
            <h2>{{ video.descrição }}</h2>
            <p>{{ converteDataBrasil(video.data_postagem) }}</p>
            <iframe
                width="550"
                height="400"
                :src="video.url"
                title="YouTube video player"
                frameborder="0"
            ></iframe>
                <div>
                    <button @onclick="deletarFavorito(video.id)">Deletar Favorito</button>
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
    

    const {favoritos,deletarFavorito} = useVideoStore();
    const converteDataBrasil = (dataAtual: string) => {
        return new Date(dataAtual).toLocaleDateString("pt-BR");
    }

</script>

<style lang="scss" scoped>

</style>