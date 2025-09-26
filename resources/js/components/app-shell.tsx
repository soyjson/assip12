interface AppShellProps {
    children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
    return (
        <>
            <div className="hidden min-h-screen w-full antialiased blur-none select-none min-[320px]:block">{children}</div>
            <div className="block min-h-screen w-full content-center justify-center p-10 antialiased blur-none select-none min-[320px]:hidden">
                <p className="text-center text-sm">No content available for small screen</p>
            </div>
        </>
    );
}
