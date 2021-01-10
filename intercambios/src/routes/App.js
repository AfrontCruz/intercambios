import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer';

const App = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" >
                    <LoginContainer />
                    
                </Route> 
            </Switch>
        </BrowserRouter>
    )
};

export default App;