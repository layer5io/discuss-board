// import { close } from '@assets/icons';
import React, { ReactNode } from 'react';
import Section from '../Section';

interface ModalProps {
  children: ReactNode;
  handleClose: () => void;
  width?: string;
}

const Modal: React.FC<ModalProps> = ({ children, handleClose, width }) => {
  return (
    <Section className="h-full w-screen z-50 bg-primary/20 flex items-center justify-center fixed top-0 left-0 bg-opacity-40">
      <Section
        className={`bg-neutral-accorion  rounded-2xl shadow lg:p-6 p-4 mx-5 xl:mx-0 ${
          width ? width : 'w-[1080px]'
        }`}
        data-aos="fade-down"
        data-aos-easing="linear"
      >
        <Section className="flex w-full justify-end">
          <button
            className="w-[1.8rem] h-[1.8rem] p-[.4rem] flex items-center justify-center rounded-full text-white  text-base"
            onClick={handleClose}
          >
            {/* <Image src={close} alt="Close" /> */}
          </button>
        </Section>
        {children}
      </Section>
    </Section>
  );
};

export default Modal;
