import { Stack, TextField, type TextFieldProps } from "@mui/material";
import type { SxProps, Theme } from "@mui/system";
import Text from "../typography";

export interface InputProps {
  label?: string;
  value?: string | number;
  placeholder?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  onChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  slotProps?: TextFieldProps["slotProps"];
  sx?: SxProps<Theme>;
  disabled?: boolean;
  autoComplete?: string;
  
}

const Input = ({
  label,
  value,
  placeholder,
  type = "text",
  onChange,
  slotProps,
  sx,
  disabled,
}: InputProps) => {
  return (
    <Stack spacing={0.5}>
      {label && (
        <Text variant="body2" color="text.secondary">
          {label}
        </Text>
      )}

      <TextField
        fullWidth
        size="small"
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        slotProps={slotProps}
        sx={sx}
        disabled={disabled}
        autoComplete="off"
      />
    </Stack>
  );
};

export default Input;
