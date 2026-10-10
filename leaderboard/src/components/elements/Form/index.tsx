import React, { ReactNode } from 'react';

interface FormProps {
    className?: string;
    children: ReactNode;
    onSubmit: () => void
}

const Form: React.FC<FormProps> = ({ className, children, onSubmit, ...otherProps }) => {
    return <form onSubmit={onSubmit} {...otherProps}>{children}</form>;
};

export default Form;
