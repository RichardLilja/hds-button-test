import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    shbText2: React.CSSProperties;
    shbText3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    shbText2?: React.CSSProperties;
    shbText3?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    caption: false;
    overline: false;
    button: false;
    shbText2: true;
    shbText3: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    shbHb1: Palette["primary"];
    shbHb6: Palette["primary"];
    shbGray10: Palette["primary"];
  }
  interface PaletteOptions {
    shbHb1?: PaletteOptions["primary"];
    shbHb6?: PaletteOptions["primary"];
    shbGray10?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    shbHb1: {
      main: "#005FA5",
      contrastText: "#FFFFFF",
    },
    shbHb6: {
      main: "#043B62",
      contrastText: "#FFFFFF",
    },
    shbGray10: {
      main: "#E8E8E8",
      contrastText: "#043B62",
    },
  },
  typography: {
    h1: undefined,
    h2: undefined,
    h3: undefined,
    h4: undefined,
    h5: undefined,
    h6: undefined,
    subtitle1: undefined,
    subtitle2: undefined,
    body1: undefined,
    body2: undefined,
    caption: undefined,
    overline: undefined,
    button: undefined,
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
