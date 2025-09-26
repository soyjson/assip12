import { NavFooter } from '@/components/dash-nav-footer';
import { NavMain } from '@/components/dash-nav-main';
import { NavUser } from '@/components/dash-nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, LayoutTemplate, TableProperties, WalletCards } from 'lucide-react';
import DashLogo from './dash-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/admin',
        icon: LayoutGrid,
    },
    {
        title: 'Category',
        href: '/admin/category',
        icon: TableProperties,
    },
    {
        title: 'Product',
        href: '/admin/product',
        icon: LayoutTemplate,
    },
    {
        title: 'Order',
        href: '/admin/order',
        icon: WalletCards,
    },
];

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
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
