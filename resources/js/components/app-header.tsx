import { login } from '@/routes';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export default function AppHeader() {
    const { auth, role } = usePage<SharedData>().props;

    return (
        <header className="fixed z-50 flex w-full justify-center bg-[#FDFDFC]">
            <nav className="flex w-[95%] max-w-[1440px] items-center justify-between py-3">
                <div className="mx-0 flex cursor-pointer items-center select-none sm:mx-4" title="ASIPP">
                    <Link href="/">
                        <img src="" alt="ASIPP" />
                    </Link>
                </div>

                <div className="mx-0 flex gap-x-5 sm:mx-4">
                    <Link
                        href="/"
                        className="inline-block rounded-sm px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:underline dark:text-[#1b1b18]"
                    >
                        Beranda
                    </Link>
                    <Link
                        href="/berita"
                        className="inline-block rounded-sm px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:underline dark:text-[#1b1b18]"
                    >
                        Berita
                    </Link>
                    <Link
                        href="/halaman-unduh"
                        className="inline-block rounded-sm px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:underline dark:text-[#1b1b18]"
                    >
                        Unduh
                    </Link>

                    {auth.user ? (
                        <Link
                            href={`/${role}/dashboard`}
                            className="inline-block rounded-sm bg-[#1b1b18] px-5 py-1.5 text-sm leading-normal text-white hover:bg-[#191501b1] dark:bg-[#1b1b18] dark:text-white dark:hover:bg-[#191501b1]"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <div className="hidden items-center justify-end gap-4 min-lg:flex">
                            <Link
                                href={login()}
                                className="inline-block rounded-sm bg-[#1b1b18] px-5 py-1.5 text-sm leading-normal text-white hover:bg-[#191501b1] dark:bg-[#1b1b18] dark:text-white dark:hover:bg-[#191501b1]"
                            >
                                Masuk
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
