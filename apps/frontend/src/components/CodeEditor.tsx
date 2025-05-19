import React, {useState, useRef, useEffect} from "react";
import * as monaco from 'monaco-editor';

type CodeEditorPropsT = {
    code: string;
};
const CodeEditor = (props: CodeEditorPropsT) => {
    const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
    const monacoEl = useRef(null);
    
    self.MonacoEnvironment = {
        getWorkerUrl: function (_moduleId, label) {
            switch (label) {
                case 'json':
                    return '/json.worker.bundle.js';
                case 'css':
                case 'scss':
                case 'less':
                    return '/css.worker.bundle.js';
                case 'html':
                case 'handlebars':
                case 'razor':
                    return '/html.worker.bundle.js';
                case 'typescript':
                case 'javascript':
                    return '/ts.worker.bundle.js';
                default:
                    return '/editor.worker.bundle.js';
            }
        }
    };    

    useEffect(() => {
        if(monacoEl) {
            console.log(props.code);
            
            setEditor(editor => {
                if(editor) return editor;
                return monaco.editor.create(monacoEl.current!, {
                    value: props.code,
                    language: 'javascript',
                    theme: "default"
                })
            })
        }

        return () => editor?.dispose();
    }, [monacoEl.current]);

    useEffect(() => {
        editor?.setValue(props?.code || "");
    }, [props.code]);

    return <div id="editor" className="Editor" ref={monacoEl}></div>
}

export default CodeEditor;