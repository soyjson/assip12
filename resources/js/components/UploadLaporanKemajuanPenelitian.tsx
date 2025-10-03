import { useState } from 'react';

export default function UploadLaporanKemajuanPenelitian() {
    const [form, setForm] = useState({
        judul: '',
        presentase: '',
        file: null,
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', form);
        alert('Form berhasil disubmit! (cek console log)');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-white p-6 shadow">
            {/* Judul Penelitian */}
            <div>
                <label className="mb-1 block text-sm font-medium">
                    Judul Penelitian<span className="text-red-500">*</span>
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
                    Presentase Kemajuan<span className="text-red-500">*</span>
                </label>
                <select name="presentase" value={form.presentase} onChange={handleChange} className="w-full rounded border px-3 py-2">
                    <option value="">- Pilih -</option>
                    <option value="25%">25%</option>
                    <option value="50%">50%</option>
                    <option value="75%">75%</option>
                    <option value="100%">100%</option>
                </select>
            </div>

            {/* File Upload */}
            <div>
                <label className="mb-1 block text-sm font-medium">
                    Laporan Kemajuan<span className="text-red-500">*</span>
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

            {/* Output */}
            <div>
                <label className="mb-1 block text-sm font-medium">Output</label>
                <input
                    type="text"
                    name="output"
                    value={form.output}
                    onChange={handleChange}
                    placeholder="Misal: draft seminar, draft buku, draft jurnal"
                    className="w-full rounded border px-3 py-2"
                />
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
