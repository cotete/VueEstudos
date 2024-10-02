<template>
    <h1>Components</h1>
    <p>{{ diferencaEmDias }} dias atrás</p>
</template>

<script setup lang="ts">

    const {diasPassados, diferencaEmDias} = useFormatacao();

    const dataVideo = new Date(2023,9,2);

    diasPassados(dataVideo)
</script>