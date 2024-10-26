/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'class',
  important: true,
  theme: {



      extend: {
          screens: {
              lg_992: '992px',
          },
          colors: {
              'dark': '#3c4858',
              'black': '#161c2d',
              'dark-footer': '#161c28',
              'input-bg': '#F6F9FF',
              'login': "#3D3D3D",
              'blue-text':'#6C75D'
          },
          boxShadow: {
              sm: '0 2px 4px 0 rgb(60 72 88 / 0.15)',
              DEFAULT: '0 0 3px rgb(60 72 88 / 0.15)',
              md: '0 5px 13px rgb(60 72 88 / 0.20)',
              lg: '0 10px 25px -3px rgb(60 72 88 / 0.15)',
              xl: '0 20px 25px -5px rgb(60 72 88 / 0.1), 0 8px 10px -6px rgb(60 72 88 / 0.1)',
              '2xl': '0 25px 50px -12px rgb(60 72 88 / 0.25)',
              inner: 'inset 0 2px 4px 0 rgb(60 72 88 / 0.05)',
              testi: '2px 2px 2px -1px rgb(60 72 88 / 0.15)',
          },

          fontSize: {
              base: ['15px', '28px'],
              lg: ['17px', '28px'],
          },

          spacing: {
            '8xl': '96rem',
            '9xl': '128rem',
          },

          height: ({
              theme
          }) => ({
              '10.5': '2.625rem',
              '85': '21.25rem',
          }),
          width: ({
              theme
          }) => ({
              '10.5': '2.625rem',
          }),

          maxWidth: ({
              theme,
              breakpoints
          }) => ({
              '1200': '71.25rem',
              '992': '60rem',
              '768': '45rem',
          }),

          zIndex: {
              1: '1',
              2: '2',
              3: '3',
              999: '999',
          },
      },
      screens: {
        xs: "540px",
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },
    container: {
        center: true,
        padding: {
            DEFAULT: '12px',
            sm: '1rem',
            lg: '45px',
            xl: '5rem',
            '2xl': '13rem',
        },

    },

    fontFamily: {
        'plusjakarta': ['"Plus Jakarta Sans", sans-serif'],
    },
  },

  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}