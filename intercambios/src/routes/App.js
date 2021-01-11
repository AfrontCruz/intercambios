import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddMemberContainer from '../containers/AddMember';
import IndexContainer from '../containers/IndexContainer';
import InterchangeContainer from '../containers/InterchangeContainer';
import LoginContainer from '../containers/LoginContainer';
import MemberContainer from '../containers/MemberContainer';
import MenuInterchangeContainer from '../containers/MenuInterchangeContainer';
import NewInterchangeContainer from '../containers/NewInterchangeContainer';
import RegisterContainer from '../containers/RegisterContainer';
import UpdateChangeContainer from '../containers/UpdateInterchangeContainer';

const App = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <IndexContainer />
                </Route>
                <Route exact path="/login" >
                    <LoginContainer />
                </Route> 
                <Route exact path="/register">
                    <RegisterContainer />
                </Route>
                <Route exact path="/interchange">
                    <InterchangeContainer />
                </Route>
                <Route exact path="/menuinterchange">
                    <MenuInterchangeContainer />
                </Route>
                <Route exact path="/member">
                    <MemberContainer />
                </Route>
                <Route exact path="/addmember">
                    <AddMemberContainer />
                </Route>
                <Route exact path="/newinterchange">
                    <NewInterchangeContainer />
                </Route>
                <Route exact path="/upinterchange">
                    <UpdateChangeContainer />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default App;