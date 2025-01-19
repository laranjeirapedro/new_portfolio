import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '-20px -20px 0px rgba(160, 214, 255, 1)',
      },
      screens: {
        'sm': '640px',   // @media (min-width: 640px) { ... }
        'md': '768px',   // @media (min-width: 768px) { ... }
        'lg': '1024px',  // @media (min-width: 1024px) { ... }
        'xl': '1280px',  // @media (min-width: 1280px) { ... }
        '2xl': '1536px', // @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
} satisfies Config;
