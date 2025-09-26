import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { DataUser, NavList } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import React from 'react';

export function NavMain({ navlist = [] }: { navlist: NavList[] }) {
    const page = usePage<DataUser>();
    const { role } = page.props;
    return (
        <SidebarGroup className="flex flex-col gap-3 px-2 py-0">
            <SidebarGroupLabel>{role.toUpperCase()} PLATFORM</SidebarGroupLabel>
            <SidebarMenu className="flex flex-col gap-2">
                {navlist.map((item, index) => (
                    <React.Fragment key={index}>
                        <h2 className="text-xs font-bold group-data-[collapsible=icon]:pointer-events-none group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:select-none">
                            {item.title}
                        </h2>
                        {item.item.map((items, index) => (
                            <SidebarMenuItem key={index}>
                                <SidebarMenuButton asChild isActive={items.href === page.url} tooltip={{ children: items.title }}>
                                    <Link href={items.href} prefetch>
                                        {items.icon && <items.icon />}
                                        <span>{items.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </React.Fragment>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
