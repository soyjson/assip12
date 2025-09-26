import { Breadcrumbs } from '@/components/breadcrumbs';
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import Profile from '@/pages/profile';
import { BreadcrumbItem, CategoryItem, type NavItem } from '@/types';
import { Link, router } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';
import { type PropsWithChildren } from 'react';

const sidebarNavItems: NavItem[] = [
    {
        title: 'Profile',
        href: '/settings/profile',
        icon: null,
    },
    {
        title: 'Password',
        href: '/settings/password',
        icon: null,
    },
    {
        title: 'Appearance',
        href: '/settings/appearance',
        icon: null,
    },
];

export default function SettingsLayout({
    children,
    breadcrumbs = [],
    search = [],
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[]; search?: CategoryItem[] }>) {
    // When server-side rendering, we only render the layout on the client...
    if (typeof window === 'undefined') {
        return null;
    }

    const currentPath = window.location.pathname;

    const goBack = () => {
        router.get('/customer');
    };

    return (
        <Profile search={search}>
            <div className="flex flex-col gap-5">
                <div className="border-sidebar-border/50 -mt-2 flex h-14 shrink-0 items-center border-b px-6 transition-[width,height] ease-linear md:px-4">
                    <div className="flex items-center gap-2">
                        <button className="-ml-1 cursor-pointer hover:opacity-70 active:opacity-70" onClick={goBack} title="Back">
                            <ChevronLeft />
                        </button>
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </div>
                </div>

                <div>
                    <Heading title="Settings" description="Manage your profile and account settings" />

                    <div className="mx-auto flex flex-col space-y-0 lg:flex-row lg:space-x-12">
                        <aside className="w-full lg:w-48">
                            <nav className="flex flex-row gap-2 lg:max-2xl:flex-col lg:max-2xl:gap-1">
                                {sidebarNavItems.map((item, index) => (
                                    <Button
                                        key={`${item.href}-${index}`}
                                        size="sm"
                                        variant="ghost"
                                        asChild
                                        className={cn('w-full justify-center lg:justify-start', {
                                            'bg-muted': currentPath === item.href,
                                        })}
                                    >
                                        <Link href={item.href} prefetch className="text-center lg:text-left">
                                            {item.title}
                                        </Link>
                                    </Button>
                                ))}
                            </nav>
                        </aside>

                        <Separator className="my-6 lg:hidden" />

                        <div className="w-full flex-1">
                            <section className="w-full max-w-md space-y-12">{children}</section>
                        </div>
                    </div>
                </div>
            </div>
        </Profile>
    );
}
