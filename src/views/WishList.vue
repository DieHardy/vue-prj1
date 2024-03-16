<template>

    <v-container class="bg-surface-variant">
        <FormCreate />
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
           :key="item.id" />
        </div>
    </v-container>
</template>



<script setup>
import FormCreate from '../components/FormCreate.vue'
import AppCard from '../components/AppCard.vue'
import {defineProps} from 'vue'
const props = defineProps({
    cards:{
        type: Array
    }
})
</script>
<style scoped>


</style>

