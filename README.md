# Pokémon Next.js App

This project is a Next.js application that fetches and displays a random Pokémon from the PokeAPI. It showcases the use of functional components, TypeScript, and API integration.

## Project Structure

```
pokemon-nextjs
├── src
│   ├── app
│   │   ├── page.tsx          # Main page component that displays a random Pokémon
│   │   ├── layout.tsx        # Layout component for consistent structure
│   │   └── globals.css       # Global CSS styles
│   ├── components
│   │   ├── PokemonCard.tsx   # Component to display Pokémon details
│   │   └── RandomButton.tsx   # Button to fetch a new random Pokémon
│   ├── lib
│   │   └── api.ts            # API functions to interact with PokeAPI
│   └── types
│       └── pokemon.ts        # TypeScript interfaces for Pokémon data
├── public
│   └── favicon.ico           # Favicon for the application
├── .env.local                # Environment variables
├── next.config.js            # Next.js configuration
├── package.json              # npm configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd pokemon-nextjs
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory and add any necessary environment variables.

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

Click the "Get Random Pokémon" button to fetch and display a random Pokémon. The Pokémon's name, image, and other details will be shown on the screen.

## License

This project is licensed under the MIT License.