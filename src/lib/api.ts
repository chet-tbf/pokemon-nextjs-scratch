import { Pokemon } from '../types/pokemon';

export async function fetchRandomPokemon(): Promise<Pokemon> {
  // The PokeAPI has pokemon with IDs from 1 to 1010 (Gen 1-9)
  const randomId = Math.floor(Math.random() * 1010) + 1;
  
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon');
  }
  
  const data = await response.json();
  
  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
    types: data.types.map((type: any) => type.type.name),
    height: data.height / 10, // convert to meters
    weight: data.weight / 10, // convert to kg
    abilities: data.abilities.map((ability: any) => ability.ability.name)
  };
}