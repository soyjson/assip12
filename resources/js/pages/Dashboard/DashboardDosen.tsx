import DashLayout from '@/layouts/dash-layout';
import { dashboardDosen } from '@/routes';
import { BreadcrumbItem, DataUser } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard Dosen',
        href: dashboardDosen().url,
    },
];

export default function DashboardDosen() {
    const { role } = usePage<DataUser>().props;

    return (
        <DashLayout breadcrumbs={breadcrumbs}>
            <Head title={`ASIPP | Dashboard ${role.toUpperCase()}`} />

            <div className="p-6">
                <div className="grid grid-cols-2 gap-6">
                    {/* Data Penelitian */}
                    <div className="relative rounded-lg border bg-white p-4 shadow">
                        {/* Header Badge */}
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded bg-black px-4 py-1 text-white shadow">Data Penelitian</div>

                        {/* Isi Card */}
                        <h2 className="mt-4 text-lg font-semibold">Penelitian</h2>
                        <p className="text-sm text-gray-600">Penelitian selesai : 0</p>
                    </div>

                    {/* Data Pengabdian Masyarakat */}
                    <div className="relative rounded-lg border bg-white p-4 shadow">
                        {/* Header Badge */}
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded bg-black px-4 py-1 text-white shadow">
                            Data Pengabdian Masyarakat
                        </div>

                        {/* Isi Card */}
                        <h2 className="mt-4 text-lg font-semibold">Pengabdian Masyarakat</h2>
                        <p className="text-sm text-gray-600">pengabmas selesai : 0</p>
                    </div>
                </div>
            </div>
        </DashLayout>
    );
}
