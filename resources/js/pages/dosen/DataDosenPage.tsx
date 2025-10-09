import { Breadcrumbs } from '@/components/breadcrumbs';
import DashLayout from '@/layouts/dash-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: '/dosen/dashboard',
    },
    {
        title: 'Dosen',
        href: '/dosen/data-dosen',
    },
];

export default function DataDosen() {
    const { nik, fakultas, intitusi, jabatan, nidn, programStudi } = {
        nik: 123,
        nidn: 123,
        jabatan: 'test',
        intitusi: 'intitusi',
        fakultas: 'fakultas',
        programStudi: 'programStudi',
    };
    // const breadcrumbs: BreadcrumbItem[] = [
    //     { href: '/dosen', title: 'Home' },
    //     { href: '/dosen/data-dosen', title: 'Data Dosen' },
    // ];
    return (
        <DashLayout breadcrumbs={breadcrumbs}>
            <Head title={`ASIPP | Data Dosen`} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex justify-between">
                    <h1 className="text-xl font-semibold md:text-2xl">Dosen</h1>
                    <Breadcrumbs breadcrumbs={breadcrumbs}></Breadcrumbs>
                </div>
                <div className="bg-white">
                    <div className="px-6 py-3">
                        <p>Adminitrator</p>
                        <p>NIK: {nik} </p>
                        <p>NIDN: {nidn} </p>
                        <p>Jabatan Fungsional: {jabatan} </p>
                        <p>Intitusi: {intitusi} </p>
                        <p>Fakultas: {fakultas} </p>
                        <p>Program Studi: {programStudi} </p>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-2 gap-6">
                            {/* Data Penelitian */}
                            <div className="relative rounded-lg border bg-white p-4 shadow">
                                {/* Header Badge */}
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded bg-black px-4 py-1 text-white shadow">
                                    Data Penelitian
                                </div>

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
                </div>
                {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div> */}
            </div>
        </DashLayout>
    );
}
