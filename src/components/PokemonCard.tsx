import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Pokemon } from '../types/pokemon';

// Type color mapping for card styling
const typeColors: Record<string, string> = {
	normal: 'bg-gray-300',
	fire: 'bg-orange-500',
	water: 'bg-blue-400',
	grass: 'bg-green-500',
	electric: 'bg-yellow-400',
	ice: 'bg-blue-200',
	fighting: 'bg-red-700',
	poison: 'bg-purple-500',
	ground: 'bg-yellow-600',
	flying: 'bg-indigo-300',
	psychic: 'bg-pink-500',
	bug: 'bg-lime-500',
	rock: 'bg-yellow-700',
	ghost: 'bg-purple-700',
	dragon: 'bg-indigo-600',
	dark: 'bg-gray-800',
	steel: 'bg-gray-400',
	fairy: 'bg-pink-300',
	default: 'bg-gray-300',
};

interface PokemonCardProps {
	pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
	// Get the primary type for the card styling
	const primaryType = pokemon.types[0] || 'default';
	const cardBgColor = typeColors[primaryType] || typeColors.default;
	const [isPlaying, setIsPlaying] = useState(false);

	// Calculate HP once and store in state
	const [hp, setHp] = useState(() => {
		return Math.floor(Math.random() * 100) + 50;
	});

	// Function to play the Pokémon's cry
	const playPokemonCry = async () => {
		try {
			setIsPlaying(true);
			// Using Pokemon Showdown's cry audio API
			const cryUrl = `https://play.pokemonshowdown.com/audio/cries/${pokemon.name}.mp3`;

			const audio = new Audio(cryUrl);
			await audio.play();

			// Reset playing state when audio ends
			audio.onended = () => setIsPlaying(false);
		} catch (error) {
			console.error('Failed to play Pokémon cry:', error);
			setIsPlaying(false);
		}
	};

	return (
		<div className="max-w-xs mx-auto transform hover:scale-105 transition-transform duration-300 mb-8">
			{/* Card outer border with type color */}
			<div className={`${cardBgColor} p-1 rounded-2xl shadow-lg`}>
				{/* Card inner content with white background */}
				<div className="bg-white rounded-xl overflow-hidden">
					{/* Card header */}
					<div className="flex justify-between items-center p-3 border-b">
						<h2 className="text-xl font-bold capitalize">{pokemon.name}</h2>
						<div className="flex items-center">
							<span className="font-bold text-red-600">HP</span>
							<span className="ml-1 font-bold">{hp}</span>
						</div>
					</div>

					{/* Card image section with subtle pattern background */}
					<div
						className={`${cardBgColor} bg-opacity-20 p-4 flex justify-center items-center h-48`}
					>
						<div className="relative w-32 h-32">
							<Image
								src={pokemon.image}
								alt={pokemon.name}
								fill
								className="object-contain drop-shadow-lg"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
					</div>

					{/* Type badges */}
					<div className="px-4 py-2 flex gap-2">
						{pokemon.types.map((type) => (
							<span
								key={type}
								className={`${
									typeColors[type] || typeColors.default
								} px-3 py-1 rounded-full text-xs text-white capitalize font-semibold shadow-sm`}
							>
								{type}
							</span>
						))}
					</div>

					{/* Card stats */}
					<div className="p-4 border-t">
						<div className="grid grid-cols-2 gap-2 mb-3">
							<div className="text-sm">
								<span className="font-semibold">Height:</span> {pokemon.height}{' '}
								m
							</div>
							<div className="text-sm">
								<span className="font-semibold">Weight:</span> {pokemon.weight}{' '}
								kg
							</div>
						</div>

						{/* Play Cry Button - Added before Abilities section */}
						<div className="border-t pt-3 pb-2 flex justify-center">
							<button
								onClick={playPokemonCry}
								disabled={isPlaying}
								className={`${cardBgColor} hover:opacity-90 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center transition-opacity ${
									isPlaying ? 'opacity-70' : ''
								}`}
							>
								{isPlaying ? (
									<>
										<svg
											className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										Playing...
									</>
								) : (
									<>
										<svg
											className="w-4 h-4 mr-2"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.414a5 5 0 01-1.414-1.414"
											></path>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19.707 9.293a1 1 0 00-1.414 0L12 15.586l-6.293-6.293a1 1 0 00-1.414 1.414l7 7a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
											></path>
										</svg>
										Play Cry
									</>
								)}
							</button>
						</div>

						{/* Abilities section styled as card "moves" */}
						<div className="border-t pt-2">
							<h3 className="text-sm font-semibold mb-1">Abilities:</h3>
							<ul>
								{pokemon.abilities.map((ability, index) => (
									<li
										key={ability}
										className="text-sm capitalize mb-1 flex items-center"
									>
										<div
											className={`${cardBgColor} w-2 h-2 rounded-full mr-2`}
										></div>
										{ability}
									</li>
								))}
							</ul>
						</div>

						{/* Card footer */}
						<div className="text-center mt-3 border-t pt-2">
							<p className="text-xs text-gray-500">
								#{pokemon.id.toString().padStart(3, '0')}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
