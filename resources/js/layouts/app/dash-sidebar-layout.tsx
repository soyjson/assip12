import { DashContent } from '@/components/dash-content';
import { DashShell } from '@/components/dash-shell';
import { DashSidebar } from '@/components/dash-sidebar';
import { DashSidebarHeader } from '@/components/dash-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function DashSidebarLayout({ children, breadcrumbs = [] }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <DashShell variant="sidebar">
            <DashSidebar />
            <DashContent>
                <DashSidebarHeader breadcrumbs={breadcrumbs} />
                {children}
            </DashContent>
        </DashShell>
    );
}
