import React, { ComponentProps, JSXElementConstructor, ReactNode } from 'react';
import FormLabel from '../Text/FormLabel';
interface TextFieldProps {
  type?: string;
  placeholder?: string;
  value?: string | number | undefined | Date;
  onClick?: () => void;
  error?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  success?: boolean;
  label?: string;
  inputRef?: string;
  message?: string;
  props?: ComponentProps<JSXElementConstructor<any>>;
  inputClass?: string;
  disabled?: boolean;
  icon?: ReactNode;
  leftIcon?: ReactNode;
}

const TextField: React.FC<TextFieldProps> = ({
  type,
  placeholder,
  value,
  onClick,
  error,
  className,
  onChange,
  name,
  label,
  inputRef,
  message,
  inputClass,
  props,
  disabled,
  icon,
  leftIcon,
}) => {
  return (
    <div className="w-full">
      <div>
        {label && (
          <div className="mb-4">
            <FormLabel className="font-light" title={label} />
          </div>
        )}
        <div
          className={[
            className,
            `flex items-center rounded-lg w-full lg:h-[50px] my-1 focus:border-primary ${
              error
                ? 'border text-red-300 border-red-500 bg-[#fd3d3d0f]'
                : 'border hover:border-[hsl(0, 0%, 80%)] border-[hsl(0, 0%, 70%)]'
            }`,
          ].join(' ')}
        >
          {leftIcon && <div className="cursor-pointer p-4">{leftIcon}</div>}
          <input
            type={type || 'text'}
            className={[
              inputClass,
              error ? 'bg-[#fd3d3d0f]' : 'bg-[#F9F9FB]',
              'outline-none text-neutral-copy-black px-4 py-4 h-12 w-full rounded-l-lg focus:bg-[#F9F9FB]/25 focus:border-primary transition-all duration-200 ease-in-out',
            ].join(' ')}
            placeholder={placeholder || 'Enter a value'}
            value={value}
            onClick={onClick}
            error={error}
            onChange={onChange}
            name={name}
            disabled={disabled}
            ref={inputRef}
            {...props}
          />

          {icon && <div className="cursor-pointer p-4">{icon}</div>}
        </div>
      </div>
      {error && <small style={{ color: '#e11900' }}>{message}</small>}
    </div>
  );
};

export default TextField;
