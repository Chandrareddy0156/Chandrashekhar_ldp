import { Checkbox as MuiCheckbox } from "@mui/material";

interface CheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "small" | "medium";
  color?: "primary" | "secondary";
}

const Checkbox = ({
  checked,
  onChange,
  size = "small",
  color = "primary",
}: CheckboxProps) => {
  return (
    <MuiCheckbox
      checked={checked}
      onChange={onChange}
      size={size}
      color={color}
    />
  );
};

export default Checkbox;
