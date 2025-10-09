import { useCallback, useState } from 'react';

// 1. Definisikan Interface untuk return value dari hook
interface PaginationState {
    currentPage: number;
    perPage: number;
    handlePageChange: (page: number) => void;
    handlePerRowsChange: (newPerPage: number, page: number) => void;
    resetPagination: () => void;
}

const useDataTablePagination = (defaultPerPage: number = 10): PaginationState => {
    // 2. State dengan tipe number
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(defaultPerPage);

    // 3. Handler untuk Perubahan Halaman (Gunakan useCallback untuk performa)
    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page);
    }, []);

    // 4. Handler untuk Perubahan Batas Data Per Halaman (Gunakan useCallback untuk performa)
    const handlePerRowsChange = useCallback((newPerPage: number) => {
        setPerPage(newPerPage);
        // Saat batas baris berubah, selalu kembali ke halaman 1
        setCurrentPage(1);
    }, []);

    // 5. Fungsi Reset
    const resetPagination = useCallback(() => {
        setCurrentPage(1);
        setPerPage(defaultPerPage);
    }, [defaultPerPage]);

    return {
        currentPage,
        perPage,
        handlePageChange,
        handlePerRowsChange,
        resetPagination,
    };
};

export default useDataTablePagination;
