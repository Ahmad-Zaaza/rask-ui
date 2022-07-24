import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant: ButtonVariants;
}

type ButtonVariants = "primary" | "secondary";
type ButtonSizes = "small" | "default" | "large";

export type { ButtonVariants, ButtonProps, ButtonSizes };
