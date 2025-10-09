import UsulanBaruPenelitian from '@/components/UsulanBaruPenelitian';
import UsulanDiterimaPenelitian from '@/components/UsulanDiterimaPenelitian';
import UsulanDitolakPenelitian from '@/components/UsulanDitolakPenelitian';
import DashLayout from '@/layouts/dash-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Konfirmasi Usulan',
        href: '/admin/konfirmasi-usulan',
    },
];
export default function KonfirmasiUsulanBaruPenelitianPage() {
    const [activeTab, setActiveTab] = useState('baru');

    const tabs = [
        { id: 'baru', label: 'Usulan Baru' },
        { id: 'terima', label: 'Usulan Diterima' },
        { id: 'tolak', label: 'Usulan Ditolak' },
    ];

    return (
        <DashLayout breadcrumbs={breadcrumbs}>
            <Head title="ASIPP | Review Usulan" />
            <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="text-xl font-bold">Konfirmasi Usulan Baru</h2>
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
                    {activeTab === 'baru' && <UsulanBaruPenelitian></UsulanBaruPenelitian>}
                    {activeTab === 'terima' && <UsulanDiterimaPenelitian></UsulanDiterimaPenelitian>}
                    {activeTab === 'tolak' && <UsulanDitolakPenelitian></UsulanDitolakPenelitian>}
                </div>
            </div>
        </DashLayout>
    );
}
