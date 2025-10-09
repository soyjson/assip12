export const formatRupiah = (amount: number): string => {
    // Memastikan input adalah angka valid
    if (typeof amount !== 'number' || isNaN(amount)) {
        return 'Rp 0';
    }

    // Menggunakan Intl.NumberFormat untuk pemformatan standar internasional
    // Ini adalah cara paling modern dan efisien di JavaScript.
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0, // Tidak menampilkan angka desimal
    }).format(amount);
};
