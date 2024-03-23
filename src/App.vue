<template>
  <v-app>
    <v-main>
      <FormEdit :card="cardForEdit" @update-card="updateCard"/>
      <FormCreate @set-card="addCard" />
      <router-view v-if="isLoading" :cards="cards" @click-by-card="OpenCardForEdit" />
      <v-img v-else width="500" src="../public/loading.gif">
      </v-img>
    </v-main>
  </v-app>
</template>

<script setup> 
 
import FormEdit from './components/FormEdit.vue'
import FormCreate from './components/FormCreate.vue'

import {ref} from 'vue'
let cards = ref([

])
let isLoading = ref(false)
const loadCards = () => {
  setTimeout( ()=> {
    isLoading.value = true
  cards.value = [    
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
    },] 
}, 2000)
isLoading.value = false
}
loadCards()

const addCard = (card) =>{
    cards.value.push(card);
}
const OpenCardForEdit = (card) =>{
    cardForEdit.value = Object.assign({}, card)
}

const cardForEdit = ref({
  id: 0,
  title: '',
  description: '',
  isActive: false,
})

const updateCard = (card) => {
  console.log(card)
  cards.value = cards.value.map ((element) => element.id == card.id ? card : element)
}

</script>
