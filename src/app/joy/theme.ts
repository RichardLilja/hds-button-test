import { extendTheme } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  interface PalettePrimaryOverrides {
    50: false;
    100: false;
    200: false;
    300: false;
    400: false;
    500: false;
    600: false;
    700: false;
    800: false;
    900: false;
    shbHb1: true;
    shbHb6: true;
    shbWhite: true;
    shbGray10: true;
  }
  interface TypographySystemOverrides {
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    "title-lg": false;
    "title-md": false;
    "title-sm": false;
    "body-lg": false;
    "body-md": false;
    "body-sm": false;
    "body-xs": false;
    base: true;
    shbText2: true;
    shbText3: true;
  }
}

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          shbHb1: "#005FA5",
          shbHb6: "#043B62",
          shbWhite: "#FFFFFF",
          shbGray10: "#E8E8E8",
        },
      },
    },
  },
  typography: {
    h1: undefined,
    h2: undefined,
    h3: undefined,
    h4: undefined,
    "title-lg": undefined,
    "title-md": undefined,
    "title-sm": undefined,
    "body-lg": undefined,
    "body-md": undefined,
    "body-sm": undefined,
    "body-xs": undefined,
    base: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 400,
    },
    shbText2: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    shbText3: {
      fontSize: "0.875rem",
      lineHeight: "1.5rem",
    },
  },
});
