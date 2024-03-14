"use client";

import "@fontsource/roboto/400.css";

import "modern-normalize";
import "./global.css";

import style from "./button.module.css";

import { Button as ButtonPrimitive } from "@mui/base/Button";

export type ButtonSizes = "large" | "medium" | "small";
export type ButtonVariants = "primary" | "secondary";

export const Button = ({
  children,
  size = "medium",
  variant = "primary",
  onClick,
}: {
  children?: React.ReactNode;
  size?: ButtonSizes;
  variant?: ButtonVariants;
  onClick?: () => void;
}) => {
  const buttonStyle = `${style.button} ${style[variant]} ${style[size]}`;
  return (
    <ButtonPrimitive className={buttonStyle} onClick={onClick}>
      {children}
    </ButtonPrimitive>
  );
};

export default function Page() {
  return (
    <section className="flex flex-col gap-3 p-3 w-max-320">
      <Button size="large">Primary - Large</Button>
      <Button variant="secondary">Secondary - Medium</Button>
      <Button size="small">Primary - Small</Button>
    </section>
  );
}
