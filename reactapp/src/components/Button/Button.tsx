import React from "react";

export type ButtonVariant = "primary" | "secondary" | "default";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  backgroundColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = "primary",
  backgroundColor,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      data-testid="button"
      className={`btn btn-${variant}`}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {label}
    </button>
  );
};

export default Button;
