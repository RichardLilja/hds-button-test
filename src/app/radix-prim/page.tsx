"use client";

import "@fontsource/roboto/400.css";

import "modern-normalize";
import "../base/global.css";

import style from "../base/button.module.css";

import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ asChild = false, ...props }, ref) => {
    const BaseComponent = asChild ? Slot : "button";
    return <BaseComponent ref={ref} {...props} />;
  }
);
BaseButton.displayName = "BaseButton";

import type { ButtonSizes, ButtonVariants } from "../base/page";

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
    <BaseButton className={buttonStyle} onClick={onClick}>
      {children}
    </BaseButton>
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
