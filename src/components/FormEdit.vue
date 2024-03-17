<template>

    <v-container class="bg-surface-variant">
            <v-row no-gutters>
                <v-col cols="5">
                    <h3 class="text-green ma-5  text-h4 text-md-h4 text-lg-h3">Форма редактирования</h3>
                 </v-col>
            </v-row>
            <v-form  @submit.prevent="addCard">
        <v-container>
          <v-row>
            <v-col
              cols="6"
              md="2"
            >
              <v-text-field 
                :value="card.title" @input="setTitle"
                label="Название"
                required
              >{{ card.title }}</v-text-field>
            </v-col>
    
            <v-col
              cols="6" 
              md="4"
            >
              <v-text-field
                :value="card.description" @input="setDescription"
                label="Описание желания"
                required
              >{{ card.description }}</v-text-field>
            </v-col>
            <v-col cols="2" md="4" sm="6" xs="3">
                <v-selec   :value="card.isActive" @input="setIsActive"
                label="Select"
                :items="['Выполнено', 'Не выполнено']"
                >{{ card.isActive }}</v-selec>
            </v-col>
            <v-col offset="1"></v-col>
            <v-col cols="6" >
                <v-btn 
                    text="Изменить"
                    type="submit"
                    color="success"
                    block
                ></v-btn>
            </v-col>
          </v-row>    
        </v-container>
      </v-form>
    </v-container>
    </template>
    <script setup>
    
    import { defineProps, defineEmits} from 'vue'
    const emit = defineEmits(['set-card'])
    
    const props = defineProps({
      card: {type: Object}
    })
    


    emit('set-card', props.card)
    </script>
    <style >
    </style>