import axios from 'axios';

const getPokemonImage = async (pokemonName) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return response.data.sprites.front_default;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getPokemonImage;
