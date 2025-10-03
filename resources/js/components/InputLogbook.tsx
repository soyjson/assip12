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
import { useRef, useState } from 'react';

export default function InputLogbook({ title }: { title: string }) {
    const editorRef = useRef<MDXEditorMethods>(null); // akses ke editor
    const [formData, setFormData] = useState({
        judulPenelitian: '',
        judulKegiatan: '',
        jenisKegiatan: '',
        tanggalKegiatan: '',
        catatan: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEditorChange = (value) => {
        console.log(formData.catatan);
        setFormData({ ...formData, catatan: value });
    };

    const insertTemplate = () => {
        if (editorRef.current) {
            editorRef.current.insertMarkdown('\n\n## Template Catatan\nIsi catatan kegiatan di sini...');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        // TODO: kirim ke backend via fetch/axios
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-4 rounded p-4 shadow">
            {/* Judul Penelitian */}
            <div>
                <label className="block font-medium">Judul {title}*</label>
                <select
                    name="judulPenelitian"
                    value={formData.judulPenelitian}
                    onChange={handleChange}
                    className="w-full rounded border p-2"
                    required
                >
                    <option value="">- Pilih -</option>
                    <option value="Penelitian A">Penelitian A</option>
                    <option value="Penelitian B">Penelitian B</option>
                </select>
            </div>

            {/* Judul Kegiatan */}
            <div>
                <label className="block font-medium">Judul Kegiatan*</label>
                <input
                    type="text"
                    name="judulKegiatan"
                    value={formData.judulKegiatan}
                    onChange={handleChange}
                    className="w-full rounded border p-2"
                    required
                />
            </div>

            {/* Jenis Kegiatan */}
            <div>
                <label className="block font-medium">Jenis Kegiatan*</label>
                <input
                    type="text"
                    name="jenisKegiatan"
                    value={formData.jenisKegiatan}
                    onChange={handleChange}
                    className="w-full rounded border p-2"
                    required
                />
            </div>

            {/* Tanggal Kegiatan */}
            <div>
                <label className="block font-medium">Tanggal Kegiatan*</label>
                <input
                    type="date"
                    name="tanggalKegiatan"
                    value={formData.tanggalKegiatan}
                    onChange={handleChange}
                    className="w-full rounded border p-2"
                    required
                />
            </div>

            {/* Catatan */}
            <div>
                <label className="block font-medium">Catatan*</label>
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

            {/* Button */}
            <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Simpan
            </button>
        </form>
    );
}
