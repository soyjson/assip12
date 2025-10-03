import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { DataUser, NavList } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';
import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

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
                                {items.children ? (
                                    <SidebarMenu>
                                        <Collapsible defaultOpen className="group/collapsible">
                                            <SidebarMenuItem>
                                                <CollapsibleTrigger asChild>
                                                    <div className="flex items-center justify-between">
                                                        <SidebarMenuButton tooltip={{ children: items.title }}>
                                                            <>
                                                                {items.icon && <items.icon />}
                                                                <span>{items.title}</span>
                                                                <ChevronLeft className="ml-auto transition-transform group-data-[collapsible=icon]:pointer-events-none group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:select-none group-data-[state=open]/collapsible:-rotate-90"></ChevronLeft>
                                                            </>
                                                        </SidebarMenuButton>
                                                    </div>
                                                </CollapsibleTrigger>
                                                <CollapsibleContent>
                                                    <SidebarMenuSub>
                                                        {items.children.map((child, index) => (
                                                            <SidebarMenuSubItem key={index}>
                                                                <SidebarMenuButton
                                                                    asChild
                                                                    isActive={child.href === page.url}
                                                                    // tooltip={{ children: child.title }}
                                                                >
                                                                    <Link href={child.href} prefetch>
                                                                        {child.icon && <child.icon />}
                                                                        <span>{child.title}</span>
                                                                    </Link>
                                                                </SidebarMenuButton>
                                                            </SidebarMenuSubItem>
                                                        ))}
                                                    </SidebarMenuSub>
                                                </CollapsibleContent>
                                            </SidebarMenuItem>
                                        </Collapsible>
                                    </SidebarMenu>
                                ) : (
                                    <SidebarMenuButton asChild isActive={items.href === page.url} tooltip={{ children: items.title }}>
                                        <Link href={items.href} prefetch>
                                            {items.icon && <items.icon />}
                                            <span>{items.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                )}
                            </SidebarMenuItem>
                        ))}
                    </React.Fragment>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
