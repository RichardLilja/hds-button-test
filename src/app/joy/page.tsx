"use client";

import "@fontsource/roboto/400.css";

import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import ScopedCssBaseline from "@mui/joy/ScopedCssBaseline";

import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";

import { useState } from "react";

import { theme as baseTheme } from "./theme";

export const theme = extendTheme({
  ...baseTheme,
  components: {
    JoyButton: {
      defaultProps: {
        size: "md",
        variant: "solid",
      },
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          ...(ownerState.size === "lg" && {
            height: theme.spacing(8),
            borderRadius: theme.spacing(4),
            fontSize: theme.typography.shbText2.fontSize,
            lineHeight: theme.typography.shbText2.lineHeight,
          }),
          ...(ownerState.size === "md" && {
            height: theme.spacing(6),
            borderRadius: theme.spacing(3),
            fontSize: theme.typography.shbText2.fontSize,
            lineHeight: theme.typography.shbText2.lineHeight,
          }),
          ...(ownerState.size === "sm" && {
            height: theme.spacing(3.5),
            minHeight: theme.spacing(3.5),
            borderRadius: theme.spacing(1.75),
            fontSize: theme.typography.shbText3.fontSize,
            lineHeight: theme.typography.shbText3.lineHeight,
          }),
          ...(ownerState.variant === "solid" && {
            backgroundColor: theme.palette.primary.shbHb1,
            color: theme.palette.primary.shbWhite,
            ":hover": {
              backgroundColor: theme.palette.primary.shbHb6,
              "@media (hover: none)": {
                backgroundColor: theme.palette.primary.shbHb1,
              },
            },
          }),
          ...(ownerState.variant === "outlined" && {
            backgroundColor: theme.palette.primary.shbWhite,
            color: theme.palette.primary.shbHb1,
            borderColor: theme.palette.primary.shbHb1,
            ":hover": {
              backgroundColor: theme.palette.primary.shbGray10,
              color: theme.palette.primary.shbHb6,
              borderColor: theme.palette.primary.shbHb6,
              "@media (hover: none)": {
                backgroundColor: theme.palette.primary.shbWhite,
                color: theme.palette.primary.shbHb1,
                borderColor: theme.palette.primary.shbHb1,
              },
            },
          }),
          padding: `0 ${theme.spacing(3)}`,
          fontWeight: theme.typography.base.fontWeight,
          fontFamily: theme.typography.base.fontFamily,
          ":focus-visible": {
            outlineColor: theme.palette.primary.shbHb1,
            outlineOffset: theme.spacing(0.5),
            outlineStyle: "auto",
            outlineWidth: "1px",
          },
        }),
      },
    },
  },
});

export default function Page() {
  const [root, setRoot] = useState<HTMLDivElement | null>(null);

  return (
    <CssVarsProvider colorSchemeNode={root} theme={theme}>
      <ScopedCssBaseline ref={(element) => setRoot(element)}>
        <Stack width={320} padding={3} gap={3}>
          <Button size="lg">Primary - Large</Button>
          <Button variant="outlined">Secondary - Medium</Button>
          <Button size="sm">Primary - Small</Button>
        </Stack>
      </ScopedCssBaseline>
    </CssVarsProvider>
  );
}
