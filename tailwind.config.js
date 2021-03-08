module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '8px': '8px'
      },
      height: {
        '112': '28rem',
        '8px': '8px'
      },
      borderWidth: {
        '5': '5px',
        '10': '10px'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    fontSize: ['responsive', 'hover']
    // borderWidth:{
    //   border-8
    // },
  }
};
