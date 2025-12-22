export interface LabelProps {
  text: string;
  htmlFor?: string;
  required?: boolean;
}

const Label = ({ text, htmlFor, required }: LabelProps) => {
  return (
    <label htmlFor={htmlFor}>
      {text}
      {required && <span style={{ color: "red" }}> *</span>}
    </label>
  );
};

export default Label;
