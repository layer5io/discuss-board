import React from 'react';
import Select from 'react-select';
import FormLabel from '../Text/FormLabel';

export interface SelectDropdownTypes {
  defaultValue?: any;
  onChange?: any;
  styles?: string | any;
  disbaled?: boolean;
  options: { value: string | number; label: string }[];
  multiSelect?: any;
  textTransform?: string;
  loading?: boolean;
  name?: string;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  placeholder?: string;
}

const SelectDropdown = React.forwardRef(function SelectDropdown(
  {
    defaultValue,
    onChange,
    styles,
    disbaled,
    options,
    multiSelect,
    textTransform,
    loading,
    name,
    label,
    error,
    errorMessage,
    placeholder,
    ...rest
  }: SelectDropdownTypes,
  ref
) {
  // select dropdown custom styles
  const selectCustomStyles = {
    menu: (provided: any) => ({
      ...provided,
      fontSize: '14px',
      textTransform: textTransform || 'capitalize',
      zIndex: 100,
    }),

    placeholder: (provided: any) => ({
      ...provided,
      color: '#A0A6AC',
    }),

    control: (provided: any, state: { isFocused: any }) => ({
      ...provided,
      minHeight: '48px',
      fontSize: '14px',
      border: `0.5px solid ${state.isFocused ? '#a4ffb9' : '#E7EDF2'}`,
      color: error ? '#fd3d3d' : `${state.isFocused ? 'green' : '#E7EDF2'}`,
      borderRadius: '6px',
      textTransform: textTransform || 'capitalize',
      backgroundColor: error ? '#fd3d3d0f' : '#F9F9FB',
    }),

    option: (provided: any, state: { isSelected: any; isFocused: any }) => ({
      ...provided,
      color: `${
        state.isSelected ? '#fff' : state.isFocused ? '#20282e' : '#20282e'
      }`,
      backgroundColor: state.isSelected
        ? '#227645'
        : state.isFocused
        ? '#47F58F'
        : '',
    }),

    singleValue: (provided: any, state: { isDisabled: any }) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  return (
    <div>
      {label && (
        <div className="mb-4">
          <FormLabel htmlFor={name} title={label} />
        </div>
      )}

      {multiSelect ? (
        <Select
          isMulti
          components={{
            DropdownIndicator: () => (
              <span className="pr-4">
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L13 1"
                    stroke="#838383"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            ),
            IndicatorSeparator: () => null,
          }}
          isDisabled={disbaled}
          defaultValue={defaultValue}
          onChange={onChange}
          styles={styles || selectCustomStyles}
          options={options}
          name={name}
          placeholder="Select an Item"
          {...rest}
        />
      ) : (
        <Select
          components={{
            DropdownIndicator: () => (
              <span className="pr-4">
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L13 1"
                    stroke="#838383"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            ),
            IndicatorSeparator: () => null,
          }}
          isDisabled={disbaled}
          defaultValue={defaultValue}
          onChange={onChange}
          styles={styles || selectCustomStyles}
          options={options}
          name={name}
          isLoading={loading}
          placeholder={placeholder || 'Select an Item'}
          {...rest}
        />
      )}
      {error && (
        <div className="m">
          {error && <small style={{ color: '#e11900' }}>{errorMessage}</small>}
        </div>
      )}
    </div>
  );
});

export default SelectDropdown;
