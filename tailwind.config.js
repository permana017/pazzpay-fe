/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('../../public/Banner.webp')",
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#6379F4",
                  
          "secondary": "#F000B8",
                  
          "accent": "#37CDBE",
                  
          "neutral": "#3D4451",
                  
          "base-100": "#FFFFFF",
                  
          "info": "#3ABFF8",
                  
          "success": "#36D399",
                  
          "warning": "#6379F4",
                  
          "error": "#F87272",
        },
      },
      "light"
    ],
  },
  plugins: [require("daisyui")],
}
