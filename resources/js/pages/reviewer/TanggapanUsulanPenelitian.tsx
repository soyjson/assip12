import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import DashLayout from '@/layouts/dash-layout';
import {
    BlockTypeSelect,
    BoldItalicUnderlineToggles,
    headingsPlugin,
    linkDialogPlugin,
    listsPlugin,
    ListsToggle,
    MDXEditor,
    MDXEditorMethods,
    toolbarPlugin,
    UndoRedo,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import { useRef } from 'react';

export default function TanggapanUsulanPenelitian() {
    const editorRef = useRef<MDXEditorMethods>(null);

    return (
        <DashLayout>
            <h2>Tanggapan Penelitian</h2>
            <Card>
                <CardContent>
                    <div className="flex">
                        <h2>Judul Penelitian *</h2>
                        <textarea disabled>Hubungan Aktivitas Fisik Dengan Fungsi Kognitif Pasien</textarea>
                    </div>
                    <form>
                        <h2>PENILAIAN</h2>
                        <div>
                            <Label htmlFor="">Ketajaman Perumusan Masalah & Tujuan Penelitian</Label>
                            <Input type="number" min={1} max={7}></Input>
                        </div>
                        <div>
                            <Label>Pengembangan IPTEKS, Pembangunan, dan atau Pengembangan Kelembagaan serta luaran penelitian serta IKUP</Label>
                            <Input type="number" min={1} max={7}></Input>
                        </div>
                        <div>
                            <Label>Relevansi, Kemuktahiran jurnal Ilmiah dan Penyusunan Daftar Pustaka</Label>
                            <Input type="number" min={1} max={7}></Input>
                        </div>
                        <div>
                            <Label>Ketetapan Metode yang digunakan</Label>
                            <Input type="number" min={1} max={7}></Input>
                        </div>
                        <div>
                            <Label>Kesesuaian jadwal, Kesesuaian keahlian personalia & kewajiban biaya</Label>
                            <Input type="number" min={1} max={7}></Input>
                        </div>
                        <p className="font-bold">Setiap kriteria diberi skor: 1,2,3,4,5,6,7</p>

                        <div>
                            <Label className="block font-medium">Catatan Penilaian</Label>
                            {/* <ReactQuill theme="snow" value={formData.catatan} onChange={handleEditorChange} className="bg-white" /> */}
                            {/* <textarea id="ckeditor"></textarea> */}
                            <div className="rounded border">
                                <MDXEditor
                                    ref={editorRef}
                                    markdown={formData.catatan}
                                    onChange={handleEditorChange}
                                    contentEditableClassName="prose p-2 min-h-[150px] border rounded"
                                    plugins={[
                                        listsPlugin(),
                                        headingsPlugin(),
                                        linkDialogPlugin(),
                                        toolbarPlugin({
                                            toolbarContents: () => (
                                                <>
                                                    <UndoRedo />
                                                    <BoldItalicUnderlineToggles />
                                                    <BlockTypeSelect />
                                                    <ListsToggle />
                                                </>
                                            ),
                                        }),
                                    ]}
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </DashLayout>
    );
}
