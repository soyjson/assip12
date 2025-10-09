import DataPengabmas from '@/components/DataPengabmas';
import TabUsulanPengabmas from '@/components/TabUsulanPengabmas';
import DashLayout from '@/layouts/dash-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Download } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Usulan Pengabmas',
        href: '/dosen/usulan-pengabmas',
    },
];

export default function UsulanPengabmas() {
    const [activeTab, setActiveTab] = useState('usulan');

    const tabs = [
        { id: 'usulan', label: 'Usulan Pengabmas' },
        { id: 'data', label: 'Data Usulan Pengabmas' },
        { id: 'download', label: 'Download Format Usulan' },
    ];
    return (
        <DashLayout breadcrumbs={breadcrumbs}>
            <Head title="ASIPP | Usulan Pengabmas" />
            <div className="rounded-lg bg-white p-6 shadow">
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
                    {activeTab === 'usulan' && <TabUsulanPengabmas></TabUsulanPengabmas>}
                    {activeTab === 'data' && <DataPengabmas></DataPengabmas>}
                    {activeTab === 'download' && (
                        <div className="flex gap-4 p-4">
                            <a download={true} href="" className="flex gap-4 bg-blue-500 p-4 text-white">
                                <Download></Download>
                                <p>Unduh Format Usulan Penelitian</p>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </DashLayout>
    );
}
