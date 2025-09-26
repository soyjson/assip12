import { AppContent } from '@/components/app-content';
import AppHeader from '@/components/app-header';
import { AppShell } from '@/components/app-shell';
import { PropsWithChildren } from 'react';

export default function AppLayoutTemplate({ children }: PropsWithChildren) {
    return (
        <AppShell>
            <AppHeader />
            <AppContent>{children}</AppContent>
            {/* <AppFooter /> */}
        </AppShell>
    );
}
