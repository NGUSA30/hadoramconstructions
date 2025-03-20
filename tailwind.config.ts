import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mjengo': "url('/public/images/mjengo.jpg')",
      },
      colors: {
        whiteColor: "var(--white-color)",
        blackColor: "var(--black-color)",
        poseyBlueColor: "var(--posey-blue-color)",
        polarDriftColor: "var(--polar-drift-color)",
        cofeeColor: "var(--cofee-color)",
        tostadaColor: "var(--tostada-color)"
      },
    },
  },
  plugins: [],
} satisfies Config;
