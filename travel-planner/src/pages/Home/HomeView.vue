<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <p>{{ name }}</p>
    <p>{{ count }}</p>
    <button @click="increment">Increment button</button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script setup lang="ts">

import HelloWorld from '@/components/HelloWorld.vue';
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia';

const store = useCounterStore()
const { name, count } = storeToRefs(store)
const { increment } = store

</script>
