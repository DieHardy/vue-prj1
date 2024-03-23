<template>

    <v-container class="bg-surface-variant">
            <v-row no-gutters>
                <v-col cols="5">
                    <h3 class="text-green ma-5  text-h4 text-md-h4 text-lg-h3">Форма редактирования</h3>
                 </v-col>
            </v-row>
            <v-form @submit.prevent="updateCard">
        <v-container>
          <v-row>
            <v-col
              cols="6"
              md="2"
            >
              <v-text-field 
                v-model="editedCard.title"
                label="Название"
                required
              ></v-text-field>
            </v-col>
    
            <v-col
              cols="6" 
              md="4"
            >
              <v-text-field
              v-model="editedCard.description"
                label="Описание желания"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="2" md="4" sm="6" xs="3">
                <v-select   
                v-model="editedCard.isActive"
                label="Select"
                :items="['Выполнено', 'Не выполнено']"
                ></v-select>
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
    
    import {defineProps, defineEmits} from 'vue'
    import {watch} from 'vue'
    import {ref} from 'vue'

    const props = defineProps({
      card: {type: Object}
    })
 
    let editedCard = ref({
      id: 0,
      title: '',
      description: ''
    })

    watch( ()=> props.card, (newValue) => {
      editedCard.value = newValue
    })

    const emit = defineEmits(['update-card'])

    const updateCard=()=>{
     editedCard.value.isActive = editedCard.value.isActive == 'Выполнено' || editedCard.value.isActive == true ? true : false
     emit('update-card', editedCard.value)
     editedCard.value = ''
    }
    </script>
    <style >
    </style>