/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
     './public/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue}',
   ],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    mode: "jit",
    purge: [
     './public/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue}',
   ],
  },
  plugins: [],
};
