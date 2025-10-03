import DashLayout from '@/layouts/dash-layout';
import { dashboard } from '@/routes';
import { DataUser, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard Dosen',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    const { role } = usePage<DataUser>().props;

    console.log(role);

    return (
        <DashLayout breadcrumbs={breadcrumbs}>
            <Head title={`ASIPP | Dashboard ${role.toUpperCase()}`} />
        </DashLayout>
    );
}
