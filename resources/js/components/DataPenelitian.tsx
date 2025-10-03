export default function DataPenelitian() {
    const data = [
        {
            id: 1,
            judul: 'Pengembangan Sistem Informasi Akademik',
            file: 'usulan1.docx',
            tanggal: '2025-09-20',
            status: 'Menunggu',
        },
        {
            id: 2,
            judul: 'Studi VR untuk Pendidikan',
            file: 'usulan2.pdf',
            tanggal: '2025-09-22',
            status: 'Disetujui',
        },
        {
            id: 3,
            judul: 'AI dalam Kesehatan',
            file: 'usulan3.docx',
            tanggal: '2025-09-24',
            status: 'Ditolak',
        },
    ];

    return (
        <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-2 text-xl font-semibold">Data Usulan</h2>
            <p className="mb-4 text-sm text-gray-500">Jika ada kesalahan, silakan perbaiki sebelum proses pengajuan berakhir</p>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-sm">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="border px-3 py-2">No</th>
                            <th className="border px-3 py-2">Judul</th>
                            <th className="border px-3 py-2">File Usulan</th>
                            <th className="border px-3 py-2">Tanggal</th>
                            <th className="border px-3 py-2">Status</th>
                            <th className="border px-3 py-2">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item, i) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="border px-3 py-2 text-center">{i + 1}</td>
                                    <td className="border px-3 py-2">{item.judul}</td>
                                    <td className="border px-3 py-2">
                                        <a href="#" className="text-blue-600 hover:underline">
                                            {item.file}
                                        </a>
                                    </td>
                                    <td className="border px-3 py-2">{item.tanggal}</td>
                                    <td className="border px-3 py-2">
                                        {item.status === 'Disetujui' && (
                                            <span className="rounded bg-green-100 px-2 py-1 text-xs text-green-700">{item.status}</span>
                                        )}
                                        {item.status === 'Menunggu' && (
                                            <span className="rounded bg-yellow-100 px-2 py-1 text-xs text-yellow-700">{item.status}</span>
                                        )}
                                        {item.status === 'Ditolak' && (
                                            <span className="rounded bg-red-100 px-2 py-1 text-xs text-red-700">{item.status}</span>
                                        )}
                                    </td>
                                    <td className="border px-3 py-2 text-center">
                                        <button className="mr-2 rounded bg-blue-500 px-2 py-1 text-xs text-white">Edit</button>
                                        <button className="rounded bg-red-500 px-2 py-1 text-xs text-white">Hapus</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <p className="p-2 text-center">No data availiable </p>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Footer pagination mock */}
            <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                <span>
                    Showing {data.length} of {data.length} entries
                </span>
                <div className="flex gap-2">
                    <button className="rounded border px-2 py-1">Previous</button>
                    <button className="rounded border px-2 py-1">Next</button>
                </div>
            </div>
        </div>
    );
}
