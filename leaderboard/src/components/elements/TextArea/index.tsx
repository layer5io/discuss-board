import React from 'react';
import FormLabel from '../Text/FormLabel';

interface TextAreaProps {
  name?: string;
  placeholder?: string;
  label: string;
  value?: string;
  onChange?: any;
  ref?: string;
  textAreaName?: string;
  error?: boolean;
  message?: string;
}
const TextArea: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  label,
  value,
  onChange,
  ref,
  textAreaName,
  error,
  message,
}) => {
  return (
    <div>
      <div>
        <div className="my-4">
          {label && (
            <FormLabel
              htmlFor={name}
              title={label || 'Text Area Label'}
              className={`${
                error ? 'text-red-500' : null
              } text-base font-light mb-4`}
            />
          )}
        </div>
        <textarea
          placeholder={placeholder}
          className={[
            error
              ? 'bg-[#fd3d3d0f] text-red-500'
              : 'bg-[#F9F9FB] focus:bg-[#F9F9FB]/25',
            'outline-none rounded-lg px-4 py-4 w-full border border-[#72727281]  h-[10.125rem] focus:border-primary transition-all duration-200 ease-in-out',
          ].join(' ')}
          value={value}
          onChange={onChange}
          ref={ref}
          name={textAreaName}
        ></textarea>
      </div>
      {error && <small className="text-red-500">{message}</small>}
    </div>
  );
};

export default TextArea;
