import { FormControlLabel, Link } from "@mui/material";
import Checkbox from "../../atoms/checkbox";
import Text from "../../atoms/typography";

export const AgreementCheckbox = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    }
    label={
      <Text variant="body2">
        I agree to the <Link>Privacy Policy</Link>
      </Text>
    }
  />
);
