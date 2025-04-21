import React, { useEffect } from "react";
import {useParams} from 'react-router-dom';
import ProblemService from '@services/problemsServices';
import MonacoEditor from 'monaco-editor';

type ParamsT = {
    problemId: string
};

const ProblemDetailsPage = (props: any): React.JSX.Element => {
    console.log(props);
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
    
    return <div>
        This is problem statement
    </div>
}

export default ProblemDetailsPage;