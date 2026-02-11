import React, { ReactNode, SetStateAction, useState } from 'react';

import {
  useReactTable,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table';

import { LeaderBoardData } from '@/types/index';
import Section from '../Section';
import BtnLoader from '../Button/loader';
import Paragraph from '../Text/Paragraph';
import TextField from '../TextField';
import { search } from '@assets/icons';
import Image from '../Image';
import SelectDropdown from '../Select';

interface TableProps {
  data: any;
  columns: any;
  loading: boolean;
  noData?: string;
  option?: string;
  setOption?: React.Dispatch<SetStateAction<string>>;
}

interface PaginationButtonProps {
  loading: boolean;
  children: ReactNode;
  disabled: boolean;
  className: string;
  onClick: () => void;
}

const TableComponent: React.FC<TableProps> = ({
  data,
  columns,
  loading,
  noData,
  setOption,
  option,
}) => {
  return (
    <Table
      {...{ data, columns }}
      loading={loading}
      noData={noData}
      setOption={setOption}
      option={option}
    />
  );
};

function Table({
  data,
  columns,
  loading,
  noData,
  setOption,
  option,
}: {
  data: LeaderBoardData[];
  columns: ColumnDef<LeaderBoardData>[];
  loading: boolean;
  noData?: string;
  option?: string;
  setOption?: React.Dispatch<SetStateAction<string>>;
}) {
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const [sorting, setSorting] = useState<SortingState>([]);
  const options: { label: string; value: string }[] = [
    { label: 'Monthly', value: 'monthly' },
    { label: 'Daily', value: 'daily' },
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  const Button: React.FC<PaginationButtonProps> = ({
    loading,
    children,
    disabled,
    className,
    onClick,
  }) => {
    return (
      <button
        className={`${className} border rounded p-1 text-xs ${
          disabled ? 'bg-primary-100 opacity-60' : 'bg-primary text-white'
        }`}
        disabled={disabled || loading}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  return (
    <section>
      <div className="grid grid-cols-2 justify-between mt-4 mx-4">
        <div>
          <TextField
            value={globalFilter ?? ''}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="p-2 font-lg border border-block"
            placeholder="Search Member"
            leftIcon={<Image src={search} alt={'Search'} />}
          />
        </div>
        <div className="ml-4">
          <SelectDropdown
            options={options}
            defaultValue={option}
            placeholder='Toggle By'
            onChange={({ value }: { value: string }) => {
              setOption!(value);
            }}
          />
        </div>
      </div>
      <article className="flex flex-col border border-light-grey">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className=" inline-block min-w-full sm:px-6 lg:px-8">
            <table className="min-w-full bg-white sm:px-6 lg:px-8 h-auto overflow-y-scroll relative">
              <thead className="bg-light-grey-100">
                {table?.getHeaderGroups().map((headerGroup) => (
                  <tr
                    key={headerGroup.id}
                    className="w-full border-y border-light text-white bg-primary"
                  >
                    {headerGroup.headers.map((header) => {
                      return (
                        <th
                          key={header.id}
                          colSpan={header.colSpan}
                          className="text-left text-xs text-white font-semibold uppercase whitespace-nowrap py-5 px-5"
                        >
                          {header.isPlaceholder ? null : (
                            <div
                              {...{
                                className: header.column.getCanSort()
                                  ? 'cursor-pointer select-none'
                                  : '',
                                onClick:
                                  header.column.getToggleSortingHandler(),
                              }}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {{
                                asc: ' 🔼',
                                desc: ' 🔽',
                              }[header.column.getIsSorted() as string] ?? null}
                            </div>
                          )}
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>
              <tbody className="bg-white">
                {!loading &&
                  table?.getRowModel()?.rows.map((row) => {
                    return (
                      <tr
                        key={row.id}
                        className={`relative border-y border-light text-dark ${
                          Number(row?.id) % 2 ? 'bg-primary-100' : ''
                        }`}
                      >
                        {row?.getVisibleCells().map((cell) => {
                          return (
                            <td
                              key={cell.id}
                              className="text-sm font-normal capitalize whitespace-nowrap py-[14px] px-5"
                            >
                              <div className="flex items-center">
                                {flexRender(
                                  cell?.column.columnDef.cell,
                                  cell?.getContext()
                                )}
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            {loading && (
              <Section className="h-64 w-full flex items-center justify-center">
                <Section>
                  <BtnLoader />
                </Section>
              </Section>
            )}
            {!loading && data?.length === 0 && (
              <Section className="h-64 w-full flex items-center justify-center">
                <Paragraph className="text-gray-400">
                  {noData || 'Oops! No Data to Display'}
                </Paragraph>
              </Section>
            )}
          </div>
        </div>
      </article>
      <div className="h-2" />
      {!loading && data?.length > 0 && (
        <Section className="flex items-center justify-center text-sx text-gray-600">
          <div className="flex items-center gap-2">
            <Button
              className=""
              onClick={() => table?.setPageIndex(0)}
              disabled={!table?.getCanPreviousPage()}
              loading={false}
            >
              {'<<'}
            </Button>
            <Button
              className=""
              onClick={() => table?.previousPage()}
              disabled={!table?.getCanPreviousPage()}
              loading={false}
            >
              &larr; Prev
            </Button>
            <Button
              className=""
              onClick={() => table?.nextPage()}
              disabled={!table?.getCanNextPage()}
              loading={false}
            >
              Next &rarr;
            </Button>

            <Button
              className=""
              onClick={() => table?.setPageIndex(table?.getPageCount() - 1)}
              disabled={!table?.getCanNextPage()}
              loading={false}
            >
              {'>>'}
            </Button>

            <span className="flex items-center gap-1 text-xs">
              <div>Page</div>
              <strong>
                {table?.getState().pagination.pageIndex + 1} of{' '}
                {table?.getPageCount()}
              </strong>
            </span>
            <span className="flex items-center gap-1 text-xs">
              | Go to page:
              <input
                type="number"
                defaultValue={table?.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                className="border p-1 rounded w-16"
              />
            </span>
            <select
              value={table?.getState().pagination.pageSize}
              onChange={(e) => {
                table?.setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option className="text-xs" key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </Section>
      )}
    </section>
  );
}

export default TableComponent;
