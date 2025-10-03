import { router, usePage } from '@inertiajs/react';
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { Pencil } from 'lucide-react';
import { useState } from 'react';

export default function Logbook({ title }: { title: string }) {
    const [data, setData] = useState([
        {
            judulPenelitian: 'Penelitian',
            judulPengabmas: 'Pengabmas.',
            judulKegiatan: 'Observasi lingkungan',
            jenisKegiatan: 'Observasi',
            suratTugas: null,
            catatan: 'Observasi lingkungan peternakan...',
            tanggal: '29 July 2020',
            user: 'imam ahmadi ashari M.pd',
        },
    ]);

    const { query, entries } = usePage().props;
    console.log(query);
    console.log(entries);

    //    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [search, setSearch] = useState('');

    const columns = [
        {
            header: 'No',
            cell: (info) => (page - 1) * pageSize + info.row.index + 1,
        },
        { accessorKey: `judul${title}`, header: `Judul ${title}` },
        { accessorKey: 'judulKegiatan', header: 'Judul Kegiatan' },
        { accessorKey: 'jenisKegiatan', header: 'Jenis Kegiatan' },
        {
            accessorKey: 'suratTugas',
            header: 'Surat Tugas',
            cell: (info) =>
                info.getValue() ? (
                    <a href={info.getValue()} className="rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-600">
                        Lihat
                    </a>
                ) : (
                    <button className="flex gap-1 rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-600">
                        <Pencil className="h-4 w-4 text-xs"></Pencil> Buat
                    </button>
                ),
        },
        { accessorKey: 'catatan', header: 'Catatan' },
        { accessorKey: 'tanggal', header: 'Tanggal' },
        { accessorKey: 'user', header: 'User' },
        {
            header: 'Aksi',
            cell: () => <button className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600">Hapus</button>,
        },
    ];

    const table = useReactTable({
        data,
        columns,
        pageCount: Math.ceil(total / pageSize),
        state: {
            pagination: { pageIndex: page - 1, pageSize },
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        manualPagination: true,
    });

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(`/dosen/logbook-${title.toLowerCase()}`, { search }, { preserveState: true });
    };

    const handleEntries = (e) => {
        // e.preventDefault();
        router.get(`/dosen/logbook-${title.toLowerCase()}`, { pageSize }, { preserveState: true });
    };

    return (
        <div className="p-4">
            <h2 className="mb-4 text-lg font-bold">Logbook</h2>

            {/* Search */}
            <div className="mb-1 flex justify-between">
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

            {/* Table */}
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

            {/* Pagination */}
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
            </div>
        </div>
    );
}
