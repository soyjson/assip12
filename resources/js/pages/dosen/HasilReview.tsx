import TableHasilReview from '@/components/TableHasilReview';
import DashLayout from '@/layouts/dash-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Hasil Review',
        href: '/dosen/hasil-review',
    },
];

export default function HasilReview() {
    return (
        <DashLayout breadcrumbs={breadcrumbs}>
            <Head title="ASIPP | Hasil Review" />
            <div className="rounded-lg bg-white p-6 shadow">
                {/* <h2 className="text-xl font-bold">Hasil Review</h2> */}
                <TableHasilReview></TableHasilReview>
            </div>
        </DashLayout>
    );
}
