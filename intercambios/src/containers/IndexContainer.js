import React from 'react';
import Index from '../pages/Index';
import { useHistory } from "react-router-dom";

const IndexContainer = () =>{
    const history = useHistory();

    const go = (e) => history.push( e.target.id );

    return(
        <Index go={go} />
    )
};

export default IndexContainer;