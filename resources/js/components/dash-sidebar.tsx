import { NavFooter } from '@/components/dash-nav-footer';
import { NavMain } from '@/components/dash-nav-main';
import { NavUser } from '@/components/dash-nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { DataUser, NavList, type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, ClipboardPen, Folder, LayoutGrid, ListTodoIcon, SquarePen, Upload, Users } from 'lucide-react';
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
            title: 'Upload Usulan',
            item: [
                { title: 'Usulan Penelitian', href: '/dosen/usulan-penelitian', icon: Upload },
                { title: 'Usulan Pengabmas', href: '/dosen/usulan-pengabmas', icon: Upload },
            ],
        },
        {
            title: 'LAPORAN',
            item: [
                { title: 'Laporan Penelitian', href: '/dosen/laporan-penelitian', icon: ClipboardPen },
                { title: 'Laporan Pengabmas', href: '/dosen/laporan-pengabmas', icon: ClipboardPen },
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

const footerNavItems: NavItem[] = [
    {
        title: 'Resource',
        href: '#',
        icon: Folder,
    },
    {
        title: 'Report',
        href: '/admin/report',
        icon: BookOpen,
    },
];

export function DashSidebar() {
    const { role } = usePage<DataUser>().props;
    console.log(role);

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
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
