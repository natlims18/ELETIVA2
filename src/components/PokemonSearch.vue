<template>
  <div class="page">
    <div class="buscar">
      <img alt="Pokemon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/280px-International_Pok%C3%A9mon_logo.svg.png" class="disney-img">            
      <input type="text" v-model="searchTerm" placeholder="Digite o nome do Pokémon" />
      <button @click="searchPokemon">Pesquisar</button>

      <div v-if="isLoading">
        Carregando...
      </div>

      <div v-else-if="imageUrl">
        <img :src="imageUrl" alt="Pokemon" />
      </div>

      <div v-else>
        Nenhum Pokémon encontrado.
      </div>
    </div>
  </div>
</template>

<script>
import getPokemonImage from '../services/api.js';

export default {
  data() {
    return {
      searchTerm: '',
      imageUrl: '',
      isLoading: false,
    };
  },
  methods: {
    async searchPokemon() {
      if (this.searchTerm.trim() === '') {
        return;
      }

      this.isLoading = true;

      try {
        this.imageUrl = await getPokemonImage(this.searchTerm.toLowerCase());
      } catch (error) {
        console.error(error);
        this.imageUrl = '';
      }

      this.isLoading = false;
    },
  },
  
};

</script>

<style scoped>
  .buscar {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        top: 50px;
        color: #fff;
        width: 100%;
        margin-bottom: 50px;
        justify-content: center;
        align-items: center;
    }
    .buscar input {
        border: 1px solid #fff;
        border-radius: 5px;
        height: 25px;
        padding-left: 10px;        
        color: gray;
        width: 60%;
    }
    .buscar button{
      border-radius: 10px;
      background-color:darkorange;
      margin-top: 20px;

    }
    .page{
        position: absolute;
        display: flex;
        flex-direction: column;
        min-height: 100%;
        min-width: 100%;        
        align-items: center;
        background: #00FFFF;     
    }

</style>
