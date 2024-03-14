<template>

    <v-container class="bg-surface-variant">
        <v-row no-gutters>
            <v-col cols="3">
                <h2 class="text-green ma-5  text-h4 text-md-h4 text-lg-h2">WishList4You</h2>
             </v-col>
        </v-row>


        <div class="d-flex justify-space-evenly flex-wrap flex-row">
            <v-card width="300px" class="mt-5" v-for="card in cards" :key="card.id">
                <v-card-title class="text-h6 text-md-h5 text-lg-h4">{{card.title}}</v-card-title>
                <v-card-text>
                    {{ card.description }}
                </v-card-text>
                <v-card-text :class="{
                    'card-completed': card.isActive,
                    'card-incompleted': !card.isActive,
                }">
                    {{ card.isActive ? 'Выполнено' : 'Не выполнено' }}
                </v-card-text>
            </v-card> 
        </div>
    </v-container>
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
<style scoped>

.card-completed{
background-color: greenyellow;
}
.card-incompleted{
background-color: crimson;
color: white;
}
</style>

