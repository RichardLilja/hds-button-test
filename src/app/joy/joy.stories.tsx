import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "@mui/joy/Button";
import { CssVarsProvider } from "@mui/joy/styles";
import ScopedCssBaseline from "@mui/joy/ScopedCssBaseline";

import { theme } from "./page";
import { useState } from "react";

const meta = {
  title: "Button/Joy",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
  render: (props) => {
    const [root, setRoot] = useState<HTMLDivElement | null>(null);

    return (
      <CssVarsProvider colorSchemeNode={root} theme={theme}>
        <ScopedCssBaseline ref={(element) => setRoot(element)}>
          <Button {...props} />
        </ScopedCssBaseline>
      </CssVarsProvider>
    );
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "solid",
    children: <>Primary</>,
  },
};

export const Secondary: Story = {
  args: {
    variant: "outlined",
    children: <>Secondary</>,
  },
};
