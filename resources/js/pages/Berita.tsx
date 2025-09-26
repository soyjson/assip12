import { DataBerita } from '@/types';
import { usePage } from '@inertiajs/react';

export default function Berita() {
    const { gg } = usePage<DataBerita>().props;
    console.log(gg);
    return <div>Berita {gg}</div>;
}
