import { Button } from '@/components/ui/button';
import DashLayout from '@/layouts/dash-layout';
import { Head } from '@inertiajs/react';

// type DataRowSuratPenelitian = {
//     id: number;
//     noSurat: number;
//     namaKetua: string;
//     judulPenelitian: string;
// };

export default function SuratTugasPenelitian() {
    // const { currentPage, perPage, handlePageChange, handlePerRowsChange } = useDataTablePagination(20);

    // const columns: TableColumn<DataRowSuratPenelitian>[] = [
    //     {
    //         name: 'No',
    //         cell: (row, index) => (currentPage - 1) * perPage + index + 1,
    //         width: '2rem',
    //         style: {
    //             padding: '0px',
    //             justifyContent: 'center',
    //         },
    //     },
    //     // {
    //     //     name: 'Foto',
    //     //     selector: (row) => row.,
    //     //     // sortable: true,
    //     //     wrap: true,
    //     //     center: true,
    //     // },
    //     // {
    //     //     name: 'Nik',
    //     //     selector: (row) => row.nik,
    //     //     sortable: true,
    //     //     wrap: true,
    //     //     center: true,
    //     // },
    //     // {
    //     //     name: 'Nama',
    //     //     selector: (row) => row.nama,
    //     //     sortable: true,
    //     //     wrap: true,
    //     //     center: true,
    //     // },
    //     // {
    //     //     name: 'Total pengajuan Penelitian',
    //     //     selector: (row) => row.totalPenelitian,
    //     //     sortable: true,
    //     //     wrap: true,
    //     //     center: true,
    //     // },
    //     // {
    //     //     name: 'Total pengajuan Pengabmas',
    //     //     selector: (row) => row.totalPengabmas,
    //     //     sortable: true,
    //     //     wrap: true,
    //     //     center: true,
    //     // },
    //     // {
    //     //     name: 'Aksi',
    //     //     cell: () => (
    //     //         <div className="space-x-2">
    //     //             <Button className="cursor-pointer bg-blue-600 hover:bg-blue-400">
    //     //                 <Download></Download>
    //     //             </Button>
    //     //         </div>
    //     //     ),
    //     //     wrap: true,
    //     //     center: true,
    //     // },
    // ];

    return (
        <DashLayout>
            <Head title="ASIPP | Data Dosen"></Head>
            <div className="bg-white p-6 shadow">
                <Button className="mb-2">Tambar Dosen</Button>
                <h2 className="mb-2 text-xl font-semibold">Data Dosen</h2>
                <p className="mb-4 text-sm text-gray-500">Jika ada kesalahan, silakan perbaiki sebelum proses pengajuan berakhir</p>
                {/* <Table columns={columns} data={data} handlePageChange={handlePageChange} handlePerRowsChange={handlePerRowsChange} /> */}
            </div>
        </DashLayout>
    );
}
