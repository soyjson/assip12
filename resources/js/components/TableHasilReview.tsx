export default function TableHasilReview() {
    const data = [
        {
            id: 1,
            judul: 'Pengembangan Sistem Informasi Akademik',
            reviewer: 'Joshua M.pd, Sandro Migilba S.pd',
            file: 'usulan1.docx',
            status: 'Setujui',
            jenis: 'Jenis 1',
            date: '30-09-2025',
            jenis_laporan: 'Akhir / Kemajuan',
        },
    ];

    return (
        <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-2 text-xl font-semibold">Hasil Review</h2>
            <p className="mb-4 text-sm text-gray-500">Jika ada kesalahan, silakan hubungi admin</p>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-sm">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="border px-3 py-2">No</th>
                            <th className="border px-3 py-2">Judul</th>
                            <th className="border px-3 py-2">Reviewer</th>
                            <th className="border px-3 py-2">File</th>
                            <th className="border px-3 py-2">Status</th>
                            <th className="border px-3 py-2">Jenis</th>
                            <th className="border px-3 py-2">Tanggal</th>
                            <th className="border px-3 py-2">Jenis Laporan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item, i) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="border px-3 py-2 text-center">{i + 1}</td>
                                    <td className="border px-3 py-2">{item.judul}</td>
                                    <td className="border px-3 py-2">{item.reviewer}</td>
                                    <td className="border px-3 py-2">{item.file}</td>
                                    <td className="border px-3 py-2">
                                        <span className="rounded-lg bg-green-500 px-2 py-1 text-white">{item.status}</span>
                                    </td>
                                    <td className="border px-3 py-2 text-center">{item.jenis}</td>
                                    <td className="border px-3 py-2 text-center">{item.date}</td>
                                    <td className="border px-3 py-2 text-center">{item.jenis_laporan}</td>
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
