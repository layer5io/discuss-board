import React from 'react';
import Section from '../Section';

interface StatusBadgeProps {
  className?: string;
  variant: number;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ className, variant }) => {
  return (
    <Section className={['flex items-center', className].join(' ')}>
      <Section>
        <svg
          width="8"
          height="9"
          viewBox="0 0 8 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <circle cx="4" cy="4.8125" r="4" fill={colorVariants[variant]} /> */}
        </svg>
      </Section>
      {/* <Section className="ml-2 text-gray-400">{status[variant]}</Section> */}
    </Section>
  );
};

export default StatusBadge;
