"use client";

import "@fontsource/roboto/400.css";

import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { theme as baseTheme } from "./theme";

import { Button as BaseButton } from "@mui/material";
import Stack from "@mui/material/Stack";

export const theme = createTheme({
  ...baseTheme,
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          shbText2: "p",
          shbText3: "p",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          ...(ownerState.size === "large" && {
            height: theme.spacing(8),
            borderRadius: theme.spacing(4),
            fontSize: theme.typography.shbText2.fontSize,
            lineHeight: theme.typography.shbText2.lineHeight,
          }),
          ...(ownerState.size === "medium" && {
            height: theme.spacing(6),
            borderRadius: theme.spacing(3),
            fontSize: theme.typography.shbText2.fontSize,
            lineHeight: theme.typography.shbText2.lineHeight,
          }),
          ...(ownerState.size === "small" && {
            height: theme.spacing(3.5),
            borderRadius: theme.spacing(1.75),
            fontSize: theme.typography.shbText3.fontSize,
            lineHeight: theme.typography.shbText3.lineHeight,
          }),
          ...(ownerState.variant === "contained" && {
            backgroundColor: theme.palette.shbHb1.main,
            color: theme.palette.shbHb1.contrastText,
            transition: "none",
            ":hover": {
              backgroundColor: theme.palette.shbHb6.main,
              color: theme.palette.shbHb6.contrastText,
              "@media (hover: none)": {
                backgroundColor: theme.palette.shbHb1.main,
                color: theme.palette.shbHb1.contrastText,
              },
            },
          }),
          ...(ownerState.variant === "outlined" && {
            backgroundColor: theme.palette.common.white,
            border: `1px solid ${theme.palette.shbHb1.main}`,
            color: theme.palette.shbHb1.main,
            transition: "none",
            ":hover": {
              backgroundColor: theme.palette.shbGray10.main,
              color: theme.palette.shbGray10.contrastText,
              borderColor: theme.palette.shbGray10.contrastText,
              "@media (hover: none)": {
                backgroundColor: theme.palette.common.white,
                color: theme.palette.shbHb1.main,
                borderColor: theme.palette.shbHb1.main,
              },
            },
          }),
          padding: `0 ${theme.spacing(3)}`,
          fontWeight: theme.typography.fontWeightRegular,
          fontFamily: theme.typography.fontFamily,
          ":focus-visible": {
            outlineColor: theme.palette.shbHb6.main,
            outlineOffset: theme.spacing(0.5),
            outlineStyle: "auto",
            outlineWidth: "1px",
          },
        }),
      },
    },
  },
});

type ButtonSizes = "large" | "medium" | "small";
type ButtonVariants = "contained" | "outlined";

export const Button = ({
  children,
  size = "medium",
  variant = "contained",
  onClick,
}: {
  children?: React.ReactNode;
  size?: ButtonSizes;
  variant?: ButtonVariants;
  onClick?: () => void;
}) => {
  return (
    <BaseButton size={size} variant={variant} onClick={onClick}>
      {children}
    </BaseButton>
  );
};

export default function Page() {
  return (
    <>
      <ScopedCssBaseline>
        <ThemeProvider theme={theme}>
          <Stack width={320} padding={3} gap={3}>
            <Button variant="contained" size="large">
              Primary - Large
            </Button>
            <Button variant="outlined" size="medium">
              Secondary - Medium
            </Button>
            <Button variant="contained" size="small">
              Primary - Small
            </Button>
          </Stack>
        </ThemeProvider>
      </ScopedCssBaseline>
    </>
  );
}
