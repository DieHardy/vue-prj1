<template>
     <v-card width="300px" class="mt-5">
                <v-card-title class="text-h6 text-md-h5 text-lg-h4">{{props.card.title}}</v-card-title>
                <v-card-text>
                    {{ props.card.description }}
                </v-card-text>
                <v-card-text :class="{
                    'card-completed': props.card.isActive,
                    'card-incompleted': !props.card.isActive,
                }">
                    {{ props.card.isActive ? 'Выполнено' : 'Не выполнено' }}
                </v-card-text>
        </v-card> 
</template>


<script setup> 
import {defineProps} from 'vue'
const props = defineProps({
    index: {
        type: Number
    },
    card: {
        type: Object
    }
})

</script>

<style>
.card-completed{
background-color: greenyellow;
}
.card-incompleted{
background-color: crimson;
color: white;
}
</style>

