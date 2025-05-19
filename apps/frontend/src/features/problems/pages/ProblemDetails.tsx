import React, { useEffect, useReducer, useRef, useState } from "react";
import {useParams} from 'react-router-dom';
import ProblemService from '@services/problemsServices';
import CodeEditor from "@/components/CodeEditor";
import { Problem } from "@definitions/problems.types";

type ParamsT = {
    problemId: string
};
const ProblemDetailsPage = (props: any): React.JSX.Element => {
    const params = useParams<ParamsT>();
    const [problem, setProblem] = useState<Problem | null>(null);
    console.log(params);

    useEffect(() => {
        async function getProductDetails(): Promise<void> {
            if(params.problemId) {
                const problem = await ProblemService.getProblem(params.problemId);
                console.log({problem});
                setProblem(problem);
            }
        }
        getProductDetails();
    }, [params]);
    
    return <div className="grid grid-cols-2 gap-4">
        <div className="problem-statement-section">
            <div>{problem?.title}</div>
            <div className="section-header">Description</div>
            <div className="section-details"> {problem?.question} </div>
            <div className="section-header">Constraints</div>
            <div className="section-details">{problem?.constraints} </div>
            <div className="section-header">Examples</div>
            <div className="section-details">{problem?.examples?.map((example, index) => <div key={`example_${index}`}>{example}</div>)}</div>
        </div>
        <div>
            <div className="code-editor-container">
                <CodeEditor code={problem?.["starter-code"] || ""} />
            </div>
            <div>
                <button className="submit-button">Submit</button>
            </div>
        </div>
    </div>
}

export default ProblemDetailsPage;