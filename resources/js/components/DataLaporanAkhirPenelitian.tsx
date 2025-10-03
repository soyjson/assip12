export default function DataLaporanAkhirPenelitian() {
    const data = [
        {
            id: 1,
            judul: 'Pengembangan Sistem Informasi Akademik',
            time: '1',
            file: 'usulan1.docx',
            link: 'https://link.pendukung',
            jenis_luaran: 'jenis luaran',
            luaran: 'luaran.docx',
        },
    ];

    return (
        <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-2 text-xl font-semibold">Data Laporan Akhir Penelitian</h2>
            <p className="mb-4 text-sm text-gray-500">Jika ada kesalahan, silakan perbaiki sebelum proses pengajuan berakhir</p>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-sm">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="border px-3 py-2">No</th>
                            <th className="border px-3 py-2">Judul</th>
                            <th className="border px-3 py-2">Lama Penelitian</th>
                            <th className="border px-3 py-2">Laporan Akhir</th>
                            <th className="border px-3 py-2">Link Pendukung</th>
                            <th className="border px-3 py-2">Jenis Luaran</th>
                            <th className="border px-3 py-2">Luaran</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item, i) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="border px-3 py-2 text-center">{i + 1}</td>
                                    <td className="border px-3 py-2">{item.judul}</td>
                                    <td className="border px-3 py-2">{item.time} Bulan</td>
                                    <td className="border px-3 py-2">{item.file}</td>
                                    <td className="border px-3 py-2">{item.link}</td>
                                    <td className="border px-3 py-2 text-center">{item.jenis_luaran}</td>
                                    <td className="border px-3 py-2 text-center">{item.luaran}</td>
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
