/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from 'react';

export function useSearchFilter<T extends Record<string, any>>(initialData: T[]) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = useMemo(() => {
        const term = searchTerm.toLowerCase().trim();
        if (!term) return initialData;

        return initialData.filter((item) => Object.values(item).some((value) => String(value).toLowerCase().includes(term)));
    }, [searchTerm, initialData]);

    return { searchTerm, setSearchTerm, filteredData };
}
