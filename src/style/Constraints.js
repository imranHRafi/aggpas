export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: '#818181',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220 deg 5% 40%)',
    900: '#1A1A1A',
  },
  primary: '#4812EA',
  secondary: '#1A1A1A',
};

export const WEIGHTS = {
  thin: 400,
  normal: 500,
  medium: 600,
  semiBold: 700,
  bold: 800,
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};
export const QUERIES = {
  phoneAndSmaller: `only screen and (max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `only screen and (max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `only screen and (max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
