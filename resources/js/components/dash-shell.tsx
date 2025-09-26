import { SidebarProvider } from '@/components/ui/sidebar';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

interface AppShellProps {
    children: React.ReactNode;
    variant?: 'header' | 'sidebar';
}

export function DashShell({ children, variant = 'header' }: AppShellProps) {
    const isOpen = usePage<SharedData>().props.sidebarOpen;

    if (variant === 'header') {
        return <div className="flex min-h-screen w-full flex-col">{children}</div>;
    }

    return (
        <SidebarProvider defaultOpen={isOpen}>
            <div className="hidden h-screen w-full bg-[#f0f0f0] antialiased blur-none min-lg:flex dark:bg-[#0a0a0a]">{children}</div>
            <div className="block min-h-screen w-full content-center justify-center bg-[#f0f0f0] p-10 antialiased blur-none min-lg:hidden dark:bg-[#0a0a0a]">
                <p className="text-center text-sm text-black dark:text-white">Dashboard hanya dapat diakses dengan layar desktop.</p>
            </div>
        </SidebarProvider>
    );
}
