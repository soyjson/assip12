import React from 'react';

import { useForm } from '@inertiajs/react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export default function AturPlotingAkhirForm({ title }: { title: string }) {
    const {
        data,
        setData,
        // post,
        processing,
        errors,
        //  reset
    } = useForm({
        judul: '',
        reviewer1: '',
        reviewer2: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(data);

        switch (title) {
            case 'Penelitian':
                // post(route("assign-reviewer.store"), {
                //   onSuccess: () => {
                //     reset();
                //   },
                // });
                console.log('penelitian akhir');
                break;

            case 'Pengabmas':
                console.log('pengabmas akhir');
                // post(route("assign-reviewer.store"), {
                //   onSuccess: () => {
                //     reset();
                //   },
                // });

                break;
            default:
                break;
        }
    };
    // dummy data
    const penulisOptions = [
        { value: 'p1', label: 'Ir. Soekarno' },
        { value: 'p2', label: 'Dr. Moh Hatta' },
    ];

    const reviewerOptions = [
        { value: 'r1', label: 'Dr. Budi Santoso' },
        { value: 'r2', label: 'Dr. Andi Wijaya' },
        { value: 'r3', label: 'Prof. Rina Kurnia' },
    ];

    return (
        <>
            <h2 className="text-xl font-semibold">Atur Ploting Reviewer {title}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Judul Penelitian */}
                <div className="flex items-center">
                    <Label className="w-40 font-semibold">Nama Penulis*</Label>
                    <Select value={data.judul} onValueChange={(value) => setData('judul', value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="- Pilih -" />
                        </SelectTrigger>
                        <SelectContent>
                            {penulisOptions.map((item) => (
                                <SelectItem key={item.label} value={String(item.value)}>
                                    {item.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.judul && <p className="text-sm text-red-500">{errors.judul}</p>}
                </div>

                {/* Reviewer 1 */}
                <div className="flex items-center">
                    <Label className="w-40 font-semibold">Reviewer 1</Label>
                    <Select value={data.reviewer1} onValueChange={(value) => setData('reviewer1', value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="- Pilih -" />
                        </SelectTrigger>
                        <SelectContent>
                            {reviewerOptions.map((item) => (
                                <SelectItem key={item.value} value={item.value}>
                                    {item.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.reviewer1 && <p className="text-sm text-red-500">{errors.reviewer1}</p>}
                </div>

                {/* Reviewer 2 */}
                <div className="flex items-center">
                    <Label className="w-40 font-semibold">Reviewer 2</Label>
                    <Select value={data.reviewer2} onValueChange={(value) => setData('reviewer2', value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="- Pilih -" />
                        </SelectTrigger>
                        <SelectContent>
                            {reviewerOptions.map((item) => (
                                <SelectItem key={item.value} value={item.value}>
                                    {item.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.reviewer2 && <p className="text-sm text-red-500">{errors.reviewer2}</p>}
                </div>

                <Button type="submit" className="cursor-pointer bg-blue-600 hover:bg-blue-700" disabled={processing}>
                    {processing ? 'Menyimpan...' : 'Simpan'}
                </Button>
            </form>
        </>
    );
}
