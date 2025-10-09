import useDataTablePagination from '@/hooks/usePaginationState';
import { formatRupiah } from '@/utils/formatRupiah';
import { sortByCost, sortByIndonesianDate } from '@/utils/sortFunction';
import { Eye, PenBox, X } from 'lucide-react';
import { TableColumn } from 'react-data-table-component';
import Table from './Table';
import { Button } from './ui/button';

type DataRowUsulanDitolakPenelitian = {
    id: number;
    nik: string;
    namaPengusul: string;
    fakultas: string;
    prodi: string;
    judulPenelitian: string;
    file: string;
    jenisPenelitian: string;
    biaya: number;
    tanggal: string;
    status: string;
};

export default function UsulanDitolakPenelitian() {
    const data: DataRowUsulanDitolakPenelitian[] = [
        {
            id: 1,
            nik: '19870315001',
            namaPengusul: 'Dr. Ahmad Fauzi',
            fakultas: 'Teknik',
            prodi: 'Informatika',
            judulPenelitian: 'Sistem Deteksi Anomali Jaringan Berbasis Deep Learning',
            file: 'dokumen_1.pdf',
            jenisPenelitian: 'Riset Dasar',
            biaya: 95000000,
            tanggal: '01-September-2024',
            status: 'Ditolak',
        },
        {
            id: 2,
            nik: '19900720002',
            namaPengusul: 'Prof. Bunga Lestari',
            fakultas: 'Kedokteran',
            prodi: 'Farmasi',
            judulPenelitian: 'Ekstraksi Senyawa Bioaktif dari Mangrove untuk Anti-Kanker',
            file: 'dokumen_2.pdf',
            jenisPenelitian: 'Riset Terapan',
            biaya: 120000000,
            tanggal: '05-September-2024',
            status: 'Ditolak',
        },
        {
            id: 3,
            nik: '19851125003',
            namaPengusul: 'Dr. Candra Wijaya',
            fakultas: 'Ekonomi',
            prodi: 'Manajemen',
            judulPenelitian: 'Analisis Dampak Inflasi Terhadap Perilaku Konsumen Generasi Z',
            file: 'dokumen_3.pdf',
            jenisPenelitian: 'Kajian Kebijakan',
            biaya: 55000000,
            tanggal: '10-September-2024',
            status: 'Ditolak',
        },
        {
            id: 4,
            nik: '19920101004',
            namaPengusul: 'Mawar Sari, M.Kom.',
            fakultas: 'Teknik',
            prodi: 'Elektro',
            judulPenelitian: 'Optimasi Konsumsi Energi pada Smart Home System dengan IoT',
            file: 'dokumen_4.pdf',
            jenisPenelitian: 'Riset Dasar',
            biaya: 78000000,
            tanggal: '12-September-2024',
            status: 'Ditolak',
        },
        {
            id: 5,
            nik: '19800510005',
            namaPengusul: 'Joko Susilo, S.H.',
            fakultas: 'Hukum',
            prodi: 'Hukum Perdata',
            judulPenelitian: 'Perlindungan Hukum Data Pribadi dalam Transaksi E-commerce',
            file: 'dokumen_5.pdf',
            jenisPenelitian: 'Kajian Hukum',
            biaya: 45000000,
            tanggal: '15-September-2024',
            status: 'Ditolak',
        },
        {
            id: 6,
            nik: '19950822006',
            namaPengusul: 'Lina Natalia, Ph.D.',
            fakultas: 'Sains',
            prodi: 'Fisika',
            judulPenelitian: 'Pengembangan Sensor Serat Optik untuk Deteksi Pencemaran Air',
            file: 'dokumen_6.pdf',
            jenisPenelitian: 'Riset Terapan',
            biaya: 110000000,
            tanggal: '18-September-2024',
            status: 'Ditolak',
        },
        {
            id: 7,
            nik: '19880404007',
            namaPengusul: 'Agus Salim, S.Pd.',
            fakultas: 'Keguruan',
            prodi: 'Pendidikan Bahasa Inggris',
            judulPenelitian: 'Efektivitas Metode Flipped Classroom dalam Pembelajaran Grammar',
            file: 'dokumen_7.pdf',
            jenisPenelitian: 'Penelitian Pendidikan',
            biaya: 30000000,
            tanggal: '20-September-2024',
            status: 'Ditolak',
        },
        {
            id: 8,
            nik: '19931230008',
            namaPengusul: 'Risa Amelia, M.Psi.',
            fakultas: 'Psikologi',
            prodi: 'Psikologi Klinis',
            judulPenelitian: 'Hubungan antara Stres Kerja dan Kualitas Tidur pada Tenaga Medis',
            file: 'dokumen_8.pdf',
            jenisPenelitian: 'Riset Dasar',
            biaya: 60000000,
            tanggal: '25-September-2024',
            status: 'Ditolak',
        },
        {
            id: 9,
            nik: '19750615009',
            namaPengusul: 'Hadi Prasetyo, Prof.Dr.',
            fakultas: 'Teknik',
            prodi: 'Sipil',
            judulPenelitian: 'Inovasi Material Beton Ramah Lingkungan dengan Limbah Industri',
            file: 'dokumen_9.pdf',
            jenisPenelitian: 'Riset Terapan',
            biaya: 150000000,
            tanggal: '28-September-2024',
            status: 'Ditolak',
        },
        {
            id: 10,
            nik: '19910218010',
            namaPengusul: 'Siti Khadijah, M.A.',
            fakultas: 'Ilmu Budaya',
            prodi: 'Sastra Indonesia',
            judulPenelitian: 'Representasi Budaya Lokal dalam Film Dokumenter Kontemporer',
            file: 'dokumen_10.pdf',
            jenisPenelitian: 'Kajian Budaya',
            biaya: 40000000,
            tanggal: '01-Oktober-2024',
            status: 'Ditolak',
        },
        {
            id: 11,
            nik: '19860305011',
            namaPengusul: 'Bambang Irawan',
            fakultas: 'Ekonomi',
            prodi: 'Akuntansi',
            judulPenelitian: 'Penerapan PSAK 73 pada Perusahaan Properti di Indonesia',
            file: 'dokumen_11.pdf',
            jenisPenelitian: 'Kajian Bisnis',
            biaya: 50000000,
            tanggal: '03-Oktober-2024',
            status: 'Ditolak',
        },
        {
            id: 12,
            nik: '19941120012',
            namaPengusul: 'Diana Puspita',
            fakultas: 'Kedokteran',
            prodi: 'Gizi',
            judulPenelitian: 'Pengaruh Diet Ketogenik terhadap Kadar Kolesterol Pasien Diabetes',
            file: 'dokumen_12.pdf',
            jenisPenelitian: 'Riset Dasar',
            biaya: 85000000,
            tanggal: '05-Oktober-2024',
            status: 'Ditolak',
        },
        {
            id: 13,
            nik: '19820712013',
            namaPengusul: 'Eko Nurhadi',
            fakultas: 'Teknik',
            prodi: 'Mesin',
            judulPenelitian: 'Desain Sistem Pendingin Otomatis untuk Mesin CNC',
            file: 'dokumen_13.pdf',
            jenisPenelitian: 'Riset Terapan',
            biaya: 105000000,
            tanggal: '07-Oktober-2024',
            status: 'Ditolak',
        },
        {
            id: 14,
            nik: '19900425014',
            namaPengusul: 'Fahmi Ridwan',
            fakultas: 'Hukum',
            prodi: 'Hukum Pidana',
            judulPenelitian: 'Tinjauan Kriminologi Terhadap Kejahatan Siber di Era Digital',
            file: 'dokumen_14.pdf',
            jenisPenelitian: 'Kajian Hukum',
            biaya: 38000000,
            tanggal: '09-Oktober-2024',
            status: 'Ditolak',
        },
        {
            id: 15,
            nik: '19890909015',
            namaPengusul: 'Gita Wiryawan',
            fakultas: 'Sains',
            prodi: 'Kimia',
            judulPenelitian: 'Sintesis Nanomaterial Karbon untuk Aplikasi Baterai Lithium',
            file: 'dokumen_15.pdf',
            jenisPenelitian: 'Riset Dasar',
            biaya: 130000000,
            tanggal: '11-Oktober-2024',
            status: 'Ditolak',
        },
        {
            id: 16,
            nik: '19950202016',
            namaPengusul: 'Hendra Setiawan',
            fakultas: 'Keguruan',
            prodi: 'Pendidikan Matematika',
            judulPenelitian: 'Peningkatan Kemampuan Pemecahan Masalah dengan Model PBL',
            file: 'dokumen_16.pdf',
            jenisPenelitian: 'Penelitian Pendidikan',
            biaya: 35000000,
            tanggal: '15-Oktober-2024',
            status: 'Ditolak',
        },
        {
            id: 17,
            nik: '19830617017',
            namaPengusul: 'Indra Kusuma',
            fakultas: 'Psikologi',
            prodi: 'Psikologi Pendidikan',
            judulPenelitian: 'Peran Dukungan Sosial Orang Tua terhadap Motivasi Belajar Anak',
            file: 'dokumen_17.pdf',
            jenisPenelitian: 'Riset Dasar',
            biaya: 52000000,
            tanggal: '18-Oktober-2024',
            status: 'Ditolak',
        },
        {
            id: 18,
            nik: '19910808018',
            namaPengusul: 'Kartika Dewi',
            fakultas: 'Teknik',
            prodi: 'Informatika',
            judulPenelitian: 'Penerapan Teknologi Blockchain pada Sistem Voting Online',
            file: 'dokumen_18.pdf',
            jenisPenelitian: 'Riset Terapan',
            biaya: 98000000,
            tanggal: '20-Oktober-2024',
            status: 'Ditolak',
        },
        {
            id: 19,
            nik: '19870123019',
            namaPengusul: 'Lukman Hakim',
            fakultas: 'Ekonomi',
            prodi: 'Manajemen',
            judulPenelitian: 'Pengaruh Budaya Organisasi terhadap Kinerja Karyawan Milenial',
            file: 'dokumen_19.pdf',
            jenisPenelitian: 'Kajian Bisnis',
            biaya: 65000000,
            tanggal: '22-Oktober-2024',
            status: 'Ditolak',
        },
        {
            id: 20,
            nik: '19960505020',
            namaPengusul: 'Maya Safitri',
            fakultas: 'Kedokteran',
            prodi: 'Farmasi',
            judulPenelitian: 'Uji Klinis Efek Samping Obat Herbal Tradisional X',
            file: 'dokumen_20.pdf',
            jenisPenelitian: 'Riset Terapan',
            biaya: 140000000,
            tanggal: '25-Oktober-2024',
            status: 'Ditolak',
        },
        {
            id: 21,
            nik: '19840910021',
            namaPengusul: 'Nanda Pratama',
            fakultas: 'Hukum',
            prodi: 'Hukum Tata Negara',
            judulPenelitian: 'Analisis Keabsahan Keputusan Presiden dalam Keadaan Darurat',
            file: 'dokumen_21.pdf',
            jenisPenelitian: 'Kajian Hukum',
            biaya: 48000000,
            tanggal: '28-Oktober-2024',
            status: 'Ditolak',
        },
        {
            id: 22,
            nik: '19921201022',
            namaPengusul: 'Omar Bakri',
            fakultas: 'Sains',
            prodi: 'Fisika',
            judulPenelitian: 'Simulasi Pergerakan Partikel dalam Medium Berpori',
            file: 'dokumen_22.pdf',
            jenisPenelitian: 'Riset Dasar',
            biaya: 100000000,
            tanggal: '01-November-2024',
            status: 'Ditolak',
        },
        {
            id: 23,
            nik: '19800228023',
            namaPengusul: 'Putri Ramadhani',
            fakultas: 'Keguruan',
            prodi: 'Pendidikan Biologi',
            judulPenelitian: 'Pengembangan Media Pembelajaran Interaktif tentang Ekosistem Laut',
            file: 'dokumen_23.pdf',
            jenisPenelitian: 'Penelitian Pendidikan',
            biaya: 32000000,
            tanggal: '05-November-2024',
            status: 'Ditolak',
        },
        {
            id: 24,
            nik: '19930414024',
            namaPengusul: 'Rizky Adityawarman',
            fakultas: 'Teknik',
            prodi: 'Elektro',
            judulPenelitian: 'Perancangan Sistem Pengisian Baterai Nirkabel Berbasis Resonansi Magnetik',
            file: 'dokumen_24.pdf',
            jenisPenelitian: 'Riset Terapan',
            biaya: 115000000,
            tanggal: '08-November-2024',
            status: 'Ditolak',
        },
        {
            id: 25,
            nik: '19860601025',
            namaPengusul: 'Safira Nuraini',
            fakultas: 'Psikologi',
            prodi: 'Psikologi Industri',
            judulPenelitian: 'Pengaruh Kepemimpinan Transaksional terhadap Kepuasan Kerja',
            file: 'dokumen_25.pdf',
            jenisPenelitian: 'Kajian Bisnis',
            biaya: 58000000,
            tanggal: '10-November-2024',
            status: 'Ditolak',
        },
        {
            id: 26,
            nik: '19940320026',
            namaPengusul: 'Taufik Hidayat',
            fakultas: 'Ekonomi',
            prodi: 'Akuntansi',
            judulPenelitian: 'Analisis Kualitas Laporan Keuangan Pemerintah Daerah X',
            file: 'dokumen_26.pdf',
            jenisPenelitian: 'Kajian Kebijakan',
            biaya: 49000000,
            tanggal: '15-November-2024',
            status: 'Ditolak',
        },
        {
            id: 27,
            nik: '19881018027',
            namaPengusul: 'Umi Salamah',
            fakultas: 'Ilmu Budaya',
            prodi: 'Sejarah',
            judulPenelitian: 'Peran Komunitas Tionghoa dalam Pembangunan Kota Tua Jakarta',
            file: 'dokumen_27.pdf',
            jenisPenelitian: 'Kajian Budaya',
            biaya: 35000000,
            tanggal: '18-November-2024',
            status: 'Ditolak',
        },
        {
            id: 28,
            nik: '19950105028',
            namaPengusul: 'Vicky Anggara',
            fakultas: 'Teknik',
            prodi: 'Sipil',
            judulPenelitian: 'Evaluasi Kinerja Struktur Jembatan Tipe Box Girder',
            file: 'dokumen_28.pdf',
            jenisPenelitian: 'Riset Terapan',
            biaya: 160000000,
            tanggal: '20-November-2024',
            status: 'Ditolak',
        },
        {
            id: 29,
            nik: '19890711029',
            namaPengusul: 'Wulan Dirgantara',
            fakultas: 'Kedokteran',
            prodi: 'Gizi',
            judulPenelitian: 'Hubungan antara Asupan Serat dan Risiko Penyakit Jantung Koroner',
            file: 'dokumen_29.pdf',
            jenisPenelitian: 'Riset Dasar',
            biaya: 70000000,
            tanggal: '25-November-2024',
            status: 'Ditolak',
        },
        {
            id: 30,
            nik: '19970429030',
            namaPengusul: 'Xavier Jonathan',
            fakultas: 'Sains',
            prodi: 'Kimia',
            judulPenelitian: 'Karakterisasi Bahan Semikonduktor Berbasis Polymer Konduktif',
            file: 'dokumen_30.pdf',
            jenisPenelitian: 'Riset Dasar',
            biaya: 125000000,
            tanggal: '28-November-2024',
            status: 'Ditolak',
        },
    ];

    const { currentPage, perPage, handlePageChange, handlePerRowsChange } = useDataTablePagination(20);

    const columns: TableColumn<DataRowUsulanDitolakPenelitian>[] = [
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
            name: 'Pengusul',
            width: '15rem',
            cell: (row) => (
                <div className="w-full space-y-1 py-1">
                    <div className="flex justify-between border-b py-1">
                        <p className="w-1/2 font-medium text-gray-700">NIK</p>
                        <p className="flex-1 truncate text-gray-900">{row.nik}</p>
                    </div>

                    <div className="flex justify-between border-b py-1">
                        <p className="w-1/2 font-medium text-gray-700">Nama Pengusul</p>
                        <p className="flex-1 truncate text-gray-900">{row.namaPengusul}</p>
                    </div>

                    <div className="flex justify-between border-b py-1">
                        <p className="w-1/2 font-medium text-gray-700">Fakultas</p>
                        <p className="flex-1 truncate text-gray-900">{row.fakultas}</p>
                    </div>

                    <div className="flex justify-between py-1">
                        <p className="w-1/2 font-medium text-gray-700">Program Studi</p>
                        <p className="flex-1 truncate text-gray-900">{row.prodi}</p>
                    </div>
                </div>
            ),
            // sortable: true,
            wrap: true,
        },
        {
            name: `Judul`,
            selector: (row) => row.judulPenelitian,
            sortable: true,
            wrap: true,
        },
        {
            name: `File`,
            selector: (row) => row.file,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Jenis Penelitian',
            selector: (row) => row.jenisPenelitian,
            sortable: true,
            wrap: true,
            center: true,
        },
        {
            name: 'Biaya',
            selector: (row) => formatRupiah(row.biaya),
            sortable: true,
            sortFunction: (rowA, rowB) => sortByCost(rowA, rowB),
            wrap: true,
            center: true,
        },
        {
            name: 'Tanggal',
            selector: (row) => row.tanggal,
            sortable: true,
            sortFunction: (rowA, rowB) => sortByIndonesianDate(rowA, rowB, 'tanggal'),
            wrap: true,
            center: true,
        },
        {
            name: 'Status',
            selector: (row) => row.status,
            sortable: true,
            wrap: true,
            center: true,
        },
        {
            name: 'Aksi',
            cell: (row) => (
                <div key={row.id} className="my-3 flex flex-col gap-1">
                    <Button className="bg-blue-600 hover:bg-blue-500">
                        <Eye></Eye>
                    </Button>
                    <Button className="bg-yellow-500 hover:bg-yellow-400">
                        {/* TODO : overlay ganti biaya */}
                        <PenBox></PenBox>
                    </Button>
                    <Button className="bg-red-500 hover:bg-red-400">
                        <X></X>
                    </Button>
                </div>
            ),
            sortable: true,
            wrap: true,
            center: true,
        },
    ];

    return (
        <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-2 text-xl font-semibold">Data Usulan Ditolak</h2>
            <Table columns={columns} data={data} handlePageChange={handlePageChange} handlePerRowsChange={handlePerRowsChange} />
        </div>
    );
}
