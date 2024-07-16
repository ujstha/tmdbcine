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
        background: "var(--tc-bg-primary)",
        foreground: "var(--tc-text-primary)",
        secondary: "var(--tc-secondary)",
        "foreground-secondary": "var(--tc-text-secondary)",
        "background-secondary": "var(--tc-bg-secondary)",
        "background-hover": "var(--tc-bg-hover)",
      },
      height: {
        68: "17rem",
        85: "21rem",
        90: "22rem",
      },
      maxWidth: {
        body: "70rem",
        "body-md": "48rem",
      },
      fontSize: {
        xxs: "0.65rem",
      },
    },
  },
  plugins: [],
};
