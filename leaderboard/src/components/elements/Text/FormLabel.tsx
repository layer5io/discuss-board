import React from 'react';

interface LabelProps {
  title: string;
  htmlFor?: string;
  className?: string;
  error?: boolean;
}

const FormLabel: React.FC<LabelProps> = ({
  title,
  htmlFor,
  error,
  className,
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      {...props}
      className={[
        'font-light text-base ',
        error ? 'text-red-500' : 'text-[#444444]',
        className,
      ].join(' ')}
    >
      {title}
    </label>
  );
};

export default FormLabel;
