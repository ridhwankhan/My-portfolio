import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#0A0E1A"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 20px 70px -35px rgba(96, 165, 250, 0.5)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.35), transparent 40%), radial-gradient(circle at 80% 0%, rgba(168,85,247,0.25), transparent 30%), linear-gradient(150deg, rgba(2,6,23,1) 0%, rgba(10,14,26,1) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
