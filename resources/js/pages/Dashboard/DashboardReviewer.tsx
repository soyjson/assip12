import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import DashLayout from '@/layouts/dash-layout';
import { dashboardReviewer } from '@/routes';
import { BreadcrumbItem, DataUser } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const chartDataPenelitian = [
    { month: 'January', usulan: 34, usulan_diterima: 18 },
    { month: 'February', usulan: 30, usulan_diterima: 20 },
    { month: 'March', usulan: 23, usulan_diterima: 10 },
    { month: 'April', usulan: 21, usulan_diterima: 10 },
    { month: 'May', usulan: 11, usulan_diterima: 7 },
    { month: 'June', usulan: 14, usulan_diterima: 14 },
];

const chartDataPengabmas = [
    { month: 'January', usulan: 24, usulan_diterima: 18 },
    { month: 'February', usulan: 12, usulan_diterima: 5 },
    { month: 'March', usulan: 30, usulan_diterima: 27 },
    { month: 'April', usulan: 22, usulan_diterima: 21 },
    { month: 'May', usulan: 11, usulan_diterima: 11 },
    { month: 'June', usulan: 9, usulan_diterima: 5 },
];

const chartConfig = {
    penelitian: {
        label: 'penelitian',
        color: '#1b51f2',
    },
    pengabmas: {
        label: 'pengabmas',
        color: '#36a805',
    },
} satisfies ChartConfig;

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard Dosen',
        href: dashboardReviewer().url,
    },
];

export default function DashboardReviewer() {
    const [tabUsulan, setTabUsulan] = useState('penelitian');
    const [tabGrafik, setTabGrafik] = useState('penelitian');
    const { role } = usePage<DataUser>().props;

    const usulanPengabmas = [
        {
            judul: 'FORMULASI SEDIAAN MASKER GEL PEEL-OFF EKSTRAK BIJI SALAK PONDOK',
            penulis: 'Alfian Muhajirrrrrr',
            tanggal: '10 January 2022',
        },
        {
            judul: 'Hubungan Aktivitas Fisik dengan Fungsi Kognitif Pasien',
            penulis: 'Lia Amalia',
            tanggal: '15 December 2021',
        },
    ];

    const usulanPenelitian = [
        {
            judul: 'FORMULASI SEDIAAN MASKER GEL PEEL-OFF EKSTRAK BIJI SALAK PONDOK',
            penulis: 'Alfian Muhajir',
            tanggal: '10 January 2022',
        },
        {
            judul: 'Hubungan Aktivitas Fisik dengan Fungsi Kognitif Pasien',
            penulis: 'Lia Amalia',
            tanggal: '15 December 2021',
        },
    ];

    return (
        <DashLayout breadcrumbs={breadcrumbs}>
            <Head title={`ASIPP | Dashboard ${role.toUpperCase()}`} />
            <div className="space-y-6 p-4">
                {/* Cards */}
                {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    <div className="@container relative rounded-lg bg-cyan-500 p-4 text-white shadow">
                        <Bookmark className="absolute top-1/2 right-4 hidden h-25 w-25 -translate-y-1/2 text-slate-500 opacity-25 @xs:block" />
                        <h3 className="text-2xl font-bold">Usulan Penelitian</h3>
                        <ul className="mt-2 flex flex-col gap-2">
                            <li className="flex w-full justify-between @xs:w-6/10 @md:text-lg">
                                <span>Usulan pengajuan</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 font-bold">2</span>
                            </li>
                            <li className="flex w-full justify-between @xs:w-6/10 @md:text-lg">
                                <span>Usulan di tolak</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-red-500 font-bold">2</span>
                            </li>
                            <li className="flex w-full justify-between @xs:w-6/10 @md:text-lg">
                                <span>Usulan di terima</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-green-600 font-bold">26</span>
                            </li>
                        </ul>
                    </div>
                    <div className="@container relative flex flex-col justify-between rounded-lg bg-yellow-400 p-4 text-white shadow">
                        <Bookmark className="absolute top-1/2 right-4 hidden h-25 w-25 -translate-y-1/2 text-slate-500 opacity-25 @xs:block" />
                        <h3 className="text-2xl font-bold">Usulan Pengabmas</h3>
                        <ul className="mt-2 flex flex-col gap-2">
                            <li className="flex w-full justify-between @xs:w-6/10">
                                <span>Usulan pengajuan</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 font-bold">2</span>
                            </li>
                            <li className="flex w-full justify-between @xs:w-6/10 @md:text-lg">
                                <span>Usulan di tolak</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-red-500 font-bold">2</span>
                            </li>
                            <li className="flex w-full justify-between @xs:w-6/10 @md:text-lg">
                                <span>Usulan di terima</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-green-600 font-bold">26</span>
                            </li>
                        </ul>
                    </div>
                    <div className="@container relative flex flex-col gap-2 rounded-lg bg-green-500 p-4 text-white shadow">
                        <Check className="absolute top-1/2 right-4 hidden h-30 w-30 -translate-y-1/2 stroke-4 text-slate-500 opacity-25 @xs:block" />
                        <h3 className="font-semibold">Penelitian Selesai</h3>
                        <ul className="mt-2 flex flex-col gap-2">
                            <li className="flex w-full justify-between @xs:w-6/10">
                                <span>Penelitian selesai</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-black font-bold">19</span>
                            </li>
                        </ul>
                    </div>
                    <div className="@container relative flex flex-col gap-2 rounded-lg bg-green-500 p-4 text-white shadow">
                        <Check className="absolute top-1/2 right-4 hidden h-30 w-30 -translate-y-1/2 stroke-4 text-slate-500 opacity-25 @xs:block" />
                        <h3 className="font-semibold">Pengabmas Selesai</h3>
                        <ul className="mt-2 flex flex-col gap-2">
                            <li className="flex w-full justify-between @xs:w-6/10">
                                <span>Pengabmas selesai</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-black font-bold">19</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="rounded-lg border bg-white shadow">
                    <div className="flex items-center justify-between border-b p-3">
                        <h4 className="font-semibold">Usulan Baru</h4>
                        <div className="space-x-2">
                            <button
                                className={`rounded px-3 py-1 text-sm ${tabUsulan === 'penelitian' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                onClick={() => setTabUsulan('penelitian')}
                            >
                                Penelitian
                            </button>
                            <button
                                className={`rounded px-3 py-1 text-sm ${tabUsulan === 'pengabmas' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                onClick={() => setTabUsulan('pengabmas')}
                            >
                                Pengabmas
                            </button>
                        </div>
                    </div>
                    <div className="divide-y">
                        {tabUsulan == 'penelitian' &&
                            usulanPenelitian.map((item, idx) => (
                                <div key={idx} className="flex justify-between p-3">
                                    <div>
                                        <p className="font-medium">{item.judul}</p>
                                        <p className="text-sm text-gray-500">{item.penulis}</p>
                                    </div>
                                    <span className="text-sm text-gray-500">{item.tanggal}</span>
                                </div>
                            ))}
                        {tabUsulan == 'pengabmas' &&
                            usulanPengabmas.map((item, idx) => (
                                <div key={idx} className="flex justify-between p-3">
                                    <div>
                                        <p className="font-medium">{item.judul}</p>
                                        <p className="text-sm text-gray-500">{item.penulis}</p>
                                    </div>
                                    <span className="text-sm text-gray-500">{item.tanggal}</span>
                                </div>
                            ))}
                    </div>
                </div> */}

                {/* Grafik Section (tanpa chart) */}
                <div className="rounded-lg border bg-white shadow">
                    <div className="flex items-center justify-between border-b p-3">
                        <h4 className="font-semibold">Grafik Tahunan</h4>
                        <div className="space-x-2">
                            <button
                                className={`rounded px-3 py-1 text-sm ${tabGrafik === 'penelitian' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                onClick={() => setTabGrafik('penelitian')}
                            >
                                Usulan Penelitian
                            </button>
                            <button
                                className={`rounded px-3 py-1 text-sm ${tabGrafik === 'pengabmas' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                onClick={() => setTabGrafik('pengabmas')}
                            >
                                Usulan Pengabmas
                            </button>
                        </div>
                    </div>
                    {tabGrafik === 'penelitian' && (
                        <ChartContainer config={chartConfig} className="mt-5 max-h-120 w-full">
                            <BarChart data={chartDataPenelitian} accessibilityLayer>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <YAxis tickLine={false} axisLine={false} />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Bar dataKey="usulan" name="Usulan" fill="#1b51f2" radius={4} />
                                <Bar dataKey="usulan_diterima" name="Diterima" fill="#36a805" radius={4} />
                            </BarChart>
                        </ChartContainer>
                    )}
                    {tabGrafik === 'pengabmas' && (
                        <ChartContainer config={chartConfig} className="mt-5 max-h-120 w-full">
                            <BarChart data={chartDataPengabmas} accessibilityLayer>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <YAxis tickLine={false} axisLine={false} />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                {/* <ChartLegend content={<ChartLegendContent />} /> */}
                                <Bar dataKey="usulan" name="Usulan" fill="#1b51f2" radius={4} />
                                <Bar dataKey="usulan_diterima" name="Diterima" fill="#36a805" radius={4} />
                            </BarChart>
                        </ChartContainer>
                    )}
                </div>
            </div>
        </DashLayout>
    );
}
