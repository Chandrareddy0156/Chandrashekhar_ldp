// atoms/Input/index.tsx
import { TextField } from "@mui/material";
import  type {TextFieldProps} from "@mui/material"

export type InputAtomProps = TextFieldProps;

export const Input: React.FC<InputAtomProps> = (props) => (
  <TextField
    fullWidth
    size="small"
    {...props}
    sx={{
      "& .MuiOutlinedInput-root": {
        borderRadius: "4px",
        height: "40px",
        width: "296px",
      },
      ...(props.sx),
    }}
  />
);
