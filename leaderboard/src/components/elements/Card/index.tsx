import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: {};
  padding?: string;
}

const Card: React.FC<CardProps> = ({ children, className, style, padding }) => {
  return (
    <div
      className={['m-auto', padding || 'p-5 lg:p-7', className, 'shadow'].join(
        ' '
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
