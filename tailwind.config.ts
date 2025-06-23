import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        emerald: {
          50: "#f0fdf9",
          100: "#ccfbef",
          200: "#9af6e0",
          300: "#5fe9cf",
          400: "#18A383",
          500: "#18A383",
          600: "#158970",
          700: "#136d5c",
          800: "#11574a",
          900: "#0f493e",
          950: "#052e26",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        112: "28rem",
        128: "32rem",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in": "slideIn 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        glow: "glow 2s ease-in-out infinite alternate",
        "gradient-shift": "gradientShift 20s ease-in-out infinite",
        "float-1": "float1 25s ease-in-out infinite",
        "float-2": "float2 30s ease-in-out infinite reverse",
        "float-3": "float3 35s ease-in-out infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(24, 163, 131, 0.1)" },
          "100%": { boxShadow: "0 0 30px rgba(24, 163, 131, 0.2)" },
        },
        gradientShift: {
          "0%, 100%": {
            transform: "rotate(0deg) scale(1)",
          },
          "25%": {
            transform: "rotate(90deg) scale(1.1)",
          },
          "50%": {
            transform: "rotate(180deg) scale(0.9)",
          },
          "75%": {
            transform: "rotate(270deg) scale(1.05)",
          },
        },
        float1: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.2",
          },
          "25%": {
            transform: "translate(30px, -20px) scale(1.1)",
            opacity: "0.25",
          },
          "50%": {
            transform: "translate(-20px, -40px) scale(0.9)",
            opacity: "0.15",
          },
          "75%": {
            transform: "translate(-40px, 20px) scale(1.05)",
            opacity: "0.3",
          },
        },
        float2: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.15",
          },
          "33%": {
            transform: "translate(-25px, 30px) scale(1.2)",
            opacity: "0.2",
          },
          "66%": {
            transform: "translate(40px, -25px) scale(0.8)",
            opacity: "0.1",
          },
        },
        float3: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.1",
          },
          "20%": {
            transform: "translate(20px, -30px) scale(1.3)",
            opacity: "0.15",
          },
          "40%": {
            transform: "translate(-30px, -10px) scale(0.7)",
            opacity: "0.05",
          },
          "60%": {
            transform: "translate(10px, 25px) scale(1.1)",
            opacity: "0.2",
          },
          "80%": {
            transform: "translate(-15px, -20px) scale(0.9)",
            opacity: "0.08",
          },
        },
        twinkle: {
          "0%, 100%": {
            opacity: "0",
            transform: "scale(0)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
