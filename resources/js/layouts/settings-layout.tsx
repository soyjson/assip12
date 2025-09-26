import { CategoryItem, type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';
import SettingsLayout from './settings/layout';

interface DashLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    search?: CategoryItem[];
}

export default function SettingsLayouts({ children, breadcrumbs, search, ...props }: DashLayoutProps) {
    return (
        <SettingsLayout breadcrumbs={breadcrumbs} search={search} {...props}>
            {children}
        </SettingsLayout>
    );
}
