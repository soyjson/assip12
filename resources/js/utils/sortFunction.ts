/* eslint-disable @typescript-eslint/no-explicit-any */

export const parseIndonesianDate = (dateStr: string): Date => {
    const [day, monthName, year] = dateStr.split('-');

    const monthMap: Record<string, number> = {
        Januari: 0,
        Februari: 1, // perhatikan ejaan "Februari"
        Maret: 2,
        April: 3,
        Mei: 4,
        Juni: 5,
        Juli: 6,
        Agustus: 7,
        September: 8,
        Oktober: 9,
        November: 10,
        Desember: 11,
    };

    return new Date(Number(year), monthMap[monthName], Number(day));
};

export const sortByIndonesianDate = (rowA: any, rowB: any, key: string): number => {
    const dateA = parseIndonesianDate(rowA[key]);
    const dateB = parseIndonesianDate(rowB[key]);
    return dateA.getTime() - dateB.getTime();
};

export const sortByCost = (rowA: any, rowB: any): number => {
    return rowA.biaya - rowB.biaya;
};
