<template>

    <ajoutContact :personnage="formPerso"/>    
        <!-- .prevent sert à ne pas charger la page -->
        <form @submit.prevent="ajoutPerso">
        <input type="text" placeholder="Nom" v-model="formPerso.name">
        <input type="text" placeholder="Numéro..." v-model="formPerso.number">  

        <button type="submit">Ajouter</button>
    </form>
</template>

<script>

import ajoutContact from '@/components/Perso.vue'
export default {

    name: 'formPerso',
    components:{
        ajoutContact
    },
    data(){
    return{
      error: false,
      formPerso: {
        pseudo : '',
        age : null
      }
    }
  },

  methods : {
    ajoutPerso(){

      if(this.formPerso.pseudo.length < 3){
        this.error = true
        return
      }
      if(this.formPerso.pseudo == '' || this.formPerso.age == null) return

      this.$emit('ajoutPerso', this.formPerso) // mettre les données dans le tableau au dessus grace au push()

    //   mettre le code du commit

      this.error = false

      this.formPerso = { // Pour remettre le form à 0
        pseudo : '',
        age : null
      }
    }
  }

}
</script>