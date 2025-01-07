import flowbitePlugin from 'flowbite/plugin';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    extend: {
		animation: {
			moveOut: 'moveOut 1s forwards',
		  },
		  keyframes: {
			moveOut: {
			  '0%': { transform: 'translateX(0)' },
			  '100%': { transform: 'translateX(100vw)' },  // Moves off the screen
			},
		  },
		fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'dancing-script': ['Dancing Script', 'cursive'],
        'great-vibes': ['Great Vibes', 'cursive'],
        'playfair-display': ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
			50: '#fdf2f8',
			100: '#fce7f3',
			200: '#fbcfe8',
			300: '#f9a8d4',
			400: '#f472b6',
			500: '#ec4899',
			600: '#db2777',
			700: '#be185d',
			800: '#9d174d',
			900: '#831843'
		  }
      }
    }
  },
  plugins: [flowbitePlugin]
};
