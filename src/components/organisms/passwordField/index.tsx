import { useState } from "react";
import { IconButton, InputAdornment, Stack } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import Input, { type InputProps } from "../../atoms/input";
import Text from "../../atoms/typography";

type PasswordFieldProps = Omit<InputProps, "type"> & {
  label?: string;
};

const PasswordField = ({ label, ...props }: PasswordFieldProps) => {
  const [show, setShow] = useState(false);

  return (
    <Stack spacing={0.5}>
      {label && (
        <Text variant="body2" color="text.secondary">
          {label}
        </Text>
      )}

      <Input
        {...props}
        type={show ? "text" : "password"}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={() => setShow((p) => !p)}
                >
                  {show ? (
                    <VisibilityOff fontSize="small" />
                  ) : (
                    <Visibility fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Stack>
  );
};

export default PasswordField;
