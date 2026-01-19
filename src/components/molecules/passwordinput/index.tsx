
import React from "react";
import { InputAdornment, Typography } from "@mui/material";
import { Input } from "../../atoms/input";

interface PasswordInputProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Input
      type={showPassword ? "text" : "password"}
      label={label}
      value={value}
      onChange={onChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Typography
              onClick={() => setShowPassword((prev) => !prev)}
              sx={{
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 500,
                color: "#3A86FF",
                userSelect: "none",
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </Typography>
          </InputAdornment>
        ),
      }}
      required
      fullWidth
    />
  );
};
