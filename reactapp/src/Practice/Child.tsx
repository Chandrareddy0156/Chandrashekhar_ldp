// type ButtonProps = {
//   label: string;
// };

// const Button = ({ label }: ButtonProps) => {
//   return <button>{label}</button>;
// };

// export default Button;

// type CardProps = {
//   children: React.ReactNode;
// };

// const Card = ({ children }: CardProps) => {
//   return <div className="card">{children}</div>;
// };

// export default Card;

type ButtonProps = {
  onClick: () => void;
};

const Button = ({ onClick }: ButtonProps) => {
  return <button onClick={onClick}>Click</button>;
};

export default Button;
