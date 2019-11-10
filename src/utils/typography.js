import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

export const systemFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'Noto Sans',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  'Noto Color Emoji',
];
const bodyFontStack = [...systemFontStack];
const headerFontStack = [...systemFontStack];

Wordpress2016.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    body: {
      color: '#333',
    },
    h1: {
      fontFamily: headerFontStack.join(','),
      fontWeight: 600,
      // letterSpacing: '-1.0pt',
    },
    h2: {
      fontWeight: 600,
      // letterSpacing: '-0.5pt',
    },
    h3: {
      fontWeight: 600,
      // letterSpacing: '-0.5pt',
    },
    p: {
      // letterSpacing: '-0.2pt',
    },
    blockquote: {
      color: 'unset',
      borderColor: 'unset',
    },
  };
};

delete Wordpress2016.googleFonts;

Wordpress2016.headerFontFamily = headerFontStack;
Wordpress2016.bodyFontFamily = bodyFontStack;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
