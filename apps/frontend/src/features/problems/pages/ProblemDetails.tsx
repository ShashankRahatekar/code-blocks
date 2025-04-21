import React from "react";
import {useParams} from 'react-router-dom';

const ProblemDetailsPage = (props: any): React.JSX.Element => {
    console.log(props);
    const params = useParams();
    console.log(params);
    
    return <div>
        This is problem statement
    </div>
}

export default ProblemDetailsPage;