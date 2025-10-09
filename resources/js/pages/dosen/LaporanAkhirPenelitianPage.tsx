import DataLaporanAkhirPenelitian from '@/components/DataLaporanAkhirPenelitian';
import UploadLaporanAkhirPenelitian from '@/components/UploadLaporanAkhirPenelitian';
import DashLayout from '@/layouts/dash-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    // {
    //     title: 'Laporan Penelitian',
    //     href: '-',
    // },
    {
        title: 'Laporan Akhir',
        href: '/dosen/laporan-penelitian/laporan-akhir',
    },
];

export default function LaporanAkhirPenelitian() {
    const [activeTab, setActiveTab] = useState('upload');

    const tabs = [
        { id: 'upload', label: 'Upload Laporan Akhir Penelitian' },
        { id: 'data', label: 'Data Laporan Akhir' },
    ];

    return (
        <DashLayout breadcrumbs={breadcrumbs}>
            <Head title="ASIPP | Laporan Akhir Penelitian" />
            <div className="rounded-lg bg-white p-6 shadow">
                {/* Tab Bar */}
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
                <div className="rounded-b border bg-white p-4">
                    {activeTab === 'upload' && <UploadLaporanAkhirPenelitian></UploadLaporanAkhirPenelitian>}
                    {activeTab === 'data' && <DataLaporanAkhirPenelitian></DataLaporanAkhirPenelitian>}
                </div>
            </div>
        </DashLayout>
    );
}
