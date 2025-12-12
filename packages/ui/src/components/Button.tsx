import React from "react";

type ButtonProps = {
  label?: string;
  onClick?: () => void;
};

export function Button({ label = "Click me", onClick }: ButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;