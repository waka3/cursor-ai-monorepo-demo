import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const ReactButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="ui-button">
      {children}
    </button>
  );
};
