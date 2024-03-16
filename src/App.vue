<template>
  <v-app>
    <v-main>
      <router-view :cards="cards"/>
    </v-main>
  </v-app>
</template>

<script setup>
import {ref} from 'vue'
const cards = ref([
    {
        id: 1,
        title: 'Игрушка 1',
        description: 'Дед мороз на новый год',
        isActive: false,
    },
    {
        id: 2,
        title: 'Mac Book Pro',
        description: 'А почему бы и нет',
        isActive: true,
    },
    {
        id: 3,
        title: 'Снеки',
        description: ':3',
        isActive: false,
    },
])

   


</script>
