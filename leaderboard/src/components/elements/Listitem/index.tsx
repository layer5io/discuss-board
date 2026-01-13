import React, { ReactNode } from 'react'

interface ListItemProps {
    children: ReactNode;
    className?: string;
}

const ListItem: React.FC<ListItemProps> = ({ children, className, ...otherProps }) => {
    return (
        <li className={className} {...otherProps}>{children}</li>
    )
}

export default ListItem