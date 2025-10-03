export default function DataLaporanKemajuanPengabmas() {
    const data = [
        {
            id: 1,
            judul: 'Pengembangan Sistem Informasi Akademik',
            persentase: '60%',
            file: 'usulan1.docx',
            link: 'https://link.pendukung',
            output: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquid incidunt libero voluptatibus veritatis nostrum. In quibusdam dolor nesciunt facere placeat eveniet? Suscipit odit fuga rem sapiente corrupti libero magnam!',
        },
    ];

    return (
        <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-2 text-xl font-semibold">Data Laporan Kemajuan Pengabmas</h2>
            <p className="mb-4 text-sm text-gray-500">Jika ada kesalahan, silakan perbaiki sebelum proses pengajuan berakhir</p>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-sm">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="border px-3 py-2">No</th>
                            <th className="border px-3 py-2">Judul</th>
                            <th className="border px-3 py-2">Persentase</th>
                            <th className="border px-3 py-2">Laporan Kemajuan</th>
                            <th className="border px-3 py-2">Link Pendukung</th>
                            <th className="border px-3 py-2">Output</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item, i) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="border px-3 py-2 text-center">{i + 1}</td>
                                    <td className="border px-3 py-2">{item.judul}</td>
                                    <td className="border px-3 py-2">{item.persentase}</td>
                                    <td className="border px-3 py-2">{item.file}</td>
                                    <td className="border px-3 py-2">{item.link}</td>
                                    <td className="border px-3 py-2 text-center">{item.output}</td>
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
