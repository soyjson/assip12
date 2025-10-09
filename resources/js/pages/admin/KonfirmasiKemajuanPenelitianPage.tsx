// import KemajuanBaruPenelitian from '@/components/KemajuanBaruPenelitian';
// import KemajuanDiterimaPenelitian from '@/components/KemajuanDiterimaPenelitian';
// import KemajuanDitolakPenelitian from '@/components/KemajuanDitolakPenelitian';
import DashLayout from '@/layouts/dash-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Konfirmasi Kemajuan',
        href: '/admin/konfirmasi-Kemajuan',
    },
];
export default function KonfirmasiKemajuanPenelitianPage() {
    const [activeTab, setActiveTab] = useState('update');

    const tabs = [
        { id: 'update', label: 'Update Laporan Kemajuan' },
        { id: 'baca', label: 'Laporan telah di Baca' },
    ];

    return (
        <DashLayout breadcrumbs={breadcrumbs}>
            <Head title="ASIPP | Review Kemajuan" />
            <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="text-xl font-bold">Konfirmasi Kemajuan Penelitian</h2>
                {/* <Separator /> */}
                <div className="flex border-b">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 px-4 py-2 text-center font-medium transition ${
                                activeTab === tab.id ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600 hover:text-blue-500'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Isi Tab */}
                <div className="rounded-b border bg-white px-4 py-0">
                    {/* {activeTab === 'update' && <KemajuanBaruPenelitian></KemajuanBaruPenelitian>}
                    {activeTab === 'baca' && <KemajuanDiterimaPenelitian></KemajuanDiterimaPenelitian>} */}
                </div>
            </div>
        </DashLayout>
    );
}
