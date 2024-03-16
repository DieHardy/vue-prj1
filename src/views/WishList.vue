<template>

    <v-container class="bg-surface-variant">
        <FormCreate @set-card="addCard" />
        <v-row no-gutters>
            <v-col cols="3">
                <h2 class="text-green ma-5  text-h4 text-md-h4 text-lg-h2">WishList4You</h2>
             </v-col>
        </v-row>


        <div class="d-flex justify-space-evenly flex-wrap flex-row">
           <app-card 
           v-for="(item, index) in cards" 
           :card="item" 
           :index="index"
           :key="item.id" />
        </div>
    </v-container>
</template>



<script setup>
import FormCreate from '../components/FormCreate.vue'
import AppCard from '../components/AppCard.vue'
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


</script>
<style scoped>


</style>

