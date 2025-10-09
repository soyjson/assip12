import Table from '@/components/Table';
import { Button } from '@/components/ui/button';
import useDataTablePagination from '@/hooks/usePaginationState';
import DashLayout from '@/layouts/dash-layout';
import { Head } from '@inertiajs/react';
import { PenBox, Trash2 } from 'lucide-react';
import { TableColumn } from 'react-data-table-component';

type DataRowDosen = {
    id: number;
    foto: string;
    nik: string;
    nama: string;
    totalPenelitian: number;
    totalPengabmas: number;
};

export default function DataDosenPage() {
    const data = [
        {
            id: 1,
            foto: 'https://placehold.co/600x400?text=Prof.Agung',
            nik: '197003012000031001',
            nama: 'Prof. Dr. Agung Baskoro, S.T., M.T.',
            totalPenelitian: 15,
            totalPengabmas: 8,
        },
        {
            id: 2,
            foto: 'https://placehold.co/600x400?text=Dr.Rina',
            nik: '198510202010122005',
            nama: 'Dr. Rina Puspita Sari, S.Kom., M.Kom.',
            totalPenelitian: 22,
            totalPengabmas: 5,
        },
        {
            id: 3,
            foto: 'https://placehold.co/600x400?text=Ir.Budi',
            nik: '197805122005011003',
            nama: 'Ir. Budi Santoso, M.Eng.',
            totalPenelitian: 18,
            totalPengabmas: 12,
        },
        {
            id: 4,
            foto: 'https://placehold.co/600x400?text=Citra',
            nik: '199001012015022010',
            nama: 'Citra Kirana, S.Pd., M.A.',
            totalPenelitian: 8,
            totalPengabmas: 15,
        },
        {
            id: 5,
            foto: 'https://placehold.co/600x400?text=Prof.Herman',
            nik: '196511251995061007',
            nama: 'Prof. Dr. Herman Jaya, S.H., M.H.',
            totalPenelitian: 35,
            totalPengabmas: 10,
        },
        {
            id: 6,
            foto: 'https://placehold.co/600x400?text=Eka',
            nik: '198807072012012002',
            nama: 'Eka Wijaya, S.E., M.Si.',
            totalPenelitian: 12,
            totalPengabmas: 7,
        },
        {
            id: 7,
            foto: 'https://placehold.co/600x400?text=Joko',
            nik: '197402142001051004',
            nama: 'Joko Susilo, M.Kom.',
            totalPenelitian: 19,
            totalPengabmas: 4,
        },
        {
            id: 8,
            foto: 'https://placehold.co/600x400?text=Fina',
            nik: '199204182017032015',
            nama: 'Fina Az Zahra, S.Farm., M.Farm.',
            totalPenelitian: 6,
            totalPengabmas: 9,
        },
        {
            id: 9,
            foto: 'https://placehold.co/600x400?text=Dr.Ganjar',
            nik: '197109302000081006',
            nama: 'Dr. Ganjar Pranowo, S.Hut., M.Sc.',
            totalPenelitian: 28,
            totalPengabmas: 18,
        },
        {
            id: 10,
            foto: 'https://placehold.co/600x400?text=Hesti',
            nik: '198312052008022008',
            nama: 'Hesti Lestari, S.Sos., M.I.Kom.',
            totalPenelitian: 10,
            totalPengabmas: 14,
        },
        {
            id: 11,
            foto: 'https://placehold.co/600x400?text=Iwan',
            nik: '197606202003071001',
            nama: 'Iwan Darmawan, S.T., M.T.',
            totalPenelitian: 17,
            totalPengabmas: 3,
        },
        {
            id: 12,
            foto: 'https://placehold.co/600x400?text=Kartika',
            nik: '199503152020102020',
            nama: 'Kartika Sari, S.Gz., M.Gizi.',
            totalPenelitian: 4,
            totalPengabmas: 11,
        },
        {
            id: 13,
            foto: 'https://placehold.co/600x400?text=Prof.Lukman',
            nik: '196808081998041005',
            nama: 'Prof. Dr. Lukman Hakim, S.Ked., Sp.PD.',
            totalPenelitian: 40,
            totalPengabmas: 6,
        },
        {
            id: 14,
            foto: 'https://placehold.co/600x400?text=Mega',
            nik: '198701232013052009',
            nama: 'Mega Puspita, S.Ak., M.Ak.',
            totalPenelitian: 11,
            totalPengabmas: 13,
        },
        {
            id: 15,
            foto: 'https://placehold.co/600x400?text=Nanda',
            nik: '197911112006031002',
            nama: 'Nanda Pratama, S.Si., M.Sc.',
            totalPenelitian: 24,
            totalPengabmas: 2,
        },
        {
            id: 16,
            foto: 'https://placehold.co/600x400?text=Oscar',
            nik: '199102282016082018',
            nama: 'Oscar Darmawan, S.I.P., M.A.',
            totalPenelitian: 9,
            totalPengabmas: 17,
        },
        {
            id: 17,
            foto: 'https://placehold.co/600x400?text=Puspa',
            nik: '197210102001112004',
            nama: 'Puspa Sari, M.Psi., Psikolog',
            totalPenelitian: 20,
            totalPengabmas: 11,
        },
        {
            id: 18,
            foto: 'https://placehold.co/600x400?text=Qiran',
            nik: '199309052018041021',
            nama: 'Qiran Maulana, S.H., M.H.',
            totalPenelitian: 5,
            totalPengabmas: 16,
        },
        {
            id: 19,
            foto: 'https://placehold.co/600x400?text=Rudi',
            nik: '196704041997011003',
            nama: 'Dr. Rudi Hartono, S.T., Ph.D.',
            totalPenelitian: 30,
            totalPengabmas: 9,
        },
        {
            id: 20,
            foto: 'https://placehold.co/600x400?text=Sari',
            nik: '198106172007052007',
            nama: 'Sari Mulia, M.Kom., Ph.D.',
            totalPenelitian: 16,
            totalPengabmas: 4,
        },
        {
            id: 21,
            foto: 'https://placehold.co/600x400?text=Taufik',
            nik: '197508292002061005',
            nama: 'Taufik Hidayat, S.P., M.P.',
            totalPenelitian: 21,
            totalPengabmas: 13,
        },
        {
            id: 22,
            foto: 'https://placehold.co/600x400?text=Umi',
            nik: '199411032019012022',
            nama: 'Umi Kalsum, S.Ag., M.Ag.',
            totalPenelitian: 3,
            totalPengabmas: 19,
        },
        {
            id: 23,
            foto: 'https://placehold.co/600x400?text=Vino',
            nik: '196901281999021008',
            nama: 'Prof. Vino Adrianto, S.Sn., M.Sn.',
            totalPenelitian: 33,
            totalPengabmas: 7,
        },
        {
            id: 24,
            foto: 'https://placehold.co/600x400?text=Wulan',
            nik: '198603072011042006',
            nama: 'Wulan Febriani, S.Hum., M.Hum.',
            totalPenelitian: 14,
            totalPengabmas: 11,
        },
        {
            id: 25,
            foto: 'https://placehold.co/600x400?text=Xena',
            nik: '197712122004091001',
            nama: 'Xena Amelia, S.E., M.E.',
            totalPenelitian: 25,
            totalPengabmas: 5,
        },
        {
            id: 26,
            foto: 'https://placehold.co/600x400?text=Yoga',
            nik: '199605212021071023',
            nama: 'Yoga Pratama, S.Kom.',
            totalPenelitian: 2,
            totalPengabmas: 1,
        },
        {
            id: 27,
            foto: 'https://placehold.co/600x400?text=Zulfa',
            nik: '198002022006102010',
            nama: 'Zulfa Hanum, M.Pd.',
            totalPenelitian: 13,
            totalPengabmas: 16,
        },
        {
            id: 28,
            foto: 'https://placehold.co/600x400?text=Ari',
            nik: '197307192001031002',
            nama: 'Ari Wibowo, S.T., M.Sc.',
            totalPenelitian: 27,
            totalPengabmas: 10,
        },
        {
            id: 29,
            foto: 'https://placehold.co/600x400?text=Bela',
            nik: '199709092022012025',
            nama: 'Bela Safitri, S.Psi.',
            totalPenelitian: 1,
            totalPengabmas: 2,
        },
        {
            id: 30,
            foto: 'https://placehold.co/600x400?text=Doni',
            nik: '196604241996071004',
            nama: 'Dr. Doni Iskandar, S.P., M.Agr.',
            totalPenelitian: 38,
            totalPengabmas: 14,
        },
    ];

    const { currentPage, perPage, handlePageChange, handlePerRowsChange } = useDataTablePagination(20);

    const columns: TableColumn<DataRowDosen>[] = [
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
            name: 'Foto',
            // selector: (row) => row.foto,
            cell: (row) => (
                <div className="h-40 w-60">
                    <img src={row.foto} alt="Foto Dosen" className="h-full object-contain" loading="lazy"></img>
                </div>
            ),
            // sortable: true,
            wrap: true,
            center: true,
        },
        {
            name: 'Nik',
            selector: (row) => row.nik,
            sortable: true,
            wrap: true,
            center: true,
        },
        {
            name: 'Nama',
            selector: (row) => row.nama,
            sortable: true,
            wrap: true,
            center: true,
        },
        {
            name: 'Total pengajuan Penelitian',
            selector: (row) => row.totalPenelitian,
            sortable: true,
            wrap: true,
            center: true,
        },
        {
            name: 'Total pengajuan Pengabmas',
            selector: (row) => row.totalPengabmas,
            sortable: true,
            wrap: true,
            center: true,
        },
        {
            name: 'Aksi',
            cell: () => (
                <div className="space-x-2">
                    <Button className="cursor-pointer bg-blue-600 hover:bg-blue-400">
                        <PenBox></PenBox>
                    </Button>
                    <Button className="cursor-pointer bg-red-600 hover:bg-red-400">
                        <Trash2></Trash2>
                    </Button>
                </div>
            ),
            wrap: true,
            center: true,
        },
    ];

    return (
        <DashLayout>
            <Head title="ASIPP | Data Dosen"></Head>
            <div className="bg-white p-6 shadow">
                <Button className="mb-2">Tambar Dosen</Button>
                <h2 className="mb-2 text-xl font-semibold">Data Dosen</h2>
                <p className="mb-4 text-sm text-gray-500">Jika ada kesalahan, silakan perbaiki sebelum proses pengajuan berakhir</p>

                <Table columns={columns} data={data} handlePageChange={handlePageChange} handlePerRowsChange={handlePerRowsChange} />
            </div>
        </DashLayout>
    );
}
