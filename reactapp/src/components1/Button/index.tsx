export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "contained" | "outlined" | "text";
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "contained",
  style,
  ...props
}) => {
  const baseStyle: React.CSSProperties = {
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    border: "none",
    ...style,
  };

  if (variant === "contained") {
    baseStyle.backgroundColor = "#1976d2";
    baseStyle.color = "white";
  } else if (variant === "outlined") {
    baseStyle.border = "1px solid #1976d2";
    baseStyle.backgroundColor = "transparent";
    baseStyle.color = "#1976d2";
  } else {
    baseStyle.backgroundColor = "transparent";
    baseStyle.color = "#1976d2";
  }

  return (
    <button style={baseStyle} {...props}>
      {label}
    </button>
  );
};

export default Button;
