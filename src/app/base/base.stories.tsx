import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./page";

const meta = {
  title: "Button/Base",
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
    variant: "primary",
    children: <>Primary</>,
  },
  render: (props) => {
    return <Button {...props} />;
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: <>Secondary</>,
  },
  render: (props) => {
    return <Button {...props} />;
  },
};
