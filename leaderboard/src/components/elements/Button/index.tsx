import React, { ReactNode } from 'react';
import BtnLoader from './loader';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  label?: string | ReactNode;
  onClick?: () => void;
  onMouseOver?: () => void;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  className?: string;
  loadingIcon?: string;
  btnIcon?: string;
  variant?: string;
  btnLeftIcon?: string;
  btnRightIcon?: string;
}
const Button: React.FC<ButtonProps> = ({
  type,
  label,
  onClick,
  onMouseOver,
  disabled,
  loading,
  loadingText,
  className,
  loadingIcon,
  btnIcon,
  variant,
  btnLeftIcon,
  btnRightIcon,
}) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      onMouseOver={onMouseOver}
      disabled={loading || disabled}
      className={[
        `w-full px-6 py-3 relative hover:opacity-90 transition-all duration-500 ease-linear rounded-lg`,
        className,
      ].join(' ')}
      style={{
        cursor: loading || disabled ? 'not-allowed' : '',
        opacity: loading || disabled ? '.68' : '1',
        backgroundColor:
          loading || disabled ? 'rgba(240, 255, 244, 0.0102);' : '',
      }}
    >
      {loading ? (
        <div className="flex justify-center align-middle">
          <BtnLoader />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          {btnLeftIcon && (
            <div className="mr-2 md:mr-4">
              <img src={btnLeftIcon} width={20} height={20} alt="icon" />
            </div>
          )}
          <div
            className={`md:w-fit ${
              btnLeftIcon !== '' || btnRightIcon !== '' ? 'w-full' : null
            } `}
          >
            <p className="text-center text-sm md:text-base whitespace-nowrap capitalize">
              {label || 'Button Text'}
            </p>
          </div>
          {btnRightIcon && (
            <div className="ml-2">
              <img src={btnRightIcon} width={20} height={20} alt="icon" />
            </div>
          )}
        </div>
      )}
    </button>
  );
};

export default Button;
