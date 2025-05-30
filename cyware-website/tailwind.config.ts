import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "12": "repeat(12, minmax(0, 1fr))",
      },
      colors: {
        primary: {
          DEFAULT: "#004efc",
          dark: "#1330b9",
        },
        secondary: {
          DEFAULT: "#00c689",
        },
        accent: {
          DEFAULT: "#8ea2ff",
          purple: "#b500f3",
          blue: "#002bff",
        },
        dark: {
          DEFAULT: "#070707",
          gray: "#141414",
          lighter: "#151515",
          medium: "#212122",
          slate: "#292b35",
        },
        cyware: {
          blue: "#004efc",
          green: "#00c689",
          purple: "#a600ce",
          darkBlue: "#0f173d",
          darkPurple: "#4a035b",
          navy: "#212f73",
          lightBlue: "#b7c3ff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      opacity: {
        "15": "0.15",
      },
    },
  },
  plugins: [animate],
}

export default config
