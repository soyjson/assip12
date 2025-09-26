import Instagram from './icons/instagram';
import TikTok from './icons/tiktok';

const date = new Date();
const year = date.getFullYear();

export default function AppFooter() {
    return (
        <footer>
            <div className="flex w-full justify-center bg-[#f0f0f0] pt-3 text-[#1b1b18] select-none dark:bg-[#0a0a0a] dark:text-white">
                <div className="w-[95%] max-w-[1440px] rounded-t-3xl bg-[#d9d9d9] dark:bg-[#000000]">
                    <div className="mx-auto mt-10 mb-20 flex w-full justify-center gap-5 p-10 lg:max-2xl:mt-0 lg:max-2xl:justify-end">
                        <a
                            title="Tiktok"
                            href="https://www.tiktok.com/@anomalitopup"
                            target="_blank"
                            className="group rounded-full border border-[#303030] p-2 hover:border-white/0 dark:border-[#d9d9d9] dark:hover:border-black/0"
                        >
                            <TikTok height={20} width={'auto'} className="h-6 w-6 text-[#303030] group-hover:scale-110 dark:text-[#d9d9d9]" />
                        </a>
                        <a
                            title="Instagram"
                            href="https://www.instagram.com/anomalitopup.store/"
                            target="_blank"
                            className="group rounded-full border border-[#303030] p-2 hover:border-white/0 dark:border-[#d9d9d9] dark:hover:border-black/0"
                        >
                            <Instagram height={20} width={20} className="h-6 w-6 text-[#303030] group-hover:scale-110 dark:text-[#d9d9d9]" />
                        </a>
                    </div>

                    <div className="font-montserrat mx-auto my-10 block w-[70%] justify-items-center text-xs font-normal lg:max-2xl:justify-items-start">
                        <p className="text-[#303030] dark:text-[#d9d9d9]">
                            {' '}
                            Copyright &copy; <span id="copyright">{year}</span> <a href="/">Tugas Project Kelompok</a>{' '}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
