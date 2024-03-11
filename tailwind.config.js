
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'buttons':'0 -1px 0 #000 inset;',
      },
      margin:{
        'auto':'auto',
        'autox':'0 auto',
        'autoy':'auto 0',
      },
    },
  },
  plugins: [],
}