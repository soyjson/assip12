import { router, usePage } from '@inertiajs/react';
import { SubmitHandler, useForm } from 'react-hook-form';

// interface Afiliasi {
//     internal?: string;
//     eksternal?: string;
// }

export interface PenelitianForm {
    judul_penelitian: string;
    lama_penelitian: string;
    tempat_penelitian: string;
    transport: string;

    // Data Afiliasi
    nama_ketua: string;
    afiliasi_ketua: string;

    // Anggota Internal (misalnya hingga 4)
    anggota_internal_1: string;
    afiliasi_internal_1: string;
    anggota_internal_2: string;
    afiliasi_internal_2: string;
    // ... dst (untuk 3 & 4)

    // Anggota Eksternal (misalnya hingga 2)
    anggota_eksternal_1: string;
    afiliasi_eksternal_1: string;
    anggota_eksternal_2: string;
    afiliasi_eksternal_2: string;
}

export default function FormSuratTugasPenelitian() {
    // Ambil user dari Inertia jika diperlukan
    const { props } = usePage();
    const { errors } = props as { errors: Record<string, string> };

    // Inisialisasi React Hook Form
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<PenelitianForm>({
        // Default values, misalnya dari props yang dikirim Laravel
        defaultValues: {
            // Data Ketua biasanya diisi otomatis dari sesi user yang login
            nama_ketua: 'Imam Ahmad Ashari, S.Kom, M.Kom.',
            // Isi default lainnya
            judul_penelitian: '',
            lama_penelitian: '',
            // ...
        },
    });

    // Fungsi Submit
    const onSubmit: SubmitHandler<PenelitianForm> = (data) => {
        // Menggunakan Inertia.js untuk mengirim data ke route Laravel
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        router.post('/simpan-usulan-penelitian', data as any, {
            forceFormData: true, // Berguna untuk pengiriman data yang kompleks atau file (jika ada)
            preserveScroll: true,
        });
    };

    // Helper untuk menampilkan error RHF atau Inertia
    const getError = (fieldName: keyof PenelitianForm) => {
        return errors[fieldName]; // Asumsi errors dikirim dari Laravel
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-lg bg-white p-6 shadow-md">
            {/* ======================= BAGIAN DATA PENELITIAN ======================= */}
            <h2 className="mb-4 text-xl font-semibold text-blue-700">Data Penelitian</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Judul Penelitian */}
                <div>
                    <label htmlFor="judul_penelitian" className="block text-sm font-medium text-gray-700">
                        Judul Penelitian*
                    </label>
                    <input
                        id="judul_penelitian"
                        type="text"
                        {...register('judul_penelitian', { required: 'Judul penelitian wajib diisi' })}
                        className={`mt-1 block w-full border ${getError('judul_penelitian') ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 shadow-sm`}
                        defaultValue="IMPLEMENTASI WIRELESS SENSOR NETWC" // Data dari gambar
                    />
                    {getError('judul_penelitian') && <p className="mt-1 text-xs text-red-600">{getError('judul_penelitian')}</p>}
                </div>

                {/* Tempat Penelitian */}
                <div>
                    <label htmlFor="tempat_penelitian" className="block text-sm font-medium text-gray-700">
                        Tempat Penelitian*
                    </label>
                    <input
                        id="tempat_penelitian"
                        type="text"
                        {...register('tempat_penelitian', { required: 'Tempat penelitian wajib diisi' })}
                        className={`mt-1 block w-full border ${getError('tempat_penelitian') ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 shadow-sm`}
                    />
                    {getError('tempat_penelitian') && <p className="mt-1 text-xs text-red-600">{getError('tempat_penelitian')}</p>}
                </div>

                {/* Lama Penelitian */}
                <div>
                    <label htmlFor="lama_penelitian" className="block text-sm font-medium text-gray-700">
                        Lama Penelitian*
                    </label>
                    <input
                        id="lama_penelitian"
                        type="number"
                        {...register('lama_penelitian', { required: 'Lama penelitian wajib diisi', valueAsNumber: true })}
                        className={`mt-1 block w-full border ${getError('lama_penelitian') ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 shadow-sm`}
                    />
                    {getError('lama_penelitian') && <p className="mt-1 text-xs text-red-600">{getError('lama_penelitian')}</p>}
                </div>

                {/* Transport */}
                <div>
                    <label htmlFor="transport" className="block text-sm font-medium text-gray-700">
                        Transport*
                    </label>
                    <input
                        id="transport"
                        type="text"
                        {...register('transport')}
                        className={`mt-1 block w-full border ${getError('transport') ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 shadow-sm`}
                    />
                </div>
            </div>

            {/* ======================= BAGIAN DATA AFILIASI ======================= */}
            <div className="mt-8 border-t border-blue-200 pt-4">
                <h2 className="mb-4 text-xl font-semibold text-blue-700">Data Afiliasi Tim</h2>
                {/* <div className="grid grid-cols-2 gap-4 rounded-md bg-blue-50 p-4 text-sm font-semibold">
                    <span>Nama Tim</span>
                    <span>Afiliasi (Institusi)</span>
                </div> */}

                {/* Header (hidden in the image but useful for structure) */}
                <div className="mt-2 grid grid-cols-2 gap-4">
                    {/* Nama Ketua (Otomatis Diisi) */}
                    <div className="flex items-center">
                        <label className="w-1/3 text-sm font-medium text-gray-700">Nama Ketua*</label>
                        <input
                            id="nama_ketua"
                            type="text"
                            readOnly
                            {...register('nama_ketua', { required: 'Afiliasi ketua wajib diisi' })}
                            className="w-2/3 cursor-not-allowed rounded-md border-gray-300 bg-gray-100 p-2"
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="w-1/3 text-sm font-medium text-gray-700">Afiliasi</label>
                        {/* Afiliasi Ketua */}
                        <input
                            id="afiliasi_ketua"
                            type="text"
                            {...register('afiliasi_ketua')}
                            className={`w-2/3 border ${getError('afiliasi_ketua') ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 shadow-sm`}
                        />
                    </div>
                </div>

                {/* Anggota Internal 1 - 4 */}
                {[1, 2, 3, 4].map((i) => (
                    <div key={`internal-${i}`} className="mt-2 grid grid-cols-2 gap-4">
                        {/* Nama Anggota Internal */}
                        <div className="flex items-center">
                            <label className="w-1/3 text-sm font-medium text-gray-700">{`Anggota Internal ${i}`}</label>
                            <input
                                type="text"
                                {...register(`anggota_internal_${i}` as keyof PenelitianForm)}
                                className="w-2/3 rounded-md border-gray-300 p-2 shadow-sm"
                            />
                        </div>
                        {/* Afiliasi Internal */}
                        <div className="flex items-center">
                            <label className="w-1/3 text-sm font-medium text-gray-700">{`Afiliasi Internal ${i}`}</label>
                            <input
                                type="text"
                                {...register(`afiliasi_internal_${i}` as keyof PenelitianForm)}
                                className="w-2/3 rounded-md border-gray-300 p-2 shadow-sm"
                            />
                        </div>
                    </div>
                ))}

                {/* Anggota Eksternal 1 - 2 */}
                {[1, 2].map((i) => (
                    <div key={`eksternal-${i}`} className="mt-2 grid grid-cols-2 gap-4">
                        {/* Nama Anggota Eksternal */}
                        <div className="flex items-center">
                            <label className="w-1/3 text-sm font-medium text-gray-700">{`Anggota Eksternal ${i}`}</label>
                            <input
                                type="text"
                                {...register(`anggota_eksternal_${i}` as keyof PenelitianForm)}
                                className="w-2/3 rounded-md border-gray-300 p-2 shadow-sm"
                            />
                        </div>
                        {/* Afiliasi Eksternal */}
                        <div className="flex items-center">
                            <label className="w-1/3 text-sm font-medium text-gray-700">{`Afiliasi Eksternal ${i}`}</label>
                            <input
                                type="text"
                                {...register(`afiliasi_eksternal_${i}` as keyof PenelitianForm)}
                                className="w-2/3 rounded-md border-gray-300 p-2 shadow-sm"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Tombol Submit */}
            <div className="mt-8 flex justify-end border-t pt-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`rounded-md px-6 py-2 font-medium text-white transition-colors ${
                        isSubmitting ? 'cursor-not-allowed bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                >
                    {isSubmitting ? 'Memproses...' : 'Simpan Usulan Penelitian'}
                </button>
            </div>
        </form>
    );
}
