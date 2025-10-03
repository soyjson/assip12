import { useState } from 'react';

export default function TabUsulanPengabmas() {
    // State untuk anggota internal & eksternal
    const [anggotaInternal, setAnggotaInternal] = useState(['']);
    const [anggotaEksternal, setAnggotaEksternal] = useState(['']);

    // Fungsi tambah input
    const tambahInternal = () => {
        setAnggotaInternal([...anggotaInternal, '']);
    };

    const tambahEksternal = () => {
        setAnggotaEksternal([...anggotaEksternal, '']);
    };

    const kurangiInternal = () => {
        if (anggotaInternal.length > 1) {
            setAnggotaInternal(anggotaInternal.slice(0, -1));
        }
    };

    const kurangiEksternal = () => {
        if (anggotaInternal.length > 1) {
            setAnggotaEksternal(anggotaEksternal.slice(0, -1));
        }
    };

    // Fungsi handle perubahan input
    const handleChangeInternal = (i, value) => {
        const newData = [...anggotaInternal];
        newData[i] = value;
        setAnggotaInternal(newData);
    };

    const handleChangeEksternal = (i, value) => {
        const newData = [...anggotaEksternal];
        newData[i] = value;
        setAnggotaEksternal(newData);
    };

    return (
        <div>
            <h2 className="mb-4 text-xl font-semibold">Upload Usulan</h2>
            <p className="mb-6 text-sm text-gray-500">
                Tanda (<span className="text-red-500">*</span>) artinya wajib di isi
            </p>

            <div className="grid grid-cols-2 gap-6">
                {/* Kiri */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Nama Ketua + Gelar*</label>
                        <input type="text" className="mt-1 w-full rounded border px-3 py-2" placeholder="Masukkan nama ketua" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Anggota Internal</label>
                        {anggotaInternal.map((val, i) => (
                            <input
                                key={i}
                                type="text"
                                value={val}
                                onChange={(e) => handleChangeInternal(i, e.target.value)}
                                className="mt-2 w-full rounded border px-3 py-2"
                                placeholder={`Anggota Internal ${i + 1}`}
                            />
                        ))}
                        <div className="flex gap-2">
                            <button type="button" onClick={tambahInternal} className="mt-2 rounded bg-blue-500 px-3 py-1 text-white">
                                +
                            </button>
                            <button type="button" onClick={kurangiInternal} className="mt-2 rounded bg-red-500 px-3 py-1 text-white">
                                -
                            </button>
                        </div>
                    </div>

                    {/* Anggota Eksternal */}
                    <div>
                        <label className="block text-sm font-medium">Anggota Eksternal</label>
                        {anggotaEksternal.map((val, i) => (
                            <input
                                key={i}
                                type="text"
                                value={val}
                                onChange={(e) => handleChangeEksternal(i, e.target.value)}
                                className="mt-2 w-full rounded border px-3 py-2"
                                placeholder={`Anggota Eksternal ${i + 1}`}
                            />
                        ))}
                        <div className="flex gap-2">
                            <button type="button" onClick={tambahEksternal} className="mt-2 rounded bg-blue-500 px-3 py-1 text-white">
                                +
                            </button>
                            <button type="button" onClick={kurangiEksternal} className="mt-2 rounded bg-red-500 px-3 py-1 text-white">
                                -
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Admin</label>
                        <input type="text" className="w-full rounded border px-3 py-2" placeholder="Admin" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Mahasiswa</label>
                        <input type="text" className="w-full rounded border px-3 py-2" placeholder="Mahasiswa" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Alumni</label>
                        <input type="text" className="w-full rounded border px-3 py-2" placeholder="Alumni" />
                    </div>
                </div>

                {/* Kanan */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Judul Penelitian*</label>
                        <input type="text" className="mt-1 w-full rounded border px-3 py-2" placeholder="Masukkan judul penelitian" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Dokumen Usulan*</label>
                        <input type="file" className="mt-1 w-full rounded border px-3 py-2" accept=".doc,.docx,.pdf" />
                        <p className="mt-1 text-xs text-gray-500">Format: .doc, .docx, .pdf</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Luaran Wajib*</label>
                        <select className="mt-1 w-full rounded border px-3 py-2">
                            <option>- Pilih -</option>
                            <option>Publikasi</option>
                            <option>Jurnal</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Luaran Tambahan</label>
                        <select className="mt-1 w-full rounded border px-3 py-2">
                            <option>- Pilih -</option>
                            <option>Buku</option>
                            <option>Seminar</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Jenis Penelitian*</label>
                        <select className="mt-1 w-full rounded border px-3 py-2">
                            <option>- Pilih -</option>
                            <option>Mandiri</option>
                            <option>Hibah PT</option>
                            <option>Hibah Luar</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Biaya Penelitian</label>
                        <div className="mt-1 flex gap-2">
                            <span className="rounded bg-green-500 px-3 py-1 text-sm text-white">Mandiri</span>
                            <span className="rounded bg-blue-500 px-3 py-1 text-sm text-white">Hibah PT</span>
                            <span className="rounded bg-red-500 px-3 py-1 text-sm text-white">Hibah Luar</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Tahun Pelaksanaan</label>
                        <input type="number" className="mt-1 w-full rounded border px-3 py-2" placeholder="2025" />
                    </div>
                </div>
            </div>
        </div>
    );
}
