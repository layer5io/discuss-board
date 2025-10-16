import React from 'react';

interface SubHeadingProps {
  text: string;
  className?: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({
  text,
  className,
  ...otherProps
}) => {
  return (
    <h4 className={['text-xl', className].join(' ')} {...otherProps}>
      {text}
    </h4>
  );
};

export default SubHeading;
