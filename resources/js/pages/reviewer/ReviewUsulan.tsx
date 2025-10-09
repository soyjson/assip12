import DataReviewUsulanPenelitian from '@/components/DataReviewUsulanPenelitian';
import DataReviewUsulanPengabmas from '@/components/DataReviewUsulanPengabmas';
import DashLayout from '@/layouts/dash-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Review Usulan',
        href: '/review/usulan',
    },
];

export default function ReviewUsulan() {
    const [activeTab, setActiveTab] = useState('penelitian');

    const tabs = [
        { id: 'penelitian', label: 'Ploting Reviewer Penelitian' },
        { id: 'pengabmas', label: 'Ploting Reviewer Pengabdian Masyarakat' },
    ];

    return (
        <DashLayout breadcrumbs={breadcrumbs}>
            <Head title="ASIPP | Review Usulan" />
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
                    {activeTab === 'penelitian' && <DataReviewUsulanPenelitian></DataReviewUsulanPenelitian>}
                    {activeTab === 'pengabmas' && <DataReviewUsulanPengabmas></DataReviewUsulanPengabmas>}
                </div>
            </div>
        </DashLayout>
    );
}
