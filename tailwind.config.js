/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--tc-accent)",
        danger: "var(--tc-danger)",
        warn: "var(--tc-warn)",
        primary: "var(--tc-bg-primary)",
        secondary: "var(--tc-text-primary)",
      },
    },
  },
  plugins: [],
};
