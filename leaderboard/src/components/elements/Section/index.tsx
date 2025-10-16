import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
const Section: React.FC<SectionProps> = ({
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <section className={className} onClick={onClick} {...props}>
      {children}
    </section>
  );
};

export default Section;
