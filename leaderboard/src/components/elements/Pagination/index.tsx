import React, { useState } from 'react';
import { ReactComponent as CaretLeft } from '../../../assets/icons/caret-left.svg';
import { ReactComponent as CaretRight } from '../../../assets/icons/caret-right.svg';

interface PaginationTypes {
  total: number;
  setCurrentPage: any;
  currentPage?: number;
}

const numbers = (data: number) =>
  Array(data)
    .fill(0)
    .map((n, i) => i + 1);

const Pagination = ({
  total,
  setCurrentPage,
  currentPage,
}: PaginationTypes) => {
  const sliceDigit = 8;
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(sliceDigit);
  // slice(0,8)

  const slicePage = (first: number | undefined, last: number | undefined) => {
    return numbers(total).slice(first, last);
  };

  return (
    <div className="flex items-center text-sm text-dark font-medium">
      <button
        onClick={() => {
          setFirst(first - sliceDigit);
          setLast(last - sliceDigit);
        }}
        className="bg-light-grey-100 w-10 h-10 flex items-center justify-center rounded-l-lg border"
        disabled={first === 0}
      >
        <CaretLeft width={14} height={14} fill="#227645" />
      </button>
      {first > 0 && (
        <div className="mx-1 w-10 h-10 flex items-center justify-center border rounded">
          ...
        </div>
      )}
      {slicePage(first, last).length > 0 &&
        slicePage(first, last).map((num) => {
          return (
            <button
              className={`${
                num === currentPage
                  ? 'bg-primary-soft text-primary-default'
                  : ''
              } mx-1 rounded-lg w-10 h-10 border hover:text-primary-dark hover:bg-alt-green/80 transition-all ease-in-out duration-300`}
              onClick={() => {
                setCurrentPage(num);
              }}
              key={num}
            >
              {num}
            </button>
          );
        })}
      {last < total && (
        <div className="w-10 h-10 flex items-center justify-center border">
          ...
        </div>
      )}
      <button
        onClick={() => {
          setFirst(first + sliceDigit);
          setLast(last + sliceDigit);
        }}
        className="bg-light-grey-100 mx-1 w-10 h-10 flex items-center justify-center rounded-r-lg border"
        disabled={last >= total}
      >
        <CaretRight width={14} height={14} fill="#227645" />
      </button>
    </div>
  );
};

export default Pagination;
