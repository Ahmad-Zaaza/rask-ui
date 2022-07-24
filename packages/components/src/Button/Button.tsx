import { forwardRef } from "react";
import { ButtonProps } from "./types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(() => <button>Hello world</button>);

Button.defaultProps = {
  variant: "primary"
};
Button.displayName = "Button";

export default Button;
