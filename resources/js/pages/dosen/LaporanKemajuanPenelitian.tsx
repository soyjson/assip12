import DataLaporanKemajuanPenelitian from '@/components/DataLaporanKemajuanPenelitian';
import UploadLaporanKemajuanPenelitian from '@/components/UploadLaporanKemajuanPenelitian';
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
        title: 'Laporan Kemajuan',
        href: '/dosen/laporan-penelitian/laporan-kemajuan',
    },
];

export default function LaporanKemajuanPenelitian() {
    const [activeTab, setActiveTab] = useState('upload');

    const tabs = [
        { id: 'upload', label: 'Upload Laporan Kemajuan Penelitian' },
        { id: 'data', label: 'Data Laporan Kemajuan' },
    ];
    return (
        <DashLayout breadcrumbs={breadcrumbs}>
            <Head title="ASIPP | Laporan Kemajuan Penelitian" />
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
                    {activeTab === 'upload' && <UploadLaporanKemajuanPenelitian></UploadLaporanKemajuanPenelitian>}
                    {activeTab === 'data' && <DataLaporanKemajuanPenelitian></DataLaporanKemajuanPenelitian>}
                </div>
            </div>
        </DashLayout>
    );
}
