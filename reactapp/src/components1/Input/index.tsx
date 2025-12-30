import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, style, ...props }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {label && <label>{label}</label>}
      <input 
        style={{ 
          padding: '8px', 
          borderRadius: '4px', 
          border: '1px solid #ccc',
          ...style 
        }} 
        {...props} 
      />
    </div>
  );
};

export default Input;
