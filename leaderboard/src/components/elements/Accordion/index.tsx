import React, { ReactNode } from 'react';

interface AccordionProps {
  title: string | ReactNode;
  content: string | ReactNode;
}

const Accordion = ({ title, content }: AccordionProps) => {
  return (
    <div className="collapse">
      <input type="checkbox" />
      <div className="collapse-title bg-white mb-2 text-neutral font-medium border border-[#E0E0E0] rounded-md">
        {title}
      </div>
      <div className="collapse-content px-0">
        <div className="p-4 bg-white border border-[#E0E0E0] rounded-md">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
