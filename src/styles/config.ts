import { extendTheme } from '@chakra-ui/react';

const theme = {
  colors: {
    gray:
    {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
  },
  fonts: {
    body: 'Roboto',
    heading: 'Roboto',
  },
  styles: {
    global: {
      body: {
        color: 'gray.50',
        bg: 'gray.900',
      },
    },
  },
};

export default extendTheme(theme)
