import { router, usePage } from '@inertiajs/react';
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { Download } from 'lucide-react';
import { useState } from 'react';

export default function DataSuratTugas({ title }: { title: string }) {
    const [data, setData] = useState([
        {
            nomorSurat: 'UHB/ST/LPPM/1/072020',
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
        { accessorKey: 'nomorSurat', header: 'Nomor Surat' },
        {
            header: 'Aksi',
            cell: () => (
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 rounded bg-green-500 px-2 py-1 text-white hover:bg-green-600">
                        <Download></Download> Download
                    </button>
                    <button className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600">Hapus</button>,
                </div>
            ),
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

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(`/dosen/logbook-${title.toLowerCase()}`, { search, pageSize }, { preserveState: true });
    };

    const handleEntries = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        router.get(`/dosen/logbook-${title.toLowerCase()}`, { pageSize: Number(e.target.value), search }, { preserveState: true });
    };

    return (
        <div className="p-4">
            <h2 className="mb-4 text-lg font-bold">Logbook</h2>

            {/* Search */}
            <div className="mb-1 flex justify-between">
                <div className="flex items-center gap-1">
                    <p>Show</p>
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
                    <p>Entries</p>
                </div>

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
