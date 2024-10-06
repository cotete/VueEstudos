<template>
    <div>
        <Head>
            <Title>Clientes</Title>
            <Meta name="description" content="Teste"/>
        </Head>
    </div>
</template>

<script setup>

    const {data:clientes,pending,error,refresh,execute,status} = await useFetch('https://reqres.in/api/users?delay=3',{
        lazy:true
    });
   
    definePageMeta({
        pageTransition:{
            name:'slide'
        }
    })
    const {payload} = useNuxtApp();
    console.log(payload.data['cliente'])
</script>

