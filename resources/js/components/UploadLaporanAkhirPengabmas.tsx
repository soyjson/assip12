import { useState } from 'react';

export default function UploadLaporanAkhirPengabmas() {
    const [form, setForm] = useState({
        judul: '',
        time: 0,
        file: null,
        luaran: '',
        link: '',
        output: '',
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm({
            ...form,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data:', form);
        alert('Form berhasil disubmit! (cek console log)');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-white p-6 shadow">
            {/* Judul Penelitian */}
            <div>
                <label className="mb-1 block text-sm font-medium">
                    Judul Pengabdian Masyarakat<span className="text-red-500">*</span>
                </label>
                <select name="judul" value={form.judul} onChange={handleChange} className="w-full rounded border px-3 py-2">
                    // TODO: fix : data dari database
                    <option value="">- Pilih -</option>
                    <option value="Sistem Informasi Akademik">Sistem Informasi Akademik</option>
                    <option value="VR untuk Pendidikan">VR untuk Pendidikan</option>
                    <option value="AI untuk Kesehatan">AI untuk Kesehatan</option>
                </select>
            </div>

            {/* Presentase Kemajuan */}
            <div>
                <label className="mb-1 block text-sm font-medium">
                    Lama Pengabdian Masyarakat<span className="text-red-500">*</span>
                </label>
                <div className="flex items-center">
                    <input name="presentase" value={form.time} onChange={handleChange} className="w-full rounded-l border px-3 py-2"></input>
                    <span className="rounded-r border bg-blue-200 px-2 py-2 text-black/50">Bulan</span>
                </div>
            </div>

            {/* File Upload */}
            <div>
                <label className="mb-1 block text-sm font-medium">
                    Laporan Akhir<span className="text-red-500">*</span>
                </label>
                <input type="file" name="file" accept=".doc,.docx" onChange={handleChange} className="w-full rounded border px-3 py-2" />
                <p className="mt-1 text-xs text-gray-500">Dokumen Ms. Word (Format: Doc, Docx)</p>
            </div>

            {/* Link Pendukung */}
            <div>
                <label className="mb-1 block text-sm font-medium">Link Pendukung</label>
                <input
                    type="url"
                    name="link"
                    value={form.link}
                    onChange={handleChange}
                    placeholder="https://"
                    className="w-full rounded border px-3 py-2"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="mb-1 block text-sm font-medium">
                    Jenis Luaran<span className="text-red-500">*</span>
                </label>
                <select name="judul" value={form.luaran} onChange={handleChange} className="w-full rounded border px-3 py-2">
                    // TODO: fix : data dari database
                    <option value="">- Pilih -</option>
                    <option value="Sistem Informasi Akademik">Sistem Informasi Akademik</option>
                    <option value="VR untuk Pendidikan">VR untuk Pendidikan</option>
                    <option value="AI untuk Kesehatan">AI untuk Kesehatan</option>
                </select>
            </div>

            {/* Output */}
            <div>
                <label className="mb-1 block text-sm font-medium">
                    Luaran <span className="text-red-500">*</span>
                </label>
                <input type="file" name="output" value={form.output} onChange={handleChange} className="w-full rounded border px-3 py-2" />
                <p className="mt-1 text-xs text-gray-500">Dokumen Ms. Word (Format: Doc, Docx)</p>
            </div>

            {/* Submit */}
            <div>
                <button type="submit" className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700">
                    Simpan
                </button>
            </div>
        </form>
    );
}
