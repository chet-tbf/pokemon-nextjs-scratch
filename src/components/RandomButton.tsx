import React from 'react';

interface RandomButtonProps {
	onClick: () => void;
	loading: boolean;
}

export default function RandomButton({ onClick, loading }: RandomButtonProps) {
	return (
		<button
			onClick={onClick}
			disabled={loading}
			className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-colors disabled:bg-gray-400"
		>
			{loading ? 'Loading...' : 'Get Random Pokémon'}
		</button>
	);
}
