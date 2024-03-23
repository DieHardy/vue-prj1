<template>

    <v-container class="bg-surface-variant">
        
        <v-row no-gutters>
            <v-col cols="3">
                <h2 class="text-green ma-5  text-h4 text-md-h4 text-lg-h2">WishList4You</h2>
             </v-col>
        </v-row>


        <div class="d-flex justify-space-evenly flex-wrap flex-row">
           <app-card 
           v-for="(item, index) in props.cards" 
           :card="item" 
           :index="index"
           :key="item.id" 
           @click = "$event => emit('click-by-card', item)"
           />
        </div>
    </v-container>
</template>



<script setup>
import AppCard from '../components/AppCard.vue'
import {defineProps, defineEmits} from 'vue'

const emit = defineEmits(['click-by-card'])
const props = defineProps({
    cards: {
        type: Array
    }
})

</script>
<style scoped>


</style>

