const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: "my-", when you want to not collide with other libraries
  // separator: "_", changes the - separator inside tailwind classes
  // important: true, default is false, with true it marks all our new classes with important
  // corePlugins: {
  //   preflight: false,
  //   accentColor: false,
  // }, many plugins that you can modify and turn on or off
  darkMode: "class",
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      spacing: {
        "30": "7.5rem",
        "15": "3.75rem",
      },
      screens: {
        "2xl": "2560px",
        huge: "4000px",
      },
      colors: {
        primary: {
          light: "#dae6e9",
          DEFAULT: "#0000ff",
          dark: "#302b54",
        }
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
}
