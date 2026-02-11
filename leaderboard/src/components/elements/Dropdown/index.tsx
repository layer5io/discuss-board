import React, { ReactNode } from 'react';

interface DropdownProps {
  label: ReactNode | string;
  children: ReactNode;
}

const Dropdown = ({ label, children }: DropdownProps) => {
  return (
    <div className="dropdown dropdown-left dropdown-end">
      <button tabIndex={0}>{label}</button>
      <div
        tabIndex={0}
        className="dropdown-content menu shadow bg-base-100 rounded"
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
