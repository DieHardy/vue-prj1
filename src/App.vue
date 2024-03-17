<template>
  <v-app>
    <v-main>
      <FormEdit :card="cardForEdit"/>
      <FormCreate @set-card="addCard" />
      <router-view  :cards="cards" @click-by-card="OpenCardForEdit" />
    </v-main>
  </v-app>
</template>

<script setup> 
 
import FormEdit from './components/FormEdit.vue'
import FormCreate from './components/FormCreate.vue'

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

const addCard = (card) =>{
    cards.value.push(card);
}
const OpenCardForEdit = (card) =>{
    cardForEdit.value = Object.assign({}, card)
    console.log(cardForEdit.value)
}

const cardForEdit = ref({
  id: 0,
  title: '',
  description: '',
  isActive: false,
})


</script>
