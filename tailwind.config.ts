/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { neutral: { 950: "#0a0a0a" } }, borderRadius: { "2xl": "1rem", "3xl": "1.5rem" } } },
  plugins: [],
};
