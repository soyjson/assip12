import useDataTablePagination from '@/hooks/usePaginationState';
import { sortByIndonesianDate } from '@/utils/sortFunction';
import { PenBox } from 'lucide-react';
import { TableColumn } from 'react-data-table-component';
import Table from './Table';
import { Button } from './ui/button';

type DataRow = {
    id: number;
    namaPengusul: string;
    judulPenelitian: string;
    file: string;
    date: string;
};

const data: DataRow[] = [
    {
        id: 1,
        file: 'asd',
        judulPenelitian: 'Penelitian 1111111111111111111111111111111111111111111111111',
        namaPengusul: 'nama Pengusul',
        date: '20-September-2020',
    },
    {
        id: 2,
        file: 'asd',
        judulPenelitian: 'Penelitian 2',
        namaPengusul: 'nama Pengusul 2',
        date: '20-September-2022',
    },
];

export default function DataReviewUsulanPenelitian() {
    const { currentPage, perPage, handlePageChange, handlePerRowsChange } = useDataTablePagination(20);

    const columns: TableColumn<DataRow>[] = [
        {
            name: 'No',
            cell: (row, index) => (currentPage - 1) * perPage + index + 1,
            width: '2rem',
            style: {
                padding: '0px',
                justifyContent: 'center',
            },
        },
        {
            name: 'Judul Penelitian',
            selector: (row) => row.judulPenelitian,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Nama Pengusul',
            selector: (row) => row.namaPengusul,
            sortable: true,
        },
        {
            name: 'File',
            selector: (row) => row.file,
            sortable: true,
        },
        {
            name: 'Tanggal Usulan',
            selector: (row) => row.date,
            sortable: true,
            sortFunction: (rowA, rowB) => sortByIndonesianDate(rowA, rowB, 'date'),
        },
        {
            name: 'Aksi',
            cell: () => (
                <div>
                    <Button className="cursor-pointer bg-blue-600 hover:bg-blue-400">
                        <PenBox></PenBox> Beri Tanggapan
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div className="space-y-4 p-4">
            <h2 className="text-xl font-semibold">DATA PLOTING REVIEW PENELITIAN</h2>
            <Table columns={columns} data={data} handlePageChange={handlePageChange} handlePerRowsChange={handlePerRowsChange} />
        </div>
    );
}
