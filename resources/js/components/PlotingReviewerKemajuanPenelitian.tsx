import useDataTablePagination from '@/hooks/usePaginationState';
import { sortByIndonesianDate } from '@/utils/sortFunction';
import { PenBox } from 'lucide-react';
import { TableColumn } from 'react-data-table-component';
import AturPlotingKemajuanForm from './AturPlotingKemajuanForm';
import Table from './Table';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

type DataRow = {
    id: number;
    namaPengusul: string;
    judulPenelitian: string;
    reviewer1: string;
    reviewer2: string;
    date: string;
};

const dataReviewer: DataRow[] = [
    {
        id: 1,
        namaPengusul: 'Dr. Wibowo Jati',
        judulPenelitian: 'Pengembangan Sistem Informasi Geospasial Bencana Alam',
        reviewer1: 'Prof. Budi Setiawan, Ph.D.',
        reviewer2: 'Dr. Rina Puspita Sari',
        date: '10-September-2024',
    },
    {
        id: 2,
        namaPengusul: 'Prof. Siti Fatimah',
        judulPenelitian: 'Analisis Kualitas Air Minum Perkotaan Menggunakan Sensor IoT',
        reviewer1: 'Ir. Citra Dewi, M.T.',
        reviewer2: 'Dr. Taufik Hidayat, M.P.',
        date: '15-September-2024',
    },
    {
        id: 3,
        namaPengusul: 'Ir. Budi Santoso',
        judulPenelitian: 'Efektivitas Model Pembelajaran Berbasis Proyek (PBL) pada SMK',
        reviewer1: 'Andi Pratama, S.Pd., M.A.',
        reviewer2: 'Zulfa Hanum, M.Pd.',
        date: '20-September-2024',
    },
    {
        id: 4,
        namaPengusul: 'Dra. Dewi Anggraini',
        judulPenelitian: 'Perancangan Sistem Pakar Diagnosa Penyakit Tropis dengan Metode Fuzzy',
        reviewer1: 'Dr. Farida Hasan',
        reviewer2: 'Sari Mulia, M.Kom., Ph.D.',
        date: '25-September-2024',
    },
    {
        id: 5,
        namaPengusul: 'Dr. Agung Pramono',
        judulPenelitian: 'Kajian Dampak Pembangunan Infrastruktur Jalan Tol Terhadap Ekonomi Lokal',
        reviewer1: 'Prof. Herman Jaya, Ph.D.',
        reviewer2: 'Xena Amelia, M.E.',
        date: '01-Oktober-2024',
    },
    {
        id: 6,
        namaPengusul: 'Prof. Dr. Fitriani',
        judulPenelitian: 'Sintesis Nanomaterial Karbon untuk Aplikasi Baterai Lithium-Ion',
        reviewer1: 'Prof. Rudi Hartono, Ph.D.',
        reviewer2: 'Iwan Darmawan, S.T., M.T.',
        date: '05-Oktober-2024',
    },
    {
        id: 7,
        namaPengusul: 'Joko Susilo, M.Kom.',
        judulPenelitian: 'Penerapan Data Mining untuk Prediksi Tingkat Kepuasan Pelanggan',
        reviewer1: 'Dr. Joko Susilo, M.Kom.',
        reviewer2: 'Lukman Hakim, M.Kom.',
        date: '10-Oktober-2024',
    },
    {
        id: 8,
        namaPengusul: 'Rini Wahyuni, S.T.',
        judulPenelitian: 'Optimalisasi Desain Turbin Air Pico Hydro Skala Rumah Tangga',
        reviewer1: 'Oscar Darmawan, S.I.P., M.A.',
        reviewer2: 'Rudi Nugroho, S.T.',
        date: '15-Oktober-2024',
    },
    {
        id: 9,
        namaPengusul: 'Anton Setiawan, Ph.D.',
        judulPenelitian: 'Studi Komparatif Implementasi Merdeka Belajar di Perguruan Tinggi Swasta',
        reviewer1: 'Prof. Vino Adrianto, M.Sn.',
        reviewer2: 'Wulan Febriani, M.Hum.',
        date: '20-Oktober-2024',
    },
    {
        id: 10,
        namaPengusul: 'Maya Sari, S.E., M.Si.',
        judulPenelitian: 'Analisis Faktor yang Mempengaruhi Adopsi Fintech pada Generasi Milenial',
        reviewer1: 'Mega Puspita, S.Ak., M.Ak.',
        reviewer2: 'Eka Wijaya, S.E., M.Si.',
        date: '25-Oktober-2024',
    },
    {
        id: 11,
        namaPengusul: 'Rizal Hakim, S.Kom.',
        judulPenelitian: 'Pengembangan Aplikasi Mobile untuk Layanan Kesehatan Primer',
        reviewer1: 'Dr. Rina Puspita Sari',
        reviewer2: 'Yoga Pratama, S.Kom.',
        date: '01-November-2024',
    },
    {
        id: 12,
        namaPengusul: 'Citra Kirana, M.Eng.',
        judulPenelitian: 'Peningkatan Efisiensi Pembangkit Listrik Tenaga Surya Hibrid',
        reviewer1: 'Ir. Citra Dewi, M.T.',
        reviewer2: 'Iwan Darmawan, S.T., M.T.',
        date: '05-November-2024',
    },
    {
        id: 13,
        namaPengusul: 'Eka Wijaya, S.Pd.',
        judulPenelitian: 'Integrasi Nilai Pancasila dalam Pengembangan Kurikulum Digital',
        reviewer1: 'Andi Pratama, S.Pd., M.A.',
        reviewer2: 'Umi Kalsum, M.Ag.',
        date: '10-November-2024',
    },
    {
        id: 14,
        namaPengusul: 'Yoga Pratama, M.T.',
        judulPenelitian: 'Implementasi Internet of Things (IoT) untuk Sistem Irigasi Cerdas',
        reviewer1: 'Rudi Nugroho, S.T.',
        reviewer2: 'Joko Susilo, M.Kom.',
        date: '15-November-2024',
    },
    {
        id: 15,
        namaPengusul: 'Fina Az Zahra, S.Sos.',
        judulPenelitian: 'Analisis Peran Media Sosial dalam Pembentukan Opini Publik Lokal',
        reviewer1: 'Hesti Lestari, M.I.Kom.',
        reviewer2: 'Eka Wijaya, S.E., M.Si.',
        date: '20-November-2024',
    },
    {
        id: 16,
        namaPengusul: 'Gita Lestari, M.Psi.',
        judulPenelitian: 'Pengembangan Alat Ukur Kepuasan Kerja Dosen Berbasis Budaya Organisasi',
        reviewer1: 'Puspa Sari, M.Psi.',
        reviewer2: 'Bela Safitri, S.Psi.',
        date: '25-November-2024',
    },
    {
        id: 17,
        namaPengusul: 'Hendra Kusuma, S.H.',
        judulPenelitian: 'Kajian Hukum Pidana terkait Kejahatan Siber di Indonesia',
        reviewer1: 'Qiran Maulana, S.H., M.H.',
        reviewer2: 'Prof. Herman Jaya, Ph.D.',
        date: '01-Desember-2024',
    },
    {
        id: 18,
        namaPengusul: 'Irma Suryani, M.Sc.',
        judulPenelitian: 'Inovasi Pakan Ternak Berbasis Fermentasi Limbah Pertanian',
        reviewer1: 'Dr. Ganjar Pranowo, M.Sc.',
        reviewer2: 'Taufik Hidayat, S.P., M.P.',
        date: '05-Desember-2024',
    },
    {
        id: 19,
        namaPengusul: 'Kiki Maulana, S.Ked.',
        judulPenelitian: 'Pengaruh Senam Aerobik terhadap Kualitas Tidur Lansia di Panti Jompo',
        reviewer1: 'Prof. Lukman Hakim, Sp.PD.',
        reviewer2: 'Dr. Kartika Sari, M.Gizi.',
        date: '10-Desember-2024',
    },
    {
        id: 20,
        namaPengusul: 'Linda Herawati, S.T.',
        judulPenelitian: 'Pengembangan Purwarupa Sistem Peringatan Dini Kebakaran Hutan',
        reviewer1: 'Ir. Citra Dewi, M.T.',
        reviewer2: 'Dr. Ari Wibowo, M.Sc.',
        date: '15-Desember-2024',
    },
    {
        id: 21,
        namaPengusul: 'Marwan Effendi, M.Pd.',
        judulPenelitian: 'Penerapan Metode Gamifikasi dalam Peningkatan Hasil Belajar Geografi',
        reviewer1: 'Zulfa Hanum, M.Pd.',
        reviewer2: 'Andi Pratama, S.Pd., M.A.',
        date: '20-Desember-2024',
    },
    {
        id: 22,
        namaPengusul: 'Nia Kurnia, M.Kom.',
        judulPenelitian: 'Klasifikasi Citra Satelit Resolusi Tinggi Menggunakan Deep Learning',
        reviewer1: 'Sari Mulia, M.Kom., Ph.D.',
        reviewer2: 'Dr. Rina Puspita Sari',
        date: '25-Desember-2024',
    },
    {
        id: 23,
        namaPengusul: 'Oka Dharmawan, S.E.',
        judulPenelitian: 'Studi Kelayakan Investasi Proyek Infrastruktur Berkelanjutan',
        reviewer1: 'Xena Amelia, M.E.',
        reviewer2: 'Mega Puspita, S.Ak., M.Ak.',
        date: '01-Januari-2025',
    },
    {
        id: 24,
        namaPengusul: 'Putri Amelia, S.IP.',
        judulPenelitian: 'Analisis Kebijakan Pengelolaan Sampah Zero Waste di Tingkat Desa',
        reviewer1: 'Oscar Darmawan, S.I.P., M.A.',
        reviewer2: 'Hesti Lestari, M.I.Kom.',
        date: '05-Januari-2025',
    },
    {
        id: 25,
        namaPengusul: 'Quincy Rian, M.Hum.',
        judulPenelitian: 'Kajian Filologi Naskah Kuno Sastra Melayu dan Nilai Budaya Lokal',
        reviewer1: 'Wulan Febriani, M.Hum.',
        reviewer2: 'Prof. Vino Adrianto, M.Sn.',
        date: '10-Januari-2025',
    },
    {
        id: 26,
        namaPengusul: 'Rudi Hartono, S.T.',
        judulPenelitian: 'Perancangan Sistem Pengendali Kendaraan Otonom Skala Mini',
        reviewer1: 'Iwan Darmawan, S.T., M.T.',
        reviewer2: 'Rudi Nugroho, S.T.',
        date: '15-Januari-2025',
    },
    {
        id: 27,
        namaPengusul: 'Sari Mulia, M.Farm.',
        judulPenelitian: 'Uji Toksisitas dan Aktivitas Anti-Kanker Ekstrak Tanaman Herbal X',
        reviewer1: 'Dr. Kartika Sari, M.Gizi.',
        reviewer2: 'Fina Az Zahra, M.Farm.',
        date: '20-Januari-2025',
    },
    {
        id: 28,
        namaPengusul: 'Taufik Hidayat, M.Si.',
        judulPenelitian: 'Pemodelan Spasial Distribusi Sumber Daya Air Permukaan',
        reviewer1: 'Dr. Ari Wibowo, M.Sc.',
        reviewer2: 'Joko Purnomo, M.Si.',
        date: '25-Januari-2025',
    },
    {
        id: 29,
        namaPengusul: 'Umi Kalsum, S.Ag.',
        judulPenelitian: 'Peran Lembaga Keagamaan dalam Peningkatan Kesejahteraan Sosial',
        reviewer1: 'Umi Kalsum, M.Ag.',
        reviewer2: 'Qiran Maulana, S.H., M.H.',
        date: '01-Februari-2025',
    },
    {
        id: 30,
        namaPengusul: 'Vino Adrianto, S.Sn.',
        judulPenelitian: 'Eksplorasi Teknik Visualisasi Data dalam Seni Rupa Kontemporer',
        reviewer1: 'Prof. Vino Adrianto, M.Sn.',
        reviewer2: 'Deni Susanto, M.Ds.',
        date: '05-Februari-2025',
    },
];

export default function PlotingReviewerKemajuanPenelitian() {
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
            name: 'Nama Pengusul',
            selector: (row) => row.namaPengusul,
            sortable: true,
        },
        {
            name: 'Judul Penelitian',
            selector: (row) => row.judulPenelitian,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Reviewer',
            // selector: (row) => row.date,
            cell: (row) => (
                <div className="w-full">
                    <div className="flex">
                        <p className="w-3/10">Reviewer 1</p>
                        <p>{row.reviewer1}</p>
                    </div>
                    <div className="flex">
                        <p className="w-3/10">Reviewer 2</p>
                        <p>{row.reviewer2}</p>
                    </div>
                </div>
            ),
            // sortable: true,
            wrap: true,
        },
        {
            name: 'Tanggal',
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
        <div className="space-y-6 p-4">
            <AturPlotingKemajuanForm title="Penelitian" />

            <Separator />
            <Table columns={columns} data={dataReviewer} handlePageChange={handlePageChange} handlePerRowsChange={handlePerRowsChange} />
        </div>
    );
}
