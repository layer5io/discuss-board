import React from 'react';

interface CheckBoxProps {
  checked?: boolean;
  name?: string;
  value?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  checked,
  value,
  className,
  onChange,
  ...otherProps
}) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      className={['checkbox', className].join(' ')}
      name={name}
      value={value}
      onChange={onChange}
      {...otherProps}
    />
  );
};

export default CheckBox;
