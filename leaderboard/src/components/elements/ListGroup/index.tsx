import React, { ReactNode } from 'react'

interface ListGroupProps {
    children: ReactNode;
    className?: string;
}

const ListGroup: React.FC<ListGroupProps> = ({ children, className, ...otherProps }) => {
    return (
        <ul className={className} {...otherProps}>{children}</ul>
    )
}

export default ListGroup