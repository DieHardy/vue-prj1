<template>

<v-container class="bg-surface-variant">
        <v-row no-gutters>
            <v-col cols="5">
                <h3 class="text-green ma-5  text-h4 text-md-h4 text-lg-h3">Добавить новое желание</h3>
             </v-col>
        </v-row>

        <v-form v-model="valid" @submit.prevent="addCard">
    <v-container>
      <v-row>
        <v-col
          cols="6"
          md="2"
        >
          <v-text-field 
            v-model="newCard.title"
            label="Название"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="6" 
          md="4"
        >
          <v-text-field
            v-model="newCard.description" 
            label="Описание желания"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="2" md="4" sm="6" xs="3">
            <v-select v-model="newCard.isActive"
            label="Select"
            :items="['Выполнено', 'Не выполнено']"
            ></v-select>
        </v-col>
        <v-col offset="1"></v-col>
        <v-col cols="6" >
            <v-btn 
                text="Добавить"
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

const addCard = () =>
{
    if(newCard.isActive == 'Выполнено'){
        newCard.isActive = true
    }
    else{
        newCard.isActive = false
    }
    console.log(newCard);
}
const newCard = {
    title: '',
    description: '',
    isActive: false,
}


</script>



<style >

</style>