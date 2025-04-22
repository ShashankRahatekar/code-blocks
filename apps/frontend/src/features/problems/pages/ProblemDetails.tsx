import ProblemsServices from "@services/problemsServices";
import React, { useEffect } from "react";
import {useParams} from 'react-router-dom';

type ParamT = {
    problemId: string;
};

const ProblemDetailsPage = (props: any): React.JSX.Element => {
    console.log(props);
    const params = useParams<ParamT>();
    
    useEffect(() => {
        async function getProblemDetails() {
            if(params.problemId) {
                const problemDetail = await ProblemsServices.getProblem(params.problemId);
                console.log({problemDetail});
                
            }
        }
        getProblemDetails();
    }, [params.problemId])
    
    return <div>
        This is problem statement
    </div>
}

export default ProblemDetailsPage;