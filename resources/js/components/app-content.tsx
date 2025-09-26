import * as React from 'react';

interface AppContentProps {
    children: React.ReactNode;
}

export function AppContent({ children }: AppContentProps) {
    return <main className="h-full w-full antialiased">{children}</main>;
}
