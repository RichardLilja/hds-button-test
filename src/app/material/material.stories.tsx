import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ScopedCssBaseline, ThemeProvider } from "@mui/material";
import { Button } from "./page";
import { theme } from "./page";

const meta = {
  title: "Button/Material",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "contained",
    children: "Primary",
  },
  render: (props) => {
    return (
      <ScopedCssBaseline>
        <ThemeProvider theme={theme}>
          <Button {...props} />
        </ThemeProvider>
      </ScopedCssBaseline>
    );
  },
};

export const Secondary: Story = {
  args: {
    variant: "outlined",
    children: "Secondary",
  },
  render: (props) => {
    return (
      <ScopedCssBaseline>
        <ThemeProvider theme={theme}>
          <Button {...props} />
        </ThemeProvider>
      </ScopedCssBaseline>
    );
  },
};
