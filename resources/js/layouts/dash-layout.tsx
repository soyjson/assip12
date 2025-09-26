import DashSidebarLayout from '@/layouts/app/dash-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface DashLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function DashLayout({ children, breadcrumbs, ...props }: DashLayoutProps) {
    return (
        <DashSidebarLayout breadcrumbs={breadcrumbs} {...props}>
            {children}
        </DashSidebarLayout>
    );
}
