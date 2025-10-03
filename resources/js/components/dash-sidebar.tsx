import { NavMain } from '@/components/dash-nav-main';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { DataUser, NavList } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ClipboardPen, LayoutGrid, ListTodoIcon, SquarePen, Upload, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import DashLogo from './dash-logo';

const allNavItems: { [key: string]: NavList[] } = {
    // Navigasi untuk role DOSEN
    dosen: [
        {
            title: 'DASHBOARD',
            item: [{ title: 'Dashboard', href: '/dosen/dashboard', icon: LayoutGrid }],
        },
        {
            title: 'DOSEN',
            item: [{ title: 'Data Dosen', href: '/dosen/data-dosen', icon: Users }],
        },
        {
            title: 'UPLOAD USULAN',
            item: [
                { title: 'Usulan Penelitian', href: '/dosen/usulan-penelitian', icon: Upload },
                { title: 'Usulan Pengabmas', href: '/dosen/usulan-pengabmas', icon: Upload },
            ],
        },
        {
            title: 'LAPORAN',
            item: [
                {
                    title: 'Laporan Penelitian',
                    href: '/dosen/laporan-penelitian',
                    icon: ClipboardPen,
                    children: [
                        { title: 'Laporan Kemajuan', href: '/dosen/laporan-penelitian/laporan-kemajuan', icon: Upload },
                        { title: 'Laporan Akhir', href: '/dosen/laporan-penelitian/laporan-akhir', icon: Upload },
                    ],
                },
                {
                    title: 'Laporan Pengabmas',
                    href: '/dosen/laporan-pengabmas',
                    icon: ClipboardPen,
                    children: [
                        { title: 'Laporan Kemajuan', href: '/dosen/laporan-pengabmas/laporan-kemajuan', icon: Upload },
                        { title: 'Laporan Akhir', href: '/dosen/laporan-pengabmas/laporan-akhir', icon: Upload },
                    ],
                },
                { title: 'Hasil Review', href: '/dosen/review', icon: ListTodoIcon },
            ],
        },
        {
            title: 'LOGBOOK',
            item: [
                { title: 'Logbook Penelitian', href: '/dosen/logbook-penelitian', icon: SquarePen },
                { title: 'Logbook Pengabmas', href: '/dosen/logbook-pengabmas', icon: SquarePen },
            ],
        },
    ],

    // Area ini untuk role OPERATOR, berdasarkan hak akses di panduan ASIPP
    operator: [
        //TODO
        // ... (Isi item navigasi Operator di sini)
    ],
    // Area ini untuk role ADMIN, berdasarkan hak akses di panduan ASIPP
    admin: [
        //TODO
        // ... (Isi item navigasi Admin di sini)
    ],
    // Area ini untuk role REVIEWER
    reviewer: [
        //TODO
        // ... (Isi item navigasi Reviewer di sini)
    ],
};

export function DashSidebar() {
    const { role } = usePage<DataUser>().props;
    console.log(role);

    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 60_000);

        return () => clearInterval(timer);
    }, []);

    const formatted = now.toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const display = formatted.charAt(0).toUpperCase() + formatted.slice(1);

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/admin" prefetch>
                                <DashLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain navlist={allNavItems[role]} />
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                {/* <NavUser /> */}
                <div className="hidden rounded-lg bg-slate-100 p-3 text-center text-sm font-normal shadow group-data-[collapsible=icon]:pointer-events-none group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:select-none md:block">
                    {display}
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}
