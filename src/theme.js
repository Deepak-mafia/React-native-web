import {createTheme} from '@shopify/restyle';

export const palette = {
  purple: '#5A31F4',
  white: '#FFF',
  black: '#111',
  darkGray: '#333',
  lightGray: '#EEE',
  golden: '#B88060',
};
export const theme = createTheme({
  spacing: {
    s: 8,
    m: 16,
  },
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.black,
    primaryCardBackground: palette.purple,
    secondaryCardBackground: palette.white,
    primaryCardText: palette.white,
    secondaryCardText: palette.black,
    goldenColor: palette.golden,
    black: palette.black,
  },
  // breakpoints
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {},
    heading: {
      fontSize: 28,
      color: 'secondaryCardText',
      textAlign: 'center',
      fontWeight: '400',
    },
    body: {
      fontSize: 16,
      color: 'secondaryCardText',
    },
    goldenText: {
      fontSize: 16,
      color: 'goldenColor',
    },
    normalText: {
      fontSize: 16,
      color: 'secondaryCardText',
      textAlign: {tablet: 'center', phone: 'left'},
    },
  },
  cardVariants: {
    defaults: {},
    primary: {
      backgroundColor: 'primaryCardBackground',
      shadowOpacity: 0.3,
    },
    secondary: {
      backgroundColor: 'secondaryCardBackground',
      shadowOpacity: 0.1,
    },
  },
});
// type Theme = typeof theme;
export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.black,
    mainForeground: palette.white,
    secondaryCardBackground: palette.darkGray,
    secondaryCardText: palette.white,
  },
};
