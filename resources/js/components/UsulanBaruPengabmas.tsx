import useDataTablePagination from '@/hooks/usePaginationState';
import { formatRupiah } from '@/utils/formatRupiah';
import { sortByCost, sortByIndonesianDate } from '@/utils/sortFunction';
import { Eye, PenBox, Trash2 } from 'lucide-react';
import { TableColumn } from 'react-data-table-component';
import Table from './Table';
import { Button } from './ui/button';

type DataRowUsulanBaruPengabmas = {
    id: number;
    nik: string;
    namaPengusul: string;
    fakultas: string;
    prodi: string;
    judulPengabmas: string;
    file: string;
    jenisPengabmas: string;
    biaya: number;
    tanggal: string;
    status: string;
};

export default function UsulanBaruPengabmas() {
    const data: DataRowUsulanBaruPengabmas[] = [
        {
            id: 1,
            nik: '19870315001',
            namaPengusul: 'Dr. Ahmad Fauzi',
            fakultas: 'Teknik',
            prodi: 'Informatika',
            judulPengabmas: 'Sistem Deteksi Anomali Jaringan Berbasis Deep Learning',
            file: 'dokumen_1.pdf',
            jenisPengabmas: 'Riset Dasar',
            biaya: 95000000,
            tanggal: '01-September-2024',
            status: 'Disetujui',
        },
        {
            id: 2,
            nik: '19900720002',
            namaPengusul: 'Prof. Bunga Lestari',
            fakultas: 'Kedokteran',
            prodi: 'Farmasi',
            judulPengabmas: 'Ekstraksi Senyawa Bioaktif dari Mangrove untuk Anti-Kanker',
            file: 'dokumen_2.pdf',
            jenisPengabmas: 'Riset Terapan',
            biaya: 120000000,
            tanggal: '05-September-2024',
            status: 'Revisi',
        },
        {
            id: 3,
            nik: '19851125003',
            namaPengusul: 'Dr. Candra Wijaya',
            fakultas: 'Ekonomi',
            prodi: 'Manajemen',
            judulPengabmas: 'Analisis Dampak Inflasi Terhadap Perilaku Konsumen Generasi Z',
            file: 'dokumen_3.pdf',
            jenisPengabmas: 'Kajian Kebijakan',
            biaya: 55000000,
            tanggal: '10-September-2024',
            status: 'Disetujui',
        },
        {
            id: 4,
            nik: '19920101004',
            namaPengusul: 'Mawar Sari, M.Kom.',
            fakultas: 'Teknik',
            prodi: 'Elektro',
            judulPengabmas: 'Optimasi Konsumsi Energi pada Smart Home System dengan IoT',
            file: 'dokumen_4.pdf',
            jenisPengabmas: 'Riset Dasar',
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
            judulPengabmas: 'Perlindungan Hukum Data Pribadi dalam Transaksi E-commerce',
            file: 'dokumen_5.pdf',
            jenisPengabmas: 'Kajian Hukum',
            biaya: 45000000,
            tanggal: '15-September-2024',
            status: 'Disetujui',
        },
        {
            id: 6,
            nik: '19950822006',
            namaPengusul: 'Lina Natalia, Ph.D.',
            fakultas: 'Sains',
            prodi: 'Fisika',
            judulPengabmas: 'Pengembangan Sensor Serat Optik untuk Deteksi Pencemaran Air',
            file: 'dokumen_6.pdf',
            jenisPengabmas: 'Riset Terapan',
            biaya: 110000000,
            tanggal: '18-September-2024',
            status: 'Revisi',
        },
        {
            id: 7,
            nik: '19880404007',
            namaPengusul: 'Agus Salim, S.Pd.',
            fakultas: 'Keguruan',
            prodi: 'Pendidikan Bahasa Inggris',
            judulPengabmas: 'Efektivitas Metode Flipped Classroom dalam Pembelajaran Grammar',
            file: 'dokumen_7.pdf',
            jenisPengabmas: 'Pengabmas Pendidikan',
            biaya: 30000000,
            tanggal: '20-September-2024',
            status: 'Disetujui',
        },
        {
            id: 8,
            nik: '19931230008',
            namaPengusul: 'Risa Amelia, M.Psi.',
            fakultas: 'Psikologi',
            prodi: 'Psikologi Klinis',
            judulPengabmas: 'Hubungan antara Stres Kerja dan Kualitas Tidur pada Tenaga Medis',
            file: 'dokumen_8.pdf',
            jenisPengabmas: 'Riset Dasar',
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
            judulPengabmas: 'Inovasi Material Beton Ramah Lingkungan dengan Limbah Industri',
            file: 'dokumen_9.pdf',
            jenisPengabmas: 'Riset Terapan',
            biaya: 150000000,
            tanggal: '28-September-2024',
            status: 'Disetujui',
        },
        {
            id: 10,
            nik: '19910218010',
            namaPengusul: 'Siti Khadijah, M.A.',
            fakultas: 'Ilmu Budaya',
            prodi: 'Sastra Indonesia',
            judulPengabmas: 'Representasi Budaya Lokal dalam Film Dokumenter Kontemporer',
            file: 'dokumen_10.pdf',
            jenisPengabmas: 'Kajian Budaya',
            biaya: 40000000,
            tanggal: '01-Oktober-2024',
            status: 'Revisi',
        },
        {
            id: 11,
            nik: '19860305011',
            namaPengusul: 'Bambang Irawan',
            fakultas: 'Ekonomi',
            prodi: 'Akuntansi',
            judulPengabmas: 'Penerapan PSAK 73 pada Perusahaan Properti di Indonesia',
            file: 'dokumen_11.pdf',
            jenisPengabmas: 'Kajian Bisnis',
            biaya: 50000000,
            tanggal: '03-Oktober-2024',
            status: 'Disetujui',
        },
        {
            id: 12,
            nik: '19941120012',
            namaPengusul: 'Diana Puspita',
            fakultas: 'Kedokteran',
            prodi: 'Gizi',
            judulPengabmas: 'Pengaruh Diet Ketogenik terhadap Kadar Kolesterol Pasien Diabetes',
            file: 'dokumen_12.pdf',
            jenisPengabmas: 'Riset Dasar',
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
            judulPengabmas: 'Desain Sistem Pendingin Otomatis untuk Mesin CNC',
            file: 'dokumen_13.pdf',
            jenisPengabmas: 'Riset Terapan',
            biaya: 105000000,
            tanggal: '07-Oktober-2024',
            status: 'Disetujui',
        },
        {
            id: 14,
            nik: '19900425014',
            namaPengusul: 'Fahmi Ridwan',
            fakultas: 'Hukum',
            prodi: 'Hukum Pidana',
            judulPengabmas: 'Tinjauan Kriminologi Terhadap Kejahatan Siber di Era Digital',
            file: 'dokumen_14.pdf',
            jenisPengabmas: 'Kajian Hukum',
            biaya: 38000000,
            tanggal: '09-Oktober-2024',
            status: 'Revisi',
        },
        {
            id: 15,
            nik: '19890909015',
            namaPengusul: 'Gita Wiryawan',
            fakultas: 'Sains',
            prodi: 'Kimia',
            judulPengabmas: 'Sintesis Nanomaterial Karbon untuk Aplikasi Baterai Lithium',
            file: 'dokumen_15.pdf',
            jenisPengabmas: 'Riset Dasar',
            biaya: 130000000,
            tanggal: '11-Oktober-2024',
            status: 'Disetujui',
        },
        {
            id: 16,
            nik: '19950202016',
            namaPengusul: 'Hendra Setiawan',
            fakultas: 'Keguruan',
            prodi: 'Pendidikan Matematika',
            judulPengabmas: 'Peningkatan Kemampuan Pemecahan Masalah dengan Model PBL',
            file: 'dokumen_16.pdf',
            jenisPengabmas: 'Pengabmas Pendidikan',
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
            judulPengabmas: 'Peran Dukungan Sosial Orang Tua terhadap Motivasi Belajar Anak',
            file: 'dokumen_17.pdf',
            jenisPengabmas: 'Riset Dasar',
            biaya: 52000000,
            tanggal: '18-Oktober-2024',
            status: 'Revisi',
        },
        {
            id: 18,
            nik: '19910808018',
            namaPengusul: 'Kartika Dewi',
            fakultas: 'Teknik',
            prodi: 'Informatika',
            judulPengabmas: 'Penerapan Teknologi Blockchain pada Sistem Voting Online',
            file: 'dokumen_18.pdf',
            jenisPengabmas: 'Riset Terapan',
            biaya: 98000000,
            tanggal: '20-Oktober-2024',
            status: 'Disetujui',
        },
        {
            id: 19,
            nik: '19870123019',
            namaPengusul: 'Lukman Hakim',
            fakultas: 'Ekonomi',
            prodi: 'Manajemen',
            judulPengabmas: 'Pengaruh Budaya Organisasi terhadap Kinerja Karyawan Milenial',
            file: 'dokumen_19.pdf',
            jenisPengabmas: 'Kajian Bisnis',
            biaya: 65000000,
            tanggal: '22-Oktober-2024',
            status: 'Disetujui',
        },
        {
            id: 20,
            nik: '19960505020',
            namaPengusul: 'Maya Safitri',
            fakultas: 'Kedokteran',
            prodi: 'Farmasi',
            judulPengabmas: 'Uji Klinis Efek Samping Obat Herbal Tradisional X',
            file: 'dokumen_20.pdf',
            jenisPengabmas: 'Riset Terapan',
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
            judulPengabmas: 'Analisis Keabsahan Keputusan Presiden dalam Keadaan Darurat',
            file: 'dokumen_21.pdf',
            jenisPengabmas: 'Kajian Hukum',
            biaya: 48000000,
            tanggal: '28-Oktober-2024',
            status: 'Revisi',
        },
        {
            id: 22,
            nik: '19921201022',
            namaPengusul: 'Omar Bakri',
            fakultas: 'Sains',
            prodi: 'Fisika',
            judulPengabmas: 'Simulasi Pergerakan Partikel dalam Medium Berpori',
            file: 'dokumen_22.pdf',
            jenisPengabmas: 'Riset Dasar',
            biaya: 100000000,
            tanggal: '01-November-2024',
            status: 'Disetujui',
        },
        {
            id: 23,
            nik: '19800228023',
            namaPengusul: 'Putri Ramadhani',
            fakultas: 'Keguruan',
            prodi: 'Pendidikan Biologi',
            judulPengabmas: 'Pengembangan Media Pembelajaran Interaktif tentang Ekosistem Laut',
            file: 'dokumen_23.pdf',
            jenisPengabmas: 'Pengabmas Pendidikan',
            biaya: 32000000,
            tanggal: '05-November-2024',
            status: 'Disetujui',
        },
        {
            id: 24,
            nik: '19930414024',
            namaPengusul: 'Rizky Adityawarman',
            fakultas: 'Teknik',
            prodi: 'Elektro',
            judulPengabmas: 'Perancangan Sistem Pengisian Baterai Nirkabel Berbasis Resonansi Magnetik',
            file: 'dokumen_24.pdf',
            jenisPengabmas: 'Riset Terapan',
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
            judulPengabmas: 'Pengaruh Kepemimpinan Transaksional terhadap Kepuasan Kerja',
            file: 'dokumen_25.pdf',
            jenisPengabmas: 'Kajian Bisnis',
            biaya: 58000000,
            tanggal: '10-November-2024',
            status: 'Revisi',
        },
        {
            id: 26,
            nik: '19940320026',
            namaPengusul: 'Taufik Hidayat',
            fakultas: 'Ekonomi',
            prodi: 'Akuntansi',
            judulPengabmas: 'Analisis Kualitas Laporan Keuangan Pemerintah Daerah X',
            file: 'dokumen_26.pdf',
            jenisPengabmas: 'Kajian Kebijakan',
            biaya: 49000000,
            tanggal: '15-November-2024',
            status: 'Disetujui',
        },
        {
            id: 27,
            nik: '19881018027',
            namaPengusul: 'Umi Salamah',
            fakultas: 'Ilmu Budaya',
            prodi: 'Sejarah',
            judulPengabmas: 'Peran Komunitas Tionghoa dalam Pembangunan Kota Tua Jakarta',
            file: 'dokumen_27.pdf',
            jenisPengabmas: 'Kajian Budaya',
            biaya: 35000000,
            tanggal: '18-November-2024',
            status: 'Disetujui',
        },
        {
            id: 28,
            nik: '19950105028',
            namaPengusul: 'Vicky Anggara',
            fakultas: 'Teknik',
            prodi: 'Sipil',
            judulPengabmas: 'Evaluasi Kinerja Struktur Jembatan Tipe Box Girder',
            file: 'dokumen_28.pdf',
            jenisPengabmas: 'Riset Terapan',
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
            judulPengabmas: 'Hubungan antara Asupan Serat dan Risiko Penyakit Jantung Koroner',
            file: 'dokumen_29.pdf',
            jenisPengabmas: 'Riset Dasar',
            biaya: 70000000,
            tanggal: '25-November-2024',
            status: 'Revisi',
        },
        {
            id: 30,
            nik: '19970429030',
            namaPengusul: 'Xavier Jonathan',
            fakultas: 'Sains',
            prodi: 'Kimia',
            judulPengabmas: 'Karakterisasi Bahan Semikonduktor Berbasis Polymer Konduktif',
            file: 'dokumen_30.pdf',
            jenisPengabmas: 'Riset Dasar',
            biaya: 125000000,
            tanggal: '28-November-2024',
            status: 'Disetujui',
        },
    ];

    const { currentPage, perPage, handlePageChange, handlePerRowsChange } = useDataTablePagination(20);

    const columns: TableColumn<DataRowUsulanBaruPengabmas>[] = [
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
            selector: (row) => row.judulPengabmas,
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
            name: 'Jenis Pengabmas',
            selector: (row) => row.jenisPengabmas,
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
                        <Trash2></Trash2>
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
            <h2 className="mb-2 text-xl font-semibold">Data Usulan Baru</h2>
            <Table columns={columns} data={data} handlePageChange={handlePageChange} handlePerRowsChange={handlePerRowsChange} />
        </div>
    );
}
