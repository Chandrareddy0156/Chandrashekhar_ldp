import React from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'normal' | 'bold';
  color?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  as: Component = 'p',
  size = 'md',
  weight = 'normal',
  color,
  style,
  ...props
}) => {
  const styles: React.CSSProperties = {
    fontWeight: weight,
    color: color,
    margin: 0,
    ...style,
  };

  switch (size) {
    case 'sm': styles.fontSize = '0.875rem'; break;
    case 'lg': styles.fontSize = '1.25rem'; break;
    case 'xl': styles.fontSize = '1.5rem'; break;
    default: styles.fontSize = '1rem'; break;
  }

  return (
    <Component style={styles} {...props}>
      {children}
    </Component>
  );
};

export default Text;

