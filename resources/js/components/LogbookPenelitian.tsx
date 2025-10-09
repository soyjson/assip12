import useDataTablePagination from '@/hooks/usePaginationState';
import { Trash2 } from 'lucide-react';
import { TableColumn } from 'react-data-table-component';
import Table from './Table';
import { Button } from './ui/button';

type DataRowUsulanPenelitian = {
    id: number;
    judulPenelitian: string;
    judulKegiatan: string;
    jenisKegiatan: string;
    suratTugas: boolean;
    catatan: string;
    tanggal: string;
    user: string;
};

export default function LogbookPenelitian() {
    // const [data, setData] = useState([
    //     {
    //         judulPenelitian: 'Penelitian',
    //         judulPengabmas: 'Pengabmas.',
    //         judulKegiatan: 'Observasi lingkungan',
    //         jenisKegiatan: 'Observasi',
    //         suratTugas: null,
    //         catatan: 'Observasi lingkungan peternakan...',
    //         tanggal: '29 July 2020',
    //         user: 'imam ahmadi ashari M.pd',
    //     },
    // ]);

    // const { query, entries } = usePage().props;
    // console.log(query);
    // console.log(entries);

    // //    const [data, setData] = useState([]);
    // const [total, setTotal] = useState(0);
    // const [page, setPage] = useState(1);
    // const [pageSize, setPageSize] = useState(10);
    // const [search, setSearch] = useState('');

    // const columns = [
    //     {
    //         header: 'No',
    //         cell: (info) => (page - 1) * pageSize + info.row.index + 1,
    //     },
    //     { accessorKey: `judul${title}`, header: `Judul ${title}` },
    //     { accessorKey: 'judulKegiatan', header: 'Judul Kegiatan' },
    //     { accessorKey: 'jenisKegiatan', header: 'Jenis Kegiatan' },
    //     {
    //         accessorKey: 'suratTugas',
    //         header: 'Surat Tugas',
    //         cell: (info) =>
    //             info.getValue() ? (
    //                 <a href={info.getValue()} className="rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-600">
    //                     Lihat
    //                 </a>
    //             ) : (
    //                 <button className="flex gap-1 rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-600">
    //                     <Pencil className="h-4 w-4 text-xs"></Pencil> Buat
    //                 </button>
    //             ),
    //     },
    //     { accessorKey: 'catatan', header: 'Catatan' },
    //     { accessorKey: 'tanggal', header: 'Tanggal' },
    //     { accessorKey: 'user', header: 'User' },
    //     {
    //         header: 'Aksi',
    //         cell: () => <button className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600">Hapus</button>,
    //     },
    // ];

    // const table = useReactTable({
    //     data,
    //     columns,
    //     pageCount: Math.ceil(total / pageSize),
    //     state: {
    //         pagination: { pageIndex: page - 1, pageSize },
    //     },
    //     getCoreRowModel: getCoreRowModel(),
    //     getPaginationRowModel: getPaginationRowModel(),
    //     manualPagination: true,
    // });

    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     router.get(`/dosen/logbook-${title.toLowerCase()}`, { search }, { preserveState: true });
    // };

    // const handleEntries = (e) => {
    //     // e.preventDefault();
    //     router.get(`/dosen/logbook-${title.toLowerCase()}`, { pageSize }, { preserveState: true });
    // };

    const data = [
        {
            id: 1,
            judulPenelitian: 'Pengembangan Sistem Informasi Akademik Terpadu',
            judulKegiatan: 'Rapat Koordinasi Awal Proyek',
            jenisKegiatan: 'Rapat Internal',
            suratTugas: true,
            catatan: 'Pembahasan scope dan timeline proyek, persetujuan dari dekanat.',
            tanggal: '15-Oktober-2024',
            user: 'Dr. Rina Kusuma',
        },
        {
            id: 2,
            judulPenelitian: 'Analisis Dampak Perubahan Iklim terhadap Produktivitas Padi Lokal',
            judulKegiatan: 'Pengambilan Sampel Tanah Tahap I di Karawang',
            jenisKegiatan: 'Kegiatan Lapangan',
            suratTugas: true,
            catatan: 'Pengambilan 30 sampel tanah dan pengukuran kelembaban awal.',
            tanggal: '20-Oktober-2024',
            user: 'Prof. Bambang Setiawan',
        },
        {
            id: 3,
            judulPenelitian: 'Perancangan Sistem Monitoring Kualitas Udara Berbasis IoT',
            judulKegiatan: 'Uji Coba Sensor CO2 dan Partikulat di Laboratorium',
            jenisKegiatan: 'Kegiatan Lab/Eksperimen',
            suratTugas: false,
            catatan: 'Kalibrasi sensor berhasil, akurasi data 95%.',
            tanggal: '25-Oktober-2024',
            user: 'Ir. Citra Dewi',
        },
        {
            id: 4,
            judulPenelitian: 'Studi Komparatif Efisiensi Energi pada Bangunan Tradisional dan Modern',
            judulKegiatan: 'Survei dan Pengumpulan Data Arsitektur di Kota Lama',
            jenisKegiatan: 'Kegiatan Lapangan',
            suratTugas: true,
            catatan: 'Pengambilan foto dan catatan struktur 10 bangunan tradisional.',
            tanggal: '01-November-2024',
            user: 'Andi Pratama',
        },
        {
            id: 5,
            judulPenelitian: 'Integrasi Machine Learning dalam Deteksi Penipuan Transaksi Digital',
            judulKegiatan: 'Pembersihan dan Pre-processing Dataset Transaksi',
            jenisKegiatan: 'Pengolahan Data',
            suratTugas: false,
            catatan: 'Dataset dibersihkan dari nilai null dan outlier.',
            tanggal: '05-November-2024',
            user: 'Siti Aminah',
        },
        {
            id: 6,
            judulPenelitian: 'Kajian Hukum Perlindungan Kekayaan Intelektual pada Produk UMKM',
            judulKegiatan: 'Wawancara dengan 5 Pelaku UMKM Makanan',
            jenisKegiatan: 'Wawancara/FGD',
            suratTugas: true,
            catatan: 'Fokus pada pemahaman mereka tentang merek dagang dan paten.',
            tanggal: '10-November-2024',
            user: 'Dr. Eko Susilo',
        },
        {
            id: 7,
            judulPenelitian: 'Sintesis dan Karakterisasi Material Komposit untuk Filter Air Limbah',
            judulKegiatan: 'Percobaan Sintesis Komposit Berbahan Dasar Zeolit',
            jenisKegiatan: 'Kegiatan Lab/Eksperimen',
            suratTugas: false,
            catatan: 'Sintesis berhasil, sampel dikirim ke lab untuk karakterisasi SEM.',
            tanggal: '15-November-2024',
            user: 'Prof. Yuniarti',
        },
        {
            id: 8,
            judulPenelitian: 'Analisis Faktor Kunci Keberhasilan Startup Digital di Indonesia',
            judulKegiatan: 'FGD (Focus Group Discussion) dengan 3 CEO Startup',
            jenisKegiatan: 'Wawancara/FGD',
            suratTugas: true,
            catatan: 'Diskusi fokus pada model bisnis dan strategi pendanaan.',
            tanggal: '20-November-2024',
            user: 'Taufik Hidayat',
        },
        {
            id: 9,
            judulPenelitian: 'Pengembangan Modul Pembelajaran Interaktif Berbasis Realitas Tertambah (AR)',
            judulKegiatan: 'Desain Grafis Konten 3D untuk Modul Kimia',
            jenisKegiatan: 'Pengembangan Konten',
            suratTugas: false,
            catatan: 'Aset 3D untuk materi struktur molekul selesai dibuat.',
            tanggal: '25-November-2024',
            user: 'Dra. Mega Puspita',
        },
        {
            id: 10,
            judulPenelitian: 'Implementasi Teknologi Blockchain dalam Sistem Pelacakan Logistik',
            judulKegiatan: 'Instalasi dan Konfigurasi Jaringan Hyperledger Fabric',
            jenisKegiatan: 'Instalasi Sistem',
            suratTugas: true,
            catatan: 'Jaringan 4 peer dan 1 orderer berhasil dikonfigurasi.',
            tanggal: '30-November-2024',
            user: 'Hendra Wijaya',
        },
        {
            id: 11,
            judulPenelitian: 'Kajian Etnobotani Tumbuhan Obat Tradisional Suku X',
            judulKegiatan: 'Ekspedisi Lapangan ke Desa Adat Suku X',
            jenisKegiatan: 'Kegiatan Lapangan',
            suratTugas: true,
            catatan: 'Wawancara mendalam dengan 2 dukun/tabib setempat dan dokumentasi 15 jenis tanaman.',
            tanggal: '05-Desember-2024',
            user: 'Dr. Indah Sari',
        },
        {
            id: 12,
            judulPenelitian: 'Pemodelan Spasial Risiko Bencana Banjir di Wilayah Hulu Sungai Citarum',
            judulKegiatan: 'Validasi Data Topografi dengan Survei Drone',
            jenisKegiatan: 'Pengolahan Data',
            suratTugas: true,
            catatan: 'Perolehan DEM (Digital Elevation Model) dengan akurasi tinggi.',
            tanggal: '10-Desember-2024',
            user: 'Joko Purnomo',
        },
        {
            id: 13,
            judulPenelitian: 'Tinjauan Yuridis Perlindungan Konsumen dalam Transaksi Pinjaman Online',
            judulKegiatan: 'Pengumpulan Regulasi OJK dan Peraturan Terkait',
            jenisKegiatan: 'Studi Pustaka',
            suratTugas: false,
            catatan: 'Dokumen PP OJK 77/2020 dan UU ITE dikumpulkan dan dianalisis.',
            tanggal: '15-Desember-2024',
            user: 'Lina Marlina',
        },
        {
            id: 14,
            judulPenelitian: 'Desain dan Optimasi Antena Mikrostrip untuk Jaringan 5G',
            judulKegiatan: 'Simulasi Desain Awal Antena Menggunakan HFSS',
            jenisKegiatan: 'Kegiatan Lab/Eksperimen',
            suratTugas: false,
            catatan: 'Hasil simulasi menunjukkan return loss -15dB pada frekuensi 28 GHz.',
            tanggal: '20-Desember-2024',
            user: 'Rudi Nugroho',
        },
        {
            id: 15,
            judulPenelitian: 'Pengaruh Metode Flipped Classroom terhadap Hasil Belajar Siswa SMP',
            judulKegiatan: 'Pelaksanaan Pre-test dan Post-test pada Kelompok Kontrol',
            jenisKegiatan: 'Pengumpulan Data',
            suratTugas: true,
            catatan: 'Data skor siswa kelompok kontrol berhasil dicatat.',
            tanggal: '25-Desember-2024',
            user: 'Wulan Febriani',
        },
        {
            id: 16,
            judulPenelitian: 'Analisis Genetik Populasi Ikan Laut dalam Upaya Konservasi',
            judulKegiatan: 'Ekstraksi DNA dari Sampel Jaringan Ikan',
            jenisKegiatan: 'Kegiatan Lab/Eksperimen',
            suratTugas: true,
            catatan: 'Ekstraksi DNA berhasil pada 50 sampel, purity ratio rata-rata 1.8.',
            tanggal: '01-Januari-2025',
            user: 'Prof. Guntur Alam',
        },
        {
            id: 17,
            judulPenelitian: 'Eksplorasi Desain Interaksi Pengguna pada Aplikasi Layanan Publik',
            judulKegiatan: 'Pembuatan Wireframe dan Prototype Low-Fidelity',
            jenisKegiatan: 'Pengembangan Konten',
            suratTugas: false,
            catatan: 'Prototype untuk fitur pengaduan masyarakat telah dibuat di Figma.',
            tanggal: '05-Januari-2025',
            user: 'Deni Susanto',
        },
        {
            id: 18,
            judulPenelitian: 'Sistem Klasifikasi Teks Otomatis untuk Dokumen Hukum',
            judulKegiatan: 'Pelabelan Manual 500 Dokumen Peraturan Daerah',
            jenisKegiatan: 'Pengolahan Data',
            suratTugas: false,
            catatan: 'Proses pelabelan untuk training data model NLP selesai 50%.',
            tanggal: '10-Januari-2025',
            user: 'Dr. Farida Hasan',
        },
        {
            id: 19,
            judulPenelitian: 'Kajian Filosofi Nilai-nilai Pancasila dalam Etika Bisnis Modern',
            judulKegiatan: 'Tinjauan Pustaka tentang Konsep Good Governance',
            jenisKegiatan: 'Studi Pustaka',
            suratTugas: false,
            catatan: 'Mengumpulkan 10 artikel jurnal internasional terkait etika bisnis.',
            tanggal: '15-Januari-2025',
            user: 'Bagus Setyawan',
        },
        {
            id: 20,
            judulPenelitian: 'Formulasi dan Uji Stabilitas Sediaan Kosmetik dari Ekstrak Alami',
            judulKegiatan: 'Uji Stabilitas Akselerasi Sediaan Krim (Suhu 40°C)',
            jenisKegiatan: 'Kegiatan Lab/Eksperimen',
            suratTugas: false,
            catatan: 'Pengamatan pH dan viskositas pada minggu ke-1, hasil stabil.',
            tanggal: '20-Januari-2025',
            user: 'Maya Fitriani',
        },
        {
            id: 21,
            judulPenelitian: 'Peningkatan Kinerja Jaringan Nirkabel Ad-Hoc melalui Algoritma Routing Baru',
            judulKegiatan: 'Pengujian Performa Algoritma Baru di Simulator NS-3',
            jenisKegiatan: 'Kegiatan Lab/Eksperimen',
            suratTugas: false,
            catatan: 'Mendapatkan data delay dan throughput untuk 5 skenario jaringan.',
            tanggal: '25-Januari-2025',
            user: 'Prof. Wahyu Aji',
        },
        {
            id: 22,
            judulPenelitian: 'Dampak Kebijakan Pembatasan Media Sosial terhadap Perilaku Politik Remaja',
            judulKegiatan: 'Penyebaran Kuesioner Online kepada 200 Responden Remaja',
            jenisKegiatan: 'Pengumpulan Data',
            suratTugas: false,
            catatan: 'Target responden tercapai, data siap diolah dengan SPSS.',
            tanggal: '01-Februari-2025',
            user: 'Haryo Subroto',
        },
        {
            id: 23,
            judulPenelitian: 'Studi Penerapan Teknologi Geotermal Skala Kecil di Daerah Terpencil',
            judulKegiatan: 'Pemetaan Potensi Lokasi Geotermal dengan Metode Geolistrik',
            jenisKegiatan: 'Kegiatan Lapangan',
            suratTugas: true,
            catatan: 'Pemetaan di daerah Gunung X, teridentifikasi anomali panas.',
            tanggal: '05-Februari-2025',
            user: 'Iwan Darmawan',
        },
        {
            id: 24,
            judulPenelitian: 'Hubungan Antara Kesejahteraan Psikologis dan Produktivitas Kerja Jarak Jauh',
            judulKegiatan: 'Analisis Regresi Data Kuesioner Kesejahteraan',
            jenisKegiatan: 'Pengolahan Data',
            suratTugas: false,
            catatan: 'Ditemukan korelasi positif signifikan antara dukungan sosial dan produktivitas.',
            tanggal: '10-Februari-2025',
            user: 'Kiki Amelia',
        },
        {
            id: 25,
            judulPenelitian: 'Pengembangan Sistem Rekomendasi Destinasi Wisata Berbasis Data Besar',
            judulKegiatan: 'Penyusunan Arsitektur Big Data Menggunakan Hadoop',
            jenisKegiatan: 'Instalasi Sistem',
            suratTugas: false,
            catatan: 'Cluster Hadoop 4 node berhasil diinstalasi untuk penyimpanan data review wisatawan.',
            tanggal: '15-Februari-2025',
            user: 'Lukman Hakim',
        },
        {
            id: 26,
            judulPenelitian: 'Analisis Pengaruh Good Corporate Governance terhadap Kinerja Keuangan BUMN',
            judulKegiatan: 'Pengumpulan Data Laporan Keuangan 10 BUMN (Tahun 2020-2023)',
            jenisKegiatan: 'Studi Pustaka',
            suratTugas: true,
            catatan: "Data sekunder ROA, ROE, dan Tobin's Q berhasil dikumpulkan.",
            tanggal: '20-Februari-2025',
            user: 'Nia Pratiwi',
        },
        {
            id: 27,
            judulPenelitian: 'Desain Struktur Jembatan Tahan Gempa dengan Material Komposit Serat',
            judulKegiatan: 'Simulasi Beban Statik pada Model Jembatan di SAP2000',
            jenisKegiatan: 'Kegiatan Lab/Eksperimen',
            suratTugas: false,
            catatan: 'Hasil simulasi menunjukkan defleksi dalam batas aman.',
            tanggal: '25-Februari-2025',
            user: 'Oscar Darmawan',
        },
        {
            id: 28,
            judulPenelitian: 'Efektivitas Program Vaksinasi COVID-19 di Tingkat Pelayanan Dasar',
            judulKegiatan: 'Pengolahan Data Sekunder dari Dinas Kesehatan',
            jenisKegiatan: 'Pengolahan Data',
            suratTugas: true,
            catatan: 'Data cakupan dan kasus harian dikelompokkan berdasarkan wilayah kecamatan.',
            tanggal: '01-Maret-2025',
            user: 'Puspa Sari',
        },
        {
            id: 29,
            judulPenelitian: 'Penyusunan Kamus Istilah Lokal Bahasa Daerah X Berbasis Aplikasi Android',
            judulKegiatan: 'Pengembangan Basis Data dan Tampilan Antarmuka (UI/UX)',
            jenisKegiatan: 'Pengembangan Konten',
            suratTugas: false,
            catatan: 'Implementasi fungsi pencarian dan filter kategori istilah.',
            tanggal: '05-Maret-2025',
            user: 'Qiran Maulana',
        },
        {
            id: 30,
            judulPenelitian: 'Revitalisasi Motif Batik Tradisional untuk Pasar Global',
            judulKegiatan: 'Workshop Desain dan Pewarnaan Ulang Motif Parang Rusak',
            jenisKegiatan: 'Rapat Internal',
            suratTugas: true,
            catatan: 'Eksplorasi palet warna modern pada motif tradisional.',
            tanggal: '10-Maret-2025',
            user: 'Ratih Ayu',
        },
    ];

    const { currentPage, perPage, handlePageChange, handlePerRowsChange } = useDataTablePagination(20);

    const columns: TableColumn<DataRowUsulanPenelitian>[] = [
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
            name: 'Judul Kegiatan',
            selector: (row) => row.judulKegiatan,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Jenis Kegiatan',
            selector: (row) => row.jenisKegiatan,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Surat Tugas',
            // selector: (row) => row.,
            cell: (row) => {
                if (row.suratTugas) {
                    return (
                        <a href={`/buat/surat-tugas/${row.id}`}>
                            <Button className="cursor-pointer bg-blue-500 hover:bg-blue-400">Buat</Button>,
                        </a>
                    );
                } else {
                    return (
                        <div className="flex flex-col items-center gap-2 py-3">
                            <a href={`/delete/surat-tugas/${row.id}`}>
                                <Button className="cursor-pointer bg-red-500 hover:bg-red-400">
                                    <Trash2></Trash2>
                                </Button>
                            </a>
                            <a href={`/buat/surat-tugas/${row.id}`}>
                                <Button className="cursor-pointer bg-blue-500 hover:bg-blue-400">Buat Baru</Button>
                            </a>
                        </div>
                    );
                }
            },
            center: true,
        },
        {
            name: 'Catatan',
            selector: (row) => row.catatan,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Tanggal',
            selector: (row) => row.tanggal,
            sortable: true,
            wrap: true,
        },
        {
            name: 'User',
            selector: (row) => row.user,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Aksi',
            cell: () => (
                <div className="space-x-2">
                    <Button className="cursor-pointer bg-blue-600 hover:bg-blue-400">Edit</Button>
                    <Button className="cursor-pointer bg-red-600 hover:bg-red-400">Hapus</Button>
                </div>
            ),
        },
    ];

    return (
        <div className="p-4">
            <h2 className="mb-4 text-lg font-bold">Histori Logbook</h2>

            <Table columns={columns} data={data} handlePageChange={handlePageChange} handlePerRowsChange={handlePerRowsChange} />
            {/* <div className="mb-1 flex justify-between">
                <select
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                        setPage(1);
                        handleEntries(e);
                    }}
                    className="rounded border px-2"
                >
                    {[10, 20, 50].map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>

                <form onSubmit={handleSearch} className="mb-4 flex space-x-2">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Cari judul / kegiatan / user..."
                        className="rounded border px-2 py-1"
                    />
                    <button type="submit" className="rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-600">
                        Cari
                    </button>
                </form>
            </div>

            <table className="w-full border-collapse border text-sm">
                <thead className="bg-gray-100">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="border px-2 py-1 text-left">
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="hover:bg-gray-50">
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="border px-2 py-1">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-2 flex items-center justify-between">
                <div>
                    <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="mr-2 rounded border px-2 py-1 disabled:opacity-50"
                    >
                        Prev
                    </button>
                    <button
                        onClick={() => setPage((p) => (p < total / pageSize ? p + 1 : p))}
                        disabled={page >= total / pageSize}
                        className="rounded border px-2 py-1 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
                <span>
                    Page {page} of {Math.ceil(total / pageSize)}
                </span>
            </div> */}
        </div>
    );
}
