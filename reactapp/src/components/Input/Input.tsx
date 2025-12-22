export interface InputProps {
  id?: string;
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
}

const Input = ({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
}: InputProps) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
    />
  );
};

export default Input;
