import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages';
import Cadastrar from './pages/cadastrar';
import Login from './pages/login';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Main} />
                <Route path="/cadastrar" component={Cadastrar} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
