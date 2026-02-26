/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        powerGrotesk: ["PowerGrotesk-Regular"],
        primaryBold: ["InterTight-Bold"],
        primaryMedium: ["InterTight-Medium"],
        primaryRegular: ["InterTight-Regular"],
      },
    },
  },
  plugins: [],
}

