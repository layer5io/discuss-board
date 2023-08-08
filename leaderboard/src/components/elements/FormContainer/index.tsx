import React, { ReactNode } from 'react';

interface FormContainerProps {
  children: ReactNode;
  className?: string;
}
const FormContainer: React.FC<FormContainerProps> = ({
  children,
  className,
}) => {
  return (
    <section
      className={['grid lg:grid-cols-2 grid-cols-1 gap-4', className].join(' ')}
    >
      {children}
    </section>
  );
};

export default FormContainer;
