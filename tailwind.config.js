/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // เปิดใช้งานโหมดเข้ม
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

