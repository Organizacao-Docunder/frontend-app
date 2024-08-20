'use client';
import { useQuill } from "react-quilljs";

import 'quill/dist/quill.snow.css';

export default function Page() {
    const { quillRef } = useQuill();

    return (
        <div className="w-screen h-screen bg-neutral-4">
            <div ref={quillRef}></div>
        </div>
    )
}