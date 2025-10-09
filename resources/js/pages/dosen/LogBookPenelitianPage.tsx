import InputLogbook from '@/components/InputLogbook';
import LogbookPenelitian from '@/components/LogbookPenelitian';
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
        title: 'Logbook Penelitian',
        href: '/dosen/logbook-penelitian',
    },
];

export default function LogBookPenelitian() {
    const [activeTab, setActiveTab] = useState('input');

    const tabs = [
        { id: 'input', label: 'Input Logbook' },
        { id: 'logbook', label: 'Logbook' },
    ];

    return (
        <DashLayout breadcrumbs={breadcrumbs}>
            <Head title="ASIPP | Logbook Penelitian" />
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
                    {activeTab === 'input' && <InputLogbook title="Penelitian"></InputLogbook>}
                    {activeTab === 'logbook' && <LogbookPenelitian></LogbookPenelitian>}
                    {/* {activeTab === 'logbook' && <FormSuratTugasPenelitian></FormSuratTugasPenelitian>} */}
                    {/* {activeTab === 'logbook' && <DataSuratTugas title="penelitian"></DataSuratTugas>} */}
                </div>
            </div>
        </DashLayout>
    );
}
