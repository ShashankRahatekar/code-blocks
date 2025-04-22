import React, { useEffect, useReducer, useRef, useState } from "react";
import {useParams} from 'react-router-dom';
import ProblemService from '@services/problemsServices';
import * as monaco from 'monaco-editor'
// import styles from 'monaco-editor/'

type ParamsT = {
    problemId: string
};

const ProblemDetailsPage = (props: any): React.JSX.Element => {
    const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
    const params = useParams<ParamsT>();
    const monacoEl = useRef(null);
    console.log(params);

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
            setEditor(editor => {
                if(editor) return editor;
                return monaco.editor.create(monacoEl.current!, {
                    value: 'function hello() {console.log("hello");}',
                    language: 'javascript',
                    theme: "default"
                })
            })
        }
    }, [monacoEl.current]);

    useEffect(() => {
        async function getProductDetails(): Promise<void> {
            if(params.problemId) {
                const problem = await ProblemService.getProblem(params.problemId);
                console.log({problem});
            }
        }
        getProductDetails();
    }, [params]);
    
    return <div className="grid grid-cols-2 gap-4">
        <div> This is problem statement </div>
        <div> 
            <div id="editor" className="Editor" ref={monacoEl}></div>
        </div>
    </div>
}

export default ProblemDetailsPage;