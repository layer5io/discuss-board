import React, { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string
}

const Span: React.FC<SectionProps> = ({ children, className, ...props }) => {
    return (
        <span {...props} className={className}>
            {children}
        </span>
    );
};

export default Span;
