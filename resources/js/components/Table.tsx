/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSearchFilter } from '@/hooks/useSearchFilter';
import { SearchIcon } from 'lucide-react';
import DataTable, { TableStyles } from 'react-data-table-component';
import { Input } from './ui/input';

const customStyles: TableStyles = {
    header: {
        style: {
            minHeight: '56px',
        },
    },
    headRow: {
        style: {
            // backgroundColor: '#adadad',
            fontWeight: 'bold',
            fontSize: '0.8rem',
        },
    },
    headCells: {
        style: {
            borderStyle: 'solid',
            borderTopWidth: '1px',
            borderTopColor: '#000',
            borderRightWidth: '1px',
            borderRightColor: '#000',
            '&:first-child': {
                borderStyle: 'solid',
                borderLeftWidth: '1px',
                borderLeftColor: '#000',
                padding: '0px',
                justifyContent: 'center',
                width: '3rem',
            },
            backgroundColor: '#adadad',
            paddingRight: 0,
            paddingLeft: 0,
            whiteSpace: 'wrap',
        },
    },
    rows: {
        style: {
            '&:last-child': {
                borderStyle: 'solid',
                borderBottomWidth: '1px',
                borderBottomColor: '#000',
            },
        },
    },
    cells: {
        style: {
            borderStyle: 'solid',
            borderRightWidth: '1px',
            borderRightColor: '#000',
            borderTopWidth: '1px',
            borderTopColor: '#000',
            '&:first-child': {
                borderStyle: 'solid',
                borderLeftWidth: '1px',
                borderLeftColor: '#000',
                width: '20px',
            },
            paddingInline: '4px',
            // border: '1px solid black',
            // backgroundColor: 'red',
        },
    },
    tableWrapper: {
        style: {
            overflowX: 'auto',
        },
    },
};

export default function Table({
    columns,
    data,
    handlePageChange,
    handlePerRowsChange,
}: {
    columns: any;
    data: any;
    handlePageChange: (page: number) => void;
    handlePerRowsChange: (newPerPage: number, page: number) => void;
}) {
    const { searchTerm, setSearchTerm, filteredData } = useSearchFilter(data);
    // const actionsMemo = useMemo(() => <Export onExport={() => downloadCSV(data)} />, []);
    return (
        <div className="space-y-4 overflow-x-auto">
            <div className="relative h-8">
                <Input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} placeholder="Cari ..."></Input>
                <SearchIcon className="absolute -top-1 right-3 translate-y-1/2 cursor-pointer"></SearchIcon>
            </div>
            <DataTable
                columns={columns}
                data={filteredData}
                customStyles={customStyles}
                highlightOnHover
                pagination
                paginationTotalRows={filteredData.length}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handlePerRowsChange}
                persistTableHead
                noDataComponent={<div className="w-full border border-black py-4 text-center">Data Tidak Ada</div>}
                // actions={}
            />
        </div>
    );
}
