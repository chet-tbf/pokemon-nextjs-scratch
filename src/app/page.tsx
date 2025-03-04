'use client';

import { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import RandomButton from '../components/RandomButton';
import { fetchRandomPokemon } from '../lib/api';
import { Pokemon } from '../types/pokemon';

export default function Home() {
	const [pokemon, setPokemon] = useState<Pokemon | null>(null);
	const [loading, setLoading] = useState(false);

	const handleGetRandomPokemon = async () => {
		setLoading(true);
		try {
			const data = await fetchRandomPokemon();
			setPokemon(data);
		} catch (error) {
			console.error('Error fetching Pokemon:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		handleGetRandomPokemon();
	}, []);

	return (
		<main className="min-h-screen p-8 flex flex-col items-center justify-center">
			<h1 className="text-3xl font-bold mb-8">Pokémon Random Generator</h1>
			{pokemon && <PokemonCard pokemon={pokemon} />}
			<RandomButton onClick={handleGetRandomPokemon} loading={loading} />
		</main>
	);
}
