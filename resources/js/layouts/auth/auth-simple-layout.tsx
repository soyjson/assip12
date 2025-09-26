import { Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    const goBack = (): void => {
        window.history.back();
    };

    return (
        <>
            <div className="relative hidden min-h-svh flex-col gap-10 bg-background p-10 select-none min-[320px]:flex md:max-2xl:p-6">
                <div className="static top-10 left-10 sm:max-2xl:absolute">
                    <button onClick={goBack} className="cursor-pointer rounded-full bg-transparent hover:opacity-70" title="Back">
                        <ArrowLeft />
                    </button>
                </div>
                <div className="mx-auto w-full sm:max-2xl:max-w-sm">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col items-start gap-y-4 md:max-2xl:items-center">
                            <Link href="/" className="hidden flex-col items-center gap-2 font-medium md:max-2xl:flex">
                                <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-md">
                                    {/* <AppLogoIcon className="size-9 fill-current text-[var(--foreground)] dark:text-white" /> */}
                                </div>
                                <span className="sr-only">{title}</span>
                            </Link>

                            <div className="mx-0 space-y-2 text-left md:max-2xl:text-center">
                                <h1 className="text-xl font-medium">{title}</h1>
                                <p className="text-sm text-muted-foreground">{description}</p>
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
            <div className="block min-h-screen w-full content-center justify-center p-10 antialiased blur-none select-none min-[320px]:hidden">
                <p className="text-center text-sm">No content available for small screen</p>
            </div>
        </>
    );
}
