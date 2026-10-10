import React, { ReactNode } from 'react'


interface ParagraphProps {
    children: ReactNode;
    className?: string;
}
const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
    return (
        <p className={className}>{children}</p>
    )
}

export default Paragraph