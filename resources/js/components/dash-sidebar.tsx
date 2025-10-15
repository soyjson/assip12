import { NavMain } from '@/components/dash-nav-main';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { DataUser, NavList } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import {
    Blocks,
    ClipboardPen,
    Download,
    FileCheck,
    Forward,
    LayoutGrid,
    ListTodoIcon,
    Mail,
    Mails,
    MessageCircleQuestion,
    Newspaper,
    ScrollText,
    SquarePen,
    Upload,
    Users,
    Wrench,
} from 'lucide-react';
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
        {
            title: 'DASHBOARD',
            item: [{ title: 'Dashboard', href: '/admin/dashboard', icon: LayoutGrid }],
        },
        // 2. DOSEN
        {
            title: 'DOSEN',
            item: [{ title: 'Data Dosen', href: '/admin/data-dosen', icon: Users }],
        },
        // 3. REVIEWER (Kategori Baru)
        {
            title: 'REVIEWER',
            item: [
                { title: 'Data Reviewer', href: '/admin/data-reviewer', icon: Users },
                {
                    title: 'Plot Reviewer',
                    href: '/admin/plot-reviewer',
                    icon: Forward,
                    children: [
                        { title: 'Plot Reviewer Usulan', href: '/admin/plot-reviewer/usulan', icon: Blocks },
                        { title: 'Plot Reviewer Kemajuan', href: '/admin/plot-reviewer/kemajuan', icon: Blocks },
                        { title: 'Plot Reviewer Akhir', href: '/admin/plot-reviewer/akhir', icon: Blocks },
                    ],
                },
                { title: 'Hasil Review', href: '/admin/hasil-review', icon: ListTodoIcon },
            ],
        },
        // 4. LAPORAN (Kategori Baru)
        {
            title: 'LAPORAN',
            item: [
                {
                    title: 'Laporan Penelitian',
                    href: '/admin/laporan-penelitian',
                    icon: ClipboardPen,
                    children: [
                        { title: 'Konfirmasi Usulan Baru', href: '/admin/laporan-penelitian/konfirmasi-usulan', icon: FileCheck },
                        { title: 'Konfirmasi Laporan Kemajuan', href: '/admin/laporan-penelitian/konfirmasi-kemajuan', icon: FileCheck },
                        { title: 'Konfirmasi Laporan Akhir', href: '/admin/laporan-penelitian/konfirmasi-akhir', icon: FileCheck },
                    ],
                },
                {
                    title: 'Laporan Pengabmas',
                    href: '/admin/laporan-pengabmas',
                    icon: FileCheck,
                    children: [
                        { title: 'Konfirmasi Usulan Baru', href: '/admin/laporan-pengabmas/konfirmasi-usulan', icon: FileCheck },
                        { title: 'Konfirmasi Laporan Kemajuan', href: '/admin/laporan-pengabmas/konfirmasi-kemajuan', icon: FileCheck },
                        { title: 'Konfirmasi Laporan Akhir', href: '/admin/laporan-pengabmas/konfirmasi-akhir', icon: FileCheck },
                    ],
                },
                {
                    title: 'Surat Tugas',
                    href: '/admin/surat-tugas',
                    icon: Mails,
                    children: [
                        { title: 'Surat Tugas Penelitian', href: '/admin/surat-tugas/penelitian', icon: Mail },
                        { title: 'Surat Tugas Pengabmas', href: '/admin/surat-tugas/pengabmas', icon: Mail },
                    ],
                },
            ],
        },
        {
            title: 'PENGATURAN',
            item: [
                {
                    title: 'Data Users',
                    href: '/admin/data-users',
                    icon: ClipboardPen,
                },
                {
                    title: 'Pengaturan',
                    href: '/admin/pengaturan',
                    icon: Wrench,
                },
                {
                    title: 'Berita',
                    href: '/admin/berita',
                    icon: Newspaper,
                },
                {
                    title: 'Bantuan',
                    href: '/admin/bantuan',
                    icon: MessageCircleQuestion,
                },
                {
                    title: 'Unduhan',
                    href: '/admin/unduhan',
                    icon: Download,
                },
                {
                    title: 'Log Akses',
                    href: '/admin/log-akses',
                    icon: ScrollText,
                },
            ],
        },
    ],
    // Area ini untuk role REVIEWER
    reviewer: [
        {
            title: 'DASHBOARD',
            item: [
                { title: 'Dashboard', href: '/reviewer/dashboard', icon: LayoutGrid },
                { title: 'Review Usulan', href: '/reviewer/usulan', icon: Forward },
                { title: 'Review Laporan Kemajuan', href: '/reviewer/laporan-kemajuan', icon: Forward },
                { title: 'Review Laporan Akhir', href: '/reviewer/laporan-akhir', icon: Forward },
            ],
        },
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
