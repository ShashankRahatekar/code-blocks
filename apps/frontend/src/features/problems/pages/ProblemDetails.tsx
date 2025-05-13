import React, { useEffect, useReducer, useRef, useState } from "react";
import {useParams} from 'react-router-dom';
import ProblemService from '@services/problemsServices';
import CodeEditor from "@/components/CodeEditor";

type ParamsT = {
    problemId: string
};
const ProblemDetailsPage = (props: any): React.JSX.Element => {
    const params = useParams<ParamsT>();
    console.log(params);

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
            <CodeEditor code={`function hello() {\n console.log("hello");\n }`} />
        </div>
    </div>
}

export default ProblemDetailsPage;