module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '8px': '8px',
        '0.55': '0.1375rem'
      },
      height: {
        '112': '28rem',
        '8px': '8px',
        '0.55': '0.1375rem'
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
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      fontSize: ['responsive', 'hover'],
      scale: ['focus', 'active']
    }
    // borderWidth:{
    //   border-8
    // },
  }
};
