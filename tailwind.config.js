module.exports = {
  // purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'r8g28b37'            : '#081c25',
        'r4g17b23'            : '#041117',
        'r114g149b164'        : '#7295a4',
        'r0g230b151'          : '#00e697',
        'r1g190b229'          : '#01bee5',
        'r42g107b135'         : '#2a6b87',

        'r93g192b191'         : '#5dc0bf',
        'r1g8b14'             : '#01080e',
        'r62g235b233'         : '#3eebe9',


        'r205g234b255'        : '#cdeaff',
        'r77g163b207'         : '#4da3cf',
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
