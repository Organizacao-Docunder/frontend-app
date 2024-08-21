'use client';
import { useQuill } from "react-quilljs";

import 'quill/dist/quill.snow.css';
import './styles.css';

export default function Page() {
    const { quillRef } = useQuill({ theme: 'snow' });

    return (
        <main id="container" className="w-screen h-screen bg-neutral-4">
            <div ref={quillRef}></div>
        </main>
    )
}