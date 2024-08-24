/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
        'primary': '#0D7C66',
      },
      screens: {

        'iphone5': '320px',
        // => @media (min-width: 320px) { ... }
        'medium-phone': '380px',
        // => @media (min-width: 380px) { ... }
        'large-phone': '480px',
        // => @media (min-width: 480px) { ... }
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',

      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
